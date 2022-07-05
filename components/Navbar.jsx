import Link from "next/link";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container-fluid">
          <Link href={"/"}>
            <a className="navbar-brand">Super Hero Identity</a>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <Link href={"/add"}>
              <a className="bg-primary shadow rounded py-2 px-4 text-white underline-none text-decoration-none">
                Next Identity
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
