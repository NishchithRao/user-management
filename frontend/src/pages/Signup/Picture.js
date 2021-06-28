import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CloudUpdate from '@material-ui/icons/CloudUpload';
import LinearProgress from '@material-ui/core/LinearProgress';
import { actions } from '../../store';
import { useParams } from 'react-router-dom';

const Picture = ({history}) => {
    const {id} = useParams();
    const [imgUrl, setImgUrl] = useState("");
    const { profile: { firstName, lastName },isLoading,isSuccess,anotherUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const {user} = actions;
    console.log((firstName + ' ' + lastName));
    useEffect(() => {
        anotherUser.profilePicture && history.push("/");
    },[anotherUser]);
    useEffect(() => {
        dispatch(user.SUCCESS(false));
        if(!firstName || !lastName) {
            dispatch(user.GET_PROFILE());
        }
    },[]);
    const setPicture = () => {
        let formData = new FormData();
        formData.set("picture",imgUrl);
        dispatch(user.SET_PICTURE({formData,id}));
    }
    console.log(imgUrl,isLoading);
    return (
        <div className="my-3">
            {isLoading && <LinearProgress color="primary" className="mx-auto w-50" />}
            <Typography component="h1" variant="h3" className="text-center">Add a Profile Image</Typography>
            <input onChange={({ target }) => setImgUrl(target.files[0])} 
            type="file" name="picture" id="profile" className="d-none" />
            <label htmlFor="profile"><Avatar className="account-create profileImage d-block my-3 mx-auto s-8e"
                src={imgUrl ? URL.createObjectURL(imgUrl) : ""}
                alt={(firstName + ' ' + lastName) || "A"} /></label>
                <Grid container
                justify="center"
                align="center">
            <Button 
            variant="contained" 
            color="primary" 
            startIcon={<CloudUpdate/>} 
            size="large"
            onClick={setPicture}
            className="mx-auto" 
            disabled={imgUrl===""}>
                <Typography 
                variant="overline">upload</Typography>
            </Button>
            </Grid>
        </div>
    )
}

export default Picture;
