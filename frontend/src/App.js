import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from '@material-ui/core/Paper';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { actions } from "./store";
import UserTable from "./components/Admin/UserTable";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NavBar from "./components/NavBar";

function App() {
  const { users, profile, isLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();
  let { user } = actions;
  const [open, setOpen] = useState(false);
  const [addAccountModal, setAddAccountModal] = useState(false);
  useEffect(() => {
    dispatch(user.GET_ALL_USERS());
    dispatch(user.GET_PROFILE());
  }, [dispatch, user]);
  const modalOpen = (id) => {
    setOpen(true);
    dispatch(user.GET_USER(id));
  }
  const handleClose = () => setOpen(false);
  return <div className="App">
    {!users || !profile ? <LinearProgress className="w-50 mx-auto" color="primary" /> :
      <Paper elevation={0}>
        <Paper>
          <Grid container
            justify="space-between"
            alignItems="center"
            className="w-100 p-2"
            direction="row">
            <NavBar />
          </Grid>
        </Paper>
        <Typography variant="h5" className="text-center">{profile.role === 2 ? "All Users" : "Users under your supervision"}</Typography>
        {isLoading && <LinearProgress className="w-50 mx-auto" color="primary" />}
        <UserTable />
      </Paper>
    }
  </div>;
}

export default App;
