import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for TV show by typing its name..."
      />
    </>
  );
}

export default App;
