import { Sun } from "lucide-react";
import { useState } from "react";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [toggle, setToggle] = useState("light");
  const [task, setTask] = useState([]);

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) return;

    setTask((prev) => [...prev, { title, details }]);

    setTitle("");
    setDetails("");
  };

  const Toggle = () => {
    setToggle((prev) => (prev === "light" ? "dark" : "light"));
  };

  const Remove = (index) => {
    setTask((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`h-full text-yellow-600 ${
        toggle === "light" ? "bg-gray-100 " : "bg-black "
      } lg:flex`}
    >
      <form
        onSubmit={(e) => {
          submit(e);
        }}
        className=" lg:w-1/2 flex flex-col gap-4 lg:border-r-2 sm:border-b-2  p-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold ">NOTEPAD</h1>
          <span
            onClick={Toggle}
            className="p-2 border rounded-full cursor-pointer"
          >
            <Sun />
          </span>
        </div>

        <input
          className="border-2 outline-none py-2 px-4 rounded"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter Notes Heading..."
        />
        <textarea
          className="border-2 outline-none p-4 rounded h-40"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          placeholder="Write Details here"
        />
        <button
          className="py-2 px-4 border-none rounded-lg 
        bg-yellow-600 text-white font-bold cursor-pointer active:scale-95"
        >
          Add Note
        </button>
      </form>
      <div className=" w-1/2 h-full text-yellow-600 p-8">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-60 w-52 bg-pink-400 rounded-3xl p-4 flex flex-col overflow-hidden"
              >
                <h2 className="text-black text-xl font-bold capitalize">
                  {elem.title}
                </h2>

                <p className="text-black text-sm font-semibold mt-2 flex-1 capitalize break-words">
                  {elem.details}
                </p>
                <div className="flex justify-between gap-2 mt-3">
                  <button
                    onClick={() => {
                      Remove(idx);
                    }}
                    className="flex-1 py-2 bg-black text-yellow-400 
                  rounded-full cursor-pointer transition-all duration-300
                  hover:translate-y-[-2px]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
