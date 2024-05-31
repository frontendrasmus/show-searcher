import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IShow } from '../types';
import { TV_MAZE_API_SINGLE_SEARCH_URL } from '../constants/api-constants';
import { Button } from '@mui/material';

const ShowDetailView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState<IShow | null>(null);

  useEffect(() => {
    axios.get(`${TV_MAZE_API_SINGLE_SEARCH_URL}/${id}`).then((response) => {
      setShow(response.data);
    });
  }, [id]);

  if (!id) return <div>View is missing a param of 'id' in its path, please use /show/id</div>;

  if (!show) return <div>Loading...</div>;

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Go back</Button>
      <h1>{show.name}</h1>
      {show.image && <img src={show.image.medium} alt={show.name} />}
      <p dangerouslySetInnerHTML={{ __html: show.summary || '' }} />
    </div>
  );
};

export default ShowDetailView;
