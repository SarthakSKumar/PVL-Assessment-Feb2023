const Search = (props) => {
  return (
    <div className="flex rounded-md overflow-hidden my-2">
      <input
        type="text"
        className="w-full rounded-md rounded-r-none border-2 border-gray-300"
      />
      <button
        className="bg-blue-400 text-white px-8 text-lg font-semibold py-1 rounded-r-md"
        placeholder="search"
      >
        <i class="uil uil-search"></i>
      </button>
    </div>
  );
};

export default Search;
