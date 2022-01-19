import React from "react";
import Header from "../sections/Header";

export default function Layout({ children }) {
  return (
    <main className="main">
        <Header />
        <div className="content-container">
            {children}
        </div>
    </main>
  )
}