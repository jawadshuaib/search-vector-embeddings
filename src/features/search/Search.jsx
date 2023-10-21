import React, { useEffect, useState } from 'react';
import getVector from '../../services/getVector';
import { findSimilarProducts } from '../../services/searchProducts';

export default function Search() {
  const [embedding, setEmbedding] = useState([]);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        const resp = await getVector('iPhone 15 tempered glass');
        setEmbedding(resp.embedding);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the async function
    fetchData();
  }, [setEmbedding]);

  // We can perform search once we have the embedding for the query
  useEffect(() => {
    if (embedding.length > 0) {
      console.log('Starting search');
      findSimilarProducts(embedding).then((res) => console.log(res));
    }
  }, [embedding]);

  return (
    <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20 dark:bg-gray-600">
      <input
        type="text"
        className="block w-full flex-1 py-2 px-3 text-slate-100 focus:outline-none dark:bg-gray-600"
        placeholder="Start Typing..."
      />
      <span className="m-1 inline-flex cursor-pointer ites-center rounded-md bg-green-600 px-2 py-2 hover:bg-green-700 dark:bg-slate-800 dark:hover:bg-gray-700">
        <svg
          className="text-slate-300"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M21.07 16.83L19 14.71a3.08 3.08 0 0 0-3.4-.57l-.9-.9a7 7 0 1 0-1.41 1.41l.89.89a3 3 0 0 0 .53 3.46l2.12 2.12a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.29Zm-8.48-4.24a5 5 0 1 1 0-7.08a5 5 0 0 1 0 7.08Zm7.07 7.07a1 1 0 0 1-1.42 0l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.42 0l2.12 2.12a1 1 0 0 1 0 1.42Z"
          />
        </svg>
      </span>
    </div>
  );
}
