const ADD_USER = value => ({type:"ADD_USER",value});

const UPDATE_USER = value => ({type: "UPDATE_USER",value});

const DELETE_USER = value => ({type:"DELETE_USER",value});

const GET_USER = value => ({type:"GET_USER",value});

const PROFILE = value => ({type:"PROFILE",value});

const START_LOADING = value => ({type:"START_LOADING",value});

const SUCCESS = () => ({type:"SUCCESS"});

const ERROR = value => ({type:"ERROR",value});

const actions = {ADD_USER,UPDATE_USER,DELETE_USER,GET_USER,PROFILE,START_LOADING,ERROR};

export default actions;