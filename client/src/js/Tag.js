import "../css/Tag.css";
import { useParams } from "react-router-dom";
import Grid from "./Grid/Grid";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Tag() {
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
        console.log("You need to login in!");
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


  const tagName = useParams().tagName;
  const [projects, setprojects] = useState([]);
  const projectList = useRef(projects);
  const projectRandList = useRef(projects);
  // const [checked, setChecked] = useState(false);

  function handleChecked({ target }) {
    target.checked
      ? setprojects(projectList.current)
      : setprojects(projectRandList.current);
  }

  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
 
  useEffect(() => {
    axios
      .get("", {
        params: { tag: tagName }
      })
      .then(function (response) {
        console.log(response.data);
        projectList.current = response.data.projects;
        projectRandList.current = response.data.projectsRand;
        setprojects(projectRandList.current);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [tagName]);

  
  return (
    /* onClick={} 뒤에 어떻게 해야하는지 몰라서 일단 handleToggle 넣음 */
  <div>
    <div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="게임">
        <span>#게임</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="패션"
      >
        <span>#패션</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="환경">
        <span>#환경</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="의료">
        <span>#의료</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="음악">
        <span>#음악</span>
      </div>
      <div className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="운동스포츠">
        <span>#운동/스포츠</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="요리">
        <span>#요리</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="교육">
        <span>#교육</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="영화도서">
        <span>#영화/도서</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="드라마">
        <span>#드라마</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="생활">
        <span>#생활</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="AI">
        <span>#AI</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="여행">
        <span>#여행</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="힐링">
        <span>#힐링</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="비즈니스">
        <span>#비즈니스</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="커뮤니케이션">
        <span>#커뮤니케이션</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="쇼핑">
        <span>#쇼핑</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="지도">
        <span>#지도</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="창작">
        <span>#창작</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="예술디자인">
        <span>#예술/디자인</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="컴퓨팅">
        <span>#컴퓨팅</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="보안">
        <span>#보안</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="편의도구">
        <span>#편의/도구</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="취업">
        <span>#취업</span>
      </div>
      <div 
      className="Tag"
      onClick={handleToggle}
      id="TagBtn"
      value="기타">
        <span>#기타</span>
      </div>
    </div>

    <div className="Class">
      <div className="ChosenTag">
        <p>태그를 띄우고 싶어요</p>
      </div>
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
          return <Grid project={project} key={project.project_id} />;
        })}
      </div>
    </div>

    
  </div>
);}

export default Tag;
