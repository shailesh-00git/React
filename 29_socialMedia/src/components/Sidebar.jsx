import React from "react";

function Sidebar({ selectedTab, setSelectedTab }) {
  function handleOnClick(tabname) {
    setSelectedTab(tabname);
  }
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar"
      style={{ width: 250 }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            handleOnClick("Home"); //handle om click for home
          }}
        >
          <a
            href="#"
            className={`nav-link  text-black ${
              selectedTab === "Home" && "active"
            } `}
            aria-current="page"
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            handleOnClick("Create Post");
          }}
        >
          <a
            href="#"
            className={`nav-link link-body-emphasis  ${
              selectedTab === "Create Post" && "active"
            } `}
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
        <li
          onClick={() => {
            handleOnClick("Orders");
          }}
        >
          <a href="#" className="nav-link link-body-emphasis">
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#table"></use>
            </svg>
            Orders
          </a>
        </li>
        <li
          onClick={() => {
            handleOnClick("Products");
          }}
        >
          <a href="#" className="nav-link link-body-emphasis">
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#grid"></use>
            </svg>
            Products
          </a>
        </li>
        <li
          onClick={() => {
            handleOnClick("Customers");
          }}
        >
          <a
            href="#"
            className={`nav-link link-body-emphasis ${
              selectedTab === "Customers" && "active"
            }`}
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#people-circle"></use>
            </svg>
            Customers
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://images.pexels.com/photos/32087013/pexels-photo-32087013/free-photo-of-contemplative-woman-leaning-on-disco-ball.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
