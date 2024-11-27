/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import "../styles/newsWidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
  if (
    props.url == undefined ||
    props.url == null ||
    props.url == "https://removed.com"
  ) {
    return <></>;
  } else {
    return (
      <div id="news" className="news-widget">
        <div className="pic-container">
          <img className="pic" src={props.urlToImage} alt="News Picture" />
        </div>
        <div className="widget-body">
          <div className="title">
            <div>
              {props.title != " " || "Removed" || undefined || null
                ? props.title
                : ""}
            </div>
          </div>
          <div>
            <div className="content">
              {props.content != "" || undefined || null ? props.content : " "}
            </div>
          </div>
          <div className="date-author">
            <div className="date">
              {props.url == "https://removed.com"
                ? " "
                : props.publishedAt != "" ||
                  `Invalid Date` ||
                  "[Removed]" ||
                  undefined ||
                  null
                ? props.publishedAt || props.published_date
                : " "}
            </div>
            {props.publishedAt == "" || props.published_date == "" ? (
              ""
            ) : (
              <div className="boulet"></div>
            )}
            <div className="author">
              {props.author == "Unknown" ? "Daily Tech News" : props.author}
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
            <button>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
