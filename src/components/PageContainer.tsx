import {
  Box,
  Container,
} from '@mui/material';

const PageContainer = ({ children }: { children: any | undefined }) => {

  return (
    <Container fixed maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#d7e334',
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default PageContainer;