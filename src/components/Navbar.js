import React from "react";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  return (
    <div>
      <nav className="w-full flex flex-col bg-primary bg-opacity-40">
        <h1 className="self-center text-4xl m-4">Alex's Blog</h1>
        <ul className="flex relative justify-between list-none">
          <div class="search-box">
            <input
              class="search-text"
              type="text"
              placeholder="Search Anything"
            />
            <a href="#" class="search-btn">
              <BiSearch />
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
