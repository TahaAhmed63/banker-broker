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
      <Link className={props.classes}  to={"#"} onClick={() => out()}>
      &nbsp; <AiOutlineLogout/>&nbsp;  Logout 
      </Link>
    </>
  );
};

export default Logout;
