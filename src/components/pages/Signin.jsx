import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import googleLogo from "../../assets/google_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config";

initializeApp(firebaseConfig);

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const defaultTheme = createTheme();

export default function SignIn() {
  let navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email");
    let password = data.get("password");
    signInWithEmailAndPassword(auth, email, password).then(() => {
      return navigate("/home");
    });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user.displayName);
      console.log(result.user.email);
      return navigate("/home");
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              maxWidth: 500,
              paddingX: 8,
              paddingY: 3,
              border: "1px solid #ccc",
            }}
          >
            <CardContent>
              <Typography
                component="h1"
                variant="h4"
                sx={{ mb: 3, textAlign: "center" }}
              >
                Sign in with
              </Typography>
              <Button
                onClick={handleGoogleSignIn}
                variant="contained"
                startIcon={<img src={googleLogo} width={20} height={20} />}
                fullWidth
                sx={{
                  paddingY: 1.5,
                  mb: 2,
                  background: "white",
                  color: "black",
                }}
              >
                Google
              </Button>
              <Box
                component="form"
                onSubmit={handleFormSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, paddingY: 1.5 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs sx={{ fontSize: "13px" }}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item sx={{ fontSize: "13px" }}>
                    <Link to="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
