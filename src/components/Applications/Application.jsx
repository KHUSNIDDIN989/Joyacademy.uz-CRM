import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import './Application.scss'
import { ReactComponent as Trash} from '../../assets/images/trash.svg';
import { appealActions } from "../store/Slices/AppealSlice";
function Application() {
    
    const language = useSelector(state => state.language.currentLanguage);
    const dispatch = useDispatch();
  const [page, setPage] = useState(1);
    const isDark = useSelector((state) => state.isDark.bool);
    const [appeals, setAppeals] = useState([]);
    const [deleted, setDeleted] = useState(false);
    useEffect(() => {
        fetch(`https://crm-joygroup.herokuapp.com/appeals?page=${page}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setAppeals(data);
            dispatch(appealActions.updateCount({count:data.length}))
        })
    }, [deleted])
    const deleteAppeal = id => {
        fetch(`https://crm-joygroup.herokuapp.com/appeals?appeal_id=${id}`, {
            method:"DELETE"
        }).then(res => res.json())
            .then(data => console.log(data))
            .finally(()=>setDeleted(!deleted));
    }
    return (
      <div className="container">
        <div className="main my-5 pt-5">
          <div className="col-md-12 mt-3">
            <h1 className={`col__h1 ${isDark ? "dark__title" : "light"}`}>
              {language.appeals}
            </h1>
          </div>

          <div className={`col-md-12 ${isDark ? "dark__card" : "light"}`}>
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
                    <th scope="col">{language.name}</th>
                    <th scope="col">{language.tel}</th>
                    <th scope="col">{language.appeals_time}</th>
                    <th scope="col">{language.delete}</th>
                  </tr>
                </thead>
                <tbody className="">
                  {appeals &&
                    appeals?.map((i, index) => {
                      return (
                        <tr
                          className={
                            index % 2
                              ? isDark
                                ? "dark__even"
                                : "light"
                              : isDark
                              ? "dark__odd"
                              : "light"
                          }
                          key={index}
                        >
                          <th
                            className={isDark ? "dark__title" : "light"}
                            scope="row"
                          >
                            {index + 1}
                          </th>
                          <td className={isDark ? "dark__title" : "light"}>
                            {i.user_name}
                          </td>
                          <td className={isDark ? "dark__title" : "light"}>
                            <a
                              className={`appeal__tel ${
                                isDark ? "dark__title" : "light"
                              }`}
                              href={`tel:+${i.user_phone}`}
                            >
                              +{i.user_phone}
                            </a>
                          </td>

                          <td className={isDark ? "dark__title" : "light"}>
                            {i.create_appeal}
                          </td>
                          <td
                            onClick={() => {
                              deleteAppeal(i.appeal_id);
                            }}
                            className={isDark ? "dark__title" : "light"}
                            style={{ cursor: "pointer" }}
                          >
                            <Trash />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-end align-items-center my-5">
            <p className={`pt-3 col__jami ${isDark ? "dark__title" : "light"}`}>
              {language.all} {appeals.length}{" "}
            </p>

            <Stack
              spacing={2}
              className={` mr-5 pr-5 ${isDark ? "dark__title" : "light"}`}
            >
              <Pagination
                count={appeals.length || 100}
                color="primary"
                defaultValue={1}
                className={` mr-5 pr-5 ${isDark ? "dark__title" : "light"}`}
                onChange={(e) => setPage(e.target.textContent)}
              />
            </Stack>
          </div>
        </div>
      </div>
    );
}

export default Application;