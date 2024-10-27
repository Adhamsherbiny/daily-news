"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import NewsWidget from "./NewsWidget";
import axios from "axios";
import { useQuery } from "react-query";
import "./styles/news.scss";
import { useState } from "react";

// ? NewsApi
// ? api key => 203b419c3c484293835f919f943ff0cc
// ? https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=203b419c3c484293835f919f943ff0cc
// ? GET https://newsapi.org/v2/everything?q=apple&from=2024-10-15&to=2024-10-15&sortBy=popularity&apiKey=203b419c3c484293835f919f943ff0cc
// ? https://newsapi.org/v2/top-headlines?country=us&apiKey=203b419c3c484293835f919f943ff0cc
// ! New York Times Api Key
// ! hx5y3viP9blbRE9knf5Wy4BgYwNDda18
// ! https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=hx5y3viP9blbRE9knf5Wy4BgYwNDda18
// ?https://content.guardianapis.com/search?api-key=test
async function getData() {
  const resultOne = await axios.get(
    "https://newsapi.org/v2/everything?q=apple&from=2024-10-15&to=2024-10-15&sortBy=popularity&apiKey=203b419c3c484293835f919f943ff0cc"
  );
  const resultTwo = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=hx5y3viP9blbRE9knf5Wy4BgYwNDda18"
  );
  const allData = [...resultOne.data.articles, ...resultTwo.data.results];
  return allData;
}
export default function News() {
  const [search, setSearch] = useState<string>();
  const { data, isLoading } = useQuery("articales", getData);

  if (isLoading) {
    return (
      <div style={{ width: "250px", margin: "30px auto" }}>
        <p
          style={{
            color: "black",
            fontSize: "25px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Loading News
        </p>
        <p style={{ fontSize: "14px", textAlign: "center" }}>
          Please Wait a few seconds
        </p>
      </div>
    );
  }

  return (
    <div className="news-section" id="news-section">
      <h1>Techonolgy News</h1>
      <div className="sectionOfSearch" id="searchInput">
        <input
          id="search"
          className="search"
          autoComplete="off"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              document.getElementById("searchInput")!.style.display = "none";
            }
          }}
          type="search"
          placeholder="Search"
        />
      </div>
      <div className="news">
        {data
          ?.sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          )
          ?.filter((articales: any) =>
            search == null
              ? articales
              : articales.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((articales, k) => (
            <NewsWidget
              key={k}
              urlToImage={
                articales.urlToImage == "" || null || undefined
                  ? " "
                  : articales.urlToImage
              }
              title={
                articales.title == "[Removed]"
                  ? ""
                  : articales.title ||
                    articales.description ||
                    articales.section
              }
              author={articales.author}
              publishedAt={
                new Date(articales.publishedAt).toLocaleDateString() ==
                "Invalid Date"
                  ? ""
                  : new Date(articales.publishedAt || articales.published_date)
                      .toLocaleDateString()
                      .replaceAll("/", "-")
              }
              content={
                articales.content == "[Removed]"
                  ? ""
                  : articales.abstract || articales.description
              }
              url={articales.url}
            />
          ))}
      </div>
    </div>
  );
}
