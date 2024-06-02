import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

import { IShowSearchResult } from '../types';
import SearchView from '../views/SearchView';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const queryClient = new QueryClient();

const showMockItem = {
  id: 118,
  url: 'https://www.tvmaze.com/shows/118/house',
  name: 'House',
  type: 'Scripted',
  language: 'English',
  genres: ['Drama', 'Mystery', 'Medical'],
  status: 'Ended',
  runtime: 60,
  averageRuntime: 60,
  premiered: '2004-11-16',
  ended: '2012-05-21',
  officialSite: null,
  schedule: {
    time: '21:00',
    days: ['Monday'],
  },
  rating: {
    average: 8.8,
  },
  weight: 99,
  network: {
    id: 4,
    name: 'FOX',
    country: {
      name: 'United States',
      code: 'US',
      timezone: 'America/New_York',
    },
    officialSite: 'https://www.fox.com/',
  },
  webChannel: null,
  dvdCountry: null,
  externals: {
    tvrage: 3908,
    thetvdb: 73255,
    imdb: 'tt0412142',
  },
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/357/894990.jpg',
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/357/894990.jpg',
  },
  summary:
    "<p>Sink your teeth into meaty drama and intrigue with <b>House</b>, FOX's take on mystery, where the villain is a medical malady and the hero is an irreverent, controversial doctor who trusts no one, least of all his patients.</p><p>Dr. Gregory House is a maverick physician who is devoid of bedside manner. While his behavior can border on antisocial, Dr. House thrives on the challenge of solving the medical puzzles that other doctors give up on. Together with his hand-picked team of young medical experts, he'll do whatever it takes in the race against the clock to solve the case.</p>",
  updated: 1704794557,
  _links: {
    self: {
      href: 'https://api.tvmaze.com/shows/118',
    },
    previousepisode: {
      href: 'https://api.tvmaze.com/episodes/9206',
      name: 'Everybody Dies',
    },
  },
};

const searchResultMockItem: IShowSearchResult[] = [
  {
    score: 0.9112296,
    show: showMockItem,
  },
];

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{ui}</BrowserRouter>
    </QueryClientProvider>
  );
};
afterEach(cleanup);

describe('SearchView', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  // NOTE: types package for @testing-library/jest-dom seems to be a bit unstable at current version,
  // the types for toBeInTheDocument seems to be loaded too, this seems to work

  it('displays an error message when the fetch fails', async () => {
    mockedAxios.get.mockResolvedValueOnce(new Error('An little error happened.'));

    renderWithProviders(<SearchView />);

    await waitFor(() => userEvent.type(screen.getByLabelText(/search tv show/i), 'House'));

    await waitFor(() => expect(screen.getByText(/Something went wrong, details for support/i)).toBeInTheDocument());
  });

  it('displays initial search input', async () => {
    renderWithProviders(<SearchView />);
    expect(screen.getByLabelText('Search TV show of your choice...')).toBeInTheDocument();
  });

  it('displays loading text while fetching data', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: searchResultMockItem });

    renderWithProviders(<SearchView />);

    userEvent.type(screen.getByLabelText(/search tv show/i), 'House');

    await waitFor(() => expect(screen.getByText(/Loading results from Tv Maze/i)).toBeInTheDocument());
  });

  it('displays results when results are present', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: searchResultMockItem });

    renderWithProviders(<SearchView />);

    userEvent.type(screen.getByLabelText(/search tv show/i), 'House');

    await waitFor(() => expect(screen.getByText('House')).toBeInTheDocument());
  });
});
