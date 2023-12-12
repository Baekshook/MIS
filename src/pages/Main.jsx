import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const LoginName = ["배달기사", "프롬댓", "거래처"];
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-3">
      {LoginName.map((v, i) => {
        return (
          <Link to={"/login"}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              key={i}
            >
              {v} 로그인
            </button>
          </Link>
        );
      })}
    </div>
  );
}
