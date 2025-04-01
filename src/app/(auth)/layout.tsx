import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="auth justify-center items-center">{children}</main>;
}