import axios from 'axios';

/*           patient                    */
export const sendverificationcodeprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/patient/password/forget' , data , config)

    return response
};


export const confirmverificationcodeprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/patient/password/code/verification' , data , config)

    return response
};

export const confirmpasswordprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/patient/password/reset' , data , config)

    return response
};

/* --------------------------------------------------------------------------------------------------- */

/*                    doctor                               */
export const doctorsendverificationcodeprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/doctor/password/forget' , data , config)

    return response
};


export const doctorconfirmverificationcodeprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/doctor/password/code/verification' , data , config)

    return response
};

export const doctorconfirmpasswordprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/doctor/password/reset' , data , config)

    return response
};

/* --------------------------------------------------------------------------------------------------- */

/*                    admin                               */


export const adminsendverificationcodeprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/admin/password/forget' , data , config)

    return response
};


export const adminconfirmverificationcodeprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/admin/password/code/verification' , data , config)

    return response
};

export const adminconfirmpasswordprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/admin/password/reset' , data , config)

    return response
};