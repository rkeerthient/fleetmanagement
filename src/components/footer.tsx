import * as React from "react";
import Footer_Hours from "./footer_hours";

const Footer = ({ _site }: any) => {
  const {
    c_logoURL,
    name,
    c_accessibilityDescription,
    c_footer,
    c_relatedFacility,
  } = _site;

  return (
    <footer className="text-white mt-16" style={{ background: "#2b354b" }}>
      <div className="centered-container py-5">
        <div className="section">
          <div className="grid grid-cols-3 space-x-14">
            <div>
              <div className="flex flex-col space-y-6">
                <div>
                  <img src={c_logoURL} alt="" className="w-36 h-auto" />
                </div>
                <div>{c_accessibilityDescription}</div>
                <div id="Row 2 - Social" className="space-y-2">
                  <div className="text-xl font-bold mb-4">Social Media</div>
                  <div>
                    <span className="inline-flex  w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0 space-x-3">
                      <a className="text-white hover:cursor-pointer  border opacity-70 hover:opacity-100 p-1">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="text-white hover:cursor-pointer  border opacity-70 hover:opacity-100 p-1">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="text-white hover:cursor-pointer  border opacity-70 hover:opacity-100 p-1">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a className="text-white hover:cursor-pointer  border opacity-70 hover:opacity-100 p-1">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          ></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="py-2 mb-2 uppercase font-light border-b-2">
                Our Services
              </div>
              <ul>
                {c_relatedFacility[0].c_offeredServices.map(
                  (item: any, index: any) => (
                    <li
                      key={index}
                      className="[&:not(:last-child)]:border-b-2 border-gray-500 opacity-80 hover:opacity-100 py-2 uppercase text-sm"
                    >
                      <a href={item.slug}>{item.name}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
            {c_relatedFacility[0].hours && (
              <div>
                <Footer_Hours
                  hours={c_relatedFacility[0].hours}
                  title="Opening Hours"
                ></Footer_Hours>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
