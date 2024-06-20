import React from 'react';

function Header({ handleOnClick }) {
  const services = ['Research', 'Generate', 'summarise', 'Search', 'simplify'];
  return (
    <nav className="navbar navbar-expand-lg color-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/images/iimage.jpeg"
            alt="logo"
            width="120px"
            height="120px"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex left-margin">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {services.map((service, index) => (
                <li className="nav-item dropdown">
                  <button
                    class="nav-link active btn "
                    aria-current="page"
                    href="#"
                    style={{ color: 'black' }}
                    onClick={(e) => handleOnClick(e, index)}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
