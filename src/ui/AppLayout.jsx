import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Href from './Href';

export default function AppLayout({ children }) {
  return (
    <div className="App flex flex-col min-h-screen justify-center dark:bg-slate-800">
      <main className="flex-grow">
        <div className="absolute w-80 md:w-96 lg:w-128 max-w-lg top-8 md:top-1/4 left-1/2 transform -translate-x-1/2">
          {children}
        </div>
      </main>

      <Footer>
        Created by <Href href="https://j4wad.com">Jawad Shuaib</Href>. View{' '}
        <Href href="https://github.com/jawadshuaib/search-vector-embeddings">
          Github repo
        </Href>
        .
      </Footer>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
