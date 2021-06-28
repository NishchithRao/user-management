const ADD_USER = value => ({type:"ADD_USER",value});

const CREATE_USER = value => ({type:"CREATE_USER",value});

const UPDATE_USER = value => ({type: "UPDATE_USER",value});

const DELETE_USER = value => ({type:"DELETE_USER",value});

const GET_USER = value => ({type:"GET_USER",value});

const SET_ANOTHER_USER = value => ({type:"SET_ANOTHER_USER",value});

const GET_ALL_USERS = () => ({type:"GET_ALL_USERS"});

const ALL_USERS = value => ({type:"ALL_USERS",value});

const PROFILE = value => ({type:"PROFILE",value});

const START_LOADING = value => ({type:"START_LOADING",value});

const SUCCESS = () => ({type:"SUCCESS"});

const ERROR = value => ({type:"ERROR",value});

const LOGIN_USER = value => ({type:"LOGIN_USER",value});

const GET_PROFILE = value => ({type: "GET_PROFILE"});

const SET_PICTURE = value => ({type: "SET_PICTURE",value});

const actions = {ADD_USER,UPDATE_USER,SET_ANOTHER_USER,ALL_USERS,CREATE_USER,GET_ALL_USERS,SET_PICTURE,LOGIN_USER,GET_PROFILE,DELETE_USER,GET_USER,PROFILE,SUCCESS,START_LOADING,ERROR};

export default actions;