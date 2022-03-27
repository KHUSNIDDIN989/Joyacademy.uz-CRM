import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Groups1.css";
function Groups1() {
  const [teacher, setTeacher] = useState([]);
  const [search, setSearch] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherPhone, setTeacherPhone] = useState("");
  const [lessonDays, setLessonDays] = useState("");
  const [lessonHours, setLessonHours] = useState("");
  const [groupId, setGroupId] = useState("");
  const [file, setFile] = useState();
  const [posts, setPosts] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch(`https://crm-joygroup.herokuapp.com/teachers?search=${search}`)
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, [search, posts]);

  const PostForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("teacher_name", teacherName);
    formData.append("teacher_phone", teacherPhone);
    formData.append("lesson_days", lessonDays);
    formData.append("lesson_hours", lessonHours);
    formData.append("group_id", groupId);
    formData.append("file", file);

    fetch(`https://crm-joygroup.herokuapp.com/teachers`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json().then((data) => setPosts(data)));
    e.target.reset();
  };

  useEffect(() => {
    fetch(`https://crm-joygroup.herokuapp.com/groups`)
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  const hendleSearch = (e) => {
    e.preventDefault();

    setSearch(e.target.search.value);

    e.target.search.value = "";
  };

  return (
    <div className="container">
      <div className="main my-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className="col__h1">Yangi guruh qo’shish</h1>
          <form onSubmit={(e) => PostForm(e)}>
            <div className="form-row">
              <div className="col d-flex justify-content-between">
                <div className="w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    Yo’nalish
                  </label>
                  <select
                    id="inputState"
                    className="form-control"
                    name="select"
                    onChange={(e) => setGroupId(e.target.value)}
                  >
                    {groups?.map((i) => {
                      return <option key={Math.random()} value={i.group_id}>{i.group_name}</option>;
                    })}
                  </select>
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputState" className="col__label">
                    Dars kunlari
                  </label>
                  <input
                    onChange={(e) => setLessonDays(e.target.value)}
                    name="text"
                    type="text"
                    className="form-control"
                    placeholder="DU-CHOR-JUMA"
                  />
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    Dars vaqti
                  </label>
                  <input
                    onChange={(e) => setLessonHours(e.target.value)}
                    name="parentName"
                    type="text"
                    className="form-control"
                    placeholder="14:00-16:00"
                  />
                </div>
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col d-flex justify-content-between">
                <div className="w-50 m-2">
                  <label htmlFor="inputText" className="col__label">
                    O’qituvchi
                  </label>
                  <input
                    onChange={(e) => setTeacherName(e.target.value)}
                    name="parentName"
                    type="text"
                    className="form-control"
                    placeholder="O’qituvchi"
                  />
                </div>
                <div className="w-50 m-2">
                  <label htmlFor="inputState" className="col__label">
                    O’qituvchi tell nomeri
                  </label>
                  <input
                    onChange={(e) => setTeacherPhone(e.target.value)}
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
          <h3 className="col__h3">Mavjud guruhlar</h3>
          <div className="col__img-input">
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
        </div>
        <div className="row">
          {teacher?.map((i, index) => {
            return (
              <div className="col-md-4 mb-3" key={index}>
                <NavLink to={`/groups/${i.teacher_id}`}>
                  <div className="card h-100 card__card ">
                    <div className=" bg-primary text-center  informatika">
                      <p className="text-light mt-3 ">{i.group_name}</p>
                    </div>
                    <div className="p-3">
                      <div className="d-flex">
                        <img
                          src={`https://crm-joygroup.herokuapp.com/images/${i.teacher_profile_img} `}
                          className="w-25 h-25 mt-2"
                          alt=""
                        />
                        <div className="">
                          <p className="card__p ">
                            O’qituvchi:
                            <span className="card__span padding">
                              {i.teacher_name}
                            </span>
                          </p>
                          <p className="card__p">
                            Tell raqam:{" "}
                            <span className="card__span ">
                              +{i.teacher_phone}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="card__p">Dars kunlari:</p>
                        <p className="card__span">{i.lesson_days}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="card__p">Dars vaqti:</p>
                        <p className="card__span">{i.lesson_hours}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="card__p">O’quvchilar soni</p>
                        <p className="card__span">{i.studentAll.length}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="card__p">To’lov qilganlar</p>
                        <p className="card__span">{i.isPaid.length}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Groups1;
