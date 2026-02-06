import { time } from "console";
import React from "react";

function Footer() {
  let time = new Date();
  return (
    <footer className="w-7xl mx-auto text-white py-4 px-6 h-24">
      <div className="flex justify-between">
        <h1>
          <span>&copy;</span> Blessing Kodze
        </h1>
        <p>{time.getFullYear()}</p>
        <p>Software Engineer</p>
      </div>
    </footer>
  );
}

export default Footer;
