import { Box, Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: '#e0447d', // Background color for the base container
        }}
      >
        <Container
          sx={{
            bgcolor: '#fff', // Background color for the inner container
            maxWidth: {
              xs: 'calc(100vw - 40px)', // 100vw minus 20px on each side for mobile
              md: '600px', // Max width of 600px on desktop views
            },
            width: '100%',
            p: 2, // Padding of 20px
            boxShadow: 3, // Adding some shadow
            borderRadius: 2, // Adding border radius
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

export default BaseLayout;
