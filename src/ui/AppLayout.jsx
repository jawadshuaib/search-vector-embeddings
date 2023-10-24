import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Href from './Href';
import { siteInfo } from '../utils/settings';
import { useSelector } from 'react-redux';

export default function AppLayout({ children }) {
  const { results } = useSelector((state) => state.search);

  return (
    <div className="flex flex-col min-h-screen justify-center dark:bg-slate-800">
      <main className="flex-grow">
        <div className="absolute p-3 max-w-lg top-8 w-96 sm:w-128 md:top-[10%] md:p-0 left-1/2 transform -translate-x-1/2">
          {children}
        </div>
      </main>
      {/* Display footer only when there are no results. */}
      {/* This is a workaround for search results overflowing the footer. */}
      {results.length === 0 && (
        <Footer>
          Created by <Href href={siteInfo.creatorUrl}>Jawad Shuaib</Href>. View{' '}
          <Href href={siteInfo.githubUrl}>Github repo</Href>.
        </Footer>
      )}
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
