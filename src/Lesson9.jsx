import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const vocabularyData = [
    {
        chinese: "太极拳",
        pinyin: "tàijí quán",
        english: "tai chi",
      },
      {
        chinese: "课",
        pinyin: "kè",
        english: "class",
      },
      {
        chinese: "书法",
        pinyin: "shūfǎ",
        english: "calligraphy",
      },
      {
        chinese: "体操",
        pinyin: "tǐcāo",
        english: "gymnastics",
        
      },
      {
        chinese: "数学",
        pinyin: "shùxué",
        english: "math",
        
      },
      {
        chinese: "中文",
        pinyin: "zhōngwén",
        english: "Chinese",
        
      },
      {
        chinese: "学院",
        pinyin: "xuéyuàn",
        english: "college, institute",
        
      },
      {
        chinese: "兴趣",
        pinyin: "xìngqù",
        english: "interest",
        
      },
      {
        chinese: "感兴趣",
        pinyin: "gǎn xìngqù",
        english: "to be interested in",
        
      },
      {
        chinese: "可是",
        pinyin: "kěshì",
        english: "but, however",
      },
      {
        chinese: "还是",
        pinyin: "hái shì",
        english: "or",
      },
      {
        chinese: "最",
        pinyin: "zuì",
        english: "most, very",
      },
      {
        chinese: "报名",
        pinyin: "bàomíng",
        english: "to sign up",
      },
      {
        chinese: "没错",
        pinyin: "méi cuò",
        english: "right, exactly",
      },
      {
        chinese: "觉得",
        pinyin: "juédé",
        english: "to think, to feel",
      },
      {
        chinese: "爱好",
        pinyin: "àihào",
        english: "hobby",
      },
      {
        chinese: "非常",
        pinyin: "fēicháng",
        english: "very",
      }
  ];

function Com() {
  return (
    <div>
      <Navbar />
      <h1>Lesson 9 : </h1>
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