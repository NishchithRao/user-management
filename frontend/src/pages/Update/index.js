import React, { useEffect } from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useDispatch, useSelector } from "react-redux";
import Link from '@material-ui/core/Link';
import { Link as RouterLink, useHistory, useParams } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import { actions } from '../../store';
import Basic from '../Signup/Basic';

const Update = () => {
  const { user, form } = actions;
  const {id} = useParams();
  const history = useHistory();
  const { isLoading, isSuccess, error,anotherUser } = useSelector(state => state.user);
  const formData = useSelector(state => state.form);
  const dispatch = useDispatch();
  useEffect(() => dispatch(user.GET_USER(id)),[]);
  useEffect(() => {
    dispatch(form.FIRST_NAME(anotherUser.firstName));
      dispatch(form.LAST_NAME(anotherUser.lastName));
      dispatch(form.GENDER(anotherUser.gender));
      dispatch(form.EMAIL(anotherUser.email));
      dispatch(form.DOB_DD(anotherUser.dob.dd));
      dispatch(form.DOB_MM(anotherUser.dob.mm));
      dispatch(form.DOB_YY(anotherUser.dob.yy));
      dispatch(form.ADDRESS_LINE1(anotherUser.address.line1));
      dispatch(form.ADDRESS_CITY(anotherUser.address.city));
      dispatch(form.ADDRESS_STATE(anotherUser.address.state));
      dispatch(form.ADDRESS_PINCODE(anotherUser.address.pincode));
  }, [anotherUser]);
  const handleSubmit = async () => {
      await dispatch(user.UPDATE_USER({formData,_id:id}));
      history.push(`/create/picture/${id}`);
  }
  return (
    <Paper className="h-full" variant="outlined" style={{ minHeight: "100vh" }}>
      <Grid container
        direction="column"
        alignItems="center"
        className=""
        justify="center">
        <Grid item xs={12} sm={6} className={`mt-3  p-3 pt-0 
        ${error ? 'border-all-error' : 'border-all-light-1'}`}>
          {isLoading && <LinearProgress color="primary" className="w-100" />}
          <Typography className="my-3 text-center" variant="h4" component="h1" gutterBottom>
            Update a new account
          </Typography>
          <Typography className="text-center d-block mb-2"
            color="error" variant="subtitle1"
            component="span"
            gutterBottom>
            {error.message ? error.message : error}
          </Typography>
          <Basic/>
          <Grid xs={12} item
            style={{ width: '100%' }}>
            <Grid container
              justify="space-between"
              alignItems="center"
              style={{ width: '100%' }}>
              <Grid item xs={8} className="text-left">
                <Link to="/" underline="none" component={RouterLink} variant="subtitle1">
                  Cancel
                </Link>
              </Grid>
              <Grid item xs={4} className="text-right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  size="large"
                >update
                </Button>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Update
