import React from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container primaryContainer d-flex flex-column justify-content-center">
      <div className={`${styles.container}`}>
        <div
          className={`${styles.pageCard} d-flex flex-column justify-content-center align-items-center px-3 py-6 py-md-4 position-relative w-100`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
