import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { finalDOB, finalName } from "../../helpers/methods";
import { imgUrl } from "../../helpers/constants";
import { actions } from "../../store";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';
import { FormHelperText } from '@material-ui/core';

const UserTable = ({handler}) => {
    const { users,profile } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    let { user } = actions;
    useEffect(() => {
      dispatch(user.GET_ALL_USERS());
    }, [dispatch,user]);
    return (
        <TableContainer className="w-90 mx-auto my-3 border-all-light-1">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="overline" component="span">
                  user
                </Typography>
              </TableCell>
              {profile.role ===2 &&<TableCell align="center">
                <Typography variant="overline" component="span">
                  role
                </Typography>
              </TableCell>}
              <TableCell align="center">
                <Typography variant="overline" component="span">
                  email
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="overline" component="span">
                  gender
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="overline" component="span">
                  date of birth
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="overline" component="span">
                  actions
                </Typography>
              </TableCell>
              {profile.role===2 && <TableCell align="center">
                <Typography variant="overline" component="span">
                  manage
                </Typography>
              </TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(({ firstName,_id, lastName, profilePicture, email, gender, dob,role,manager }, index) =>
              <TableRow key={index}>
                <TableCell align="center">
                  <Box className="w-fit mx-auto" display="flex" flexDirection="row" justifyItems="space-between"
                    alignItems="center">
                    <Avatar src={imgUrl(profilePicture)} className="mr-2" />
                    <Typography variant="subtitle1"
                      component="span" className="d-block text-capitalize">{
                        finalName(firstName, lastName)}</Typography>
                  </Box>
                </TableCell>
               {profile.role===2 && <TableCell align="center">
                <FormControl fullWidth size="small" variant="outlined">
            <Select
              labelId="role-err"
              id="role"
              name="role"
              value={role}
              autoComplete="role"
              onChange={({target}) => target.value !=="" && dispatch(user.UPDATE_USER({formData:{role:target.value},_id}))}
            >
              <MenuItem value="">
                <em>Assign Role</em>
              </MenuItem>
              <MenuItem value={0}>
                <em>Regular</em>
              </MenuItem>
              <MenuItem value={1}>
                <em>Manager</em>
              </MenuItem>
              <MenuItem value={2}>
                <em>Admin</em>
              </MenuItem>
            </Select>
          </FormControl>
          </TableCell>}
                <TableCell align="center">
                  <Typography variant="subtitle1"
                    component="span">{email}</Typography>
                </TableCell>
                <TableCell align="center">
                <Typography variant="subtitle1"
                    component="span" className="text-capitalize">{gender}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle1"
                    component="span" className="text-capitalize">{finalDOB(dob)}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Box className="mx-auto w-fit">
                  <Box flexDirection="row" display="flex" justifyItems="space-between">
                    <Box className="mx-1" onClick={() => history.push(`/update/${_id}`)}><CreateIcon/></Box>
                    {profile.role===2 && <Box className="mx-1" onClick={() => dispatch(user.DELETE_USER(_id))}><DeleteIcon/></Box>}
                  </Box>
                  </Box>
                </TableCell>
                {profile.role===2 && !(role===1) ? <TableCell align="center">
                <FormControl fullWidth size="small" variant="outlined">
            <Select
              labelId="manager-err"
              id="manager"
              name="manager"
              autoComplete="manager"
              value={manager||"Add Supervisor"}
              onChange={({target}) => dispatch(user.UPDATE_USER({formData:{manager:target.value},_id}))}
            >
              <MenuItem value="">
                <em>Add Supervisor</em>
              </MenuItem>
              {users.filter(user => user.role ===1 && user._id!==_id)?.map((item,index) => <MenuItem key={index} value={item._id||""}>
                <em>{finalName(item.firstName,item.lastName)}</em>
              </MenuItem>)}
            </Select>
            {!manager && <FormHelperText>Add supervisor</FormHelperText>}
          </FormControl>
          </TableCell>:<TableCell></TableCell>}
              </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default UserTable
