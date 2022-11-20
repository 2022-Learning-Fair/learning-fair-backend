import "../css/Class.scss";
import { useParams } from "react-router-dom";
import Grid from "./Grid/Grid";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Class() {
  const sessionCheckJson = {
    token: localStorage.getItem("login-token"),
    name: localStorage.getItem("login-name")
  };
  const navigate = useNavigate();

  async function session_check_api(sessionChkreqJson) {
    try {
      const response = await axios.post(
        "/api/session-check",
        JSON.stringify(sessionChkreqJson),
        {
          headers: {
            "Content-Type": `application/json`
          }
        }
      );

      if (response["data"]["session"] === "deactive") {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    session_check_api(sessionCheckJson);
  }, []);

  //-----------세션 체크 완료------------------

  const classId = useParams().classId;
  const [projects, setprojects] = useState([]);
  const projectList = useRef(projects);
  const projectRandList = useRef(projects);
  // const [checked, setChecked] = useState(false);

  function handleChecked({ target }) {
    target.checked
      ? setprojects(projectList.current)
      : setprojects(projectRandList.current);
  }

  useEffect(() => {
    axios
      .get("/api/class", {
        params: { class: classId }
      })
      .then(function (response) {
        projectList.current = response.data.projects;
        projectRandList.current = response.data.projectsRand;
        setprojects(projectRandList.current);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [classId]);

  return (
    <div className="Class">
      <div className="ClassBtnWrapper">
        <div>
          <input
            type="checkbox"
            id="Switch"
            onChange={(e) => handleChecked(e)}
          />
          <label htmlFor="Switch" className="SwitchLabel">
            <span className="SwitchBtn"></span>
          </label>
        </div>
        <p>팀번호 순으로 보기</p>
      </div>
      <div className="ClassGridWrapper">
        {projects.map((project) => {
          return (
            <Grid project={project} key={`projectId${project.project_id}`} />
          );
        })}
      </div>
    </div>
  );
}

export default Class;
