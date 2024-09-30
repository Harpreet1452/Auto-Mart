import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";

const defaultTheme = createTheme();

const LogIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit event
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);

    try {
      const response = signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Login Successfull: ", response);
      navigate("/vehicles");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message); // Access the error message safely
      } else {
        console.error("An unknown error occurred"); // Handle non-Error objects
      }
    }
  };

  // const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   // Any logic you want before or after form submission
  //   e.preventDefault();
  //   console.log("Form data:", formData);
  // };

  const handleSignIp = () => {
    navigate("../signUp");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit} // Form submit handler
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  onChange={handleInputChange}
                  value={formData.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit" // Let this button submit the form
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={(e) => {
              //   handleButtonClick(e); // Call any additional logic
              // }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link variant="body2" onClick={handleSignIp}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;
