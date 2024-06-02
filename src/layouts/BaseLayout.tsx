import { Box, Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',
          height: 'calc(100vh)',
          paddingTop: '2em',
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
            minHeight: 'calc(100vh - 4em)',
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
