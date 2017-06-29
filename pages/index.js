import React from 'react';
// import Link from 'next/link';
import Head from 'next/head';
import NavigationBar from '../components/NavigationBar';
import Input from '../components/Input';

export default () => (
  <div>
    <Head>
      <title>Apichan Chaiyutthasat</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
      <NavigationBar />
      <Input />
    </div>
    <style jsx>{`
      .container {
        width: 100%;
      }
    `}</style>
    {/* <style global jsx>{`
      body {
        background-color: #00b900;
        color: #FFF;
      }
    `}</style>*/}
  </div>
);
