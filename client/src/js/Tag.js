import "../css/Tag.css";
import Grid from "./Grid/Grid";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TagBtn from "./Tag/Tag";

function Tag() {
  // const tagName = useParams().tagName;
  const tagId = useParams().tagId;
  const [onClickValue, setOnClickValue] = useState([]);
  const [projects, setprojects] = useState([]);
  const projectList = useRef(projects);
  const projectRandList = useRef(projects);
  const [clicked, setClicked] = useState();

  function handleChecked({ target }) {
    target.checked
      ? setprojects(projectList.current)
      : setprojects(projectRandList.current);
  }
  /**
   * use state 여러개 만들어서 onclick 여부를 배열로 생성해 
   * 
   */
  const TagList = ['게임', '패션', '환경', "의료", "음악", "운동&스포츠", '요리', '교육', '영화&도서', '드라마', '생활', 'AI', '여행', '힐링', '비즈니스', '커뮤니케이션', '쇼핑', '지도', '창작', '예술&디자인', '컴퓨팅', '보안', '편의도구', '취업', '기타']
  var clickedBtn = useRef([]);
  const [isActive, setActive] = useState(false);
  const handleOnClick = event => {
    if(clicked !== undefined){
      clicked.classList.remove('onClick')
    }
    if(clicked === event.target){
      return
    }
    event.target.classList.toggle('onClick')
    setClicked(event.target)
  };

  useEffect(() => {
    axios
      .get("/api/tag", {
        params: { tag: tagId }
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
  }, [tagId]);
 

  function OnOff() {

  };
  return (
    <div className="Tag">
      <div className="TagList">
        {TagList.map((Tag, idx) => <TagBtn value={Tag} className={`TagBtn ${onClickValue[idx]}?'onClick;''`} key={`Tag${idx}`} onClick={(event) => handleOnClick(event)} />)}
        {/* {TagList.map((Tag,idx)=>console.log(Tag))} */}
      </div>

      <div className="Class">
        <div className="ClassGridWrapper">
          {projects.map((project) => {
            return <Grid project={project} key={project.project_id} />;
          })}
        </div>
      </div>


    </div>
  );
}

export default Tag;
