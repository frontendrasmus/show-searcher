import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { fetchShowDetail } from '../api/api-calls';
import { useQuery } from '@tanstack/react-query';

const ShowDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ['show-detail', id],
    queryFn: () => {
      const showResult = fetchShowDetail(id as string);
      return showResult ?? null;
    },
    enabled: !!id,
  });

  if (isPending) {
    return (
      <Box>
        <Grid container spacing={2} justifyContent="center">
          <CircularProgress />
        </Grid>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Grid container spacing={2} justifyContent="center">
          <Typography color="error">{error.message}</Typography>
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        <Button onClick={() => navigate(-1)}>Go back</Button>
        <h1>{data.name}</h1>
        {data.image && <img src={data.image.medium} alt={data.name} />}
        <p dangerouslySetInnerHTML={{ __html: data.summary || '' }} />
        <p>{data.language}</p>
      </Grid>
    </Box>
  );
};

export default ShowDetailView;
