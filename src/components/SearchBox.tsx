import { Button, Grid, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Stack spacing={2}>
      <TextField
        id="search-tv-show"
        label="Search tv show"
        variant="filled"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          } else if (e.key === 'Backspace') {
            console.log('backspace');
            handleSearch();
          }
        }}
        size="medium"
        fullWidth
        placeholder="Enter the name of the series here."
      />

      <Button
        variant="contained"
        size="large"
        onKeyDown={(e) => (e.key === 'Enter' ? handleSearch : '')}
        onClick={handleSearch}
        className="search-button"
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchBox;
