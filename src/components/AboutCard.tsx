import React from "react";

function AboutCard() {
  return (
    <section className="md:col-span-2 card-background space-y-4 rounded-4xl px-6 py-4">
      <div className="flex items-center space-x-10">
        <div>
          <img
            className="size-30 rounded-full bg-white object-cover"
            src="/images/profile.png"
            alt="profile"
          />
        </div>
        <div>
          <h1 className="text-2xl">Blessing Kodze</h1>
          <p>Software Engineer</p>
        </div>
      </div>
      <h3>About</h3>
      <p className="text-start sub-text">
        Hey, I'm Blessing, a systems engineer and researcher building at the
        intersection of blockchain and artificial intelligence. I'm seriously
        passionate about decentralized systems, cryptographic protocols, and how
        Rust enables us to write safe, performant code for Web3 applications. I
        am dedicated to exploring how blockchain can transform traditional
        systems while leveraging my background in machine learning and
        full-stack development. I have experience shipping production software,
        conducting deep learning research that demonstrated Mamba's superiority
        over transformers in financial forecasting, and now focusing on building
        secure, scalable blockchain applications with Rust
      </p>
    </section>
  );
}

export default AboutCard;
