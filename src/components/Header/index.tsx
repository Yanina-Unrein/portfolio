// @useClient

import React, { useState, useEffect } from "react";
import "./header.css";
//import HeaderEffect from "./headerEffect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
  //const [typedText, setTypedText] = useState("");

  /* useEffect(() => {
    HeaderEffect("FullStack Developer!");
  }, []); */

  return (
    <section className="header-container flex flex-col">
        <div className="flex justify-end pr-2 pt-2">
            <div className="rounded-full p-2 icon--background shadow-lg shadow-indigo-500/40 cursor-pointer">
            <FontAwesomeIcon icon={faBars} className="menu-icon w-4 h-4 text-white" />
            </div>
      </div>
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-extrabold">YANINA UNREIN</h1>
            <h2 className="text-xl font-semibold subtitle--color"> FULLSTACK DEVELOPER!
            {/*           <span className="typed">{typedText}</span>
                    <span className="typed-cursor"></span> */}
            </h2>
        </div>
    </section>
  );
}