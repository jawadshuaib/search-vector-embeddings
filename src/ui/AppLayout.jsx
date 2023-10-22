import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Href from './Href';
import { siteInfo } from '../utils/settings';

export default function AppLayout({ children }) {
  return (
    <div className="App flex flex-col min-h-screen justify-center dark:bg-slate-800">
      <main className="flex-grow">
        <div className="absolute p-3 max-w-lg top-8 w-96 sm:w-128 md:top-1/4 md:p-0 left-1/2 transform -translate-x-1/2">
          {children}
        </div>
      </main>

      <Footer>
        Created by <Href href={siteInfo.creatorUrl}>Jawad Shuaib</Href>. View{' '}
        <Href href={siteInfo.githubUrl}>Github repo</Href>.
      </Footer>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
