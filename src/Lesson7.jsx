import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const vocabularyData = [
        {
          chiness: "每天",
          pinyin: "měi tiān",
          english: "every day",
        },
        {
          chiness: "昨天",
          pinyin: "zuó tiān",
          english: "yesterday",
        },
        {
          chiness: "今天",
          pinyin: "jīn tiān",
          english: "today",
        },
        {
          chiness: "明天",
          pinyin: "míng tiān",
          english: "tomorrow",
        },
        {
          chiness: "早上",
          pinyin: "zǎo shàng",
          english: "morning",
        },
        {
          chiness: "中午",
          pinyin: "zhōng wǔ",
          english: "noon",
        },
        {
          chiness: "下午",
          pinyin: "xià wǔ",
          english: "afternoon",
        },
        {
          chiness: "晚上",
          pinyin: "wǎn shàng",
          english: "evening",
        },
        {
          chiness: "凌晨",
          pinyin: "líng chén",
          english: "early morning",
        },
        {
          chiness: "饭",
          pinyin: "fàn",
          english: "rice",
        },
        {
          chiness: "餐",
          pinyin: "cān",
          english: "meal",
        },
        {
          chiness: "时间",
          pinyin: "Time",
          english: "time",
        },
        {
          chiness: "早饭",
          pinyin: "zǎo fàn",
          english: "breakfast",
        },
        {
          chiness: "午饭",
          pinyin: "wǔ fàn",
          english: "lunch",
        },
        {
          chiness: "晚饭",
          pinyin: "wǎn fàn",
          english: "dinner",
        },
        {
          chiness: "起床",
          pinyin: "qǐ chuáng",
          english: "to get up",
        },
        {
          chiness: "洗澡",
          pinyin: "xǐ zǎo",
          english: "to take a shower",
        },
        {
          chiness: "上网",
          pinyin: "shàng wǎng",
          english: "to go online",
        },
        {
          chiness: "看电视",
          pinyin: "kàn diàn shì",
          english: "to watch TV",
        },
        {
          chiness: "见朋友",
          pinyin: "jiàn péng yǒu",
          english: "to meet friends",
        },
        {
          chiness: "洗脸",
          pinyin: "xǐ liǎn",
          english: "to wash your face",
        },
        {
          chiness: "涮牙",
          pinyin: "shuàn yá",
          english: "to brush your teeth",
        },
        {
          chiness: "睡觉",
          pinyin: "shuì jiào",
          english: "to go to sleep",
        },
        {
          chiness: "学校",
          pinyin: "xué xiào",
          english: "school",
        },
        {
          chiness: "图书馆",
          pinyin: "tú shū guǎn",
          english: "library",
        },
        {
          chiness: "上课",
          pinyin: "shàng kè",
          english: "to go to class",
        },
        {
          chiness: "学习",
          pinyin: "xué xí",
          english: "to study",
        },
        {
          chiness: "下课",
          pinyin: "xià kè",
          english: "to get out of class",
        },
        {
          chiness: "去",
          pinyin: "qù",
          english: "to go",
        },
        {
          chiness: "来",
          pinyin: "lái",
          english: "to come",
        },
        {
          chiness: "学校",
          pinyin: "xué xiào",
          english: "school",
        },
        {
          chiness: "图书馆",
          pinyin: "tú shū guǎn",
          english: "library",
        },
        {
          chiness: "上课",
          pinyin: "shàng kè",
          english: "to go to class",
        },
        {
          chiness: "学习",
          pinyin: "xué xí",
          english: "to study",
        },
        {
          chiness: "教室",
          pinyin: "jiàoshì",
          english: "classroom",
        },
        {
          chiness: "开",
          pinyin: "kāi",
          english: "to open",
        },
        {
          chiness: "关",
          pinyin: "guān",
          english: "to close",
        },
        {
          chiness: "门",
          pinyin: "mén",
          english: "door",
        },
        {
          chiness: "摄像头",
          pinyin: "shè xiàng tóu",
          english: "camera",
        },
        {
          chiness: "电视",
          pinyin: "diàn shì",
          english: "TV",
        },
        {
          chiness: "电脑",
          pinyin: "diàn nǎo",
          english: "computer",
        },
        {
          chiness: "小学生",
          pinyin: "xiǎo xué shēng",
          english: "elementary school student",
        },
        {
          chiness: "留学生",
          pinyin: "liú xué shēng",
          english: "international student",
        },
        {
          chiness: "大学生",
          pinyin: "dà xué shēng",
          english: "college student",
        },
        {
          chiness: "中学生",
          pinyin: "zhōng xué shēng",
          english: "middle school student",
        },
        {
          chiness: "点",
          pinyin: "diǎn",
          english: "o’clock",
        },
        {
          chiness: "分",
          pinyin: "fèn",
          english: "minute",
        },
        {
          chiness: "秒",
          pinyin: "miǎo",
          english: "second",
        },
        {
          chiness: "刻",
          pinyin: "kè",
          english: "quarter",
        },
        {
          chiness: "小时",
          pinyin: "xiǎo shí",
          english: "hour",
        },
        {
          chiness: "半",
          pinyin: "bàn",
          english: "half",
        },
        {
          chiness: "差",
          pinyin: "chà",
          english: "be less than",
        },
        {
          chiness: "安排",
          pinyin: "ān pái",
          english: "to plan",
        },
        {
          chiness: "开始",
          pinyin: "kāi shǐ",
          english: "to start",
        },
        {
          chiness: "常常",
          pinyin: "cháng cháng",
          english: "often, usually",
        },
        {
          chiness: "有时候",
          pinyin: "yǒu shí hòu",
          english: "sometimes",
        },
        {
          chiness: "先",
          pinyin: "xiān",
          english: "before",
        },
        {
          chiness: "然后",
          pinyin: "rán hòu",
          english: "and then, after that",
        },
  ];

  var conver = [
      {
        "chinese": "我 是 留学生。",
        "pinyin": "Wǒ shì liúxuéshēng.",
        "english": "I am an international student."
      },
      {
        "chinese": "我 每天 六 点 半 起床",
        "pinyin": "Wǒ měitiān liù diǎn bàn qǐchuáng",
        "english": "I get up at 6:30 every day."
      },
      {
        "chinese": "起床 以后 先 洗澡 然后 吃 早餐。",
        "pinyin": "Qǐchuáng yǐhòu xiān xǐzǎo ránhòu chī zǎocān",
        "english": "After getting up, I take a shower and then eat breakfast."
      },
      {
        "chinese": "我 差 一刻 八 点 去 教室 上课。",
        "pinyin": "Wǒ chà yīkè bā diǎn qù jiàoshì shàngkè",
        "english": "I go to class at 7:45 every day."
      },
      {
        "chinese": "我们 每天 八 点 上课, 十一 点 半 下课。",
        "pinyin": "Wǒmen měitiān bā diǎn shàngkè, shíyī diǎn bàn xiàkè.",
        "english": "We have class at 8:00 every day and end at 11:30."
      },
      {
        "chinese": "下午 我 常常 去 图书馆 看书。",
        "pinyin": "Xiàwǔ wǒ chángcháng qù túshū guǎn kànshū.",
        "english": "In the afternoon, I often go to the library to read."
      }
    
]

function Com() {
  return (
    <div className="Com">
      <Navbar />
      <h1>Lesson 7: Vocaburaly</h1>
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