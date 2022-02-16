import styled from "styled-components";
import style from "../components/AcademyGram/accademy-gram.module.css";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Grid = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

function AcademyGram(props) {
  return <div className={style.Container}></div>;
}

export default AcademyGram;
