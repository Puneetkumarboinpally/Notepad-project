import { Sun } from "lucide-react";
import { useState } from "react";
const App = () => {
  const [title, setTitle] = useState([]);
  const [details, setDetails] = useState([]);

  const TitleInput = (e) => {
    setTitle(e.target.value);
  };
  const DetailsInput = (e) => {
    setDetails(e.target.value);
  };

  return (
    <div className="h-screen text-yellow-600 flex bg-gray-100">
      <form className="h-screen w-1/2 flex flex-col gap-4 border-r-2 p-8">
        <h1 className="text-3xl font-bold ">NOTEPAD</h1>
        <input
          className="border-2 outline-none py-2 px-4 rounded"
          type="text"
          value={title}
          onChange={TitleInput}
          placeholder="Enter Notes Heading..."
        />
        <textarea
          className="border-2 outline-none p-4 rounded h-40"
          value={details}
          onChange={DetailsInput}
          placeholder="Write Details here"
        />
        <button
          type="submit"
          className="py-2 px-4 border-none rounded-lg 
        bg-yellow-600 text-white font-bold cursor-pointer active:scale-95"
        >
          Add Note
        </button>
      </form>
      <div className="w-1/2 h-screen text-yellow-600 p-8">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="pt-4">
          <div
            className="h-60 w-50 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFDMb6vnLyVx8CHamfbbd3UIOvTLcdo2fJcOnJFrM5A&s=10')] 
          bg-cover rounded-3xl py-3 px-6"
          >
            <h2 className="text-black text-lg font-bold mb-4">{title}</h2>
            <p className="overflow:hidden">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
