import Link from "next/link";
import SideNav from "./SideNav";


const Header = () => {

  return (
    <>
      <div id="overlay"></div>
      <header className="main-header backdrop-blur-0 md:backdrop-blur-md">
        <div className="logo">
          <Link href="/#top" scroll={true} className="flex items-center scroll-smooth ">
            <img src="img/tt.png" className="h-20" alt="Thrust Tech Logo" />
            <span className="text-xl -ml-3">Thrust&nbsp;Tech</span>
          </Link>
        </div>
        <nav className="desktop-main-menu">
          <ul>
            <li>
              <Link href="/about">About&nbsp;us</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/contactus">Contact&nbsp;Us</Link>
            </li>
          </ul>
        </nav>
      </header> 
      <SideNav/>
    </>
  );
};

export default Header;
