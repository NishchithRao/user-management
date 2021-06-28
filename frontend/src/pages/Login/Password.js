import React from "react";
import formStore from "../../store/modules/form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { actions } from "../../store";

const Password = ({ history }) => {
  const { email, password } = useSelector(state => state.form);
  const { error, isLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [blurError, setBlurError] = useState(false);
  const { form, user } = actions;
  useEffect(() => {
    if (!email)
      setTimeout(() => history.push("/login"), 100);
  }, []);

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
        {error.message ? error.message : error}
      </Typography>
      <Grid item xs={12} style={{ width: "100%" }}>
        <TextField
          label="Password"
          autoFocus
          type="password"
          onBlur={() => setBlurError(password === "")}
          error={blurError.errPassword}
          onChange={({ target }) => dispatch(form.PASSWORD(target.value))}
          fullWidth
          autoComplete="signin password"
          variant="outlined" />
      </Grid>
      <Grid xs={12} item
        style={{ width: '100%' }}>
        <Grid container
          justify="flex-end"
          alignItems="center"
          style={{ width: '100%' }}>
          <Grid item xs={4} className="text-right">
            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(user.LOGIN_USER({email,password}))}
              size="large"
              disabled={(email == "" || password == "") || isLoading}
            >
              <Link to="/login/submit" underline="none" component={RouterLink} variant="button" color="inherit">next</Link>
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Password;
