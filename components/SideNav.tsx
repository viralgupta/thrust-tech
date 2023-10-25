"use client";

import Image from "next/image";
import Link from "next/link";

const SideNav = () => {
  let date = new Date();
  let year = date.getFullYear();

  function openorcloseNav() {
    var menuButton = document.getElementById("menu-btn");
    if (menuButton) {
      if (menuButton.classList.contains("open")) {
        document.getElementById("mySidenav")!.style.width = "0";
        menuButton.classList.remove("open");
      } else {
        menuButton.classList.add("open");
        document.getElementById("mySidenav")!.style.width = "250px";
      }
    }
  }
  return (
    <>
      <button
        id="menu-btn"
        className="hamburger block md:hidden"
        type="button"
        onClick={openorcloseNav}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      <div id="mySidenav" className="sidenav">
        <Link href="/#top" onClick={openorcloseNav}>
          <Image src="/img/tt.png" width={48} height={48} className="max-h-12 !border-none" alt="Thrust Tech Logo" />
        </Link>
        <Link href="/about" onClick={openorcloseNav} className="border-b mx-4 sidenav-buttons text-right font-xs text-white">
          ABOUT&nbsp;US
        </Link>
        <Link href="/products" onClick={openorcloseNav} className="border-b mx-4 sidenav-buttons text-right font-xs text-white">
          PRODUCTS
        </Link>
        <Link href="/events" onClick={openorcloseNav} className="border-b mx-4 sidenav-buttons text-right font-xs text-white">
          EVENTS
        </Link>
        <Link href="/contactus" onClick={openorcloseNav} className="border-b mx-4 sidenav-buttons text-right font-xs text-white">
          CONTACT&nbsp;US
        </Link>
        <div className="w-full min-h-5 text-center absolute bottom-0">Thrust&nbsp;Tech&nbsp;&copy;&nbsp;{year}</div>
      </div>
    </>
  );
};

export default SideNav;
