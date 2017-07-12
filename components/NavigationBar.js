import React from 'react';
import Link from 'next/link';

export default () => (
  <div className="navigation">
    <p className="menus">
      {
        [{
          label: 'Home',
          path: '/',
        }, {
          label: 'Timeline',
          path: '/timeline',
        }, {
          label: 'Projects',
          path: '/projects',
        }].map(menu =>
          <Link key={menu.label} href={menu.path}><a className="menu">{menu.label}</a></Link>,
        )
      }
    </p>
    <style global jsx>{`
      .navigation {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        margin: 0;
        padding: 10px;
        background-color: #00b900;
      }
      .menus {
        text-align: center;
      }
      .menu {
        padding: 0 10px;
        color: #FFF;
      }
    `}</style>
  </div>
);
