 const FIRST_NAME = (value) => ({ type: "FIRST_NAME", value });

 const LAST_NAME = value => ({type:"LAST_NAME",value});

 const PASSWORD = value => ({type:"PASSWORD",value});

 const EMAIL = value => ({type:"EMAIL",value});

 const DOB_DD = value => ({type:"DOB_DD",value});

 const DOB_MM = value => ({type:"DOB_MM",value});

 const DOB_YY = value => ({type:"DOB_YY",value});

 const GENDER = value => ({type:"GENDER",value});

 const ADDRESS_LINE1 = value => ({type:"ADDRESS_LINE1",value});

 const ADDRESS_CITY = value => ({type:"ADDRESS_CITY",value});

 const ADDRESS_STATE = value => ({type:"ADDRESS_STATE",value});

 const ADDRESS_PINCODE = value => ({type: "ADDRESS_PINCODE",value});

 const actions = {FIRST_NAME,LAST_NAME,PASSWORD,EMAIL,DOB_DD,DOB_YY,GENDER,ADDRESS_LINE1,ADDRESS_CITY,ADDRESS_STATE,ADDRESS_PINCODE};
 export default actions;