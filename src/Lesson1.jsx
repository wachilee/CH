import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Com() {
  const zhuyinImageUrl = "https://www.omniglot.com/images/writing/zhuyin.gif";

  return (
    <div>
      <Navbar />
      <h1>Lesson 1 : </h1>
      <img src={zhuyinImageUrl} alt="Zhuyīn chart" style={{ display: "block", margin: "0 auto" }} />
      {/* <h2>Example sentences</h2>
      <h4></h4> */}
    </div>
  );
}

export default Com;
