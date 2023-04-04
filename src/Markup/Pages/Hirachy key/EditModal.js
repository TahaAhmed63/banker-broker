import axios from "axios";
import { Modal } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNodesState } from "reactflow";
import Swal from "sweetalert2";
import Baseurl from "../../../Baseurl";

const EditModal = () => {
  let userdata = localStorage.getItem("userDetail");
  userdata = JSON.parse(userdata);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nodes, setNodes, onNodesChange] = useNodesState("");
  const [nodeName, setNodeName] = useState("");
  const onUpdate = () => {
    const Update = new FormData();
    Update.append("id", userdata?.id);
    Update.append("label", nodeName);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}update/user/label`,
      data: Update,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        if (response.data.status === true) {
          Swal.fire({
            toast: true,
            icon: "success",
            title: response?.data?.message,
            animation: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
        } else {
          Swal.fire({
            toast: true,
            icon: "error",
            title: response?.data?.message,
            animation: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
        }
      })
      .catch(function (error) {
        Swal.fire({
          toast: true,
          icon: "error",
          title: error,
          animation: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      });
  };
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (Number(node.id) === Number(userdata?.id)) {
          node.data = {
            ...node.data,
            label: (
              <>
                <span className=" text-capitalize">{userdata?.type}</span>
                <br />

                <span className="text-primary fw-bolder text-capitalize">
                  {nodeName}
                </span>
              </>
            ),
          };
        }

        return node;
      })
    );
  }, [nodeName, setNodes]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <label>Company Name:</label>
              <input
                defaultValue={nodeName}
                className="form-control"
                onChange={(evt) => setNodeName(evt.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              onUpdate();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
