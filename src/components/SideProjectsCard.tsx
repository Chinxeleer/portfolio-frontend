import React from "react";

function SideProjectsCard() {
  return (
    <section className="col-span-2 row-span-2 min-h-20 bg-gray-800 space-y-4 rounded-4xl px-6 py-4">
      <h1>Side Projects</h1>
      <table className="w-full">
        <tbody className="space-y-20">
          <tr className="">
            <td className="py-4 w-1/4 align-top">
              <p>2024</p>
            </td>
            <td className="py-4 w-3/4 align-top">
              <div>
                <a
                  href="https://github.com/Chinxeleer/research_project"
                  target="_blank"
                >
                  Comparative Forecasting and Prediction Research
                </a>
                <p>
                  As a Computer Science student I had the opportunity to work on
                  this as my Honours research project. Conducted Honours
                  research comparing state-of-the-art deep learning
                  architectures (Mamba, Informer, iTransformer, FEDformer, and
                  Autoformer) for financial time series forecasting.
                  Investigated how attention-based transformers and selective
                  state space models handle the challenges of non-stationary,
                  high-noise market data and long-term prediction
                  horizonsFinancial time series forecasting remains challenging
                  due to non stationarity, high noise, and complex dependencies
                  in market data.
                </p>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="py-4 w-1/4 align-top">
              <p>2024</p>
            </td>
            <td className="py-4 w-3/4 align-top">
              <div>
                <a href="AnalyticsX" target="_blank">
                  Personal Website
                </a>
                <p>
                  As a scientist, I'm always looking for ways to improve my
                  skills and knowledge. I challenged myself as part of my
                  journey in learning rust to build a website using the rust{" "}
                  <a href="https://www.leptos.dev/" target="_blank">
                    Leptos framework
                  </a>{" "}
                  and{" "}
                  <a href="https://docs.rs/axum/latest/axum/" target="_blank">
                    Axum
                  </a>{" "}
                  for the server side. I got exposed to a lot of async rust and
                  learning how to configure and deploy a server in rust as the
                  website was deployed on{" "}
                  <a href="fly.io" target="_blank">
                    fly.io
                  </a>
                  .
                </p>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="py-4 w-1/4 align-top">
              <p>2025</p>
              <p>Jan - July</p>
            </td>
            <td className="py-4 w-3/4 align-top">
              <div>
                <p>Software Developer</p>
                <a href="" target="_blank">
                  AnalyticsX
                </a>
                <p>Sandton, Johannesburg</p>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="py-4 w-1/4 align-top">
              <p>2025</p>
              <p>Jan - July</p>
            </td>
            <td className="py-4 w-3/4 align-top">
              <div>
                <p>Software Developer</p>
                <a href="" target="_blank">
                  AnalyticsX
                </a>
                <p>Sandton, Johannesburg</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default SideProjectsCard;
