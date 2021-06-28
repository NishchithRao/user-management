import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import {Link as RouterLink} from 'react-router-dom';
import { imgUrl } from '../helpers/constants';
import { finalName, returnRole } from '../helpers/methods';
import { useSelector } from 'react-redux';
import React from 'react';

const NavBar = ({handler}) => {
  const { profile } = useSelector(state => state.user);
    return (
        <React.Fragment>
            <Grid item>
              <Link underline="none" component={RouterLink} to="/account">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Avatar className="mx-1" src={imgUrl(profile.profilePicture)} alt={finalName(profile.firstName, profile.lastName)} />
                  <Box display="flex" flexDirection="column">
                  <Typography variant="subtitle1" className="text-capitalize" component="span">
                    {finalName(profile.firstName, profile.lastName)}
                  </Typography>
                  <Typography variant="overline" className="text-capitalize" component="span">
                    {returnRole(profile.role)}
                  </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
            {profile.role ===2 && <Grid item>
              <Link component={RouterLink} to="/create">
                <Button
                onClick={handler}
                  variant="contained"
                  color="primary">
                  Add Account
                </Button>
                </Link>
            </Grid>}
        </React.Fragment>
    )
}

export default NavBar
