"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { navigation } from "../lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const nextScrolled = window.scrollY > 50;
      const doc = document.documentElement;
      const available = doc.scrollHeight - doc.clientHeight;
      const ratio = available > 0 ? (window.scrollY / available) * 100 : 0;

      setScrolled(nextScrolled);
      setProgress(ratio);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solidHeader = useMemo(() => scrolled || open, [open, scrolled]);

  return (
    <>
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ height: `${progress}%` }} />
      </div>

      <header className={solidHeader ? "site-header is-solid" : "site-header is-transparent"}>
        <div className="site-container">
          <div className="site-header-inner">
            <Link href="/" className="site-logo" aria-label="LEXAN domov">
              <Image 
                src={solidHeader ? "/logo2.png" : "/new.png"} 
                alt="LEXAN" 
                width={180} 
                height={60} 
                priority
                className="object-contain w-auto h-[45px] md:h-[60px]"
              />
            </Link>

            <ul className={open ? "site-nav is-open" : "site-nav"}>
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={active ? "site-nav-link is-active" : "site-nav-link"}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              className="site-menu-toggle"
              onClick={() => setOpen((value) => !value)}
              aria-label="Otvoriť menu"
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
