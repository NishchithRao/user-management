import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import { actions } from '../../store';
import { months } from '../../helpers/constants';
import Button from '@material-ui/core/Button';


const AddAccount = ({handler}) => {
    const dispatch = useDispatch();
    const { isLoading,error } = useSelector(state => state.user);
    const { user,form } = actions;
    const formData = useSelector(state => state.form);
    const { firstName, lastName, gender, email,password,dob:{dd,mm,yy}, address:{line1,pincode,state,city} } = useSelector(state => state.form);
    const addAccountToCollection = (_id) => {
      dispatch(user.ADD_USER(formData));
      !isLoading && error==="" && handler();
    }
    useEffect(() => dispatch(user.ERROR("")),[dispatch,user]);
    return (
         <Paper className="w-100 mx-auto p-3">
            <React.Fragment>
                <Typography variant="h5" component="p" className="my-3 text-center">Add User</Typography>
                <Typography className="text-center d-block mb-2"
            color="error" variant="subtitle1"
            component="span"
            gutterBottom>
            {error}
          </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            onChange={({target:{value}}) => dispatch(form.FIRST_NAME(value))}
            value={firstName}
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            id="lastName"
            name="lastName"
            label="Last name"
            onChange={({target:{value}}) => dispatch(form.LAST_NAME(value))}
            fullWidth
            value={lastName}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={({target:{value}}) => dispatch(form.EMAIL(value))}
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            id="password"
            name="password"
            label="Set password"
            fullWidth
            type="password"
            value={password}
            onChange={({target:{value}}) => dispatch(form.PASSWORD(value))}
            autoComplete="password"
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            variant="outlined"
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            value={line1}
            onChange={({target:{value}}) => dispatch(form.ADDRESS_LINE1(value))}
            autoComplete="address address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            variant="outlined"
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            value={pincode}
            onChange={({target:{value}}) => dispatch(form.ADDRESS_PINCODE(value))}
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            variant="outlined"
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            value={city}
            onChange={({target:{value}}) => dispatch(form.ADDRESS_CITY(value))}
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="state"
            name="state"
            variant="outlined"
            label="State"
            autoComplete="shipping address-level3"
            value={state}
            onChange={({target:{value}}) => dispatch(form.ADDRESS_STATE(value))}
            fullWidth />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="gender-err">Gender</InputLabel>
            <Select
              labelId="gender-err"
              id="gender"
              name="gender"
              value={gender}
              onChange={({target:{value}}) => dispatch(form.GENDER(value))}
              autoComplete="gender"
            >
              <MenuItem value="male">
                <em>Male</em>
              </MenuItem>
              <MenuItem value="female">
                <em>Female</em>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="dob-month-err">Month</InputLabel>
            <Select
              labelId="dob-month-err"
              id="dob-month"
              name="month"
              value={mm}
              onChange={({target:{value}}) => dispatch(form.DOB_MM(value))}
              autoComplete="birthday month"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                months.map((month, index) => <MenuItem key={index} value={month}>{month}</MenuItem>)
              }
            </Select>
            <FormHelperText>your birthday</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            required
            id="date"
            name="date"
            label="Date"
            type="number"
            value={dd}
            autoComplete="birthday date"
            onChange={({target:{value}}) => dispatch(form.DOB_DD(value))}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            required
            id="year"
            name="year"
            label="Year"
            type="number"
            value={yy}
            onChange={({target:{value}}) => dispatch(form.DOB_YY(value))}
            autoComplete="birthday year"
          />
        </Grid>
      </Grid>
      <div className="mx-auto w-50">
      <Grid xs={12} item>
            <Grid container
              justify="space-between"
              alignItems="center"
              style={{ width: '100%' }}>
              <Grid item xs={6} className="text-left">
                <Button variant="text" color="primary" onClick={handler}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6} className="text-right">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={addAccountToCollection}
                >Add Account
                </Button>
              </Grid>

            </Grid>
          </Grid>
          </div>
    </React.Fragment>
        </Paper>
    )
}

export default AddAccount;