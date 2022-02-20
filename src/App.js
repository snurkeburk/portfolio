import "./App.css";
import react, { useEffect, useState } from "react";
import reactIcon from "./logo192.png";
import cssIcon from "./css.png";
import htmlIcon from "./html.png";
import jsIcon from "./js.png";
import z from "./z.png";
import { Button } from "@mui/material";
import Typical from "react-typical";
import { m, motion } from "framer-motion";
import Typist from "react-typist";

function App() {
  const [allShown, setAllShown] = useState("hidden");
  const [headerIsFinished, setHeaderIsFinished] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHeaderIsFinished(true);
    }, 5300);
  });
  const container = {
    hidden: { opacity: 0 },
    show: {
      transition: {
        delayChildren: 7,
        staggerChildren: 0.4,
      },
      opacity: 1,
    },
  };

  const containerBlurred = {
    hidden: { opacity: 0 },
    show: {
      transition: {
        delayChildren: 8,
      },
      opacity: 1,
    },
  };
  const containerTop = {
    hidden: { opacity: 0 },
    show: {
      transition: {
        delayChildren: 6,
        staggerChildren: 0.1,
      },
      opacity: 1,
    },
  };
  const containerMid = {
    hidden: { opacity: 0 },
    show: {
      transition: {
        delayChildren: 7,
      },
      opacity: 1,
    },
  };
  const containerBot = {
    hidden: { opacity: 0 },
    show: {
      transition: {
        delayChildren: 6.3,
        staggerChildren: 0.3,
      },
      opacity: 1,
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const containerMainInfo = {
    hidden: { opacity: 0 },
    show: {
      transition: {
        delayChildren: 1.3,
        staggerChildren: 1,
      },
      opacity: 1,
    },
  };

  const itemMainInfo = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <header className="App-header">
        {/*    <svg
          style={{
            position: "absolute",
          }}
          viewBox="0 0 1920 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            id="top1"
            x1="43.3468"
            y1="181"
            x2="1877"
            y2="180.431"
            stroke="#40CEC6"
            stroke-opacity="0.11"
          />
          <line
            id="diagonal1"
            x1="42.8177"
            y1="898.534"
            x2="1877.06"
            y2="180.534"
            stroke="#40CEC6"
            stroke-opacity="0.11"
          />

          <line
            id="bottom"
            x1="43.3547"
            y1="898.499"
            x2="1877.35"
            y2="898.499"
            stroke="#40CEC6"
            stroke-opacity="0.11"
          />
          <ellipse
            id="ellipse"
            cx="916"
            cy="540"
            rx="651"
            ry="310"
            fill="#060A09"
          />
          <rect
            id="rect"
            x="318"
            y="134"
            width="1107"
            height="93"
            fill="#060A09"
          />
        </svg> */}
        <motion.div
          className="blurred-html"
          style={{
            filter: "blur(2px)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          variants={containerBlurred}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="htmlbod-portfolio-container"
            style={{ display: "flex", paddingLeft: "10rem" }}
          >
            <p className="html-blue">&lt;main-section</p>
            <p className="html-spacer">_</p>
            <p className="html-orange">className=</p>
            <p className="html-cyan-green">"portfolio-container"</p>
            <p className="html-blue">&gt;</p>
          </motion.div>

          <motion.div
            variants={item}
            className="htmlbod-info"
            style={{ display: "flex", paddingLeft: "17rem" }}
          >
            <p className="html-blue">&lt;div</p>
            <p className="html-spacer">_</p>
            <p className="html-orange">className=</p>
            <p className="html-cyan-green">"info"</p>
            <p className="html-blue">&gt;</p>
          </motion.div>
        </motion.div>
        <section className="main-info">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="main-info-left"
          >
            <motion.div variants={item} className="htmlbod-info">
              <p className="html-blue">&lt;h1</p>
              <p className="html-spacer">_</p>
              <p className="html-orange">className=</p>
              <p className="html-cyan-green">"name"</p>
              <p className="html-blue">&gt;</p>
              <p className="html-gray">
                <p className="html-spacer">_</p>&#123;
              </p>
            </motion.div>
            <motion.div variants={item} className="htmlbod-info">
              <p className="html-blue">&lt;h2</p>
              <p className="html-spacer">_</p>
              <p className="html-orange">className=</p>
              <p className="html-cyan-green">"age"</p>
              <p className="html-blue">&gt;</p>
              <p className="html-gray">
                <p className="html-spacer">__</p>&#123;
              </p>
            </motion.div>
            <motion.div variants={item} className="htmlbod-info">
              <p className="html-blue">&lt;h1</p>
              <p className="html-spacer">_</p>
              <p className="html-orange">className=</p>
              <p className="html-cyan-green">"desc"</p>
              <p className="html-blue">&gt;</p>
              <p className="html-gray">
                <p className="html-spacer">_</p>&#123;
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={containerMainInfo}
            initial="hidden"
            animate="show"
          >
            <motion.div
              style={{
                height: "3rem",
                margin: "0",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                marginLeft: "5rem",
              }}
            >
              <Typical
                wrapper="h1"
                steps={["Isak Anderson", 1000]}
                className="h1-cyan"
                id="name"
              />
            </motion.div>
            <motion.div
              variants={itemMainInfo}
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
                style={{
                  fontWeight: "100",
                  fontSize: "2.8rem",
                  opacity: "80%",
                }}
              >
                18.6001232...
              </h2>
            </motion.div>
            <motion.div
              variants={itemMainInfo}
              style={{
                height: "3rem",
                margin: "0",
                alignItems: "center",
                display: "flex",
                textAlign: "left",
                marginLeft: "5rem",
                width: "66rem",
                justifyContent: "flex-start",
              }}
            >
              <div className="p-cyan">
                {count2 ? (
                  <Typist
                    avgTypingDelay={30}
                    cursor={{
                      element: "|",
                      hideWhenDone: true,
                      hideWhenDoneDelay: 1,
                    }}
                  >
                    <span>
                      <Typist.Delay ms={2500} />
                      ...year old [student & hobby] developer that enjoys &
                      focuses on
                    </span>
                  </Typist>
                ) : (
                  ""
                )}
              </div>

              <div className="p-typical">
                {count && headerIsFinished ? (
                  <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                    <span>design & layout</span>
                    <Typist.Backspace count={20} delay={1000} />
                    <span>user experience</span>
                    <Typist.Backspace count={20} delay={1000} />
                    <span>learning</span>
                    <Typist.Backspace count={20} delay={1000} />
                    <span>perfecting</span>
                    <Typist.Backspace count={20} delay={1000} />
                    <span>problemsolving</span>
                    <Typist.Backspace count={20} delay={1000} />{" "}
                    <span>teamwork</span>
                    <Typist.Backspace count={20} delay={1000} />
                  </Typist>
                ) : (
                  ""
                )}
              </div>
            </motion.div>
          </motion.div>
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div className="htmlbod-info" variants={item}>
              <motion.p className="html-spacer">_____</motion.p>
              <motion.p className="html-blue">&lt;/h1&gt;</motion.p>
            </motion.div>{" "}
            <motion.div className="htmlbod-info" variants={item}>
              <motion.p className="html-spacer">_____</motion.p>
              <motion.p className="html-blue">&lt;/h2&gt;</motion.p>
            </motion.div>{" "}
            <motion.div className="htmlbod-info" variants={item}>
              <motion.p className="html-spacer">_____</motion.p>
              <motion.p className="html-blue">&lt;/p&gt;</motion.p>
            </motion.div>
          </motion.div>
        </section>

        <motion.div className="tools-container">
          <motion.div
            className="tool-top"
            variants={containerTop}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Button
                className="html-btn"
                variant="contained"
                style={{
                  fontSize: "2rem",
                  backgroundColor: "#E44E25",
                  height: "3rem",
                  fontWeight: "1000",
                  fontFamily: "Open Sans, sans-serif",
                }}
                sx={{
                  borderRadius: "0.5rem",
                }}
              >
                {" "}
                <img src={htmlIcon} className="react-logo" alt="logo" />
                HTML
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="tool-mid"
            variants={containerMid}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Button
                variant="contained"
                className="css-btn"
                style={{
                  fontSize: "2rem",
                  fontWeight: "1000",
                  fontFamily: "Open Sans, sans-serif",
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
            </motion.div>
            <motion.div variants={item}>
              <Button
                variant="contained"
                className="react-button"
                style={{
                  fontFamily: "Open Sans, sans-serif",
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
            </motion.div>

            <motion.div variants={item}>
              <Button
                variant="contained"
                style={{
                  fontSize: "1.2rem",
                  textTransform: "capitalize",
                  backgroundColor: "#cfb139",
                  fontFamily: "Open Sans, sans-serif",
                  display: "flex",
                  justifyContent: "space-around",
                }}
                sx={{
                  borderRadius: "0.5rem",
                }}
              >
                {" "}
                <img
                  src={jsIcon}
                  style={{ marginLeft: "-1.3rem" }}
                  className="js-logo"
                  alt="logo"
                />
                JavaScript
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="tool-bot"
            variants={containerBot}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Button
                className="one"
                variant="contained"
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Open Sans, sans-serif",
                }}
                sx={{
                  borderRadius: "0.5rem",
                }}
              >
                {" "}
                Firebase
              </Button>
            </motion.div>
            <motion.div variants={item}>
              <Button
                className="two"
                variant="contained"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                }}
                sx={{
                  borderRadius: "0.3rem",
                }}
              >
                {" "}
                .NET C#
              </Button>
            </motion.div>
            <motion.div variants={item}>
              <Button
                className="three"
                variant="contained"
                style={{
                  fontSize: "0.48rem",
                  fontFamily: "Open Sans, sans-serif",
                }}
                sx={{
                  borderRadius: "0.2rem",
                }}
              >
                {" "}
                Framer-motion
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.section className="inquery">
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
        </motion.section>
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
