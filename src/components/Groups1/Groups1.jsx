import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import User from "../../assets/images/user.png";
import "./Groups1.css";
import { useSelector } from "react-redux";
function Groups1() {
  const language = useSelector(state => state.language.currentLanguage);
  const isDark = useSelector((state) => state.isDark.bool);
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container">
      <div className="main my-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className={`col__h1 ${isDark ? "dark__title" : "light"}`}>
            {language.addNewGroup}
          </h1>
          <form>
            <div className="form-row">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.field}
                  </label>
                  <select
                    id="inputState"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                  >
                    <option defaultValue="">Ona-tili</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.lessonDays}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="DU-CHOR-JUMA"
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.lessonTime}
                  </label>
                  <select
                    id="inputState"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                  >
                    <option defaultValue="">Ona-tili</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col d-flex justify-content-between">
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.teacher}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder=" Olimjonova Nargiza"
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.teacherTel}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.teacherImg}
                  </label>
                  <input
                    type="file"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                  />
                </div>
              </div>
              <div className="w-100 m-2 p-3 mt-3 card__btn">
                <button
                  className={`btn btn-primary btn__btn ${
                    isDark ? "dark__btn" : "light"
                  }`}
                >
                  {language.addNewGroup}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className={`col__h3 ${isDark ? "dark__title" : "light"}`}>
            {language.chooseGroup}
          </h3>
          <div className="col__img-input">
            <SearchIcon className="col__search" />
            <input
              type="text"
              className={`col__input ${isDark ? "dark__btn" : "light"}`}
            />
          </div>
        </div>
        <div className="row">
          {arr.map((e, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div
                className={`card h-100 card__card ${
                  isDark ? "dark__cards" : "light"
                }`}
              >
                <div
                  className={` bg-primary text-center  informatika ${
                    isDark ? "dark__btn" : "light"
                  }`}
                >
                  <p className="text-light mt-3 ">Informatika</p>
                </div>
                <div className="p-3">
                  <div className="d-flex">
                    <img src={User} className="w-25 h-25 mt-2" alt="" />
                    <div className="">
                      <p className="card__p ">
                        O’qituvchi:
                        <span className="card__span padding">
                          Muxamadaliyev Ibroxim
                        </span>
                      </p>
                      <p className="card__p">
                        Tell raqam:{" "}
                        <span className="card__span ">+998900113861</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card__p">Dars kunlari:</p>
                    <p className="card__span">DU-CHOR-JUMA</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card__p">Dars vaqti:</p>
                    <p className="card__span">14:00-16:00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card__p">O’quvchilar soni</p>
                    <p className="card__span">25ta</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card__p">To’lov qilganlar</p>
                    <p className="card__span">10ta</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Groups1;
