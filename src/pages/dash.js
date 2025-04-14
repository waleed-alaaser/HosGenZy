import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box } from '@mui/material';
import { LocalHospital, People, Event, Medication, Dashboard as DashboardIcon } from '@mui/icons-material';

function Dashboard() {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <DashboardIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hospital Management Dashboard
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Appointments</Button>
          <Button color="inherit">Patients</Button>
          <Button color="inherit">Doctors</Button>
          <Button color="inherit">Pharmacy</Button>
        </Toolbar>
      </AppBar>

      {/* Dashboard Content */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Hospital Management System
        </Typography>

        {/* Statistics Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <LocalHospital fontSize="large" color="primary" />
              <Typography variant="h6">Doctors</Typography>
              <Typography>50+ Available</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <People fontSize="large" color="primary" />
              <Typography variant="h6">Patients</Typography>
              <Typography>200+ Admitted</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Event fontSize="large" color="primary" />
              <Typography variant="h6">Appointments</Typography>
              <Typography>120 Today</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Medication fontSize="large" color="primary" />
              <Typography variant="h6">Pharmacy</Typography>
              <Typography>80+ Medicines</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Quick Actions */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" color="primary" sx={{ mx: 1 }}>
            Add Patient
          </Button>
          <Button variant="contained" color="secondary" sx={{ mx: 1 }}>
            Schedule Appointment
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Dashboard;
