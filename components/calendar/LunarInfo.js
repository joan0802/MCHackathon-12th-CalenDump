import React from 'react';

export default function Lunar() {
  const events = [
    { time: "10:00-12:00", title: "微積分考試" },
    { time: "13:00-17:00", title: "基本設計 (一)" },
    { time: "17:30-18:30", title: "社團聚餐" },
    { time: "19:00-21:00", title: "通識課座" },
    { time: "22:00-23:00", title: "統計學作業" }
  ];

  const themeGreen = "#13492F";
  const commonWidthClass = "w-28";
  return (
    <section className="flex flex-col self-center pt-1 pb-1 mt-1.5 w-full items-center" style={{backgroundColor: themeGreen}}>
      <div className="flex flex-row items-stretch justify-between items-center">
        <div className="flex">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7541d7a2ce8a22b023132bb924fe207fedaa195f66ff43c92454c06f3af6236?placeholderIfAbsent=true&apiKey=f345c5a50f9b4d99820ae16d3d0c6b88" 
              className="object-contain shrink-0 rounded-xl aspect-[0.87] w-[62px]" alt="" />
        </div>
        <div className={`flex flex-col items-center flex-1 mx-2`}>
          <div className={`flex flex-col items-center mt-1 px-2 py-2 text-xs text-center text-black bg-white ${commonWidthClass}`} style={{color: themeGreen}}>
            <strong>甲辰年 &nbsp;九月十五</strong>
          </div>
          <div className={`flex flex-col items-center px-2 py-2 text-2xl text-center text-white whitespace-nowrap ${commonWidthClass}`} style={{backgroundColor: themeGreen}}>
          <p className="font-black">初一十五</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center whitespace-nowrap mr-2">
          <div className={`px-2 py-2 mt-1 text-xs text-black bg-white ${commonWidthClass}`} style={{color: themeGreen}}>
            <strong className="text-md">WEDNESDAY</strong>
          </div>
          <div className={`px-2 py-2 text-2xl text-white ${commonWidthClass}`} style={{backgroundColor: themeGreen}}>
            <strong>星期三</strong>
          </div>
        </div>
        <div className="flex">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/965cc391e21280deda9db395cc3042b63d33814a4fe3a3ba4755c59f8a0ebf07?placeholderIfAbsent=true&apiKey=f345c5a50f9b4d99820ae16d3d0c6b88" 
              className="object-contain shrink-0 rounded-xl aspect-[0.87] w-[62px]" alt="" />
        </div>
      </div>
    </section>
  );
}