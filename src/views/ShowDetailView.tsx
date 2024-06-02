import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Box, Button, CircularProgress, Stack } from '@mui/material';
import { fetchShowDetail } from '../api/api-calls';
import { useQuery } from '@tanstack/react-query';

const ShowDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { isFetching, error, data } = useQuery({
    queryKey: ['show-detail', id],
    queryFn: () => {
      const showResult = fetchShowDetail(id as string);
      return showResult ?? null;
    },
    retry: 3,
    retryDelay: (attempt) => Math.pow(2, attempt) * 1000,
    enabled: !!id,
  });
  if (isFetching) {
    return (
      <Box>
        <Stack spacing={2}>
          <CircularProgress />
        </Stack>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Stack spacing={2}>
          <Button onClick={() => navigate(-1)}>Go back</Button>
          <Alert severity="error">Something went wrong, details for support: {error.message}</Alert>
        </Stack>
      </Box>
    );
  } // <img src={data.image.medium} alt={data.name} />

  return (
    <Box>
      <Stack spacing={2}>
        <Button onClick={() => navigate(-1)}>Go back</Button>
        <h1>{data.name}</h1>
        {data.image && <Box component="img" alt="The house from the offer." src={data.image.original} />}
        <p dangerouslySetInnerHTML={{ __html: data.summary || '' }} />
        <p>Language: {data.language}</p>
      </Stack>
    </Box>
  );
};

export default ShowDetailView;
