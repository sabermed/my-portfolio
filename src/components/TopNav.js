import React, { useState, useEffect, useRef } from "react";
import "../css/topNav.css";

function TopNav() {
  const navigation = [
    { link: "#header", text: "HOME" },
    { link: "#about", text: "ABOUT" },
    { link: "#work", text: "WORK" },
    { link: "#myskill", text: "SKILL" },
    { link: "#contact", text: "CONTACT" },
  ];
  const menuBtnRef = useRef();
  const mobileMenuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  useEffect(() => {
    console.log("useEffect running");
    if (isOpen === true) {
      /**
       * clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(event.target) &&
          menuBtnRef.current &&
          !menuBtnRef.current.contains(event.target)
        ) {
          menuBtnRef.current.classList.remove("is-active");
          mobileMenuRef.current.classList.remove("is-active");
          setIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <div className="nav-section">
      {/* ************ logo ****************** */}
      <a href="./" className="logo">
        SM.
      </a>
      {/************* nav links ************** */}
      <ul
        ref={mobileMenuRef}
        className={isOpen ? "nav-bar is-active" : "nav-bar"}
      >
        {navigation.map((nav) => (
          <li key={nav.text}>
            <a
              href={nav.link}
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              className="nav-link-text link-bottom-line"
            >
              {nav.text}
            </a>
          </li>
        ))}
      </ul>
      {/* ******** burger menu icon ******* */}
      <button
        ref={menuBtnRef}
        onClick={toggle}
        className={isOpen ? "hamburger is-active" : "hamburger"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default TopNav;
