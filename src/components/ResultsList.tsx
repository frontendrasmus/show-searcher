import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IShowSearchResult } from '../types';
import { List, ListItem, ListItemText } from '@mui/material';

interface IResultsListProps {
  results: IShowSearchResult[];
}

// results.map((result, index) => (
// <div key={index}>
//   <Link to={`/show/${result.show.id}`}>{result.show.name}</Link>
// </div>
const ResultsList: React.FC<IResultsListProps> = ({ results }) => {
  const navigate = useNavigate();
  return (
    <List style={{ height: '600px' }} dense>
      {results.map((result, index) => (
        <ListItem key={`${result.show.name}__${index}`}>
          <ListItemText
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/show/${result.show.id}`)}
            primary={result.show.name}
            secondary={result.show.genres}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ResultsList;
