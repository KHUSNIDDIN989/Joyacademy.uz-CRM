import React from "react";
import { useSelector } from "react-redux";
import Statistik from "../../assets/images/analtica.png";
import Statistika from "../../assets/images/statistika.png";

import "./Home.css";
function Home() {
  const language = useSelector(state=>state.language.currentLanguage)
  return (
    <div className="container">
      <div className="col-md-12 mt-5 pt-5">
        <div className="row d-flex">
          <div className="card p-3 m-2 w-45">
            <h2 className="home__2">{ language.allstudents}</h2>
            <h1 className="home__h1">255 ta</h1>
            <div className="d-flex w-100 justify-content-end ">
              <div className="statistik d-flex justify-content-center align-items-center">
                <img className="m-2" width={25} src={Statistik} alt="" />
              </div>
            </div>
          </div>
          <div className="card p-3 m-2 w-45">
            <h2 className="home__2">{ language.allstudents}</h2>
            <h1 className="home__h1">255 ta</h1>
            <div className="d-flex w-100 justify-content-end ">
              <div className="statistik d-flex justify-content-center align-items-center">
                <img className="m-2" width={25} src={Statistik} alt="" />
              </div>
            </div>
          </div>
          <div className="card p-3 m-2 mt-2 w-45">
            <h2>{ language.allstudents}</h2>
            <h1 className="home__h1">255 ta</h1>
            <div className="d-flex w-100 justify-content-end ">
              <div className="statistik d-flex justify-content-center align-items-center">
                <img className="m-2" width={25} src={Statistik} alt="" />
              </div>
            </div>
          </div>
          <div className="card p-3 m-2 mt-2 w-45">
            <h2 className="home__2">{ language.allstudents}</h2>
            <h1 className=" home__h1">255 ta</h1>
            <div className="d-flex w-100 justify-content-end ">
              <div className="statistik d-flex justify-content-center align-items-center">
                <img className="m-2" width={25} src={Statistik} alt="" />
              </div>
            </div>
          </div>
          <div className="card p-0 my-3 ">
            <img className="img-fluid" src={Statistika} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
