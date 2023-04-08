import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";

const Logout = (props) => {
  const history = useHistory("");
  const out = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload(true);
  };
  return (
    <>
      <Link  to={"#"} onClick={() => out()}>
        <button className="btn btn-primary">
          &nbsp; <AiOutlineLogout />&nbsp;  Logout
        </button>
      </Link>
    </>
  );
};

export default Logout;
