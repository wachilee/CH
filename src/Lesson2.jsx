import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

var vocabularyData = [
    { chinese: "你", english: "you", pinyin: "nǐ" },
    { chinese: "好", english: "well, good", pinyin: "hǎo" },
    { chinese: "我", english: "I", pinyin: "wǒ" },
    { chinese: "是", english: "to be", pinyin: "shì" },
    { chinese: "您", english: "you (polite)", pinyin: "nín" },
    { chinese: "你们", english: "you (plural)", pinyin: "nǐmen" },
    { chinese: "她、他", english: "she, he", pinyin: "tā" },
    { chinese: "谁", english: "who", pinyin: "shéi" },
    { chinese: "老师", english: "teacher", pinyin: "lǎoshī" },
    { chinese: "姓", english: "surname", pinyin: "xìng" },
    { chinese: "叫", english: "to call, to be called", pinyin: "jiào" },
    { chinese: "什么", english: "what", pinyin: "shénme" },
    { chinese: "名字", english: "name", pinyin: "míngzi" },
    { chinese: "对不起", english: "sorry", pinyin: "duìbuqǐ" },
    { chinese: "没关系", english: "It doesn't matter", pinyin: "méiguānxi" },
    { chinese: "学生", english: "student", pinyin: "xuésheng" },
    {
      chinese: "吗",
      english: "a particle used at the end of a question",
      pinyin: "ma",
    },
    { chinese: "贵姓", english: "your surname", pinyin: "guìxìng" },
    { chinese: "请问", english: "May I ask...?", pinyin: "qǐngwèn" },
    { chinese: "认识", english: "to meet, to know", pinyin: "rènshi" },
    { chinese: "很", english: "very", pinyin: "hěn" },
    { chinese: "高兴", english: "happy", pinyin: "gāoxìng" },
    { chinese: "也", english: "too, also", pinyin: "yě" },
    { chinese: "来", english: "come", pinyin: "lái" },
    { chinese: "介绍", english: "to introduce", pinyin: "jièshào" },
    {
      chinese: "一下儿",
      english: "used after a verb to indicate an action or an attempt",
      pinyin: "yíxiàr",
    },
    { chinese: "嗯", english: "eh", pinyin: "ēn" },
    { chinese: "从", english: "from", pinyin: "cóng" },
    { chinese: "姓名", english: "full name", pinyin: "xìngmíng" },
    { chinese: "国籍", english: "nationality", pinyin: "guójí" },
    { chinese: "再", english: "again, once more", pinyin: "zài" },
    { chinese: "说", english: "to say, to speak", pinyin: "shuō" },
    { chinese: "一", english: "one", pinyin: "yī" },
    { chinese: "哪", english: "which", pinyin: "nǎ" },
    { chinese: "国", english: "country, state", pinyin: "guó" },
    { chinese: "但", english: "but", pinyin: "dàn" },
    { chinese: "人", english: "people, person", pinyin: "rén" },
    { chinese: "哦", english: "oh (expressing understanding)", pinyin: "ó" },
    { chinese: "护照", english: "passport", pinyin: "hùzhào" },
    { chinese: "谢谢", english: "thanks", pinyin: "xièxie" },
    { chinese: "不", english: "no, not", pinyin: "bù" },
    { chinese: "爸爸", english: "father", pinyin: "bàba" },
    { chinese: "妈妈", english: "mother", pinyin: "māma" },
    { chinese: "地方", english: "place, local", pinyin: "dìfang" },
  ];


var conver = [
    {
        // who: "A",
        chinese: " 你们好!", 
        pinyin: " Nǐmen hǎo!",
        english: "Hello!",
        
    },
    {
        chinese: "  他是谁?", 
        pinyin: "Tā shì shéi?",
        english: "Who is he?",
    },
    {
        chinese: "请问,你叫什么名字?", 
        pinyin: "nín jiào shénme míngzì ?",
        english: "Excuse me, what's your name?",
    },
    {
        chinese: "请问,你是法国什么地方人?", 
        pinyin: "nǐ shì rìběn shénme dìfāng rén?",
        english: "Excuse me, where are you from in France?",       
    },
]

function Com() {
  return (
    <div className="Com">
      <Navbar />
      <h1>Lesson 2: Vocabulary</h1>
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