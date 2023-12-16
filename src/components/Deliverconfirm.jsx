export default function Deliverconfirm({ todos }) {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl items-center justify-center flex mt-10">
        배달 등록 🏍️
      </h2>
      <div className="mt-20">
        {todos.map((v, i) => {
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
                  전화번호 : {v.phoneNumber}
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
