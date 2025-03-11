import { useState } from "react";

const SearchBar = ({ setSearch }: { setSearch: (search: string) => void }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search events..."
        className="border p-2 flex-1 rounded-lg"
      />
      <button
        onClick={() => setSearch(searchInput)}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
