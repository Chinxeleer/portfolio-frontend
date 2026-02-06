import React from "react";

function InspirationCard() {
  return (
    <section className="w-full card-background rounded-4xl px-6 py-4 mt-4 h-[20vh]">
      <h1>Inspiration</h1>

      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <a
            href="https://thesquareplanet.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jon Jengset
          </a>
          <p>Avid Rust Educator</p>
        </div>
        <div>
          <a
            href="https://www.seesaw.website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SeeSaw
          </a>
          <p>World of Stunning Websites</p>
        </div>
      </div>
    </section>
  );
}

export default InspirationCard;
