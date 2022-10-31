import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

const alertWindow = () => {
  window.alert('Coming soon!')
}

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href='mailto:hello@crowdedmind.xyz' target="_blank" >Contact</a>
        </li>
        <li>
          <a href='https://drive.google.com/file/d/1vPjO0PWRRt9DTdqftbwjs3Oer52la3bf/view?usp=sharing' target="_blank" >About us</a>
        </li>
        {/* <li>
          <Link to="#" onClick={alertWindow}>About us</Link>
        </li> */}
        {/* <li>
          <Link to="#" onClick={alertWindow}>FAQ's</Link>
        </li>
        <li>
          <Link to="#" onClick={alertWindow}>Support</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;