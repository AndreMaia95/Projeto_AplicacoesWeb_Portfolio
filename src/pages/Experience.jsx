import React from "react";
import "../styles/Experience.css";
import Html from "../images/icons/html.png";
import Css from "../images/icons/css.png";
import Javascript from "../images/icons/javascript.png";
import React2 from "../images/icons/react.png";
import Mui from "../images/icons/mui.png";
import Adobexd from "../images/icons/adobexd.png";
import Figma from "../images/icons/figma.png";
import Illustrator from "../images/icons/illustrator.png";
import Photoshop from "../images/icons/photoshop.png";
import Estrela from "../images/estrela.png";
import Sprinkle from "../images/Sprinkle.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Experience() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://api.quotable.io/random", {
        header: { Accept: "application/json" },
      });
      setQuote(`${result.data.content}`);
      setAuthor(`${result.data.author}`);
    };
    fetchData();
  }, [fetching]);

  return (
    <div className="experience">
      <div className="Experience">
        <div className="experienceTitle">
          <h1>Experience</h1>
        </div>
        <div className="infoBar">
          <div className="leftBar">
            <div className="left-leftBar">
              <div className="tagBar">
                <p>Company Name:</p>
                <p>Location:</p>
                <p>Period:</p>
                <p>Role:</p>
              </div>
              <div className="infoTag">
                <p>Primeiro Elemento - Programação Informática, Lda</p>
                <p>Póvoa de Varzim, Portugal</p>
                <p>6 Months - 2021/2022</p>
                <p>IT Technician</p>
              </div>
            </div>
            <div className="companyText">
              <p>
                A 1º Elemento – Programação Informática, Lda. foi constituída em
                1998, dentro do Grupo Escripovoa, orientada para a
                informatização e auditoria de PME’s na área da restauração, mais
                especificamente Discotecas, Bares, Restaurantes e Cafés.
                Rapidamente, a 1º Elemento se tornou líder em Portugal na
                informatização desse tipo de empresas, sendo hoje uma referência
                na área.
              </p>
            </div>
          </div>
          <div className="rightBar">
            <h2>Language Skills</h2>
            <div className="languages">
              <div className="Portuguese">
                <div className="label">
                  <p>Portuguese (Native)</p>
                </div>
                <div className="stars">
                  <img src={Estrela} alt="star"></img>
                  <img src={Estrela} alt="star"></img>
                  <img src={Estrela} alt="star"></img>
                  <img src={Estrela} alt="star"></img>
                  <img src={Estrela} alt="star"></img>
                </div>
              </div>
              <div className="English">
                <div className="label">
                  <p>English</p>
                </div>
                <div className="stars">
                  <img src={Estrela} alt="star"></img>
                  <img src={Estrela} alt="star"></img>
                  <img src={Estrela} alt="star"></img>
                </div>
              </div>
              <div className="French">
                <div className="label">
                  <p>French</p>
                </div>
                <div className="stars">
                  <img src={Estrela} alt="star"></img>
                </div>
              </div>
              <div className="Spanish">
                <div className="label">
                  <p>Spanish</p>
                </div>
                <div className="stars">
                  <img src={Estrela} alt="star"></img>
                  <img src={Estrela} alt="star"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skillsLine1">
          <div className="html">
            <img src={Html} alt="Html" />
            <p>HTML 5</p>
          </div>
          <div className="css">
            <img src={Css} alt="Css" />
            <p>CSS 3</p>
          </div>
          <div className="javascript">
            <img src={Javascript} alt="Javascript" />
            <p>JAVASCRIPT</p>
          </div>
        </div>
        <div className="skillsLine2">
          <div className="react">
            <img src={React2} alt="React" />
            <p>REACT</p>
          </div>
          <div className="mui">
            <img src={Mui} alt="Mui" />
            <p>MATERIAL UI</p>
          </div>
        </div>
        <div className="skillsLine3">
          <div className="adobexd">
            <img src={Adobexd} alt="AdobeXD" />
            <p>ADOBE XD</p>
          </div>
          <div className="figma">
            <img src={Figma} alt="Figma" />
            <p>FIGMA</p>
          </div>
          <div className="illustrator">
            <img src={Illustrator} alt="Illustrator" />
            <p>ILLUSTRATOR</p>
          </div>
          <div className="photoshop">
            <img src={Photoshop} alt="Photoshop" />
            <p>PHOTOSHOP</p>
          </div>
        </div>
      </div>

      <div className="quoteTitle"><h2>Quote of the day!</h2></div>
      <div className="containerQuotes">
        <div className="Quotes">
          <p>{quote}</p>
          <p className="quoteauthor">-{author}</p>
          <div className="buttonQuote">
          <button onClick={() => setFetching(!fetching)}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
