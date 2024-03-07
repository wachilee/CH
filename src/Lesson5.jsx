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

  var conver = [
    {
        chinese: "今天几号?", 
        pinyin: "Jīntiān jǐ hào?",
        english: "What's the date today?",
        
    },
    {
        chinese: "今天是 10 月 1 号。", 
        pinyin: "Jīntiān shì 10 yuè 1 hào.",
        english: "Today is October 1st.",
    },
    {
        chinese: "我明年 1 月 3 号回来。", 
        pinyin: "Wǒ míngnián 1 yuè 3 hào huílái.",
        english: "I'll be back on January 3rd next year.",
    },
    {
        chinese: "你生日几号?", 
        pinyin: "Nǐ shēngrì jǐ hào?",
        english: "When is your birthday?",       
    },
]

function Com() {
  return (
    <div className="Com">
      <Navbar />
      <h1>Lesson 5: Vocaburaly</h1>
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

      <div className="conversation">
        <h2>Example sentences</h2>
        {conver.map((item) => (
            <div key={item.who} >
                {/* <p>{item.who}</p> */}
              <p class="up">{item.chinese}</p>
              <p>{item.pinyin}</p>
              <p class="bottom">{item.english}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Com;