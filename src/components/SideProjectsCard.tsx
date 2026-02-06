import React from "react";

function SideProjectsCard() {
  return (
    <section className="col-span-2 card-background space-y-8 rounded-4xl px-6 py-4">
      <h3>Side Projects</h3>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="py-4 w-1/4 align-top">
              <p>2025</p>
            </td>
            <td className="py-4 w-3/4 align-top">
              <div>
                <a
                  href="https://github.com/Chinxeleer/research_project"
                  target="_blank"
                >
                  Comparative Forecasting and Prediction Research
                </a>
                <p className="sub-text">
                  Evaluated transformer based and state space models for
                  financial time series forecasting under non stationary, high
                  noise conditions.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="py-4 w-1/4 align-top">
              <p>2024</p>
            </td>
            <td className="py-4 w-3/4 align-top">
              <div>
                <a href="AnalyticsX" target="_blank">
                  Rust Portfolio Website
                </a>
                <p className="sub-text">
                  Designed and deployed a full-stack Rust system using{" "}
                  <a href="https://www.leptos.dev/" target="_blank">
                    Leptos framework
                  </a>{" "}
                  and{" "}
                  <a href="https://docs.rs/axum/latest/axum/" target="_blank">
                    Axum
                  </a>{" "}
                  , with emphasis on async execution, containerization with
                  Docker, file and Markdown content management, and production
                  deployment on{" "}
                  <a href="https://fly.io/" target="_blank">
                    fly.io
                  </a>
                  .
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default SideProjectsCard;
