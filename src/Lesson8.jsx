import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const vocabularyData = [
        {
          chiness: "房子",
          pinyin: "fáng zǐ",
          english: "house",
        },
        {
          chiness: "家",
          pinyin: "jiā",
          english: "home",
        },
        {
          chiness: "楼",
          pinyin: "lóu",
          english: "building",
        },
        {
          chiness: "大楼",
          pinyin: "dà lóu",
          english: "apartment building",
        },
        {
          chiness: "小区",
          pinyin: "xiǎo qū",
          english: "residential area",
        },
        {
          chiness: "宿舍",
          pinyin: "sù shè",
          english: "dormitory",
        },
        {
          chiness: "房间",
          pinyin: "fáng jiān",
          english: "room",
        },
        {
          chiness: "客厅",
          pinyin: "kè tīng",
          english: "living room",
        },
        {
          chiness: "卧室",
          pinyin: "wò shì",
          english: "bedroom",
        },
        {
          chiness: "厨房",
          pinyin: "chú fáng",
          english: "kitchen",
        },
        {
          chiness: "卫生间",
          pinyin: "wèi shēng jiān",
          english: "bathroom",
        },
        {
          chiness: "电话",
          pinyin: "diàn huà",
          english: "telephone",
        },
        {
          chiness: "电话号码",
          pinyin: "diàn huà hào mǎ",
          english: "telephone number",
        },
        {
          chiness: "手机",
          pinyin: "shǒu jī",
          english: "cell phone",
        },
        {
          chiness: "喂",
          pinyin: "wèi",
          english: "hello (when answering the phone)",
        },
        {
          chiness: "接电话",
          pinyin: "jiē diàn huà",
          english: "to answer the phone",
        },
        {
          chiness: "等一下",
          pinyin: "děng yī xià",
          english: "wait a minute",
        },
        {
          chiness: "健美操",
          pinyin: "jiàn měi cāo",
          english: "aerobic exercise",
        },
        {
          chiness: "比赛",
          pinyin: "bǐ sài",
          english: "competition",
        },
        {
          chiness: "当",
          pinyin: "dāng",
          english: "to act as",
        },
        {
          chiness: "宴会",
          pinyin: "yàn huì",
          english: "banquet",
        },
        {
          chiness: "医院",
          pinyin: "yī yuàn",
          english: "hospital",
        },
        {
          chiness: "路",
          pinyin: "lù",
          english: "road",
        },
        {
          chiness: "离",
          pinyin: "lí",
          english: "from",
        },
        {
          chiness: "这里",
          pinyin: "zhè lǐ",
          english: "here",
        },
        {
          chiness: "远",
          pinyin: "yuǎn",
          english: "far",
        },
        {
          chiness: "知道",
          pinyin: "zhī dào",
          english: "to know",
        },
        {
          chiness: "别客气",
          pinyin: "bié kè qì",
          english: "you are welcome",
        },
  ];

function Com() {
  return (
    <div>
      <Navbar />
      <h1>Lesson 8 : </h1>
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
            <tr key={item.chiness}>
              <td>{item.chiness}</td>
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