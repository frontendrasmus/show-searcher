import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchView from './views/SearchView';
import ShowDetailView from './views/ShowDetailView';
import BaseLayout from './layouts/BaseLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<SearchView />} />
          <Route path="/show/:id" element={<ShowDetailView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
