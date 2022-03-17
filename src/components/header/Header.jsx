import React from "react";
import "../header/Header.css";
import DeleteIcon from "@mui/icons-material/Delete";
const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <h1 className="header__heading">.</h1>

        <div className="header__top-controls">
          <select className="header__select">
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>

          <button className="header__theme">
            <DeleteIcon />
          </button>
          <button className="header__theme">
            <img src="" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
