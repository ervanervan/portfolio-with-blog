import React from "react";
import DashLeft from "../components/DashLeft";
import DashRight from "../components/DashRight";
import DashCenter from "../components/DashCenter";

const DashboardPage = () => {
  return (
    <div className="max-w-[78rem] mx-auto">
      <div className="flex gap-4 flex-col md:flex-row">
        <DashLeft />
        <DashCenter />
        <DashRight />
      </div>
    </div>
  );
};

export default DashboardPage;
