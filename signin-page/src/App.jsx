import React from 'react';
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
} from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        height: '100vh', // 전체 화면 높이
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f5f5f5', // 배경색 연하게 추가
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          boxShadow: 3,
          p: 4,
          borderRadius: 2,
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign in
          </Typography>

          <TextField margin="normal" fullWidth label="Email" type="email" variant="outlined" />
          <TextField margin="normal" fullWidth label="Password" type="password" variant="outlined" />

          <FormControlLabel control={<Checkbox />} label="Remember me" />

          <Button fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
            Sign in
          </Button>

          <Typography variant="body2" color="text.secondary">
            Forgot your password?
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
