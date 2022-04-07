import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import User from "../../assets/images/user.jpg";
import "./Attendance1.scss";
import { ReactComponent as Checked } from '../../assets/images/checked.svg';
import { ReactComponent as Unchecked } from "../../assets/images/unchecked.svg";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Attendance1() {
  const { id } = useParams();
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const language = useSelector(state => state.language.currentLanguage);
  const isDark = useSelector(state => state.isDark.bool);
  const date = new Date();
  const [attendance, setAttendance] = useState(0);
  
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
       
         });
     }, ['sd']);
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
      .then(data => {
        console.log(data);
         if (data.status == 200 || data.status == 201) {
           notify("success", "Qabul qilindi!");
         } else {
           notify("error", "Xatolik,  qayta urinib ko'ring!");
         }
      });
  }
  useEffect(() => {
    fetch("https://crm-joygroup.herokuapp.com/attendances")
      .then(res => res.json())
      .then(data => {
        const todaysAtt = data.filter(e => e.teacher_id == id);
        console.log(todaysAtt);
        todaysAtt.length ? setAttendance(todaysAtt) : setAttendance(0);
      });
  }, [])
   function notify(type, text) {
     return type == "success"
       ? toast.success(text, {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
         })
       : toast.error(text, {
           position: "top-center",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
         });
   }
  console.log(attendance);
  return (
    <div className="container">
      <div className="main mt-5 pt-4">
        <h3
          className={`col__h3 ${isDark ? "dark__title" : "light"}`}
        >{`${teachers.group_name} ${language.group}`}</h3>
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
                      {language.teacher}
                      <span className="card__span padding">
                        {teachers.teacher_name}
                      </span>
                    </p>
                    <p className="card__p">
                      {language.teacherTel}
                      <a fref={teachers.teacher_phone} className="card__span ">
                        +{teachers.teacher_phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.lessonDays}:</p>
                  <p className="card__span">{teachers.lesson_days}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.lessonTime}:</p>
                  <p className="card__span">{teachers.lesson_hours}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.allstudents}</p>
                  <p className="card__span">{students.length}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.thosePaid}</p>
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
                  {`${(date.getDate() + "").padStart(2, 0)}.${(
                    date.getDay() + ""
                  ).padStart(2, "0")}.${date.getFullYear()}`}
                </h3>
                <p className={`card__h3-p ${isDark ? "dark__title" : "light"}`}>
                  {language.thoseAbsents}{" "}
                </p>
              </div>
              <div>
                <ol className="mt-4">
                  {!attendance
                    ? students
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
                        ))
                    : attendance
                        .filter((e) => e.incoming_date == null)
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
                    <th scope="col">{language.studentName}</th>
                    <th scope="col">
                      <label>{language.attendence}</label>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!attendance
                    ? students.map((e, i) => (
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
                      ))
                    : attendance.map((e, i) => (
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
                            {e.incoming_date ? (
                              <Checked />
                            ) : (
                              <div className="not__came">
                              <Unchecked/>
                                <span className="not__came--x">X</span>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>

            <div className="w-100 m-2 p-3 mt-3 card__btn">
              <button
                type="button"
                className={`btn btn-primary btn__btn ${
                  isDark ? "dark__btn" : "light"
                  }`}
                style={{display:`${attendance?"none":"block"}`}}
                onClick={sendAttendance}
              >
                {language.save}
              </button>
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance1;
