import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [selectedValue, setSelectedValue] = useState("프롬댓 관리자");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form className="bg-white shadow-md rounded px-20 pt-12 pb-12 mb-10">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            아이디
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            비밀번호
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
          />
          <p className="text-red-500 text-xs italic">
            비밀번호를 입력해주세요.
          </p>
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
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link to={`/${selectedValue}`}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              로그인
            </button>
          </Link>
          <Link to={"/signup"}>
            <button
              className="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              회원가입
            </button>
          </Link>
          <Link to={"/"}>
            <button
              className="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              뒤로가기
            </button>
          </Link>
        </div>
        <div>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-6"
            href="11"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">&copy;2023 프롬댓 APP</p>
    </div>
  );
}
