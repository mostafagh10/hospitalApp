import axios from 'axios';

export const addpatientprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/patient/signup' , data , config)

    return response
};

export const editpatientprocess = async (data,patientId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://smarthospitalback1.onrender.com/user/patient/${patientId}` , data , config)

    return response
};

export const getpatientsprocess = async () => {
    const response = await axios.get('https://smarthospitalback1.onrender.com/user/patient')

    return response
};

export const loginpatientprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }

    const response = await axios.post('https://smarthospitalback1.onrender.com/user/patient/login', data , config)

    return response
};

export const logoutdataprocess = async () => {

    const response = await axios.post('https://smarthospitalback1.onrender.com/user/patient/login')

    return response
};