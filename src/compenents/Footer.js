import { Link } from 'react-router-dom';
import './assets/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



function Footer() {
  return (
    <footer className="footer-container">
      <nav>
        <ul className="footer-icons">
          <li>
            <Link to="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook}  size={24} />

            </Link>
          </li>
          <li>
            <Link to="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter}  size={24} />
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com">
            <FontAwesomeIcon icon={faYoutube} size={24} />
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <FontAwesomeIcon icon={faEnvelope} size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
