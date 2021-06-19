import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { months } from '../../helpers/constants';
import formStore from '../../store/modules/form';

export const Basic = () => {
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
            onChange={(ev) => formStore.dispatch({ type: "FIRST_NAME", value: ev.target.value })}
            size="small"
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
            onChange={({ target }) => formStore.dispatch({ type: "LAST_NAME", value: target.value })}
            fullWidth
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
            onChange={(ev) => formStore.dispatch({ type: "EMAIL", value: ev.target.value })}
            onInput={(ev) => formStore.dispatch({ type: "EMAIL", value: ev.target.value })}
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
            onChange={({ target }) => formStore.dispatch({ type: "PASSWORD", value: target.value })}
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
            onChange={({ target }) => formStore.dispatch({ type: "ADDRESS_LINE1", value: target.value })}
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
            onChange={({ target }) => formStore.dispatch({ type: "ADDRESS_PINCODE", value: target.value })}
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
            size="small"
            onChange={({ target }) => formStore.dispatch({ type: "ADDRESS_CITY", value: target.value })}
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="state"
            name="state"
            variant="outlined"
            label="State/Province/Region"
            autoComplete="shipping address-level3"
            size="small"
            onChange={({ target }) => formStore.dispatch({ type: "ADDRESS_STATE", value: target.value })}
            fullWidth />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small" variant="outlined">
            <InputLabel id="gender-err">Gender</InputLabel>
            <Select
              labelId="gender-err"
              id="gender"
              name="gender"
              onChange={({ target }) => formStore.dispatch({ type: "GENDER", value: target.value })}
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
              onChange={({ target }) => formStore.dispatch({ type: "DOB_MM", value: target.value })}
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
            autoComplete="birthday date"
            onChange={({ target }) => formStore.dispatch({ type: "DOB_DD", value: target.value })}
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
            size="small"
            onChange={({ target }) => formStore.dispatch({ type: "DOB_YY", value: target.value })}
            autoComplete="birthday year"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Basic;