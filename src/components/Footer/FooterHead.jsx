import Logo from '../Icons/Logo';

const FooterHead = () => (
  <div>
    <Logo />
    <p className="font-bold">Backend as a Platform</p>
    <p className="">
      Made with{' '}
      <a
        className="link link-hover"
        href="https://github.com/backend-as-a-platform"
        target="_blank"
      >
        Opensource
      </a>{' '}
      - All rights reserved
    </p>
  </div>
);

export default FooterHead;
