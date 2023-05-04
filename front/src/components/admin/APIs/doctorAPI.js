import axios from 'axios';

export const adddoctorprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/doctor/signup' , data , config)

    return response
};

export const editdoctorprocess = async (data,doctorId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://smarthospitalback1.onrender.com/user/doctor/${doctorId}` , data , config)

    return response
};

export const getdoctorsprocess = async () => {
    const response = await axios.get('https://smarthospitalback1.onrender.com/user/doctor')

    return response
};

export const getrequestsprocess = async () => {
    const response = await axios.get('https://smarthospitalback1.onrender.com/user/doctor/request')

    return response
};