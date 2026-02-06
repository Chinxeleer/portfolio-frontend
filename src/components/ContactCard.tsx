import React from "react";

function ContactCard() {
  return (
    <section className="w-full card-background rounded-4xl px-6 py-4 mt-4 h-[20vh]">
      <h1>Contact</h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <a
            href="https://www.linkedin.com/in/blessingkodze"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          <p>Connect with me</p>{" "}
        </div>

        <div>
          <a
            href="https://github.com/chinxeleer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <p>Follow me on github</p>
        </div>
        <div>
          <a
            href="mailto:blessingeleer.programming@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <p>Send me an email</p>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
