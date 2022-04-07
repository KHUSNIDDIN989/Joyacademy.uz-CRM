import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Statistik from "../../assets/images/analtica.png";
import Statistika from "../../assets/images/statistika.png";
import "./Home.css";
function Home() {
  const language = useSelector(state => state.language.currentLanguage);
  const isDark = useSelector(state => state.isDark.bool);
  const [statistics, setStatistics] = useState([])
  useEffect(() => {
    fetch("https://crm-joygroup.herokuapp.com/students/statistics")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setStatistics(data)
      });
  }, [])
  return (
    <div className="container">
      <div className="col-md-12 mt-5 pt-5">
        <ul className="row d-flex">
          <li
            className={`card p-3 m-2 w-45 ${
              isDark ? "dark__card" : "light__card"
            }`}
          >
            <h2 className="home__2">{language.allstudents}</h2>
            <h1 className="home__h1">
              {statistics.length && statistics[0].total_students}
            </h1>
            <div className="d-flex w-100 justify-content-end ">
              <div
                className={`statistik d-flex justify-content-center align-items-center ${
                  isDark ? "dark__img" : "light__img"
                }`}
              >
                <img className="m-2" width={25} src={Statistik} alt="" />
              </div>
            </div>
          </li>
          <li
            className={`card p-3 m-2 w-45 ${
              isDark ? "dark__card" : "light__card"
            }`}
          >
            <h2 className="home__2">{language.allteachers}</h2>
            <h1 className="home__h1">
              {statistics.length && statistics[1][0].total_teachers}
            </h1>
            <div className="d-flex w-100 justify-content-end ">
              <div
                className={`statistik d-flex justify-content-center align-items-center ${
                  isDark ? "dark__img" : "light__img"
                }`}
              >
                <img className="m-2" width={25} src={Statistik} alt="" />
              </div>
            </div>
          </li>
          <li
            className={`card p-3 m-2 w-45 ${
              isDark ? "dark__card" : "light__card"
            }`}
          >
            <h2 className="home__2">{language.allGroups}:</h2>
            <h1 className="home__h1">
              {statistics.length && statistics[1][1].total_groups}
            </h1>
            <div className="d-flex w-100 justify-content-end ">
              <div
                className={`statistik d-flex justify-content-center align-items-center ${
                  isDark ? "dark__img" : "light__img"
                }`}
              >
                <img className="m-2" width={25} src={Statistik} alt="" />
              </div>
            </div>
          </li>
          <li
            className={`card p-3 m-2 w-45 ${
              isDark ? "dark__card" : "light__card"
            }`}
          >
            <h2 className="home__2">{language.thisMonthLeft}:</h2>
            <h1 className="home__h1">
              {statistics.length && statistics[0].total_deleted_students}
            </h1>
            <div className="d-flex w-100 justify-content-end ">
              <div
                className={`statistik d-flex justify-content-center align-items-center ${
                  isDark ? "dark__img" : "light__img"
                }`}
              >
                <img className="m-2" width={25} src={Statistik} alt="" />
              </div>
            </div>
          </li>
        </ul>
        <div className="card p-0 my-3 ">
          <img className="img-fluid" src={Statistika} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
