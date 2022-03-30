import { React, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import User from "../../assets/images/user.png";
import { NavLink } from "react-router-dom"
function Attendance() {
  const [search, setSearch] = useState("");
  const [attendance, setAttendance] = useState([])

 useEffect(() => {
   fetch(`https://crm-joygroup.herokuapp.com/teachers?search=${search}`)
     .then((res) => res.json())
     .then((data) => setAttendance(data));
 }, [search,]);

  

  const hendleSearch = (e) => {
    e.preventDefault();

    setSearch(e.target.search.value);

    e.target.search.value = "";
  };
  return (
    <div className="container">
      <div className="main my-5 ">
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className="col__h3">Davomat olinadigan guruhni tanlang</h3>
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
          {attendance?.map((i, index) => {
            return (
              <div className="col-md-4 mb-3" key={index}>
                <NavLink to={`/attendance1/${i.teacher_id}`}>
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

export default Attendance;
