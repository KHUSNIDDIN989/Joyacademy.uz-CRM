import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Studentes.css";
function Studentes() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    fetch(`https://crm-joygroup.herokuapp.com/students`)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="container">
      <div className="main my-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className="col__h1">Yangi o’quvchi qo’shish</h1>
          <form>
            <div className="form-row">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label htmlFor="text" className="col__label">
                    O’quvchi ismi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="O’quvchi ismi"
                  />
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputState" className="col__label">
                    Telefon raqam
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Telefon raqam"
                  />
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    Yo’nalish
                  </label>
                  <select id="inputState" className="form-control">
                    <option defaultValue="">Ona-tili</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col d-flex justify-content-between">
                <div className="w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    Ota-onasi ismi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Ota-onasi ismi"
                  />
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputState" className="col__label">
                    Ota onasi nomeri
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Ota onasi nomeri"
                  />
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputState" className="col__label">
                    Rasm 3x4
                  </label>
                  <input
                    type="file"
                    className="form-control"
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
            <input
              type="text"
              onKeyPress={(e) => {
                setSearch(e.target.value);
              }}
              className="col__input"
              placeholder="Qidiruv"
            />
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
                  <th scope="col">O’quvchi ismi</th>
                  <th scope="col">Telefon nomer</th>
                  <th scope="col">Yo’nalish</th>
                  <th scope="col">Ota-ona(F.I.SH)</th>
                  <th scope="col" colSpan="2">
                    Ota-ona (Tel)
                  </th>
                </tr>
              </thead>
              <tbody>
                {students?.map((i) => {
                  return (
                    <tr key={Math.random()}>
                      <th scope="row">{i.student_id}</th>
                      <td>{i.parents_name}</td>
                      <td>{i.parents_phone}</td>
                      <td>Matematika</td>
                      <td>{i.teacher_name} (F.I.SH)</td>
                      <td>{i.create_student_date}</td>
                      <td>
                        <DeleteIcon className="delete" />
                      </td>
                    </tr>
                  );
                })}
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
