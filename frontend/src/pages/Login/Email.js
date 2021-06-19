import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import formStore from "../../store/modules/form";
import Link from '@material-ui/core/Link';
import { useEffect } from "react";
import {Link as RouterLink} from 'react-router-dom';

const Email = ({history}) => {
  const [email,setEmail] = useState(formStore.getState().email||"");
  useEffect(() => formStore.dispatch({ type: "EMAIL", value: email }),[email])
  const handleChange = ev => setEmail(ev.target.value);
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
            onChange={handleChange}
            fullWidth
            autoComplete="email"
            variant="outlined" />
        </Grid>
        <Grid xs={12} item
         style={{width:'100%'}}>
        <Grid container
         justify="space-between"
         alignItems="center"
          style={{width:'100%'}}>
        <Grid item xs={8} className="text-left">
          <Link to="/signup" component={RouterLink} variant="subtitle1">create an account instead</Link>
        </Grid>
        <Grid item xs={4} className="text-right">
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={(email == "")}
          >
            <Link to="/login/submit" component={RouterLink} variant="button" color="inherit">next</Link>
          </Button>
        </Grid>

        </Grid>
        </Grid>
      </Grid>
  );
};

export default Email;
