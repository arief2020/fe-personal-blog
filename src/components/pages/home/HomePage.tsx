import React from "react";
import Header from "./parts/Header";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center grow gap-3">
        <h1 className="text-3xl font-bold">
          Personal Blog
        </h1>
        <p className="text-xl">
          Write your personal blog in minutes.
        </p>
		<button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
}
