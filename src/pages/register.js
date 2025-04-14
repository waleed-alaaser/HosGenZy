import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('User Registered:', data);
  };

  return (
    <Container maxWidth="sm">
      <Box 
        sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2, textAlign: 'center' }}
      >
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Full Name"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
            margin="normal"
          />

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

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            {...register('confirmPassword', { 
              required: 'Confirm Password is required',
              validate: (value) => value === watch('password') || 'Passwords do not match'
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            margin="normal"
          />

          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default RegisterForm;
