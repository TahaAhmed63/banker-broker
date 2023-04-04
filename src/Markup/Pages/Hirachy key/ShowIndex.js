import axios from "axios";
import React, { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Controls,
  updateEdge,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import Swal from "sweetalert2";
import Baseurl from "../../../Baseurl";
import Header from "../../Layout/Header";
const UpdatableEdge = () => {
  const [getcompany, setGetCompany] = useState([]);
  const [startingNodes, setStartingNodes] = useState([]);
  const [loader, setLoader] = useState(false);
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
        console.log(response?.data, "Getting Compaines");
        // setGetCompany(response?.data?.data);
        if (response?.data?.status === true) {
          const nodes = response?.data?.data.map((e) => ({
            id: e?.user_id?.toString(),
            // type: "customNode",
            data: { label: e?.label },
            position: { x: Number(e?.position_x), y: Number(e?.position_y) },
          }));
          const customeedges = response?.data?.data.map((e) => ({
            id: `${e?.owner_id}-${e?.user_id}`,
            source: e?.owner_id?.toString(),
            target: e?.user_id?.toString(),
          }));
          console.log(customeedges,'<====Coustomedges')
          setNodes((n) => [n[0]].concat(nodes));
          setEdges([{id: "firstEdge", source: "1", target: response?.data?.data[0]?.user_id }, ...customeedges]);
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

  // const fomatedInitialNodes = useMemo(() => , [])

  const initialNodes = [
    {
      id: "1",
      type: "input",
      data: { label: "SuperAdmin" },
      position: { x: 100, y: 0 },
    },
    // {
    //   id: "2",
    //   data: { label: "Node B" },
    //   position: { x: 200, y: 100 },
    // },
    // {
    //   id: "3",
    //   data: { label: "Node C" },
    //   position: { x: 400, y: 200 },
    // },
    // {
    //   id: "4",
    //   data: { label: "Node D" },
    //   position: { x: 600, y: 300 },
    // },
  ];

  const initialEdges = [{ id: "e2-3 ", source: "1", target: "4" }];
  const [nodes, setNodes, onNodesChange] = useNodesState(
    getcompany && Array.isArray(getcompany) && getcompany.length > 0
      ? getcompany
      : initialNodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <>
      {loader ? <div className="loader"></div> : null}
      <Header />
      <div className="container-fluid mt-2" style={{ maxWidth: "95%" }}>
        <div className="row">
          <div className="col-md-2">
            <Link to={"/HirarKey"} className="btn btn-outline-primary w-100">
              <AiOutlineArrowLeft className="pb-1" />
              &nbsp; Edit
            </Link>
          </div>
        </div>
      </div>
      <div style={{ height: "80vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          // onNodesChange={onNodesChange}
          // onEdgesChange={onEdgesChange}
          snapToGrid
          // onEdgeUpdate={onEdgeUpdate}
          // onConnect={onConnect}
          fitView
          attributionPosition="top-right"
        >
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
};

export default UpdatableEdge;
