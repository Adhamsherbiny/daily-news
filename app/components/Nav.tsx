import "../styles/nav.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

export default function Nav() {
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
        </ul>
      </div>
    </nav>
  );
}
