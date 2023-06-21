"use client";

import cn from "classnames";
import { useEffect, useState } from "react";

import SvgHeaderLogo from "@/components/SvgHeaderLogo";

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  const checkScroll = () => {
    setTimeout(() => {
      setIsScroll(window.pageYOffset > 0);
    }, 250);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <header className={cn("qUu pGs m4L", isScroll ? "IgQ Z1M" : "")}>
      <div className="zUh">
        <div className="Ryt">
          <a href="/" title="Bustle" className="O3D">
            <SvgHeaderLogo />
          </a>
          <label aria-haspopup="true" className="V8B gQC" htmlFor="navCheckbox">
            <span>MENU</span>
            <button
              aria-expanded="false"
              aria-label="menu"
              type="button"
              className="CAk"
            ></button>
          </label>
        </div>
      </div>
    </header>
  );
};
