import List from "../components/List";

function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full shadow-md z-50 bg-black">
        <div className="container mx-auto px-4 py-3 font-small ">
          <ul className="flex justify-center space-x-6 text-white text-2xl">
            <List title="About" link="/" />
            <List title="Tic Tac Toe" link="/tiktaktoe" />
            <List title="Contact Us" link="/contact-us" />
            <List title="Timer" link="/timer" />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
