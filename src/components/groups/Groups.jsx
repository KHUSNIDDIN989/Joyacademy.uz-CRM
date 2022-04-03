import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import User from "../../assets/images/user.jpg";
import { lang } from "../store/Slices/data/languaages";
import "./Groups.css";
import { ReactComponent as Checked } from "../../assets/images/checked.svg";
import { ReactComponent as Unchecked } from "../../assets/images/unchecked.svg";
function Groups() {
  const language = useSelector(state => state.language.currentLanguage);
  const isDark = useSelector((state) => state.isDark.bool);
  const {id} = useParams();
  const [group, setGroup] = useState([]);
  const [students, setStudents] = useState([]);
  const [paid, setPaid] = useState([]);
  useEffect(() => {
    fetch(`https://crm-joygroup.herokuapp.com/teachers`)
      .then((res) => res.json())
      .then((data) => {
        let found = data.find(e => e.teacher_id == id)
        setGroup(found)
        setStudents(found.studentAll)
        setPaid(found.isPaid);
      });
  }, []);
  console.log(group)
  return (
    <div className="container">
      <div className="main mt-5 pt-4">
        <h2 className={`mt-3 main__h2 ${isDark ? "dark__title" : "light"}`}>
          { group.group_name} {language.group}
        </h2>
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
                <p className="text-light mt-3 ">{group.group_name}</p>
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
                      {language.teacher}:
                      <span className="card__span padding">
                        {group.teacher_name}
                      </span>
                    </p>
                    <p className="card__p">
                      {language.tel}:{" "}
                      <span className="card__span ">
                        +{group.teacher_phone}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.lessonDays}:</p>
                  <p className="card__span">{group.lesson_days}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.lessonTime}:</p>
                  <p className="card__span">{group.lesson_hours}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.numberstudents}</p>
                  <p className="card__span">{students.length}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">{language.thosePaid}</p>
                  <p className="card__span">{paid.length}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className={`card__h3 ${isDark ? "dark__title" : "light"}`}>
                {language.paymentThisMonth}
              </h3>
              <div>
                <ol className="mt-4">
                  {students
                    .filter((e) => e.is_paid == false)
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
                    <th scope="col">{language.payments}</th>
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
                        scope="row"
                        className={isDark ? "dark__title" : "light"}
                      >
                        {i + 1}
                      </th>
                      <td className={isDark ? "dark__title" : "light"}>
                        {e.student_name}
                      </td>
                      <td className="attendance__icon">
                        {e.is_paid ? (
                          <Checked />
                        ) : (
                          <Unchecked />
                        )}
                      </td>
                    </tr>
                  ))}
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
