import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Avatar from '@material-ui/core/Avatar';
import TableCell from '@material-ui/core/TableCell';
import { Link as RouterLink } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import { actions } from '../store';
import { baseUrl, userEndpoint } from '../helpers/constants';
import { finalName, logoutUser } from '../helpers/methods';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Account = () => {
    const dispatch = useDispatch();
    const { profile, isLoading, isSuccess } = useSelector(state => state.user);
    const { firstName, lastName, gender, email, address, role, profilePicture,dob:{dd,mm,yy} } = profile;
    const { user } = actions;
    const [open, setOpen] = useState(false);
    useEffect(() => {
        let timer = setTimeout(() => dispatch(user.GET_PROFILE()), 100);
        return () => clearTimeout(timer);
    }, [dispatch, user]);
    return (
        (isLoading || !isSuccess || !profile || !address) ? <LinearProgress className="my-3 w-50 mx-auto" color="primary" /> : <Grid container
            justify="center"
            alignItems="center">
            <Grid item
                className="my-3"
                xs={12}
                sm={6}
            >
                <Avatar className="profileImage d-block mx-auto s-5e" src={`${baseUrl}${userEndpoint}/picture/${profilePicture}`} alt={firstName + ' ' + lastName} />

                <Typography component="h1" className="text-capitalize text-center my-3" variant="h4">{

                    role > 0 ? 'Your Portfolio' : `Welcome, ${firstName} ${lastName}`}</Typography>
                <Box display="flex" flexDirection="row" justifyContent="center" className="my-3 text-center">
                   {role>0 && <Link component={RouterLink} to="/">
                        <Button variant="contained" color="primary">Home</Button>
                    </Link>}
                </Box>
                <TableContainer component={Paper}>
                    <Table size="medium">
                        <TableBody>
                            {role > 0 && <TableRow>
                                <TableCell>
                                    <Typography component="span" variant="overline">name</Typography>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Typography component="span" className="text-capitalize" variant="h6">{finalName(firstName, lastName)}</Typography>
                                </TableCell>
                            </TableRow>}
                            <TableRow>
                                <TableCell>
                                    <Typography component="span" variant="overline">birthday</Typography>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Typography component="span" variant="h6">{`${dd} ${mm} ${yy}`}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography component="span" variant="overline">gender</Typography>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Typography component="span" variant="h6">{gender}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography component="span" className="d-block my-3" variant="h6">Contact Info</Typography>
                <TableContainer component={Paper}>
                    <Table size="medium">
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography component="span" variant="overline">email</Typography>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Typography component="span" variant="h6">{email}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >
                                    <Typography component="span" variant="overline">address</Typography>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Typography className="text-capitalize d-block" component="span" variant="h6">{address.line1}</Typography>
                                    <Typography className="text-capitalize d-block" component="span" variant="h6">{address.city}</Typography>
                                    <Typography className="text-capitalize d-block" component="span" variant="h6">{address.state}</Typography>
                                    <Typography className="text-capitalize d-block" component="span" variant="h6">Pincode - {address.pincode}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display="flex" justifyContent="space-between" flexDirection="row">
                    <Button onClick={logoutUser} variant="contained" className="w-fit mx-auto my-3" color="primary">Log out</Button>
                    <Button component={RouterLink} to={`/update/${profile._id}`} variant="contained" className="w-fit mx-auto my-3" color="primary">
                        Update user
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Account
