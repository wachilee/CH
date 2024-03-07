import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

var vocabularyData = [
        {
          pinyin: "jiā tíng",
          chinese: "家庭",
          english: "family",
        },
        {
          pinyin: "dà jiā tíng",
          chinese: "大家庭",
          english: "extended family",
        },
        {
          pinyin: "jiā rén",
          chinese: "家人",
          english: "family member",
        },
        {
          pinyin: "fù mǔ",
          chinese: "父母",
          english: "parents",
        },
        {
          pinyin: "xiōng dì jiě mèi",
          chinese: "兄弟姐妹",
          english: "brothers and sisters",
        },
        {
          pinyin: "nán hái zǐ",
          chinese: "男孩子",
          english: "boy",
        },
        {
          pinyin: "nǚhái zǐ",
          chinese: "女孩子",
          english: "girl",
        },
        {
          pinyin: "hái zǐ",
          chinese: "孩子",
          english: "child",
        },
        {
          pinyin: "shuāng bāo tāi",
          chinese: "双胞胎",
          english: "twins",
        },
        {
          pinyin: "wài gōng",
          chinese: "外公",
          english: "maternal grandfather",
        },
        {
          pinyin: "wài po",
          chinese: "外婆",
          english: "maternal grandmother",
        },
        {
          pinyin: "nǎi nai",
          chinese: "奶奶",
          english: "paternal grandmother",
        },
        {
          pinyin: "yé ye",
          chinese: "爷爷",
          english: "paternal grandfather",
        },
        {
          pinyin: "mā ma",
          chinese: "妈妈",
          english: "mother",
        },
        {
          pinyin: "bà ba",
          chinese: "爸爸",
          english: "father",
        },
        {
          pinyin: "gè rén",
          chinese: "个人",
          english: "person",
        },
        {
          pinyin: "xiǎng",
          chinese: "想",
          english: "miss, think",
        },
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
          pinyin: "duō dà",
          chinese: "多大",
          english: "how old",
        },
        {
          pinyin: "yǒu",
          chinese: "有",
          english: "have",
        },
        {
          pinyin: "jīng jù",
          chinese: "京剧",
          english: "Beijing opera",
        },
        {
          pinyin: "shēng yīn",
          chinese: "声音",
          english: "voice",
        },
        {
          pinyin: "zhēn",
          chinese: "真",
          english: "really",
        },
        {
          pinyin: "hǎo tīng",
          chinese: "好听",
          english: "pleasing to the ear",
        },
        {
          pinyin: "niánjì",
          chinese: "年纪",
          english: "age",
        },
        {
          pinyin: "fēi cháng",
          chinese: "非常",
          english: "very",
        },
        {
          pinyin: "cháng cháng",
          chinese: "常常",
          english: "often",
        },
        {
          chinese: "máng",
          pinyin: "忙",
          english: "busy",
        },
        {
          chinese: "小区",
          pinyin: "xiǎo qū",
          english: "community",
        },
        {
          chinese: "piào liang",
          pinyin: "漂亮",
          english: "beautiful",
        },
        {
          chinese: "yī gòng",
          pinyin: "一共",
          english: "total",
        },
        {
          chinese: "hé",
          pinyin: "和",
          english: "and",
        },
        {
          chinese: "yī qǐ",
          pinyin: "一起",
          english: "together",
        },
        {
          chinese: "lǜ shī",
          pinyin: "律师",
          english: "lawyer",
        },
        {
          chinese: "zhù",
          pinyin: "住",
          english: "live",
        },
        {
          english: "sister-in-law",
          pinyin: "sǎo zǐ",
          chinese: "嫂子",
        },
  ];

  var conver = [
    {
        chinese: "你 想 外婆了?", 
        pinyin: "Nǐ xiǎng wàipóle?",
        english: "Do you miss grandma?",
        
    },
    {
        chinese: "你 家 有 几 个人?", 
        pinyin: "Nǐ jiā yǒu jǐ gèrén?",
        english: "How many people are there in your family?",
    },
    {
        chinese: "你 在 美国 工作 吗?", 
        pinyin: "Nǐ zài měiguó gōngzuò ma?",
        english: "Do you work in the United States?",
    },
    {
        chinese: "我 不 工作, 爸爸 希望 我 去 银行 工作, 可是 我 不 喜欢。", 
        pinyin: "Wǒ bù gōngzuò, bàba xīwàng wǒ qù yínháng gōngzuò, kěshì wǒ bù xǐhuān.",
        english: "I don't work, and my father wants me to work in a bank, but I don't like it.",       
    },
    {
        chinese:"这个 小区 真 漂亮。 你 一个 人 住 吗?",
        pinyin:"Zhège xiǎoqū zhēn piàoliang. Nǐ yīgè rén zhù ma?",
        english:"This neighborhood is so beautiful. do you live alone?",
    }
]

function Com() {
  return (
    <div className="Com">
      <Navbar />
      <h1>Lesson 4 : Vocaburaly</h1>
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