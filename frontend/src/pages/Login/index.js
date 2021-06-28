import { Route, Switch, useHistory } from 'react-router-dom'
import Email from './Email';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Password from './Password';
import LinearProgress from "@material-ui/core/LinearProgress";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Login = (props) => {
  const history = useHistory();
  const {isLoading,isSuccess} = useSelector(state => state.user);
  console.log(isLoading);
  useEffect(() => {
    isSuccess && setTimeout(() => history.push("/account"),200);
  },[isSuccess]);
  return (
    <Paper className="h-full" variant="outlined" style={{ minHeight: "100vh" }}>
      <Grid container
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="w-100 h-100vh">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className="h-fit w-fit border-all-light-1 radius-12 p-3 pt-0"
        >
          {isLoading && <LinearProgress color="primary" className="w-100" />}
          <Grid container
            className="my-3"
            alignItems="center" justify="center">
            <Typography className="text-center" variant="h4" component="h1" gutterBottom>
              Sign in to your account
            </Typography>
          </Grid>
          <Switch>
          <Route path="/login/submit" component={Password} />
            <Route path="/login" component={Email} />
          </Switch>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Login
