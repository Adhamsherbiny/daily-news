/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import "./styles/nav.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [visable, setVisable] = useState<boolean>(true);
  document.getElementById("search")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      setVisable(!visable);
      document.getElementById("searchInput")!.style.display = "none";
    }
  });
  return (
    <nav>
      <div className="logo">
        <FontAwesomeIcon className="newsPaperLogo" icon={faNewspaper} />
        <h1>Daily Briefing</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link href="" className="link active">
              Home
            </Link>
          </li>
          <li>
            <Link href="#news-section" className="link">
              News
            </Link>
          </li>
          <li>
            <Link href="#explore" className="link">
              Explore
            </Link>
          </li>
          <li>
            <Link href="" className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#news">
              <FontAwesomeIcon
                className="search-icon"
                id="searchIcon"
                icon={faMagnifyingGlass}
                onClick={() => {
                  if (visable === false) {
                    document.getElementById("searchInput")!.style.display =
                      "none";
                    setVisable(!visable);
                  } else {
                    document.getElementById("searchInput")!.style.display =
                      "flex";
                    setVisable(!visable);

                    document.getElementById("search")!.focus();
                  }
                }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
