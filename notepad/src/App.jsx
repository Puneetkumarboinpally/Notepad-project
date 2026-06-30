const App = () => {
  return (
    <div className="h-screen text-yellow-600 flex ">
      <div className="h-screen w-1/2 flex flex-col gap-4 border-r-2 p-8">
        <h1 className="text-3xl font-bold ">
          NOTEPAD <span>☀️</span>
        </h1>
        <input
          className="border-2 outline-none py-2 px-4 rounded"
          type="text"
          placeholder="Enter Notes Heading..."
        />
        <textarea
          className="border-2 outline-none p-4 rounded h-40"
          placeholder="Write Details here"
        />
        <button
          className="py-2 px-4 border-none rounded-lg 
        bg-yellow-600 text-white font-bold cursor-pointer active:scale-95"
        >
          Add Note
        </button>
      </div>
      <div className="w-1/2 h-screen text-yellow-600 p-8">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="pt-2">
          <div className="h-70 w-50 bg-[url('')] bg-cover"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
