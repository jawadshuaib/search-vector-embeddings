import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Href from './Href';

export default function AppLayout({ children }) {
  return (
    <div className="App flex min-h-screen justify-center dark:bg-slate-800">
      <div className="relative h-screen">
        <div className="absolute w-128 max-w-lg top-8 md:top-1/4 left-1/2 transform -translate-x-1/2">
          {children}
        </div>
      </div>

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
