import React from 'react';
// import Link from 'next/link';
import NavigationBar from '../components/NavigationBar';
import Input from '../components/Input';

export default () => (
  <div>
    <div className="container">
      <NavigationBar />
      <Input />
    </div>
    <style jsx>{`
      .container {
        width: 100%;
      }
    `}</style>
  </div>
);
