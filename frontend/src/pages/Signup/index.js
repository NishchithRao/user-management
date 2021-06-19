import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import userStore from '../../store/modules/user';
import Password from '../Login/Password';
import Basic from './Basic';
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import formStore from "../../store/modules/form";
import { formValidation } from '../../helpers/methods';

const Signup = ({ match }) => {
  console.log(match.url);
  const url = match.url;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [apiError, setApiError] = useState("");
  const [data,setData] = useState(formStore.getState());
  userStore.subscribe(() => {
    setLoading(userStore.getState().isLoading);
    setApiError(userStore.getState().error);
  });
  const handleSubmit = () => {
    dispatch({type:"CREATE_USER",value:formStore.getState()});
   };
   formStore.subscribe(state => setData( state()));
  return (
    <Paper className="h-full" variant="outlined" style={{ minHeight: "100vh" }}>
      <Grid container
        direction="column"
        alignItems="center"
        className=""
        justify="center">
        <Grid item xs={12} sm={6} className="mt-3 border-all-light-1 p-3 pt-0">
          {loading && <LinearProgress color="primary" className="w-100" />}
          <Typography className="my-3 text-center" variant="h4" component="h1" gutterBottom>
            Create a new account
          </Typography>
          <Switch>
            <Route path="/signup/submit" exact component={Password} />
            <Route path="/" component={Basic} />
          </Switch>

          <Grid xs={12} item
            style={{ width: '100%' }}>
            <Grid container
              justify="space-between"
              alignItems="center"
              style={{ width: '100%' }}>
              <Grid item xs={8} className="text-left">
                <Link to="/login" underline="none" component={RouterLink} variant="subtitle1">Already have an account? Login
                </Link>
              </Grid>
              <Grid item xs={4} className="text-right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  size="large"
                  disabled={loading|| formValidation(data)}
                >create
                </Button>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Signup
