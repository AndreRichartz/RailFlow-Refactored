import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Search from "./Search.tsx";
import { useMediaQuery } from "usehooks-ts";

function Header() {
  const isSmallDevice = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      {isSmallDevice ? (
        <>
          <header>
            <span onClick={toggleOpen}>
              <img
                src="src/assets/svgs/menu-burger.svg"
                alt=""
                className="menu-burguer"
              />
            </span>
            <h1 className="title">RailFlow</h1>
            <div className="logo-search-container">
              <span className="logo">
                <img src="src/assets/svgs/train-icon.svg" alt="" />
              </span>

              <div className="search-container">
                <span onClick={toggleOpen}>
                  <img
                    src="src/assets/svgs/search.svg"
                    alt="Search"
                    className="search-svg"
                  />
                </span>
              </div>
            </div>
          </header>
          <nav className={`nav-small-device ${isOpen ? "open" : ""}`}>
            <Search />
            <Link to={"/"}>Home</Link>
            <Link to={"/notice-board"}>Quadro de Avisos</Link>
            <Link to={"/inspection"}>Inspeção</Link>
            <Link to={"/report-and-analisys"}>Relatórios e Análises</Link>
            <Link to={"/route-management"}>Gestão de Rotas</Link>
          </nav>
        </>
      ) : (
        <header>
          <div className="logo-title-container">
            <span className="logo">
              <img src="src/assets/svgs/train-icon.svg" alt="" />
            </span>
            <h1 className="title">RailFlow</h1>
          </div>
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/notice-board"}>Quadro de Avisos</Link>
            <Link to={"/inspection"}>Inspeção</Link>
            <Link to={"/report-and-analisys"}>Relatórios e Análises</Link>
            <Link to={"/route-management"}>Gestão de Rotas</Link>
          </nav>

          <div className="search-container">
            <div className={isOpen && "open"}>
              <Search />
            </div>
            <span onClick={toggleOpen}>
              <img
                src="src/assets/svgs/search.svg"
                alt="Search"
                className="search-svg"
              />
            </span>
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;