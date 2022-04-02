import { Hidden } from "@mui/material";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import User from "../../assets/images/user.jpg";
import "./Attendance1.scss";
import { ReactComponent as Checked } from '../../assets/images/checked.svg';
import { ReactComponent as Unchecked } from "../../assets/images/unchecked.svg";
import { useSelector } from "react-redux";

function Attendance1() {
  const { id } = useParams();
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const language = useSelector(state => state.language.currentLanguage);
  const isDark = useSelector(state => state.isDark.bool);
  
  console.log(language)
  console.log(id);
     useEffect(() => {
       fetch(`https://crm-joygroup.herokuapp.com/teachers`)
         .then((res) => res.json())
         .then((data) => {
           const found = data.find(e=>e.teacher_id==id)
           setTeachers(found);
           setStudents(found.studentAll.map(e => {
             e.status = true;
             return e;
           }))
           console.log(found, found.studentAll);
       
         });
     }, ['sd']);
  console.log(students);
  const handleStatus = id => {
  
    let index = (students.findIndex((e) => e.student_id == id)) 
      
    console.log(index);
    students[index].status = !students[index].status;
    setStudents([...students]);
   
    console.log(students)
  }
  const sendAttendance = () => {
    const attendance={
      teacher_id: teachers.teacher_id,
      group_id : teachers.group_id, 
      students: students.map(e => { return { student_id: e.student_id, status: e.status } })}
    console.log(attendance);
    fetch(`https://crm-joygroup.herokuapp.com/attendances`, {
      method: "POST", 
      headers:{
        "Content-Type":"application/json"
      }, 
      body:JSON.stringify(attendance)
    })
      .then(res => res.json())
      .then(data=>console.log(data));
   }
  return (
    <div className="container">
      <div className="main mt-5 pt-4">
        <h3
          className={`col__h3 ${isDark ? "dark__title" : "light"}`}
        >{`${teachers.group_name} guruhi ro’yhati`}</h3>
        <div className="row mt-3">
          <div className="col-md-4">
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
                <p className="text-light mt-3 ">{teachers.group_name}</p>
              </div>
              <div className="p-3">
                <div className="d-flex">
                  <img
                    style={{ borderRadius: 50 }}
                    src={User}
                    className="w-25 h-25 mt-2"
                    alt=""
                  />
                  <div className="">
                    <p className="card__p ">
                      O’qituvchi:
                      <span className="card__span padding">
                        {teachers.teacher_name}
                      </span>
                    </p>
                    <p className="card__p">
                      Tell raqam:{" "}
                      <span className="card__span ">
                        +{teachers.teacher_phone}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars kunlari:</p>
                  <p className="card__span">{teachers.lesson_days}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars vaqti:</p>
                  <p className="card__span">{teachers.lesson_hours}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">O’quvchilar soni</p>
                  <p className="card__span">{students.length}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">To’lov qilganlar</p>
                  <p className="card__span">
                    {students.filter((e) => e.is_paid == true).length}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-4">
                <h3
                  className={`card__h3-h3 ${isDark ? "dark__title" : "light"}`}
                >
                  07.03.2022{" "}
                </h3>
                <p className={`card__h3-p ${isDark ? "dark__title" : "light"}`}>
                  Darsga kelmaganlar{" "}
                </p>
              </div>
              <div>
                <ol className="mt-4">
                  {students
                    .filter((e) => e.status == false)
                    .map((e, i) => (
                      <li
                        className={`not__attended ${
                          isDark ? "dark__grey" : "light"
                        }`}
                        key={i}
                      >
                        {e.student_name}
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
           
              className={`card card__table mt-2 ${
                isDark ? "dark__card" : "light"
              }`}
              style={{
                background: "#FFFFFF",
                boxShadow: " 0px 10px 25px rgba(0, 0, 0, 0.25)",
                overflowX: "hidden",
              }}
            >
              <table
                className={`table table-striped table-hover h-25 p-5 ${
                  isDark ? "dark" : "light"
                }`}
              >
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
                    <th scope="col">O’quvchi ismi</th>
                    <th scope="col">
                      <label>Davomat</label>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((e, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2
                          ? isDark
                            ? "dark__even"
                            : "light"
                          : isDark
                          ? "dark__odd"
                          : "light"
                      }
                    >
                      <th
                        className={isDark ? "dark__title" : "light"}
                        scope="row"
                      >
                        {i + 1}
                      </th>
                      <td className={isDark ? "dark__title" : "light"}>
                        {e.student_name}
                      </td>
                      <td className={isDark ? "dark__title" : "light"}>
                        <button
                          className="attendance_btn"
                          onClick={() => {
                            handleStatus(e.student_id);
                          }}
                        >
                          {e.status ? <Checked /> : <Unchecked />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card__table-btn ">
              <button className="btn btn-primary m-3 " onClick={sendAttendance}>
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance1;
