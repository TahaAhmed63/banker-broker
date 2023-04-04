import { Header } from "antd/es/layout/layout";
import React from "react";
import AdminCreation from "./AdminCreation";
import Agent_MloCreation from "./Agent_MloCreation";
import BrokerCreation from "./BrokerCreation";
import CompanyCreation from "./CompanyCreation";
import TeamsCreation from "./TeamsCreation";

const Index = () => {
  let Details = localStorage.getItem("userDetail");
  Details = JSON.parse(Details);
  return (
    <>
      <Header />
      {Details?.role_id === 1 ? <CompanyCreation /> : null}
      {Details?.role_id === 2 ? <AdminCreation /> : null}
      {Details?.role_id === 3 ? <BrokerCreation /> : null}
      {Details?.role_id === 4 ? <TeamsCreation /> : null}
      {Details?.role_id === 5 ? <Agent_MloCreation /> : null}
    </>
  );
};

export default Index;
