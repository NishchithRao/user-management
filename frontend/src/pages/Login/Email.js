import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";

const Email = () => {
  const email = useSelector(state => state.form.email);
  const { form } = actions;
  const dispatch = useDispatch();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
      className="slide-in"
    >
      <Grid item xs={12} style={{ width: "100%" }}>
        <TextField
          label="Email"
          type="email"
          id="email"
          autoFocus
          name="email"
          value={email}
          required
          onChange={({ target }) => dispatch(form.EMAIL(target.value))}
          fullWidth
          autoComplete="sginin email"
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
              size="large"
              disabled={(email == "")}
            >
              <Link to="/login/submit"
               component={RouterLink} 
               variant="button" 
               underline="none"
               color="inherit">next</Link>
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Email;
