import React from "react";
import "./filters.scss";
import { useFilterContext } from "../../context/filter_context";
import { getUniqueValues, formatPrice } from "../../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },

    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <div className="filters">
      <div className="sbc__container">
        <header className="header__subtitle">
          <span>Filters</span>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.2381 20.9524H29.5238M12.3809 7.61905C12.8861 7.61905 13.3706 7.81973 13.7278 8.17694C14.085 8.53415 14.2857 9.01864 14.2857 9.52381V13.3333C14.2857 13.8385 14.085 14.323 13.7278 14.6802C13.3706 15.0374 12.8861 15.2381 12.3809 15.2381C11.8758 15.2381 11.3913 15.0374 11.0341 14.6802C10.6769 14.323 10.4762 13.8385 10.4762 13.3333V9.52381C10.4762 9.01864 10.6769 8.53415 11.0341 8.17694C11.3913 7.81973 11.8758 7.61905 12.3809 7.61905V7.61905ZM35.2381 11.4286H14.2857H35.2381ZM10.4762 11.4286H4.7619H10.4762ZM12.3809 26.6667C12.8861 26.6667 13.3706 26.8673 13.7278 27.2246C14.085 27.5818 14.2857 28.0663 14.2857 28.5714V32.381C14.2857 32.8861 14.085 33.3706 13.7278 33.7278C13.3706 34.085 12.8861 34.2857 12.3809 34.2857C11.8758 34.2857 11.3913 34.085 11.0341 33.7278C10.6769 33.3706 10.4762 32.8861 10.4762 32.381V28.5714C10.4762 28.0663 10.6769 27.5818 11.0341 27.2246C11.3913 26.8673 11.8758 26.6667 12.3809 26.6667ZM35.2381 30.4762H14.2857H35.2381ZM10.4762 30.4762H4.7619H10.4762ZM27.619 17.1429C28.1242 17.1429 28.6087 17.3435 28.9659 17.7008C29.3231 18.058 29.5238 18.5424 29.5238 19.0476V22.8571C29.5238 23.3623 29.3231 23.8468 28.9659 24.204C28.6087 24.5612 28.1242 24.7619 27.619 24.7619C27.1139 24.7619 26.6294 24.5612 26.2722 24.204C25.915 23.8468 25.7143 23.3623 25.7143 22.8571V19.0476C25.7143 18.5424 25.915 18.058 26.2722 17.7008C26.6294 17.3435 27.1139 17.1429 27.619 17.1429V17.1429ZM25.7143 20.9524H4.7619H25.7143Z"
              stroke="#0ED797"
              stroke-width="1.90476"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </header>

        <div className="filters">
          <div className="filter__category">
            <label className="filter__label">categories</label>
            <span>
              {categories.map((c, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </span>
          </div>

          <div className="filter__company">
            <label className="filter__label">companies</label>
            <select name="company" onChange={updateFilters} value={company}>
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="filter__color">
            <label className="filter__label">Colors</label>
            <span>
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      name="color"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                      onClick={updateFilters}
                      data-color="all"
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    style={{ backgroundColor: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    onClick={updateFilters}
                    data-color={c}
                    name="color"
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </span>
          </div>
          <div className="filter__price">
            <label className="filter__label">Price</label>
            <span>{formatPrice(price)}</span>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          <div className="filter__checked__clearAll">
            <div className="filter__checked">
              <label htmlFor="free-shipping">Free Shipping</label>
              <input
                type="checkbox"
                name="shipping"
                id="free-shipping"
                onChange={updateFilters}
                checked={shipping}
              />
            </div>
            <div className="clearFilter__btn__container">
              <button
                type="button"
                className="clearFilter__ctaBtn"
                onClick={clearFilters}
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

//kindly rename singleproductpae.js to productdetailspage
