import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const vocabularyData = [
    {
        chinese: "天气",
        pinyin: "tiān qì",
        english: "weather",
      },
      {
        chinese: "热",
        pinyin: "rè",
        english: "hot",
      },
      {
        chinese: "凉快",
        pinyin: "liáng kuài",
        english: "cool",
      },
      {
        chinese: "冷",
        pinyin: "lěng",
        english: "cold",
      },
      {
        chinese: "温暖",
        pinyin: "wēn nuǎn",
        english: "warm",
      },
      {
        chinese: "衣服",
        pinyin: "yī fú",
        english: "clothes",
      },
      {
        chinese: "毛衣",
        pinyin: "máo yī",
        english: "sweater",
      },
      {
        chinese: "外套",
        pinyin: "wài tào",
        english: "coat",
      },
      {
        chinese: "羽绒服",
        pinyin: "yǔ róng fú",
        english: "down jacket",
      },
      {
        chinese: "裤子",
        pinyin: "kù zǐ",
        english: "pants",
      },
      {
        chinese: "裙子",
        pinyin: "qún zǐ",
        english: "skirt",
      },
      {
        chinese: "件",
        pinyin: "jiàn",
        english: "piece",
      },
      {
        chinese: "一件衣服",
        pinyin: "yī jiàn yī fú",
        english: "one piece of clothing",
      },
      {
        chinese: "两件毛衣",
        pinyin: "liǎng jiàn máo yī",
        english: "two sweaters",
      },
      {
        chinese: "三件裤子",
        pinyin: "sān jiàn kù zǐ",
        english: "three pants",
      },
      {
        chinese: "医院",
        pinyin: "yī yuàn",
        english: "hospital",
      },
      {
        chinese: "医生",
        pinyin: "yī shēng",
        english: "doctor",
      },
      {
        chinese: "护士",
        pinyin: "hù shì",
        english: "nurse",
      },
      {
        chinese: "生病",
        pinyin: "shēng bìng",
        english: "to be sick",
      },
      {
        chinese: "看病",
        pinyin: "kànbìng",
        english: "to see a doctor",
      },
      {
        chinese: "药",
        pinyin: "yào",
        english: "medicine",
      },
      {
        chinese: "感冒",
        pinyin: "gǎnmào",
        english: "to have a cold",
      },
      {
        chinese: "发烧",
        pinyin: "fā shāo",
        english: "to have a fever",
      },
      {
        chinese: "头疼",
        pinyin: "tóu téng",
        english: "to have a headache",
      },
  ];

function Com() {
  return (
    <div>
      <Navbar />
      <h1>Lesson 10 : </h1>
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