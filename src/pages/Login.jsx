import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div class="min-h-screen flex flex-col justify-center items-center">
      <form class="bg-white shadow-md rounded px-20 pt-12 pb-12 mb-10">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            아이디
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            비밀번호
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
          />
          <p class="text-red-500 text-xs italic">비밀번호를 입력해주세요.</p>
        </div>
        <div class="flex items-center justify-between">
          <Link>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              로그인
            </button>
          </Link>
          <Link to={"/signup"}>
            <button
              class="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              회원가입
            </button>
          </Link>
          <Link to={"/"}>
            <button
              class="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              뒤로가기
            </button>
          </Link>
        </div>
        <div>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-6"
            href="11"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;2023 프롬댓 APP</p>
    </div>
  );
}
