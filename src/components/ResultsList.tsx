import React from 'react';
import { Link } from 'react-router-dom';
import { IShowSearchResult } from '../types';

interface IResultsListProps {
  results: IShowSearchResult[];
}

const ResultsList: React.FC<IResultsListProps> = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          <Link to={`/show/${result.show.id}`}>{result.show.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
