import CSLayout from "@/app/Layout/CSLayout";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <CSLayout>{children}</CSLayout>
    </>
  );
};

export default Layout;
