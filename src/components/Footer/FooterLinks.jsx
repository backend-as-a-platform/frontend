import { Link } from 'react-router-dom';
import {
  TwitterIcon,
  YoutubeIcon,
  FacebookIcon,
} from '../Icons/SocialMediaIcons';

export const FooterLinks = () => (
  <div className="grid grid-flow-col gap-4">
    <Link to="/about" className="link link-hover">
      About us
    </Link>
    <Link to="/contact" className="link link-hover">
      Contact
    </Link>
    <Link to="/faq" className="link link-hover">
      FAQs
    </Link>
    <Link to="/support" className="link link-hover">
      Support
    </Link>
  </div>
);

export const FooterSocialLinks = () => (
  <div className="grid grid-flow-col gap-4">
    <a>
      <TwitterIcon />
    </a>
    <a className="ml-1">
      <YoutubeIcon />
    </a>
    <a>
      <FacebookIcon />
    </a>
  </div>
);
