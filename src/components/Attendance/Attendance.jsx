import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import User from "../../assets/images/user.png";
import { useSelector } from "react-redux";

function Attendance() {
  const language = useSelector(state => state.language.currentLanguage);
  let arr = [1, 2, 3,4 ,5,6]
  return (
    <div className="container">
      <div className="main my-5 ">
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className="col__h3">{language.chooseGroup}</h3>
          <div className="col__img-input">
            <SearchIcon className="col__search" />
            <input type="text" className="col__input" />
          </div>
        </div>
        <div className="row">
          {arr.map((e,i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="card h-100 card__card ">
                <div className=" bg-primary text-center  informatika">
                  <p className="text-light mt-3 ">Informatika</p>
                </div>
                <div className="p-3">
                  <div className="d-flex">
                    <img src={User} className="w-25 h-25 mt-2" alt="" />
                    <div className="">
                      <p className="card__p ">
                        {language.teacher}:
                        <span className="card__span padding">
                          Muxamadaliyev Ibroxim
                        </span>
                      </p>
                      <p className="card__p">
                        {language.tel}{" "}
                        <span className="card__span ">+998900113861</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card__p">{language.lessonDays}:</p>
                    <p className="card__span">DU-CHOR-JUMA</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card__p">{language.lessonTime}:</p>
                    <p className="card__span">14:00-16:00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card__p">{language.numberstudents}</p>
                    <p className="card__span">25</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="card__p">{language.thosePaid}</p>
                    <p className="card__span">10</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
         

        </div>
      </div>
    </div>
  );
}

export default Attendance;
