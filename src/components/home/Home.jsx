import React from "react";
import Statistik from "../../assets/images/analtica.png";
import "./Home.css";
function Home() {
  return (
    <div className="container">
      <div className="col-md-12 mt-5 pt-5">
        <div className="row d-flex">
          <div className="card p-4 m-2 w-45">
            <h2 >Jami o’quvchilar soni:</h2>
            <h1 className="fw-bold">255 ta</h1>
            <div className="d-flex w-100 justify-content-end ">
              <div className="statistik d-flex justify-content-center align-items-center">
                <img className="m-3" src={Statistik} alt="" />
              </div>
            </div>
          </div>
          <div className="card p-4 m-2 w-45" >
            <h2>Jami o’quvchilar soni:</h2>
            <h1 className="fw-bold">255 ta</h1>
            <div className="d-flex w-100 justify-content-end ">
              <div className="statistik d-flex justify-content-center align-items-center">
                <img className="m-3" src={Statistik} alt="" />
              </div>
            </div>
          </div>
          <div className="card p-4 m-2 mt-2 w-45">
            <h2>Jami o’quvchilar soni:</h2>
            <h1 className="fw-bold">255 ta</h1>
            <div className="d-flex w-100 justify-content-end ">
              <div className="statistik d-flex justify-content-center align-items-center">
                <img className="m-3" src={Statistik} alt="" />
              </div>
            </div>
          </div>
          <div className="card p-4 m-2 mt-2 w-45">
            <h2>Jami o’quvchilar soni:</h2>
            <h1 className="fw-bold">255 ta</h1>
            <div className="d-flex w-100 justify-content-end ">
              <div className="statistik d-flex justify-content-center align-items-center">
                <img className="m-3" src={Statistik} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
