import React, { useState, useEffect } from 'react';
import { Stack, TextField } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (query === debouncedQuery) {
      console.log('q', query);
      onSearch(query);
    }
  }, [debouncedQuery, query, onSearch]);

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Stack spacing={2}>
      <TextField
        id="search-tv-show"
        label="Search TV show of your choice..."
        variant="filled"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        size="medium"
        fullWidth
        placeholder="Enter the name of the series here."
      />
    </Stack>
  );
};

export default SearchBox;
