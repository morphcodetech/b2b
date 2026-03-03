import React from "react";
import PageTitle from "./Pagetitle";
import Breadcrumbs from "./Breadcrumbs";

const Heading = ({ title = "User Dashboard" }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full bg-[#f8f8f8] px-6 md:px-12 lg:px-24 xl:px-32 py-5 gap-4">
      <PageTitle title={title} />
      <Breadcrumbs currentPage={title} />
    </div>
  );
};

export default Heading;
