import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";
import "./dnd.css";
import Header from "../../Layout/Header";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Baseurl from "../../../Baseurl";
import { FaPen, FaTrash } from "react-icons/fa";
import { AiFillEye, AiOutlineArrowLeft } from "react-icons/ai";
import { Button, Modal } from "react-bootstrap";
import ReactDropzone from "react-dropzone";
import Imgbaseurl from "../../../Imgbaseurl";
const CompanyCreation = () => {
  const Gandipicture = require("../../../Images/noimg.png");
  const [loader, setLoader] = useState(false);
  const [getposition, setGetPosition] = useState("");
  const [selectedNode, setSelectedNode] = useState("");
  const [nameNode, setNameNode] = useState("");
  const [nodeIds, setNodeIds] = useState("");
  const [startingNodes, setStartingNodes] = useState([]);
  const [userid, setUserid] = useState([]);
  const [userlabel, setUserlabel] = useState([]);
  const history = useHistory();
  const [getcompany, setGetCompany] = useState([]);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  let Details = localStorage.getItem("userDetail");
  Details = JSON.parse(Details);
  const onDragStart = (event, nodeType) => {
    setSelectedNode(nodeType);
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const initialNodes = [
    {
      id: "1",
      type: "input",
      data: { label: "Super Admin" },
      position: { x: 250, y: 0 },
    },
  ];
  const [nodes, setNodes, onNodesChange] = useNodesState(
    getcompany && Array.isArray(getcompany) && getcompany.length > 0
      ? getcompany
      : initialNodes
  );

  const initialEdges = [{ id: "e2-3 ", source: "1", target: "4" }];

  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  let id = 0;
  const getId = () => `dndnode_${id++}`;

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      setGetPosition(position);

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );
  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);
  let userdata = localStorage.getItem("userDetail");
  userdata = JSON.parse(userdata);
  const [nodeName, setNodeName] = useState("");
  const onConnect2 = () => {
    setLoader(true);
    const connect = new FormData();
    connect.append("position_x", getposition?.x);
    connect.append("position_y", getposition?.y);
    connect.append("label", selectedNode);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}user/role/creation`,
      data: connect,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoader(true);

        console.log(response);
        if (response.data.status === true) {
          setLoader(false);
          GetCompanies();
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
          setLoader(false);
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
        setLoader(false);
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
  const GetCompanies = () => {
    setLoader(true);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "get",
      url: `${Baseurl.baseurl}get/all/user/roles`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(
          response?.data?.data.map((e) => e),
          "Getting Compaines"
        );
        setNameNode(response?.data?.data.map((e) => e?.user?.type));

        if (response?.data?.status === true) {
          const nodes = response?.data?.data.map((e) => ({
            id: e?.user_id?.toString(),

            data: {
              label: (
                <>
                  <div>
                    {e.user_id.toString() !== "1" &&
                    e.user.type === "company" ? (
                      <FaPen
                        onClick={() => {
                          handleShow();
                          setNodeIds(e?.user_id);
                        }}
                        style={{ fontSize: 10 }}
                        className=" text-success float-right"
                      />
                    ) : null}
                  </div>
                  <span className=" text-capitalize">{e?.user?.type}</span>
                  <br />
                  <img
                    src={
                      e?.company_details?.file
                        ? Imgbaseurl.imgbaseurl + e?.company_details?.file
                        : Gandipicture
                    }
                    alt="No Img"
                    className="w-100 rounded my-2"
                  />
                  <span
                    className="text-primary fw-bolder text-capitalize"
                    style={{ fontSize: 10 }}
                  >
                    {e?.label}
                  </span>
                </>
              ),
            },
            position: { x: Number(e?.position_x), y: Number(e?.position_y) },
          }));
          const customeedges = response?.data?.data.map((e) => ({
            id: `${e?.owner_id}-${e?.user_id}`,
            source: e?.owner_id?.toString(),
            target: e?.user_id?.toString(),
          }));
          console.log(customeedges, "<====Coustomedges");
          setNodes((n) => [n[0]].concat(nodes));
          setEdges([
            {
              id: "firstEdge",
              source: "1",
              target: response?.data?.data[0]?.user_id,
            },
            ...customeedges,
          ]);
          setStartingNodes([...nodes]);
          // const response.data
          setLoader(false);
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
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          setLoader(false);
        }
      })
      .catch(function (error) {
        setLoader(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        Swal.fire({
          toast: true,
          icon: "error",
          title: error?.response?.data?.message,
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
    GetCompanies();
  }, []);
  // useEffect(() => {
  //   setNodes((nds) =>
  //     nds.map((node) => {
  //       if (node.id === nodeIds) {
  //         node.data = {
  //           ...node.data,
  //           label: (
  //             <>
  //               <div>
  //                 {userdata?.id !== "1" ? (
  //                   <FaPen
  //                     onClick={handleShow}
  //                     style={{ fontSize: 10 }}
  //                     className=" text-success float-right"
  //                   />
  //                 ) : null}
  //               </div>
  //               <span className=" text-capitalize">Company</span>
  //               <br />

  //               <span className="text-primary fw-bolder text-capitalize">
  //                 {nodeName}
  //               </span>
  //             </>
  //           ),
  //         };
  //       }

  //       return node;
  //     })
  //   );
  // }, [nodeName, setNodes]);
  console.log(userdata?.type);
  const onUpdate = () => {
    setLoader(true);
    const Update = new FormData();
    Update.append("id", nodeIds);
    Update.append("role_id", Details?.role_id);
    Update.append("label", nodeName);
    Update.append("address", nodeaddress);
    Update.append("fax", nodefax);
    Update.append("phone", nodephone);
    Update.append("file", imageFiles);
    Update.append("admins", nodeadmin);
    Update.append("brokers", nodebroker);
    let token = localStorage.getItem("usertoken");
    var config = {
      method: "post",
      url: `${Baseurl.baseurl}update/user/role/data`,
      data: Update,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoader(true);

        console.log(response);
        if (response.data.status === true) {
          setLoader(false);
          GetCompanies();
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
          setLoader(false);
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
        setLoader(false);
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imageUrl, setImageUrl] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  console.log(imageFiles, "imageFiles==<");
  const handleDrop = (acceptedFiles) => {
    setImageFiles(acceptedFiles[0]);
    // Convert the dropped file to a data URL
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleDelete = (index) => {
    const newImageFiles = [...imageFiles];
    newImageFiles.splice(index, 1);
    setImageFiles(newImageFiles);
    if (index === 0) {
      setImageUrl(null);
    }
  };
  const [nodeaddress, setNodeAddress] = useState("");
  const [nodephone, setNodePhone] = useState("");
  const [nodefax, setNodeFax] = useState("");
  const [nodeadmin, setNodeAdmin] = useState("");
  const [nodebroker, setNodeBroker] = useState("");
  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />
      <div className="container-fluid mt-2" style={{ maxWidth: "95%" }}>
        <div className="row my-2">
          <div className="col-md-2">
            <Link to={"/allusers"} className="btn btn-outline-primary ">
              <AiOutlineArrowLeft className="pb-1" />
              &nbsp; Back
            </Link>
          </div>
          <div className="col-md-8" />
        </div>
      </div>
      <div className="dndflow">
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={(e) => {
                onConnect(e);
                onConnect2();
              }}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
            >
              <Controls />
              <div className="row">
                <div className="col-md-5">
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton id="example-modal-sizes-title-lg">
                      <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 my-2">
                            <label>Company Name:</label>
                            <input
                              className="form-control"
                              onChange={(e) => setNodeName(e.target.value)}
                            />
                          </div>
                          <div className="col-md-6 my-2">
                            <label>Company Phone:</label>
                            <input
                              type="number"
                              className="form-control"
                              onChange={(e) => setNodePhone(e.target.value)}
                            />
                          </div>
                          <div className="col-md-12 my-2">
                            <label>Company Address:</label>
                            <input
                              className="form-control"
                              onChange={(e) => setNodeAddress(e.target.value)}
                            />
                          </div>
                          <div className="col-md-6 my-2">
                            <label>Company Fax no:</label>
                            <input
                              type="tel"
                              className="form-control"
                              onChange={(e) => setNodeFax(e.target.value)}
                            />
                          </div>
                          <div className="col-md-6 my-2">
                            <label>Company Admin:</label>

                            <input
                              className="form-control"
                              type="number"
                              onChange={(e) => setNodeAdmin(e.target.value)}
                            />
                          </div>
                          <div className="col-md-6 my-2">
                            <label>Company Brokers:</label>
                            <input
                              className="form-control"
                              type="number"
                              onChange={(e) => setNodeBroker(e.target.value)}
                            />
                          </div>
                          <div className="col-md-6 my-2">
                            <label>Company Logo:</label>
                            <ReactDropzone onDrop={handleDrop}>
                              {({ getRootProps, getInputProps }) => (
                                <section>
                                  <div {...getRootProps()}>
                                    <input
                                      {...getInputProps()}
                                      multiple={false}
                                    />
                                    <p className="form-control">
                                      Drag 'n' drop , or click to select files
                                    </p>
                                  </div>
                                </section>
                              )}
                            </ReactDropzone>
                          </div>
                        </div>
                        {imageFiles.length !== 0 ? (
                          <>
                            <div className="float-right my-2">
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => handleDelete()}
                              >
                                <FaTrash />
                              </button>
                            </div>

                            <img
                              key={imageUrl}
                              src={imageUrl}
                              className="w-100"
                              alt="Uploaded Image"
                            />
                          </>
                        ) : null}
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
                </div>
              </div>
            </ReactFlow>
          </div>
          <aside>
            <div className="dndnode input">Super Admin</div>
            <div
              className={
                Details?.role_id === 1
                  ? "dndnode cursor-grab company"
                  : "dndnode company"
              }
              onDragStart={
                Details?.role_id === 1
                  ? (event) => onDragStart(event, "Company")
                  : ""
              }
              draggable
            >
              <span className="text-center">Company</span>
            </div>
            <div
              className={
                Details?.role_id === 2
                  ? "dndnode cursor-grab admin"
                  : "dndnode admin"
              }
              onDragStart={
                Details?.role_id === 2
                  ? (event) => onDragStart(event, "Company Admin")
                  : ""
              }
              draggable
            >
              Company Admin
            </div>
            <div
              className={
                Details?.role_id === 3
                  ? "dndnode cursor-grab broker"
                  : "dndnode broker"
              }
              onDragStart={
                Details?.role_id === 3
                  ? (event) => onDragStart(event, "Company Broker")
                  : ""
              }
              draggable
            >
              Company Broker
            </div>
            <div
              className={
                Details?.role_id === 4
                  ? "dndnode cursor-grab teams"
                  : "dndnode teams"
              }
              onDragStart={
                Details?.role_id === 4
                  ? (event) => onDragStart(event, " Company Teams")
                  : ""
              }
              draggable
            >
              Company Teams
            </div>
            <div
              className={
                Details?.role_id === 5
                  ? "dndnode cursor-grab agent"
                  : "dndnode agent"
              }
              onDragStart={
                Details?.role_id === 5
                  ? (event) => onDragStart(event, " Company Agent")
                  : ""
              }
              draggable
            >
              Company Agent
            </div>
            <div
              className={
                Details?.role_id === 5
                  ? "dndnode cursor-grab agent_mlo"
                  : "dndnode mlo"
              }
              onDragStart={
                Details?.role_id === 5
                  ? (event) => onDragStart(event, " Company Mlo")
                  : ""
              }
            >
              Company Mlo
            </div>
          </aside>
        </ReactFlowProvider>
      </div>
    </>
  );
};

export default CompanyCreation;
