import "../css/Tag.css";
import Grid from "./Grid/Grid";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TagBtn from "./Tag/Tag";

function Tag() {
  // const tagName = useParams().tagName;
  // const [onClickValue,setOnClickValue]=useState([]);
  const [projects, setprojects] = useState([]);
  const projectList = useRef(projects);
  const projectRandList = useRef(projects);
  const [checked, setChecked] = useState([]);

  // function handleChecked({ target }) {
  //   target.checked
  //     ? setprojects(projectList.current)
  //     : setprojects(projectRandList.current);
  // }
/**
 * use state 여러개 만들어서 onclick 여부를 배열로 생성해 
 * 
 */
  var clickedBtn = useRef([]);
  const [isActive, setActive] = useState(false);
  const handleOnClick = (e) => {
    console.log(e)
    e.target.classList.toggle('onClick')
    // setOnClickValue
  };
 
  // useEffect(() => {
  //   axios
  //     .get("", {
  //       params: { tag: tagName }
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //       projectList.current = response.data.projects;
  //       projectRandList.current = response.data.projectsRand;
  //       setprojects(projectRandList.current);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [tagName]);
  const TagList=['게임','패션','환경',"음악","운동스포츠",'요리','교육','영화도서','드라마','생활','AI','여행','힐링','비즈니스','커뮤니케이션','쇼핑','지도','창작','예술디자인','컴퓨팅','보안','편의도구','취업','기타']
  function OnOff(){
    
  };
  return (
  <div className="Tag">
    <div className="TagList">
      {TagList.map((Tag,idx)=><TagBtn value={Tag} className={`TagBtn ${onClickValue[idx]}?'onClick;''`} key={`Tag${idx}`} onClick={handleOnClick}/>)}
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
);}

export default Tag;
