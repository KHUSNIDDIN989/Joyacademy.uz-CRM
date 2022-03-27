import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./Groups.css";
function Groups() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    fetch(`https://crm-joygroup.herokuapp.com/teachers/${id}`)
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  console.log(teacher[0]);
  return (
    <div className="container">
      <div className="main mt-5 pt-4">
        <h2 className="mt-3 main__h2">
          <Link to="/groups1">
            <ArrowBackIcon className="fs-1 fw-bold mx-1" />
          </Link>
          {teacher?.map((i) => {
            return <span key={Math.random()}>{i.group_name}{" " }</span>;
          })}
          guruhi ro’yhati
        </h2>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card h-100 card__card ">
              <div className=" bg-primary text-center  informatika">
                <p className="text-light mt-3 ">
                  {teacher?.map((i) => {
                    return <span key={Math.random()}>{i.group_name}</span>;
                  })}
                </p>
              </div>
              <div className="p-3">
                <div className="d-flex">
                  {teacher?.map((i) => {
                    return (
                      <img
                        key={Math.random()}
                        src={`https://crm-joygroup.herokuapp.com/images/${i.teacher_profile_img}`}
                        className="w-25 h-25 mt-2"
                        alt=""
                      />
                    );
                  })}
                  <div className="">
                    <p className="card__p ">
                      O’qituvchi:
                      <span className="card__span padding">
                        {teacher?.map((i) => {
                          return (
                            <span key={Math.random()}>{i.teacher_name}</span>
                          );
                        })}
                      </span>
                    </p>
                    <p className="card__p">
                      Tell raqam:{" "}
                      <span className="card__span ">
                        +
                        {teacher?.map((i) => {
                          return (
                            <span key={Math.random()}>{i.teacher_phone}</span>
                          );
                        })}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars kunlari:</p>
                  <p className="card__span">
                    {teacher?.map((i) => {
                      return <span key={Math.random()}>{i.lesson_days}</span>;
                    })}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars vaqti:</p>
                  <p className="card__span">
                    {teacher?.map((i) => {
                      return <span key={Math.random()}>{i.lesson_hours}</span>;
                    })}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">O’quvchilar soni</p>
                  <p className="card__span">
                    {teacher?.map((i) => {
                      return (
                        <span key={Math.random()}>{i.studentAll.length}</span>
                      );
                    })}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">To’lov qilganlar</p>
                  <p className="card__span">
                    {teacher?.map((i) => {
                      return <span key={Math.random()}>{i.isPaid.length}</span>;
                    })}
                  </p>
                </div>
              </div>
            </div>
            {/* <div>
              <h3 className="card__h3">Shu oy bo’yicha to’lov qilmaganlar </h3>
              <div>
                <ol className="mt-4">
                  {data?.studentAll?.map((i, index) => {
                    if (!i.is_paid) {
                      return <div key={Math.random()}>{}</div>;
                    }
                  })}
                </ol>
              </div>
            </div> */}
          </div>
          <div className="col-md-8">
            <div
              className="card mt-2 card__table"
              style={{
                background: "#FFFFFF",
                boxShadow: " 0px 10px 25px rgba(0, 0, 0, 0.25)",
              }}
            >
              <table className="table table-striped table-hover">
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
                    <th scope="col">To’lov</th>
                  </tr>
                </thead>
                <tbody>
                  {teacher[0]?.studentAll?.map((i, index) => {
                    return (
                      <tr key={Math.random()}>
                        {console.log(i)}
                        <th scope="row">{index + 1}</th>
                        <td>{i.student_name}</td>
                        <td>
                          {i.is_paid ? (
                            <CheckBoxIcon />
                          ) : (
                            <CheckBoxOutlineBlankIcon className="text-danger" />
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
