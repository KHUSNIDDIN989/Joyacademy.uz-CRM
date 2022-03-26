import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./Payments.css";
import { useSelector } from "react-redux";
function Payments() {
  const language = useSelector(state => state.language.currentLanguage);
  return (
    <div className="container">
      <div className="main mt-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className="col__h1">{ language.paypentTitle}</h1>
          <form>
            <div className="form-row">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    {language.studentName}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Muxamadaliyev Ibroxim"
                  />
                </div>
                <div className=" w-50 m-2">
                  <label htmlFor="inputState" className="col__label">
                    {language.field}
                  </label>
                  <select id="inputState" className="form-control">
                    <option defaultValue="">Ona-tili</option>
                    <option>...</option>
                  </select>
                </div>
                <div className=" w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    {language.tel}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                   {language.teacher}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Olimjonova Nargiza"
                  />
                </div>
                <div className=" w-50 m-2">
                  <label htmlFor="inputState" className="col__label">
                    {language.paymentDate}
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
                <div className="d-flex flex-column w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    {language.tel}
                  </label>
                  <button className="btn btn-primary">{ language.paymentTitle}</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className="col__h3">
             {language.thosePaid}
          </h3>
          <div className="col__img-input">
            <SearchIcon className="col__search" />
            <input type="text" className="col__input" />
          </div>
        </div>
        <div className="col-md-12 ">
          <div
            className="card card__table mt-2"
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
                >
                  <th scope="col">№</th>
                  <th scope="col">{ language.studentName}</th>
                  <th scope="col">{language.tel}</th>
                  <th scope="col">{ language.field}</th>
                  <th scope="col">{ language.teacher}</th>
                  <th scope="col" colSpan={2}>
                    {language.paymentDate}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>O’qituvchi (F.I.SH)</td>
                  <td>06.02.2022</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>O’qituvchi (F.I.SH)</td>
                  <td>06.02.2022</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>O’qituvchi (F.I.SH)</td>
                  <td>06.02.2022</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>O’qituvchi (F.I.SH)</td>
                  <td>06.02.2022</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>O’qituvchi (F.I.SH)</td>
                  <td>06.02.2022</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>O’qituvchi (F.I.SH)</td>
                  <td>06.02.2022</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>O’qituvchi (F.I.SH)</td>
                  <td>06.02.2022</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>O’qituvchi (F.I.SH)</td>
                  <td>06.02.2022</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>O’qituvchi (F.I.SH)</td>
                  <td>06.02.2022</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Muxamadaliyev Ibroxim</td>
                  <td>+998900113861</td>
                  <td>Matematika</td>
                  <td>O’qituvchi (F.I.SH)</td>
                  <td>06.02.2022</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-end align-items-center my-5">
          <p className="pt-3 col__jami">JAMI 100 ta</p>
          <Stack spacing={2} className="mr-5 pr-5">
            <Pagination count={10} color="primary" />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Payments;
