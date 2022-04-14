import {
  TwitterIcon,
  YoutubeIcon,
  FacebookIcon,
} from '../Icons/SocialMediaIcons';

export const FooterLinks = () => (
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">FAQs</a>
    <a className="link link-hover">Support</a>
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
