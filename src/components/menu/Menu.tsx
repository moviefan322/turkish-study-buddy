import React from "react";
import Layout from "../layout/Layout";
import Link from "next/link";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <Layout>
      <h1>Hoş Geldin!</h1>
      <div className={`d-flex flex-column justify-content-around align-items-center ${styles.menuContainer}`}>
        <div>
          <Link href="/presentCont">
            <button className='btn btn-lg btn-dark text-light w-100 px-5 fs-1'>Şimdiki Zaman</button>
          </Link>
        </div>
        <div>
          <Link href="/nominal">
            <button className='btn btn-lg btn-dark text-light w-100 px-5 fs-1'>İsim Cümleri</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link href="/flashcard">
            <button className='btn btn-lg btn-dark text-light w-100 px-5 fs-1'>Şimşek Kartlar</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
