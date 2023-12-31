import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Inventory({
  todos1,
  setTodos1,
  inputValues1,
  setInputValues1,
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); //뒤로가기
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues1((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const addTodo = () => {
    const { name, size, number } = inputValues1;
    const newTodo = { name, size, number };

    setTodos1((prevTodos) => [...prevTodos, newTodo]);
    setInputValues1({
      name: "",
      size: "",
      number: "",
    });

    localStorage.setItem("todos1", JSON.stringify(todos1));
    localStorage.setItem("todos1", JSON.stringify([...todos1, newTodo]));
    alert("등록 성공!");
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos1")) || [];
    setTodos1(storedTodos);
  }, []);

  // 로컬 스토리지에 데이터 저장
  useEffect(() => {
    localStorage.setItem("todos1", JSON.stringify(todos1));
  }, [todos1]);

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          재고 현황 등록
        </h2>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              옷 이름
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                value={inputValues1.name}
                onChange={handleInputChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              옷 사이즈
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="size"
                value={inputValues1.size}
                onChange={handleInputChange}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              개수
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="number"
                value={inputValues1.number}
                onChange={handleInputChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link onClick={handleBack}>
            <button
              onClick={addTodo}
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              재고 현황 등록
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
