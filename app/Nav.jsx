"use client";
import { usePathname, useRouter } from "next/navigation";
import { Navbar } from "flowbite-react";
export default function Nav() {
  //const router = useRouter();
  const pathName = usePathname();
  return (
    <div>
      <Navbar fluid={false} rounded={true}>
        <Navbar.Brand>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Movie App
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            className={`${pathName === "/" ? "active" : ""}`}
          >
            Popular Movies
          </Navbar.Link>
          <Navbar.Link
            href="/tv"
            className={`${pathName === "/tv" ? "active" : ""}`}
          >
            Popular TV Shows
          </Navbar.Link>
          <Navbar.Link
            href={`/movie-search`}
            className={`${pathName === "/movie-search" ? "active" : ""}`}
          >
            Search Movies
          </Navbar.Link>
          <Navbar.Link
            href={`/tv-search`}
            className={`${pathName === "/tv-search" ? "active" : ""}`}
          >
            Search TV Shows
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="mb-8"></div>
    </div>
  );
}
