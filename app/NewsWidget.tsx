/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import "./styles/newsWidget.scss";
interface NewsWidgetTypes {
  author?: string;
  title?: string;
  description?: string;
  url?: string | any;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
  published_date?: string;
}

export default function NewsWidget(props: NewsWidgetTypes) {
  if (props.url == "https://removed.com") {
    return " ";
  } else {
    return (
      <div id="news" className="news-widget">
        <img
          className="pic"
          src={props.urlToImage == undefined ? " " : props.urlToImage}
          alt=""
        />
        <div className="date-author">
          <div className="date">
            {props.url == "https://removed.com"
              ? ""
              : props.publishedAt != "" ||
                `Invalid Date` ||
                "[Removed]" ||
                undefined ||
                null
              ? props.publishedAt || props.publishedAt
              : " "}
          </div>
          {props.publishedAt == "" || props.published_date == "" ? (
            ""
          ) : (
            <div className="boulet"></div>
          )}
          <div className="author">{props.author}</div>
        </div>
        <div className="title">
          <div>
            {props.title != " " || "Removed" || undefined || null
              ? props.title
              : ""}
          </div>
        </div>
        <div>
          <div className="content">
            {props.content != "" || undefined || null
              ? props.content?.slice(0, 100)
              : " "}
          </div>
        </div>

        <div className="read-more-div">
          {props.url == "https://removed.com" ? (
            ""
          ) : (
            <Link
              target="_blank"
              className="read-more"
              href={props.url == "" || undefined || null ? " " : props.url}
            >
              Read More
            </Link>
          )}
        </div>
      </div>
    );
  }
}
