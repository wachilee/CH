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

  var conver = [
    {
      "chinese": "是吗?你参加吗?",
      "pinyin": "Shì ma? Nǐ cānjiā ma?",
      "english": "Are you going to participate?",
    },
    {
      "chinese": "我参加。你当我们的教练,好吗?",
      "pinyin": "Wǒ cānjiā. Nǐ dāng wǒmen de jiàoliàn, hǎo ma?",
      "english": "I'm going to participate. Will you be our coach?",
    },
    {
      "chinese": "好啊!我也想去你们学校看看。",
      "pinyin": "Hǎo a! Wǒ yě xiǎng qù nǐmen xuéxiào kàn kàn.",
      "english": "Great! I also want to visit your school.",
    },
    {
      "chinese": "你明天去,可以吗?",
      "pinyin": "Nǐ míngtiān qù, kěyǐ ma?",
      "english": "Can you go tomorrow?",
    },
    {
      "chinese": "可以。我去找你吧。你住在哪里?",
      "pinyin": "Kěyǐ. Wǒ qù zhǎo nǐ ba. Nǐ zhù zài nǎlǐ?",
      "english": "Sure. I'll go find you. Where do you live?",
    }
]

function Com() {
  return (
    <div className="Com">
      <Navbar />
      <h1>Lesson 8: Vocaburaly</h1>
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