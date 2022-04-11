import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import User from "../../assets/images/user.jpg";
import "./Groups1.css";
import { useSelector } from "react-redux";
import {useEffect} from 'react'
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function GroupsEdit() {
  const language = useSelector(state => state.language.currentLanguage);
  const isDark = useSelector((state) => state.isDark.bool);
  const [teachers, setTeachers] = useState([]);
  const [search, setSearch] = useState('');
  const [groups, setGroups] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();
     useEffect(() => {
       fetch(`https://crm-joygroup.herokuapp.com/teachers/?search=${search}`)
         .then((res) => res.json())
         .then((data) => {
           const found = data.find(e=>e.group_id==id)
           setTeachers(found);
           console.log(found);
         });
     }, [search, toggle]);
    useEffect(() => {
      fetch(`https://crm-joygroup.herokuapp.com/groups`)
        .then((res) => res.json())
        .then((data) =>
        {
          setGroups(data)
          console.log(data)
        });
    }, []);
  const editGroup = async (e) => {
    e.preventDefault();
    const { groupID, lessonDays, lessonTime, teacherName, teacherTel, teacherImg } = e.target.elements;
    const newGroup = {
      teacher_name: teacherName.value,
      teacher_phone: teacherTel.value,
      lesson_days: lessonDays.value,
      lesson_hours: lessonTime.value,
      group_id: Number(groupID.value),
      teacher_profile_img: teacherImg.files[0]
    };
    const form = new FormData();
    form.append("teacher_name", teacherName.value);
    form.append("teacher_phone", teacherTel.value);
    form.append("lesson_days", lessonDays.value);
    form.append("lesson_hours", lessonTime.value);
    form.append("group_id", groupID.value);
    form.append("file", teacherImg.files[0]);
    console.log(form, newGroup);
      
      
     
    const res = await fetch(`https://crm-joygroup.herokuapp.com/teachers/?teacher_id=${teachers.teacher_id}`, {
      method: "PUT",
      body: form,
    });
    const data =await res.json();
    if (data.status == 200 || data.status == 201) {
      notify("success", "Qabul qilindi!");
    } else {
      notify("error", "Xatolik,  qayta urinib ko'ring!");
    }
    console.log(data); 
    setToggle(!toggle)
     
    }
    
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

  return (
    <div className="container">
      <div className="main my-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className={`col__h1 ${isDark ? "dark__title" : "light"}`}>
            {language.edit}
          </h1>
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
                        {language.teacher}:
                        <span className="card__span padding">
                          {teachers.teacher_name}
                        </span>
                      </p>
                      <p className="card__p">
                        {language.tel}:{" "}
                        <span className="card__span ">
                          +{teachers.teacher_phone}
                        </span>
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
                    <p className="card__p">{language.numberstudents}</p>
                    <p className="card__span">
                      {teachers.studentAll ? teachers.studentAll.length : 0}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card__p">{language.thosePaid}</p>
                    <p className="card__span">
                      {teachers.isPaid ? teachers.isPaid.length : 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 edit__right">
              <form onSubmit={editGroup} className="edit__form">
                <div className=" w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.field}
                  </label>
                  <select
                    id="inputState"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    name="groupID"
                  >
                    <option  value={teachers.group_id}>
                      {teachers.group_name}
                    </option>
                  
                  </select>
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.lessonDays}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="DU-CHOR-JUMA"
                    name="lessonDays"
                  defaultValue={teachers.lesson_days}
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputText"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.lessonTime}
                  </label>
                  <select
                    id="inputState"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    name="lessonTime"
                  >
                    <option defaultValue="9:00-11:00">9:00-11:00</option>
                    <option value={"11:00-13:00"}>11:00-13:00</option>
                    <option value={"14:00-16:00"}>14:00-16:00</option>
                    <option value={"16:00-18:00"}>16:00-18:00</option>
                    <option value={"18:00-20:00"}>18:00-20:00</option>
                  </select>
                </div>

                <div className="w-50 m-2">
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
                    name="teacherName"
                    defaultValue={teachers.teacher_name}
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.teacherTel}
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    placeholder="+998 xx xxx xx xx"
                    name="teacherTel"
                    defaultValue={teachers.teacher_phone}
                  />
                </div>
                <div className="w-50 m-2">
                  <label
                    htmlFor="inputState"
                    className={`col__label ${isDark ? "dark__title" : "light"}`}
                  >
                    {language.teacherImg}
                  </label>
                  <input
                    type="file"
                    className={`form-control ${
                      isDark ? "dark__input" : "light"
                    }`}
                    name="teacherImg"
                  />
                </div>
                <div className="w-100 m-2 p-3 mt-3 card__btn">
                  <button
                    className={`btn btn-primary btn__btn ${
                      isDark ? "dark__btn" : "light"
                    }`}
                    // onClick={notify}
                  >
                    {language.submit}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupsEdit;
