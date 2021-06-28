import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { months } from '../../helpers/constants';
import { actions } from '../../store';
import { useDispatch,useSelector } from 'react-redux';

export const Basic = () => {
  const {form} = actions;
  const {firstName,lastName,email,password,address:{line1,state,city,pincode},dob:{dd,mm,yy},gender} = useSelector(state => state.form);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
            value={state}
            onChange={({target:{value}}) => dispatch(form.ADDRESS_STATE(value))}
            fullWidth />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small" variant="outlined">
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
          <FormControl fullWidth size="small" variant="outlined">
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
            size="small"
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
            size="small"
            onChange={({target:{value}}) => dispatch(form.DOB_YY(value))}
            autoComplete="birthday year"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Basic;