import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

var vocabularyData = [
    {
        chinese: "几号",
        pinyin: "jǐ hào",
        english: "what date",
      },
      {
        chinese: "星期",
        pinyin: "xīngqí",
        english: "week",
      },
      {
        chinese: "回国",
        pinyin: "huíguó",
        english: "to return to one's home country",
      },
      {
        chinese: "看",
        pinyin: "kàn",
        english: "to visit, to see",
      },
      {
        chinese: "回来",
        pinyin: "huílái",
        english: "to come back",
      },
      {
        chinese: "明年",
        pinyin: "míngnián",
        english: "next year",
      },
      {
        chinese: "生日",
        pinyin: "shēngrì",
        english: "birthday",
      },
      {
        chinese: "星期日",
        pinyin: "xīngqírì",
        english: "Sunday",
      },
      {
        chinese: "巧",
        pinyin: "qiǎo",
        english: "coincidental",
      },
      {
        chinese: "不好意思",
        pinyin: "bù hǎoyìsi",
        english: "excuse me, I'm sorry",
      },
  ];

function Com() {
  return (
    <div>
      <Navbar />
      <h1>Lesson 5 : </h1>
      <table>
        <thead>
          <tr>
            <th>Chinese</th>
            <th>Pinyin</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          {vocabularyData.map((item) => (
            <tr key={item.chinese}>
              <td>{item.chinese}</td>
              <td>{item.pinyin}</td>
              <td>{item.english}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Com;