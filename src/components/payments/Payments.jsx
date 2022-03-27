import { React, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "./Payments.css";
function Payments() {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");
  const [studentName, setStudentName] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [groupId, setGroupId] = useState("");
  const [posts, setPosts] = useState([]);
  const [groupActive, setGroupActive] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const [studentPhone, setStudentPhone] = useState('')

  useEffect(() => {
    fetch(`https://crm-joygroup.herokuapp.com/payments?search=${search}`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, [search, posts]);

  useEffect(() => {
    fetch(`https://crm-joygroup.herokuapp.com/groups/active`)
      .then((res) => res.json())
      .then((data) => setGroupActive(data));
  }, []);
  useEffect(() => {
    fetch(`https://crm-joygroup.herokuapp.com/teachers`)
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);
console.log(posts);
console.log(groupId);
  const PostForm = (e) => {
    e.preventDefault();
   
    console.log(studentName);
    console.log(teacherId);
    console.log(paymentDate);
    console.log(studentPhone);
    fetch(`https://crm-joygroup.herokuapp.com/payments`, {
      method: "PUT",
      body: JSON.stringify({
        student_name: studentName,
        teacher_id: teacherId,
        group_id: groupId,
        payment_date: paymentDate,
        student_phone: studentPhone,
      }),
    }).then((res) => res.json().then((data) => setPosts(data)));

    e.target.reset();
  };

  const hendleSearch = (e) => {
    e.preventDefault();

    setSearch(e.target.search.value);

    e.target.search.value = "";
  };


  return (
    <div className="container">
      <div className="main mt-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className="col__h1">To’lov qilish</h1>
          <form onSubmit={(e) => PostForm(e)}>
            <div className="form-row">
              <div className="col d-flex justify-content-between">
                <div className="w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    O’quvchi ismi
                  </label>
                  <input
                    onChange={(e) => setStudentName(e.target.value)}
                    name="parentName"
                    type="text"
                    className="form-control"
                    placeholder="Muxamadaliyev Ibroxim"
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
                    onClick={(e) => setGroupId(e.target.value)}
                    defaultValue={groupId}
                  >
                    {groupActive?.map((i) => {
                      return (
                        <option key={Math.random()} value={i.group_name}>
                          {i.group_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputState" className="col__label">
                    O’qituvchi tell nomeri
                  </label>
                  <input
                    onChange={(e) => setStudentPhone(e.target.value)}
                    name="parentPhone"
                    type="number"
                    className="form-control"
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col d-flex justify-content-between align-items-center">
                <div className="w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    O’qituvchi ismi
                  </label>
                  <select
                    id="inputState"
                    className="form-control"
                    name="select"
                    onChange={(e) => setTeacherId(e.target.value)}
                  >
                    {teacher?.map((i) => {
                      return (
                        <option key={Math.random()} value={i.teacher_id}>
                          {i.teacher_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputState" className="col__label">
                    To’lov qilayotgan kun
                  </label>
                  <input
                    onChange={(e) => {
                      setPaymentDate(e.target.value);
                    }}
                    name="parentPhone"
                    type="date"
                    className="form-control"
                  />
                </div>
                <div className="w-50 m-2 mt-3">
                  <button className="btn w-100 btn-primary mt-4 ">
                    To’lov qilish
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className="col__h3">
            To’lov qilganlar<span>(shu oy bo’yicha)</span>{" "}
          </h3>
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
                  <th scope="col">O’qituvchisi</th>
                  <th scope="col" colSpan={2}>
                    To’lov vaqti
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((i, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{i.student_name}</td>
                      <td>+{i.student_phone}</td>
                      <td>{i.group_name}</td>
                      <td>{i.teacher_name}</td>
                      <td>{i.payment_date}</td>
                      <td>
                        <CheckBoxIcon />
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

export default Payments;
