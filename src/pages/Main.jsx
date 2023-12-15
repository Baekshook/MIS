import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Main() {
  const divStyle = {
    margin: "12px",
    backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "100%",
  };

  const [selectedValue, setSelectedValue] = useState("프롬댓 관리자");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="https://shop-phinf.pstatic.net/20230117_76/1673925194822My3Vu_PNG/6FDD053B-EF64-49A4-8CDB-B86F9634F676.png?type=w640"
              className=" w-96 mx-auto"
              alt="application"
            />
          </div>
          <div className="mt-3 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">로그인</h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full mt-8 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="ID"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <div className="relative mt-5">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <option value="프롬댓 관리자">프롬댓 관리자</option>
                    <option value="거래처 사장님">거래처 사장님</option>
                    <option value="택배 기사님">택배 기사님</option>
                  </select>
                </div>
                <div className="flex flex-row mt-5">
                  <Link to={`/${selectedValue}`}>
                    <button className="mt-5 tracking-wide p-9 font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"
                        />
                      </svg>
                      <span className="ml-3">로그인</span>
                    </button>
                  </Link>
                  <Link to={"/signup"}>
                    <button className="mt-5 ml-3 p-7 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">회원가입</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={divStyle}
          ></div>
        </div>
      </div>
    </div>
  );
}
