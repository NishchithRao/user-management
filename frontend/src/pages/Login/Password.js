import React from "react";
import formStore from "../../store/modules/form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import userStore from "../../store/modules/user";
import { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const Password = ({ history }) => {
  const [error, setError] = useState({
    errEmail: false,
    errPassword: false
  });
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const apiError = useSelector(state => state.error);
  useEffect(() => setError({ ...error, errEmail: apiError !== "", errPassword: apiError !== "" }), [apiError]);
  const loading = useSelector(state => state.isLoading);
  useEffect(() => {
    console.log(formStore.getState().email);
    if (!(formStore.getState().email))
      setTimeout(() => history.push("/login"), 100);
  }, []);
  formStore.subscribe(() => setData({ ...data, email: formStore.getState().email, password: formStore.getState().password }));
  const { email, password } = data;
  const handleSubmit = ev => {
    if (email && password) {
      userStore.dispatch({ type: "LOGIN_USER", value: { email, password } });
      return;
    }
  }
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
      className="slide-in"
    >
      <Typography className="text-center"
        color="error" variant="subtitle1"
        component="span"
        gutterBottom>
        {apiError.message ? apiError.message : apiError}
      </Typography>
      <Grid item xs={12} style={{ width: "100%" }}>
        <TextField
          label="Password"
          autoFocus
          type="password"
          onBlur={() => setError({ ...error, errPassword: password === "" })}
          error={error.errPassword}
          onChange={ev => formStore.dispatch({ type: "PASSWORD", value: ev.target.value })}
          fullWidth
          autoComplete="password"
          variant="outlined" />
      </Grid>
      <Grid xs={12} item
        style={{ width: '100%' }}>
        <Grid container
          justify="space-between"
          alignItems="center"
          style={{ width: '100%' }}>
          <Grid item xs={8} className="text-left">
            <Link to="/signup" component={RouterLink} variant="subtitle1">create an account instead</Link>
          </Grid>
          <Grid item xs={4} className="text-right">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              size="large"
              disabled={(email == "" || password == "") || loading}
            >
              <Link to="/login/submit" component={RouterLink} variant="button" color="inherit">next</Link>
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Password;
