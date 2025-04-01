import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="auth justify-center items-center ">{children}</main>;
};

export default Layout;
