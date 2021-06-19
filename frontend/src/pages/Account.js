import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const Account = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile);
    const loading = useSelector(state => state.isLoading);
    const success = useSelector(state => state.isSuccess);
    const {firstName,lastName,gender} = user;
    useEffect(() => {
        dispatch({type:"GET_PROFILE"});
    },[]);
    console.log(user);
    return (
        (loading || !success || !user) ? <CircularProgress color="primary"/> : <Grid container
            justify="center"
            alignItems="center">
            <Grid item
                xs={12}
                sm={6}
            >
                <Typography component="h1" variant="h4">Your Personal Info</Typography>
                <TableContainer component={Paper}>
                    <Table size="medium">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography component="span" variant="h5">User</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={1}>
                                    <Typography component="span" variant="overline">name</Typography>
                                </TableCell>
                                <TableCell colSpan={8}>
                                    <Typography component="span" variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
                                </TableCell>
                                <TableCell colSpan={8}>
                                    <Typography component="span" variant="subtitle1">{'>'}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={1}>
                                    <Typography component="span" variant="overline">birthday</Typography>
                                </TableCell>
                                <TableCell colSpan={8}>
                                    <Typography component="span" variant="h6">11 June, 1999</Typography>
                                </TableCell>
                                <TableCell colSpan={8}>
                                    <Typography component="span" variant="subtitle1">{'>'}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={1}>
                                    <Typography component="span" variant="overline">gender</Typography>
                                </TableCell>
                                <TableCell colSpan={8}>
                                    <Typography component="span" variant="h6">{gender}</Typography>
                                </TableCell>
                                <TableCell colSpan={8}>
                                    <Typography component="span" variant="subtitle1">{'>'}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default Account
