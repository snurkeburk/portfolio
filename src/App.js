import "./App.css";
import react from "react";
import reactIcon from "./logo192.png";
import cssIcon from "./css.png";
import htmlIcon from "./html.png";
import jsIcon from "./js.png";
import z from "./z.png";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <header className="App-header">
        <img
          src={z}
          style={{
            zIndex: "1",
            position: "absolute",
            width: "100%",
            maxHeight: "100%",
            opacity: "10%",
            pointerEvents: "none",
          }}
        ></img>
        <div
          className="blurred-html"
          style={{
            filter: "blur(2px)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="htmlbod-portfolio-container"
            style={{ display: "flex", paddingLeft: "10rem" }}
          >
            <p className="html-blue">&lt;main-section</p>
            <p className="html-spacer">_</p>
            <p className="html-orange">className=</p>
            <p className="html-cyan-green">"portfolio-container"</p>
            <p className="html-blue">&gt;</p>
          </div>

          <div
            className="htmlbod-info"
            style={{ display: "flex", paddingLeft: "17rem" }}
          >
            <p className="html-blue">&lt;div</p>
            <p className="html-spacer">_</p>
            <p className="html-orange">className=</p>
            <p className="html-cyan-green">"info"</p>
            <p className="html-blue">&gt;</p>
          </div>
        </div>
        <section className="main-info">
          <div className="main-info-left">
            <div className="htmlbod-info">
              <p className="html-blue">&lt;h1</p>
              <p className="html-spacer">_</p>
              <p className="html-orange">className=</p>
              <p className="html-cyan-green">"name"</p>
              <p className="html-blue">&gt;</p>
              <p className="html-gray">
                <p className="html-spacer">_</p>&#123;
              </p>
            </div>
            <div className="htmlbod-info">
              <p className="html-blue">&lt;h2</p>
              <p className="html-spacer">_</p>
              <p className="html-orange">className=</p>
              <p className="html-cyan-green">"age"</p>
              <p className="html-blue">&gt;</p>
              <p className="html-gray">
                <p className="html-spacer">__</p>&#123;
              </p>
            </div>{" "}
            <div className="htmlbod-info">
              <p className="html-blue">&lt;h1</p>
              <p className="html-spacer">_</p>
              <p className="html-orange">className=</p>
              <p className="html-cyan-green">"desc"</p>
              <p className="html-blue">&gt;</p>
              <p className="html-gray">
                <p className="html-spacer">_</p>&#123;
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                height: "3rem",
                margin: "0",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                marginLeft: "5rem",
              }}
            >
              <h1
                className="html-cyan"
                style={{ fontWeight: "100", fontSize: "3.3rem" }}
              >
                Isak Anderson
              </h1>
            </div>
            <div
              style={{
                height: "3rem",
                margin: "0",
                alignItems: "center",
                display: "flex",
                textAlign: "center",
                marginLeft: "5rem",
                justifyContent: "center",
              }}
            >
              <h2
                className="html-cyan"
                style={{
                  fontWeight: "100",
                  fontSize: "2.8rem",
                  opacity: "80%",
                }}
              >
                18.6001232
              </h2>
            </div>
            <div
              style={{
                height: "3rem",
                margin: "0",
                alignItems: "center",
                display: "flex",
                textAlign: "center",
                marginLeft: "5rem",
                justifyContent: "center",
              }}
            >
              <p
                className="html-cyan"
                style={{
                  fontWeight: "100",
                  fontSize: "1.2rem",
                  opacity: "50%",
                }}
              >
                year old [student & hobby] developer
              </p>
            </div>
          </div>
          <div>
            <div className="htmlbod-info">
              <p className="html-spacer">_____</p>
              <p className="html-blue">&lt;/h1&gt;</p>
            </div>{" "}
            <div className="htmlbod-info">
              <p className="html-spacer">_____</p>
              <p className="html-blue">&lt;/h2&gt;</p>
            </div>{" "}
            <div className="htmlbod-info">
              <p className="html-spacer">_____</p>
              <p className="html-blue">&lt;/p&gt;</p>
            </div>
          </div>
        </section>

        <section className="tools-container">
          <div className="tool-top">
            <Button
              className="html-btn"
              variant="contained"
              style={{
                width: "10rem",
                backgroundColor: "#E44E25",
                fontSize: "2rem",
                fontWeight: "1000",
                textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
                width: "10rem",
                fontFamily: "Fira Code, monospace",
                height: " 3rem",
                display: "flex",
                justifyContent: " space-between",
              }}
              sx={{
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <img src={htmlIcon} className="react-logo" alt="logo" />
              HTML
            </Button>
          </div>
          <div className="tool-mid">
            <Button
              variant="contained"
              style={{
                fontSize: "2rem",
                fontWeight: "1000",
                textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
              }}
              sx={{
                borderRadius: "0.5rem",
                backgroundColor: "#0B51C1",
              }}
            >
              {" "}
              <img src={cssIcon} className="react-logo" alt="logo" />
              CSS
            </Button>
            <Button
              variant="contained"
              className="react-button"
              style={{
                fontWeight: "1000",
                textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
              }}
              sx={{
                backgroundColor: "#222222",
                border: 1,
                borderColor: "cyan",
                borderWidth: "3px",
                borderRadius: "1rem",
              }}
            >
              <img src={reactIcon} className="react-logo" alt="logo" />
              REACT
            </Button>
            <Button
              variant="contained"
              style={{
                fontSize: "1rem",
                textShadow: "2px 4px 3px rgba(0,0,0,0.3)",
                textTransform: "capitalize",
                backgroundColor: "#FFD83A",
                fontWeight: "1000",
                display: "flex",
                justifyContent: "space-around",
              }}
              sx={{
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <img src={jsIcon} className="js-logo" alt="logo" />
              JavaScript
            </Button>
          </div>
          <div className="tool-bot">
            <Button
              className="one"
              variant="contained"
              style={{
                fontSize: "1.5rem",
              }}
              sx={{
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              Firebase
            </Button>
            <Button
              className="two"
              variant="contained"
              style={{}}
              sx={{
                borderRadius: "0.3rem",
              }}
            >
              {" "}
              .NET C#
            </Button>
            <Button
              className="three"
              variant="contained"
              style={{
                fontSize: "0.48rem",
              }}
              sx={{
                borderRadius: "0.2rem",
              }}
            >
              {" "}
              Framer-motion
            </Button>
          </div>
        </section>

        <section className="inquery">
          <div style={{ display: "flex" }}>
            <p className="inquery-gray">&#123;</p>
            <p className="html-spacer">___</p>
            <p className="inquery-cyan">const </p>
            <p className="html-spacer">_</p>

            <p className="inquery-gray">[</p>
            <p className="inquery-green">isAvailable</p>
            <p className="inquery-gray">, </p>
            <p className="html-spacer">_</p>

            <p className="inquery-cyan">setIsAvailable</p>
            <p className="inquery-gray">]</p>
            <p className="html-spacer">_</p>

            <p className="inquery-orange"> = </p>
            <p className="html-spacer">_</p>
            <p className="inquery-cyan">useState</p>
            <p className="inquery-gray">(</p>
            <p className="inquery-green">true</p>
            <p className="inquery-gray">);</p>
            <p className="html-spacer">___</p>
            <p className="inquery-gray"> &#125;</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "30vw",
              margin: "auto",
            }}
          >
            <p className="inquery-gray">// Business inquery?</p>
            <p
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
              }}
            >
              Contact me!
            </p>
          </div>
        </section>
        <section className="view-prj">
          <div
            className="htmlbod-proj-container"
            style={{ display: "flex", heigth: "0", filter: "blur(2px)" }}
          >
            <p className="html-blue">&lt;Button</p>
            <p className="html-spacer">_</p>
            <p className="html-orange">onClick=</p>
            <p className="html-gray-two">()</p>
            <p className="html-orange">=&gt;</p>
            <p className="html-cyan">showProjects</p>
            <p className="html-gray-two">(</p>
            <p className="html-green">true</p>
            <p className="html-gray-two">)</p>
            <p className="html-spacer">_</p>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#222222",
              border: 1,
              borderColor: "white",
              borderWidth: "3px",
              borderRadius: "1rem",
              textTransform: "capitalize",
              fontWeight: "100",
              "&:hover": {
                borderColor: "#53f4e1",
                backgroundColor: "#222222",
                color: "#53f4e1",
              },
            }}
          >
            + See my projects
          </Button>
          <p className="html-spacer">_</p>
          <p className="html-blue" style={{ filter: "blur(2px)" }}>
            /&gt;
          </p>
        </section>
      </header>
    </div>
  );
}

export default App;
