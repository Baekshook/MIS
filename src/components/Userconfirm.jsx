import React from 'react'

const Dummy = [
  {
    address: "서울특별시 용산구 한강대로 42",
    name: "김토끼",
    clothName: "기모카고청바지",
    number: "1",
    phoneNumber: "01020203030",
    cost: "36,800₩",
    request: "배송 전 미리 연락주세요.",
  },
  {
    address: "광주광역시 서구 경열로 33",
    name: "최토끼",
    clothName: "복실이 팬츠, 고유맨투맨",
    number: "1,1",
    phoneNumber: "01030304040",
    cost: "복실이 팬츠 : 19,200₩  고유맨투맨 : 30,400₩",
    request: "부재시 집앞에 놓아주세요.",
  },
  {
    address: "강원특별자치도 춘천시 강원대학길 1",
    name: "이토끼",
    clothName: "로그라운드티",
    number: "3",
    phoneNumber: "01040405050",
    cost: "52,800₩",
    request: "부재시 경비실에 보관해주세요.",
  },
];

export default function Userconfirm() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl items-center justify-center flex mt-10">
        고객 주문서 확인 🍀
      </h2>
      <div className="mt-20">
        {Dummy.map((v, i) => {
          return (
            <div
              className="bg-white rounded-lg p-5 mb-2 shadow-lg shadow-indigo-500/40 opacity-100 transition-all flex"
              key={i}
            >
              <div className="flex flex-col">
                <p className=" text-black font-bold text-lg mt-1">
                  주소 : {v.address}
                </p>
                <p className=" text-black font-bold text-lg mt-1">
                  이름 : {v.name}
                </p>
                <p className=" text-black font-bold text-lg mt-1">
                  옷 이름 : {v.clothName}
                </p>
                <p className=" text-black font-bold text-lg mt-1">
                  개수 : {v.number}
                </p>
                <p className=" text-black font-bold text-lg mt-1">
                  전화번호 : {v.phoneNumber}
                </p>
                <p className=" text-black font-bold text-lg mt-1">
                  가격 : {v.cost}
                </p>
                <p className=" text-black font-bold text-lg mt-1">
                  요청사항 : {v.request}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
