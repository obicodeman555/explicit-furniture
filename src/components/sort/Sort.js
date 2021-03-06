import "./sort.scss";
import { useFilterContext } from "../../context/filter_context";

import React from "react";

const Sort = () => {
  const {
    //alias
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    updateSort,
    sort,
    filters: { text },
    updateFilters,
  } = useFilterContext();
  return (
    <div className="sort">
      <div className="sort__container">
        <div className="sortby__layout">
          <button
            className={`${grid_view ? "active" : null}`}
            onClick={setGridView}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5H6.66667C5.74619 5 5 5.74619 5 6.66667V15C5 15.9205 5.74619 16.6667 6.66667 16.6667H15C15.9205 16.6667 16.6667 15.9205 16.6667 15V6.66667C16.6667 5.74619 15.9205 5 15 5Z"
                stroke="#0ED797"
                stroke-width="3.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 23.3333H6.66667C5.74619 23.3333 5 24.0795 5 25V33.3333C5 34.2538 5.74619 35 6.66667 35H15C15.9205 35 16.6667 34.2538 16.6667 33.3333V25C16.6667 24.0795 15.9205 23.3333 15 23.3333Z"
                stroke="#0ED797"
                stroke-width="3.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M33.3333 5H25C24.0795 5 23.3333 5.74619 23.3333 6.66667V15C23.3333 15.9205 24.0795 16.6667 25 16.6667H33.3333C34.2538 16.6667 35 15.9205 35 15V6.66667C35 5.74619 34.2538 5 33.3333 5Z"
                stroke="#0ED797"
                stroke-width="3.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M33.3333 23.3333H25C24.0795 23.3333 23.3333 24.0795 23.3333 25V33.3333C23.3333 34.2538 24.0795 35 25 35H33.3333C34.2538 35 35 34.2538 35 33.3333V25C35 24.0795 34.2538 23.3333 33.3333 23.3333Z"
                stroke="#0ED797"
                stroke-width="3.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <small>Grid</small>
          </button>
          <button
            className={`${!grid_view ? "active" : null}`}
            onClick={setListView}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.0781 26.875C36.2429 27.1612 36.2877 27.5009 36.2028 27.82C36.1179 28.1391 35.9102 28.4116 35.625 28.5781L20.625 37.3281C20.4361 37.441 20.2201 37.5006 20 37.5006C19.7799 37.5006 19.5639 37.441 19.375 37.3281L4.375 28.5781C4.11595 28.3996 3.93376 28.1299 3.86481 27.8229C3.79585 27.5159 3.84519 27.1942 4.00299 26.922C4.16079 26.6498 4.41543 26.4471 4.71609 26.3544C5.01675 26.2617 5.34131 26.2858 5.625 26.4219L20 34.7969L34.375 26.4219C34.6612 26.2571 35.0009 26.2123 35.32 26.2972C35.6391 26.3821 35.9116 26.5898 36.0781 26.875ZM34.375 18.9219L20 27.2969L5.625 18.9219C5.34131 18.7858 5.01675 18.7617 4.71609 18.8544C4.41543 18.9471 4.16079 19.1498 4.00299 19.422C3.84519 19.6942 3.79585 20.0159 3.86481 20.3229C3.93376 20.6299 4.11595 20.8996 4.375 21.0781L19.375 29.8281C19.5639 29.941 19.7799 30.0006 20 30.0006C20.2201 30.0006 20.4361 29.941 20.625 29.8281L35.625 21.0781C35.7804 21.0036 35.9187 20.8977 36.0313 20.7671C36.1438 20.6365 36.2281 20.4841 36.2789 20.3194C36.3297 20.1547 36.3459 19.9812 36.3264 19.8099C36.307 19.6387 36.2523 19.4733 36.1658 19.3241C36.0794 19.175 35.963 19.0454 35.8241 18.9434C35.6851 18.8414 35.5266 18.7692 35.3584 18.7314C35.1902 18.6937 35.016 18.6911 34.8468 18.7239C34.6775 18.7566 34.5169 18.824 34.375 18.9219ZM4.375 13.5781L19.375 22.3281C19.5639 22.441 19.7799 22.5006 20 22.5006C20.2201 22.5006 20.4361 22.441 20.625 22.3281L35.625 13.5781C35.813 13.4678 35.9688 13.3103 36.0771 13.1212C36.1854 12.9321 36.2424 12.7179 36.2424 12.5C36.2424 12.2821 36.1854 12.0679 36.0771 11.8788C35.9688 11.6897 35.813 11.5322 35.625 11.4219L20.625 2.67187C20.4366 2.55736 20.2204 2.4968 20 2.4968C19.7796 2.4968 19.5634 2.55736 19.375 2.67187L4.375 11.4219C4.18703 11.5322 4.03116 11.6897 3.92285 11.8788C3.81455 12.0679 3.75757 12.2821 3.75757 12.5C3.75757 12.7179 3.81455 12.9321 3.92285 13.1212C4.03116 13.3103 4.18703 13.4678 4.375 13.5781V13.5781Z"
                fill="#0ED797"
              />
            </svg>

            <small>Stack</small>
          </button>
        </div>
        <div className="itemfound__indicator">
          <span>{products.length}</span>
          <span>products found</span>
        </div>
        <form className="searchInputBox" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="search__input"
            name="text"
            value={text}
            placeholder="Search Products"
            onChange={updateFilters}
          />
          <>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.6666 38.6666L28 28L38.6666 38.6666ZM17.3333 33.3333C15.2322 33.3333 13.1516 32.9195 11.2104 32.1154C9.26917 31.3113 7.50534 30.1328 6.0196 28.647C4.53387 27.1613 3.35532 25.3975 2.55124 23.4562C1.74717 21.515 1.33331 19.4345 1.33331 17.3333C1.33331 15.2322 1.74717 13.1516 2.55124 11.2104C3.35532 9.26917 4.53387 7.50534 6.0196 6.0196C7.50534 4.53387 9.26917 3.35532 11.2104 2.55124C13.1516 1.74717 15.2322 1.33331 17.3333 1.33331C21.5768 1.33331 25.6464 3.01902 28.647 6.0196C31.6476 9.02019 33.3333 13.0898 33.3333 17.3333C33.3333 21.5768 31.6476 25.6464 28.647 28.647C25.6464 31.6476 21.5768 33.3333 17.3333 33.3333Z"
                stroke="#0ED797"
                stroke-width="2.66667"
              />
            </svg>
          </>
        </form>
        <form className="sort__dropDown">
          <label htmlFor="sort">Sort by</label>
          <span className="sort__select">
            <select
              name="sort"
              id="sort"
              className="sort-input"
              onChange={updateSort}
              value={sort}
            >
              <option value="price-lowest">Price (Lowest)</option>
              <option value="price-highest">Price (Highest)</option>
              <option value="name-a">Name (a-z)</option>
              <option value="name-z">Name (A-Z)</option>
            </select>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Sort;
