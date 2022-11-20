import { React, useMemo } from "react";
import { useNavigate } from "react-router";
import ReactWordcloud from "react-wordcloud";
import "../css/Main.css";

function WordCloud() {
  const navigate = useNavigate();
  const callbacks = useMemo(() => {
    return {
      onWordClick: () => navigate(`/tag`),
      onWordHover: () => console.log("hi")
    };
  }, []);
  const options = useMemo(() => {
    if (window.matchMedia("(max-width:768px)").matches)
      return {
        enableTooltip: true,
        deterministic: false,
        fontFamily: "헤드라인",
        fontSizes: [20, 80],
        fontStyle: "normal",
        fontWeight: "900",
        padding: 2,
        rotations: 2,
        rotationAngles: [0, 90],
        scale: "log",
        spiral: "rectangular"
      };
    return {
      enableTooltip: true,
      deterministic: false,
      fontFamily: "헤드라인",
      fontSizes: [50, 150],
      fontStyle: "normal",
      fontWeight: "900",
      padding: 2,
      rotations: 1,
      rotationAngles: [0, 0],
      scale: "log",
      spiral: "rectangular"
    };
  }, []);
  // var w=window.innerWidth, h=window.innerHeight;
  const size = useMemo(() => {
    if (window.matchMedia("(max-width:768px)").matches)
      return [window.innerWidth * 0.7, window.innerHeight * 0.6];
    return [900, 650];
  }, []);
  const words = useMemo(() => {
    return [
      {
        text: "편의/도구",
        value: 178
      },
      {
        text: "취업",
        value: 4
      },
      {
        text: "기타",
        value: 10
      },
      {
        text: "게임",
        value: 42
      },
      {
        text: "패션",
        value: 25
      },
      {
        text: "환경",
        value: 38
      },
      {
        text: "의료",
        value: 11
      },
      {
        text: "음악",
        value: 3
      },
      {
        text: "운동/스포츠",
        value: 22
      },
      {
        text: "요리",
        value: 37
      },
      {
        text: "교육",
        value: 37
      },
      {
        text: "영화/도서",
        value: 15
      },
      {
        text: "생활",
        value: 121
      },
      {
        text: "AI",
        value: 14
      },
      {
        text: "여행",
        value: 16
      },
      {
        text: "힐링",
        value: 7
      },
      {
        text: "비즈니스",
        value: 5
      },
      {
        text: "커뮤니케이션",
        value: 13
      },
      {
        text: "쇼핑",
        value: 10
      },
      {
        text: "지도",
        value: 30
      },
      {
        text: "창작",
        value: 3
      },
      {
        text: "예술/디자인",
        value: 7
      },
      {
        text: "컴퓨팅",
        value: 4
      },
      {
        text: "보안",
        value: 7
      },
      {
        text: "러닝페어",
        value: 100
      },
      {
        text: "성균관대",
        value: 70
      },
      {
        text: "문제해결",
        value: 30
      },
      {
        text: "알고리즘",
        value: 30
      },
      {
        text: "2022",
        value: 10
      }
    ];
  }, []);

  return (
    <div className="WordCloud Font">
      <ReactWordcloud
        className="WordCloud Font"
        callbacks={callbacks}
        options={options}
        size={size}
        words={words}
      />
    </div>
  );
}

export default WordCloud;
