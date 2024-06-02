import { Box, Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',
          overflow: 'hidden',
          height: {
            xs: '90vh',
            md: '100vh',
          },
          paddingTop: '2em',
          paddingBottom: {
            xs: '2em',
          },
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          bgcolor: '#3f6e63',
        }}
      >
        <Container
          sx={{
            bgcolor: '#fff',
            maxWidth: {
              xs: 'calc(100vw - 40px)',
              md: '600px',
            },
            minHeight: {
              xs: 'calc(100vh - 12em)',
              md: 'calc(100vh - 4em)',
            },
            maxHeight: {
              xs: '700px',
              md: 'calc(100vh - 4em)',
            },
            overflow: {
              xs: 'scroll',
            },
            width: '100%',
            p: 2,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

export default BaseLayout;
