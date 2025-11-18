"use client";

import { useSearchParams } from "next/navigation";

const Progress = () => {
  const searchParams = useSearchParams();

  const upperFirstLetter = (str: string) => {
    if (!str) return "";
    return str
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="loading-page bg-white-black" id="loading" style={{ opacity: 1 }}>
      <div className="d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
        <div className="d-flex flex-column width-loading text-center">
          <img
            src="./assets/images/placeholder.webp"
            data-src="./assets/images/GAU02042-2.jpg"
            fetchPriority="high"
            className="img-fluid mb-3 mx-auto object-fit-cover opacity-0"
            alt="icon"
            style={{ width: "3.5rem", height: "3.5rem", borderRadius: "50%", objectPosition: "top" }}
          />
          <div className="progress" role="progressbar" style={{ height: "0.5rem" }} aria-label="progress bar">
            <div className="progress-bar" id="progress-bar" style={{ width: "0%" }} />
          </div>
          <p className="d-none mt-1 text-theme-auto" id="progress-info">
            Hi {upperFirstLetter(searchParams.get("name") || "my friend")}...
          </p>
        </div>
      </div>
      <div className="text-center position-fixed w-100" style={{ bottom: "8%", left: 0 }}>
        <div className="d-flex flex-column">
          <small className="text-secondary">from</small>
          <small className="text-theme-auto">
            <i className="fa-brands fa-github me-1" />
            chungchamchi19
          </small>
        </div>
      </div>
    </div>
  );
};

export default Progress;
