import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('User Logged In:', data);
  };

  return (
    <Container maxWidth="sm">
      <Box 
        sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2, textAlign: 'center' }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            {...register('email', { 
              required: 'Email is required', 
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            {...register('password', { 
              required: 'Password is required', 
              minLength: { value: 6, message: 'Password must be at least 6 characters' }
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            margin="normal"
          />

          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default LoginForm;
