import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import Search from "./Search";
import { useMediaQuery } from "usehooks-ts";

function Header() {
  const isSmallDevice = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["container"]}>
      {isSmallDevice ? (
        <>
          <header className={styles["header"]}>
            <span onClick={toggleOpen}>
              <img
                src="src/assets/svg/menu-burger.svg"
                alt=""
                className={styles["menu-burguer"]}
              />
            </span>
            <h1 className={styles["title"]}>RailFlow</h1>
            <div className={styles["logo-search-container"]}>
              <span className={styles["logo"]}>
                <img src="src/assets/svg/train-icon.svg" alt="" />
              </span>

              <div className={styles["search-container"]}>
                  <img
                  onClick={toggleOpen}
                    src="src/assets/svg/search.svg"
                    alt="Search"
                    className={styles["search-svg"]}
                  />

              </div>
            </div>
          </header>
          <nav className={`${styles["nav-small-device"]} ${isOpen ? styles["open"] : ""}`}>
            <Search />
            <Link to={"/"}>Home</Link>
            <Link to={"/notice-board"}>Quadro de Avisos</Link>
            <Link to={"/inspection"}>Inspeção</Link>
            <Link to={"/report-and-analisys"}>Relatórios e Análises</Link>
            <Link to={"/route-management"}>Gestão de Rotas</Link>
          </nav>
        </>
      ) : (
        <header className={styles["header"]}>
          <div className={styles["logo-title-container"]}>
            <span className={styles["logo"]}>
              <img src="src/assets/svg/train-icon.svg" alt="" />
            </span>
            <h1 className={styles["title"]}>RailFlow</h1>
          </div>
          <nav className={styles["nav"]}>
            <Link to={"/"}>Home</Link>
            <Link to={"/notice-board"}>Quadro de Avisos</Link>
            <Link to={"/inspection"}>Inspeção</Link>
            <Link to={"/report-and-analisys"}>Relatórios e Análises</Link>
            <Link to={"/route-management"}>Gestão de Rotas</Link>
          </nav>

          <div className={styles["search-container"]}>
            <div className={isOpen ? styles["open"] : ""}>
              <Search />
            </div>
            <span onClick={toggleOpen}>
              
            </span>
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;