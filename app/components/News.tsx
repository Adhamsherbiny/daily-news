"use client";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import NewsWidget from "./NewsWidget";
import Pagination from "./Pagination";
import "../styles/news.scss";

type Article = {
  urlToImage?: string;
  title?: string;
  author?: string;
  publishedAt?: string;
  published_date?: string;
  content?: string;
  abstract?: string;
  description?: string;
  section?: string;
  url?: string;
};

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
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = 10;

  const { data, isLoading } = useQuery("articles", getData);

  // Filter the data based on the search term
  const filteredData = data?.filter((article: Article) =>
    search ? article.title?.toLowerCase().includes(search.toLowerCase()) : true
  );

  const totalPages = filteredData
    ? Math.ceil(filteredData.length / perPage)
    : 1;

  // Slice the filtered data for the current page
  const start = (currentPage - 1) * perPage;
  const entries = filteredData?.slice(start, start + perPage);

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
          Please wait a few seconds
        </p>
      </div>
    );
  }

  return (
    <div className="news-section" id="news-section">
      <div className="header">
        <h1>Technology News</h1>
        <div className="sectionOfSearch" id="searchInput">
          <input
            id="search"
            className="search"
            autoComplete="off"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            type="search"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="news">
        {entries
          ?.sort(
            (a, b) =>
              new Date(b.publishedAt || b.published_date).getTime() -
              new Date(a.publishedAt || a.published_date).getTime()
          )
          .map((article, k) => (
            <NewsWidget
              key={k}
              urlToImage={article.urlToImage || "/unnamed.png"}
              title={
                article.title || article.description || article.section || ""
              }
              author={article.author || "Unknown"}
              publishedAt={
                new Date(
                  article.publishedAt || article.published_date
                ).toLocaleDateString() === "Invalid Date"
                  ? ""
                  : new Date(article.publishedAt || article.published_date)
                      .toLocaleDateString()
                      .replaceAll("/", "-")
              }
              content={
                article.content || article.abstract || article.description || ""
              }
              url={article.url}
            />
          ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setCurrentPage}
      />
    </div>
  );
}
