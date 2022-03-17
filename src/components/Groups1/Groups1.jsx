import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import User from "../../assets/images/user.png";
import "./Groups1.css";
function Groups1() {
  return (
    <div className="container">
      <div className="main my-5 pt-5">
        <div className="col-md-12 mt-3">
          <h1 className="col__h1">Yangi guruh qo’shish</h1>
          <form>
            <div class="form-row">
              <div class="col d-flex justify-content-between">
                <div className=" w-50 m-2">
                  <label for="inputText" className="col__label">
                    Guruh yo’nalishi
                  </label>
                  <select id="inputState" class="form-control">
                    <option selected>Ona-tili</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="w-50 m-2">
                  <label for="inputState" className="col__label">
                    Dars kunlari
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="DU-CHOR-JUMA"
                  />
                </div>
                <div className="w-50 m-2">
                  <label for="inputText" className="col__label">
                    Dars vaqti
                  </label>
                  <select id="inputState" class="form-control">
                    <option selected>Ona-tili</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col d-flex justify-content-between">
                <div className="w-50 m-2">
                  <label for="inputText" className="col__label">
                    O’qituvchi
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Olimjonova Nargiza"
                  />
                </div>
                <div className="w-50 m-2">
                  <label for="inputState" className="col__label">
                    O’qituvchi tell nomeri
                  </label>
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div className="w-50 m-2">
                  <label for="inputState" className="col__label">
                    O’qituvchi tell nomeri
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    placeholder="+998 xx xxx xx xx"
                  />
                </div>
              </div>
              <div className="w-100 m-2 p-3 mt-3 card__btn">
                <button className="btn btn-primary btn__btn">
                  To’lov qilish
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-12 d-flex justify-content-between mt-5 pt-5 mb-3">
          <h3 className="col__h3">Davomat olinadigan guruhni tanlang</h3>
          <div className="col__img-input">
            <SearchIcon className="col__search" />
            <input type="text" className="col__input" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card h-100 card__card ">
              <div className=" bg-primary text-center  informatika">
                <p className="text-light mt-3 ">Informatika</p>
              </div>
              <div className="p-3">
                <div className="d-flex">
                  <img src={User} className="w-25 h-25 mt-2" alt="" />
                  <div className="">
                    <p className="card__p ">
                      O’qituvchi:
                      <span className="card__span padding">
                        Muxamadaliyev Ibroxim
                      </span>
                    </p>
                    <p className="card__p">
                      Tell raqam:{" "}
                      <span className="card__span ">+998900113861</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars kunlari:</p>
                  <p className="card__span">DU-CHOR-JUMA</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars vaqti:</p>
                  <p className="card__span">14:00-16:00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">O’quvchilar soni</p>
                  <p className="card__span">25ta</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">To’lov qilganlar</p>
                  <p className="card__span">10ta</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 card__card ">
              <div className=" bg-primary text-center  informatika">
                <p className="text-light mt-3 ">Informatika</p>
              </div>
              <div className="p-3">
                <div className="d-flex">
                  <img src={User} className="w-25 h-25 mt-2" alt="" />
                  <div className="">
                    <p className="card__p ">
                      O’qituvchi:
                      <span className="card__span padding">
                        Muxamadaliyev Ibroxim
                      </span>
                    </p>
                    <p className="card__p">
                      Tell raqam:{" "}
                      <span className="card__span ">+998900113861</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars kunlari:</p>
                  <p className="card__span">DU-CHOR-JUMA</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars vaqti:</p>
                  <p className="card__span">14:00-16:00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">O’quvchilar soni</p>
                  <p className="card__span">25ta</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">To’lov qilganlar</p>
                  <p className="card__span">10ta</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 card__card ">
              <div className=" bg-primary text-center  informatika">
                <p className="text-light mt-3 ">Informatika</p>
              </div>
              <div className="p-3">
                <div className="d-flex">
                  <img src={User} className="w-25 h-25 mt-2" alt="" />
                  <div className="">
                    <p className="card__p ">
                      O’qituvchi:
                      <span className="card__span padding">
                        Muxamadaliyev Ibroxim
                      </span>
                    </p>
                    <p className="card__p">
                      Tell raqam:{" "}
                      <span className="card__span ">+998900113861</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars kunlari:</p>
                  <p className="card__span">DU-CHOR-JUMA</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars vaqti:</p>
                  <p className="card__span">14:00-16:00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">O’quvchilar soni</p>
                  <p className="card__span">25ta</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">To’lov qilganlar</p>
                  <p className="card__span">10ta</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 card__card ">
              <div className=" bg-primary text-center  informatika">
                <p className="text-light mt-3 ">Informatika</p>
              </div>
              <div className="p-3">
                <div className="d-flex">
                  <img src={User} className="w-25 h-25 mt-2" alt="" />
                  <div className="">
                    <p className="card__p ">
                      O’qituvchi:
                      <span className="card__span padding">
                        Muxamadaliyev Ibroxim
                      </span>
                    </p>
                    <p className="card__p">
                      Tell raqam:{" "}
                      <span className="card__span ">+998900113861</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars kunlari:</p>
                  <p className="card__span">DU-CHOR-JUMA</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars vaqti:</p>
                  <p className="card__span">14:00-16:00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">O’quvchilar soni</p>
                  <p className="card__span">25ta</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">To’lov qilganlar</p>
                  <p className="card__span">10ta</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 card__card ">
              <div className=" bg-primary text-center  informatika">
                <p className="text-light mt-3 ">Informatika</p>
              </div>
              <div className="p-3">
                <div className="d-flex">
                  <img src={User} className="w-25 h-25 mt-2" alt="" />
                  <div className="">
                    <p className="card__p ">
                      O’qituvchi:
                      <span className="card__span padding">
                        Muxamadaliyev Ibroxim
                      </span>
                    </p>
                    <p className="card__p">
                      Tell raqam:{" "}
                      <span className="card__span ">+998900113861</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars kunlari:</p>
                  <p className="card__span">DU-CHOR-JUMA</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars vaqti:</p>
                  <p className="card__span">14:00-16:00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">O’quvchilar soni</p>
                  <p className="card__span">25ta</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">To’lov qilganlar</p>
                  <p className="card__span">10ta</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100 card__card ">
              <div className=" bg-primary text-center  informatika">
                <p className="text-light mt-3 ">Informatika</p>
              </div>
              <div className="p-3">
                <div className="d-flex">
                  <img src={User} className="w-25 h-25 mt-2" alt="" />
                  <div className="">
                    <p className="card__p ">
                      O’qituvchi:
                      <span className="card__span padding">
                        Muxamadaliyev Ibroxim
                      </span>
                    </p>
                    <p className="card__p">
                      Tell raqam:{" "}
                      <span className="card__span ">+998900113861</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars kunlari:</p>
                  <p className="card__span">DU-CHOR-JUMA</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">Dars vaqti:</p>
                  <p className="card__span">14:00-16:00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">O’quvchilar soni</p>
                  <p className="card__span">25ta</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="card__p">To’lov qilganlar</p>
                  <p className="card__span">10ta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups1;
