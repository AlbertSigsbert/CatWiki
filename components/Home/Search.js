import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { CloseIcon, SearchIcon, SearchIconMobile } from "../Icons";
import { usePopularContext } from "../../hooks/usePopularContext";

function Search({ breeds }) {
  const router = useRouter()
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = usePopularContext();

  // Prevent scrolling when the modal isOpen
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Handle Change
  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  //handle onBlur (outFocus)
  const handleBlur = (e) => {
    if (!e.relatedTarget || !e.relatedTarget.classList.contains("dropList")) {
      // console.log('You clicked not on an element', e.relatedTarget);
      setQuery("");
      setIsOpen(false);
    }

  }

  //Handle Click
  const handleClick = (e, catId) => {
    e.preventDefault();

    setIsOpen(false);
    
    // console.log('Clicked', catId);

    //dispatch an action
    dispatch({ type: "INCREMENT_VOTE", payload:catId });

    //Redirect
    const href = `/breed/${catId}`;
    router.push(href);
    
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

  return (
    <>
      <form>
        <label className="relative">
          <span className="sr-only">Search</span>
          <SearchIcon />
          <input
            type="text"
            onChange={handleChange}
            value={query}
            onFocus={() => setIsOpen(true)}
            onBlur = {handleBlur}
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
                onClick={() => {
                  setQuery("");
                  setIsOpen(false);
                }}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Search Input - mobile only */}
            <label className="sm:hidden relative">
              <span className="sr-only">Search</span>
              <SearchIconMobile />
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
                     href=""
                    // href={`/breed/${cat.id}`}
                    onClick={(e) => handleClick(e, cat.id)}
                    className="dropList block p-4 hover:bg-gray-100"
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
