import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const vocabularyData = [
    {
      pinyin: "jīnnián",
      chinese: "今年",
      english: "this year",
    },
    {
      pinyin: "jǐ",
      chinese: "几",
      english: "how many",
    },
    {
      pinyin: "suì",
      chinese: "岁",
      english: "age, year",
    },
    {
      pinyin: "duōdà",
      chinese: "多大",
      english: "how old",
    },
    {
      pinyin: "xiǎopénɡyou",
      chinese: "小朋友",
      english: "kid",
    },
    {
      pinyin: "cāi",
      chinese: "猜",
      english: "to guess",
    },
    {
      pinyin: "xīng qī liù",
      chinese: "星期六",
      english: "Saturday",
    },
    {
      pinyin: "shìé",
      chinese: "事儿",
      english: "matter, business",
    },
    {
      pinyin: "jiànshēn",
      chinese: "健身",
      english: "to keep fit",
    },
    {
      pinyin: "jiànshēn fánɡ",
      chinese: "健身房",
      english: "gym",
    },
    {
      pinyin: "nǚ",
      chinese: "女",
      english: "female",
    },
    {
      pinyin: "nán",
      chinese: "男",
      english: "male",
    },
    {
      pinyin: "shàngwǔ",
      chinese: "上午",
      english: "morning",
    },
    {
      pinyin: "zhōnɡwǔ",
      chinese: "中午",
      english: "noon",
    },
    {
      pinyin: "xiàwǔ",
      chinese: "下午",
      english: "afternoon",
    },
    {
      pinyin: "kěyǐ",
      chinese: "可以",
      english: "can, okay",
    },
    {
      pinyin: "kàn",
      chinese: "看",
      english: "to take a look",
    },
    {
      pinyin: "āyí",
      chinese: "阿姨",
      english: "aunty",
    },
    {
      pinyin: "dàmā",
      chinese: "大妈",
      english: "aunty",
    },
    {
      pinyin: "jīngjù",
      chinese: "京剧",
      english: "Beijing opera",
    },
    {
      pinyin: "shēngyīn",
      chinese: "声音",
      english: "voice",
    },
    {
      pinyin: "zhēn",
      chinese: "真",
      english: "really",
    },
    {
      pinyin: "hǎotīng",
      chinese: "好听",
      english: "pleasing to the ear",
    },
    {
      pinyin: "niánjì",
      chinese: "年纪",
      english: "age",
    },
    {
      pinyin: "wàipó",
      chinese: "外婆",
      english: "grandmother",
    },
  ];

var conver = [
    {
        chinese: "  你今年几岁?", 
        pinyin: " Nǐ jīnnián jǐ suì?",
        english: "How old are you?",
        
    },
    {
        chinese: "你好!有什么事儿吗?", 
        pinyin: "Nǐ hǎo! Yǒu shé me shì er ma?",
        english: "Hello! What's the matter?",
    },
    {
        chinese: "大妈,这是京剧吧?", 
        pinyin: "Dàmā, zhè shì jīngjù ba?",
        english: "Auntie, is this Peking Opera?",
    },
    {
        chinese: "你的 声音 真 好听! 您今年多 大 年 纪?", 
        pinyin: "Nǐ de shēngyīn zhēn hǎotīng! Nín jīnnián duōdà niánjì?",
        english: "Your voice is so nice! How old are you?",       
    },
    {
        chinese:"你们 来 看看, 认识 这 个人吗?",
        pinyin:"Nǐmen lái kàn kàn, rènshí zhè gè rén ma?",
        english:"Come and see, do you know this person?",
    }
]
  
function Com() {
  return (
    <div className="Com">
      <Navbar />
      <h1>Lesson 3 : Vocaburaly</h1>
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