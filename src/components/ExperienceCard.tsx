import React from "react";

function Experience() {
  return (
    <section className="md:col-span-2 md:min-h-20 card-background space-y-4 rounded-4xl px-6 py-4">
      <h3>Experience</h3>
      <table className="w-full">
        <tbody className="space-y-20">
          <tr className="">
            <td className="py-4 w-1/4 align-top">
              <span className="rounded-full px-2 py-1 text-blue-900 text-[12px] bg-[#42fd55]">
                Present
              </span>
            </td>
            <td className="py-4 w-3/4 align-top">
              <div>
                <p>Junior Software Developer</p>
                <a href="" target="_blank">
                  RiskCafe
                </a>
                <p className="sub-text">Rosebank, Johannesburg</p>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="py-4 w-1/4 align-top">
              <p>2025</p>
            </td>
            <td className="py-4 w-3/4 align-top">
              <div>
                <p>Software Developer</p>
                <a href="" target="_blank">
                  AnalyticsX
                </a>
                <p className="sub-text">Sandton, Johannesburg</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Experience;
