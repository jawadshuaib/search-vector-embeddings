import React from 'react';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMethod } from '../search/searchSlice';
import { defaults } from '../../utils/settings';
import Image from '../../ui/Image';

export default function Explanation({ method, query, results }) {
  const dispatch = useDispatch();
  const methods = defaults.methods;
  const selectedIndex = methods.indexOf(method);
  const alternativeMethod = methods.at(selectedIndex === 0 ? 1 : 0);
  const { name, similarity } = results.at(0);

  function handleClick() {
    // Change method type
    dispatch(setMethod(alternativeMethod));
  }
  return (
    <div>
      {method === 'SQL' && (
        <>
          <p>
            SQL uses exact string comparisons while vector based search uses
            dimensional similarity between strings.
          </p>
          <Image
            src="sql-search.png"
            alt="Comparison between vector and sql search"
          />
          <p>
            For example, we might employ the following SQL to run this search:
          </p>
          <p className="my-3">
            SELECT * FROM &#96;tbl_products&#96; WHERE
            {query.split(' ').map((word, index) => {
              if (index === query.split(' ').length - 1) {
                return ` \`name\` LIKE "%${word}%"`;
              } else {
                return ` \`name\` LIKE "%${word}%" OR`;
              }
            })}
          </p>
        </>
      )}
      {method === 'Vectors' && (
        <>
          <p>
            Search methods using vector embeddings offer greater flexibility as
            it performs well even in absence of exact word matches.
          </p>
          <Image src="vector-based-search.png" alt="Vector based search" />
          <p>
            For example, the embeddings for the query &quot;
            <span className="font-medium">{query}</span>&quot; will be projected
            as a vector on a graph plane and compared to other vectors in the
            database. The angle between them provides a similarity score which
            can then be used to sort results semantically.
          </p>
          {similarity < 1 && (
            <p>
              In this case, &quot;
              <span className="font-medium">{name.split('|')[0].trim()}</span>
              &quot; is{' '}
              <span className="font-medium">
                {Math.round(similarity * 100)}%
              </span>{' '}
              semantically similar to the query.
            </p>
          )}
        </>
      )}

      <p className="mt-3">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleClick}
        >
          Try this search using {alternativeMethod}
        </button>
      </p>
    </div>
  );
}

Explanation.propTypes = {
  method: PropType.string.isRequired,
  query: PropType.string.isRequired,
  results: PropType.arrayOf(
    PropType.shape({
      // Define the shape of each object in the array
      name: PropType.string.isRequired,
      id: PropType.number.isRequired,
      similarity: PropType.number,
      // Add more properties and their corresponding PropTypes as needed
    }),
  ).isRequired,
};
