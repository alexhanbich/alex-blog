import React from "react";

function Search() {
  return (
    <div id="sb-search" class="sb-search">
      <form>
        <input
          class="sb-search-input"
          placeholder="search..."
          type="search"
          value=""
          name="search"
          id="search"
        />
        <input class="sb-search-submit" type="submit" value="" />
        <span class="sb-icon-search"></span>
      </form>
    </div>
  );
}

export default Search;
