import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="nav-section">
          <span className="logo">Saber Mohamed</span>
          <ul className="nav-bar">
            <i className="nav-link">HOME</i>
            <i className="nav-link">WORK</i>
            <i className="nav-link">ABOUT</i>
            <i className="nav-link">CONTACT</i>
            <i className="nav-link">
              <button className="get-in-touch-button">GET IN TOUCH</button>
            </i>
          </ul>
        </div>
        <div id="fp-nav" className="left">
          <ul>
            <li>
              <a href="#top" className="active">
                <span></span>
              </a>
            </li>
            <li>
              <a href="#reile" className="">
                <span></span>
              </a>
            </li>
            <li>
              <a href="#about" className="">
                <span></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="">
                <span></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="contact" className="contact"></div>
    </>
  );
}

export default App;
