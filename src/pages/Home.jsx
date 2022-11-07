import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Modal from "../components/Modal";
import axios from "axios";

function Home() {
  const [openModal, setOpenModal] = useState(false);

  const [joke, setJoke] = useState("");
  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://backend-omega-seven.vercel.app/api/getjoke",
        {
          header: { Accept: "application/json" },
        }
      );
      setJoke(`${result.data[0].question} ${result.data[0].punchline}`);
    };
    fetchData();
  }, [fetching]);

  return (
    <div className="home">
      <div className="aboutMe">
        <div className="text-aboutMe">
          <h2>Hi, I´m André</h2>
          <span className="webdeveloper">Web Developer</span>
          <hr></hr>
          <p>
            My name is André Maia and i´m 20 yo. Front-End Developer located in
            Póvoa de Varzim. Currently studying Web Development and Multimedia
            at ESTG. I have a serious passion for web dev and design. Well organized person,
            highly motivated and always careful in details.
          </p>
          <div className="arrow"></div>
          <button
            className="learn-more"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            + More
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
        <div className="image-aboutMe"></div>
      </div>

      <div className="hobbies_interests">
        <h1>Laser & Interests</h1>
        <div className="hobbies">
          <div className="travelling-text">
            <div className="travelling">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  className="colorpath"
                  d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
                />
              </svg>
            </div>
            <div className="text-svg">
              <span>Travel</span>
            </div>
          </div>
          <div className="exercising-text">
            <div className="exercising">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  className="colorpath"
                  d="M112 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32V224v64V416c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32h48V96zm416 0v32h48c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H528v32c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"
                />
              </svg>
            </div>
            <div className="text-svg">
              <span>Gym</span>
            </div>
          </div>
          <div className="goingout-text">
            <div className="goingout">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  className="colorpath"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
            </div>
            <div className="text-svg">
              <span>Going out</span>
            </div>
          </div>
          <div className="karting-text">
            <div className="karting">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  className="colorpath"
                  d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm288 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"
                />
              </svg>
            </div>
            <div className="text-svg">
              <span>Karting</span>
            </div>
          </div>
          <div className="watchingtv-text">
            <div className="watchingtv">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  className="colorpath"
                  d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                />
              </svg>
            </div>
            <div className="text-svg">
              <span>Filmes</span>
            </div>
          </div>
          <div className="programming-text">
            <div className="programming">
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  className="colorpath"
                  d="M41.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 41.4 86.6zM288 416H576c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                />
              </svg>
            </div>
            <div className="text-svg">
              <span>Code</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-joke">
        <div className="joke">
          <h2>Just a joke</h2>
          <p>{joke}</p>
          <button onClick={() => setFetching(!fetching)}>New Joke</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
