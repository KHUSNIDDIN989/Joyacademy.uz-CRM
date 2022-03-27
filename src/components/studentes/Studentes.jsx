import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Delete from "../../assets/images/delete.png";
import "./Studentes.css";

function Studentes() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [option, setOption] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [file, setFile] = useState();
  const [hendleDelete, setHendleDelete] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  console.log(students);

  useEffect(() => {
    fetch(
      `https://crm-joygroup.herokuapp.com/students?search=${search}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, [search, page, posts, hendleDelete]);

  console.log(hendleDelete);

  const PostForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("student_name", studentName);
    formData.append("student_phone", phoneNumber);
    formData.append("parents_name", parentName);
    formData.append("parents_phone", parentPhone);
    formData.append("group_id", option);
    formData.append("file", file);

    fetch(`https://crm-joygroup.herokuapp.com/students`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json().then((data) => setPosts(data)));

    // setPhoneNumber(e.target.number.value);
    // setOption(e.target.select.value);
    // setParentName(e.target.parentName.value);
    // setParentPhone(e.target.parentPhone.value);

    e.target.reset();
  };

  const HendleDelete = (id) => {
    fetch(`https://crm-joygroup.herokuapp.com/students?student_id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setHendleDelete(data));
  };

  const hendleSearch = (e) => {
    e.preventDefault();

    setSearch(e.target.search.value);

    e.target.search.value = "";
  };

  return (
    <div className="container">
      <div className="main my-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className="col__h1">Yangi o’quvchi qo’shish</h1>
          <form onSubmit={(e) => PostForm(e)}>
            <div className="form-row">
              <div className="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label htmlFor="text" className="col__label">
                    O’quvchi ismi
                  </label>
                  <input
                    onChange={(e) => setStudentName(e.target.value)}
                    name="text"
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
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    name="number"
                    type="number"
                    className="form-control"
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    Yo’nalish
                  </label>
                  <select
                    id="inputState"
                    className="form-control"
                    name="select"
                    onChange={(e) => setOption(e.target.value)}
                  >
                    <option value="1">Foundation</option>
                    <option value="2">Java</option>
                    <option value="3">NodeJS</option>
                    <option value="4">Flutter</option>
                    <option value="5">JavaScript</option>
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
                    onChange={(e) => setParentName(e.target.value)}
                    name="parentName"
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
                    onChange={(e) => setParentPhone(e.target.value)}
                    name="parentPhone"
                    type="number"
                    className="form-control"
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputState" className="col__label">
                    Rasm 3x4
                  </label>
                  <input
                    name="file"
                    type="file"
                    id="file"
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="w-100 m-2 p-3 mt-3 card__btn">
                <button className="btn btn-primary btn__btn">Qo’shish</button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className="col__h3">Bizning o’quvchilar</h3>
          <form onSubmit={(e) => hendleSearch(e)} className="col__img-input">
            <SearchIcon className="col__search" />
            <input
              name="search"
              type="search"
              className="col__input"
              placeholder="Qidiruv"
            />
          </form>
        </div>
        <div className="col-md-12 ">
          <div
            className="card card__table mt-2"
            style={{
              background: "#FFFFFF",
              boxShadow: " 0px 10px 25px rgba(0, 0, 0, 0.25)",
            }}
          >
            <table className="table table-striped table-hover h-25 p-5">
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
              <tbody className="">
                {students &&
                  students?.map((i, index) => {
                    return (
                      <tr key={Math.random()}>
                        <th scope="row">{index + 1}</th>
                        <td>{i.student_name}</td>
                        <td>+{i.student_phone}</td>
                        <td>{i.group_name}</td>
                        <td>{i.parents_name}</td>
                        <td>{i.parents_phone}</td>
                        <td>
                          <img
                            src={Delete}
                            id={i.student_id}
                            onClick={(e) => HendleDelete(e.target.id)}
                            className="delete"
                            alt=""
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-end align-items-center my-5">
          <p className="pt-3 col__jami">JAMI {students.length} ta</p>
          <Stack spacing={2} className="mr-5 pr-5">
            <Pagination
              count={students.length || 100}
              color="primary"
              defaultValue={1}
              onChange={(e) => setPage(e.target.textContent)}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Studentes;
