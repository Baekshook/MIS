import React from "react";

export default function Inventoryconfirm({ todos1 }) {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl items-center justify-center flex mt-10">
        재고 현황 조회 ✅
      </h2>
      <div className="mt-20">
        {todos1.map((v, i) => {
          return (
            <div
              className="bg-white rounded-lg p-5 mb-2 shadow-lg shadow-indigo-500/40 opacity-100 transition-all flex"
              key={i}
            >
              <div className="flex flex-col">
                <p className=" text-black font-bold text-lg mt-1">
                  옷 이름 : {v.name}
                </p>
                <p className=" text-black font-bold text-lg mt-1">
                  사이즈 : {v.size}
                </p>
                <p className=" text-black font-bold text-lg mt-1">
                  개수 : {v.number}개
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
