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

  var conver = [
    {
        chinese: " 今天天气怎么样？", 
        pinyin: "Jīntiān tiānqì zěnme yàng?",
        english: "How's the weather today?",
        
    },
    {
        chinese: "今天天气很冷。", 
        pinyin: "Jīntiān tiānqì hěn lěng.",
        english: "today's weather is very cold.",
    },
    {
        chinese: " 今天你去医院看病了吗？", 
        pinyin: "Jīntiān nǐ qù yīyuàn kànbìngle ma?",
        english: "Did you go to the hospital today?",
    },
    {
        chinese: "还没有，我想一下课就去。你怎么样？", 
        pinyin: "Hái méiyǒu, wǒ xiǎng yī xiàkè jiù qù. Nǐ zěnme yàng?",
        english: "Not yet, I want to go as soon as get out of class starts. How are you?",       
    },
]

function Com() {
  return (
    <div className="Com">
      <Navbar />
      <h1>Lesson 10: Vocaburaly</h1>
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