import FooterHead from './FooterHead';
import { FooterLinks, FooterSocialLinks } from './FooterLinks';

const Footer = () => (
  <footer className="footer footer-center pb-10 text-base-content rounded">
    <FooterHead />
    <FooterLinks />
    <FooterSocialLinks />
  </footer>
);

export default Footer;
