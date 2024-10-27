import React from "react";
import "./styles/footer.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer>
      <div className="footer-head">
        <p>
          Stay Informed with the Latest News! Join our community to receive
          timely updates
        </p>
      </div>
      <div className="footer-body">
        <ul>
          <li>
            <Link href="" className="links">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link href="" className="links">
              <FontAwesomeIcon className="icon" icon={faWhatsapp} />
            </Link>
          </li>
          <li>
            <Link href="" className="links">
              <FontAwesomeIcon className="icon" icon={faTelegram} />
            </Link>
          </li>
          <li>
            <Link href="" className="links">
              <FontAwesomeIcon className="icon" icon={faXTwitter} />
            </Link>
          </li>
          <li>
            <Link href="" className="links">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="copyrights">
        <p>All copyrights reserved</p>
        <span>&copy; 2024</span>
      </div>
    </footer>
  );
}
