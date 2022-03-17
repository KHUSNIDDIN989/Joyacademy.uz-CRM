import React from "react";
import User from "../../assets/images/user.png";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Studentes() {
  return (
    <div className="container">
      <div className="main my-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className="col__h1">Yangi guruh qo’shish</h1>
          <form>
            <div class="form-row">
              <div class="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label for="inputText" className="col__label">
                    Guruh yo’nalishi
                  </label>
                  <select id="inputState" class="form-control">
                    <option selected>Ona-tili</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="w-50 m-2">
                  <label for="inputState" className="col__label">
                    Dars kunlari
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="DU-CHOR-JUMA"
                  />
                </div>
                <div className="w-50 m-2">
                  <label for="inputText" className="col__label">
                    Dars vaqti
                  </label>
                  <select id="inputState" class="form-control">
                    <option selected>Ona-tili</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col d-flex justify-content-between">
                <div className="w-50 m-2">
                  <label for="inputText" className="col__label">
                    O’qituvchi
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Olimjonova Nargiza"
                  />
                </div>
                <div className="w-50 m-2">
                  <label for="inputState" className="col__label">
                    O’qituvchi tell nomeri
                  </label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div className="w-50 m-2">
                  <label for="inputState" className="col__label">
                    O’qituvchi tell nomeri
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
              </div>
              <div className="w-100 m-2 p-3 mt-3 card__btn">
                <button className="btn btn-primary btn__btn">
                  To’lov qilish
                </button>
              </div>
            </div>
          </form>
        </div>
        
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className="col__h3">
            To’lov qilganlar<span>(shu oy bo’yicha)</span>{" "}
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
            <table class="table table-striped table-hover h-25">
              <thead>
                <tr
                  style={{
                    background: "#2F49D1",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  <th scope="col">№</th>
                  <th scope="col">O’quvchi ismi</th>
                  <th scope="col">Telefon nomer</th>
                  <th scope="col">Yo’nalish</th>
                  <th scope="col">O’qituvchisi</th>
                  <th scope="col" colSpan="2">
                    To’lov vaqti
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

export default Studentes;
