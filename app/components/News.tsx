/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useQuery } from "react-query";
import getData from "../utils/getData";
import NewsWidget from "./NewsWidget";
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

export default function News() {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articlesToShow, setArticlesToShow] = useState<Article[]>([]);
  const perPage = 10;
  const { data, isLoading, isError } = useQuery("articles", getData, {
    onSuccess: (fetchedData) => {
      const initialData = fetchedData
        ?.filter((article: Article) =>
          search
            ? article.title?.toLowerCase().includes(search.toLowerCase())
            : true
        )
        ?.slice(0, perPage);

      setArticlesToShow(initialData || []);
    },
  });

  const loadMore = () => {
    const start = currentPage * perPage;
    const newArticles = data
      ?.filter((article: Article) =>
        search
          ? article.title?.toLowerCase().includes(search.toLowerCase())
          : true
      )
      ?.slice(start, start + perPage);

    setArticlesToShow((prev) => [...prev, ...(newArticles || [])]);
    setCurrentPage((prev) => prev + 1);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <p className="loading-title">Loading News</p>
        <p className="loading-subtitle">Please wait a few seconds</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-container">
        <p className="error-message">Failed to load news. Please try again.</p>
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

              const filteredData = data
                ?.filter((article: Article) =>
                  e.target.value
                    ? article.title
                        ?.toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    : true
                )
                ?.slice(0, perPage);

              setArticlesToShow(filteredData || []);
            }}
            type="search"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="news">
        {articlesToShow.map((article: any, index) => (
          <NewsWidget
            key={index}
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

      {articlesToShow.length < data!.length && (
        <div className="btn-load">
          <button className="read-more" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
