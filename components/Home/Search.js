import { useState, useEffect } from "react";
import Link from "next/link";

function Search({ breeds }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  // Prevent scrolling when the modal isOpen
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Handle Change
  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  // Filtering for search results
  const results =
    breeds &&
    breeds.filter(
      ({ name }) =>
        query &&
        //query.length >= 3 &&
        name.toLowerCase().includes(query.toLowerCase())
    );

  const hasResults = results && results.length > 0;

  const searchIcon = () => {
    return (
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-4 md:pr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-2.5 h-2.5 sm:w-4 sm:h-4 md:w-6 md:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
    );
  };
  const searchIconMobile = () => {
    return (
      <span className="absolute inset-y-0 right-0 flex items-center pr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
    );
  };

  return (
    <>
      <form>
        <label className="relative">
          <span className="sr-only">Search</span>
          {searchIcon()}
          <input
            type="text"
            onChange={handleChange}
            value={query}
            onFocus={()=> setIsOpen(true)}
            className="p-0.5 sm:p-2 md:p-3 lg:p-4 pl-2 sm:pl-4 md:pl-8 w-full flex items-center placeholder:text-xs md:placeholder:text-lg  rounded-[59px] font-montserrat placeholder:text-[#291507] truncate"
            placeholder="Enter your breed"
          />
        </label>

        {/* Results Dropdown List  */}
        {isOpen && hasResults && (
          <div
            id="dropdownList"
            className="fixed top-0 left-0 p-8 sm:p-0 sm:relative rounded-b-3xl shadow-xl z-10 mt-4 w-full bg-white rounded-lg"
          >
            {/* Close btn - mobile only */}
            <div className="sm:hidden mb-4 flex w-full justify-end">
              <button
                className="px-3 py-1 bg-gray-200 rounded-lg"
                onClick={() => {setQuery(''); setIsOpen(false); }}
              >
                X
              </button>
            </div>
            
            {/* Search Input - mobile only */}
            <label className="sm:hidden relative">
              <span className="sr-only">Search</span>
              {searchIconMobile()}
              <input
                type="text"
                onChange={handleChange}
                value={query}
                className="p-4 w-full flex items-center border rounded-[59px] font-montserrat placeholder:text-[#291507] truncate"
                placeholder="Enter your breed"
              />
            </label>

            <ul
              className="py-2 text-sm md:text-lg text-gray-700 divide-y font-montserrat font-medium overflow-y-auto max-h-52 scrollbar"
              aria-labelledby="dropdownList"
            >
              {results.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/breed/${cat.id}`}
                    className="block p-4 hover:bg-gray-100"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </>
  );
}

export default Search;
