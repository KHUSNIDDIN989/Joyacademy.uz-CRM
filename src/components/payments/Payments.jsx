import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./Payments.css";
import { useSelector } from "react-redux";
function Payments() {
  const language = useSelector((state) => state.language.currentLanguage);
  const isDark = useSelector((state) => state.isDark.bool);
  const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="container">
      <div className="main mt-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className={`col__h1 ${isDark ? "dark__title" : "light"}`}>
            {language.paymentTitle}
          </h1>
          <form>
            <div className="form-row">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.studentName}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="Muxamadaliyev Ibroxim"
                  />
                </div>
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputState"
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
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.tel}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
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
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.paymentDate}
                  </label>
                  <input
                    type="date"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
                <div className="d-flex flex-column w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.tel}
                  </label>
                  <button
                    className={`btn btn-primary ${
                      isDark ? "dark__btn" : "light"
                    }`}
                  >
                    {language.paymentTitle}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className={`col__h3 ${isDark ? "dark__title" : "light"}`}>
            {language.thosePaid}
          </h3>
          <div className="col__img-input">
            <SearchIcon className="col__search" />
            <input
              type="text"
              className={`col__input ${isDark ? "dark__btn" : "light"}`}
            />
          </div>
        </div>
        <div className="col-md-12 ">
          <div
            className={`card card__table mt-2 ${
              isDark ? "dark__card" : "light"
            }`}
            style={{
              background: "#FFFFFF",
              boxShadow: " 0px 10px 25px rgba(0, 0, 0, 0.25)",
            }}
          >
            <table className="table table-striped table-hover h-25">
              <thead>
                <tr
                  style={{
                    background: "#2F49D1",
                    color: "#fff",
                    border: "none",
                  }}
                  className={`${isDark ? "dark" : "light"}`}
                >
                  <th scope="col">№</th>
                  <th scope="col">{language.studentName}</th>
                  <th scope="col">{language.tel}</th>
                  <th scope="col">{language.field}</th>
                  <th scope="col">{language.teacher}</th>
                  <th scope="col" colSpan={2}>
                    {language.paymentDate}
                  </th>
                </tr>
              </thead>
              <tbody>
                {arr.map((e, index) => (
                  <tr key={index} className={`${isDark ? "dark" : "light"}`}>
                    <th
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                      scope="row"
                    >
                      {index+1}
                    </th>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      Muxamadaliyev Ibroxim
                    </td>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      +998900113861
                    </td>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      Matematika
                    </td>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      O’qituvchi (F.I.SH)
                    </td>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      06.02.2022
                    </td>
                    <td
                      className={
                        index % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      <input type="checkbox" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-end align-items-center my-5">
          <p className={`pt-3 col__jami ${isDark ? "dark__title" : "light"}`}>
            JAMI 100 ta
          </p>
          <Stack spacing={2} className="mr-5 pr-5">
            <Pagination count={10} color="primary" />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Payments;
