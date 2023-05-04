import axios from 'axios';

export const addadminprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/user/admin/signup' , data , config)

    return response
};

export const editadminprocess = async (data,adminId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://smarthospitalback1.onrender.com/user/admin/${adminId}` , data , config)

    return response
};

export const getadminsprocess = async () => {
    const response = await axios.get('https://smarthospitalback1.onrender.com/user/admin')

    return response
};

export const getadminssearchprocess = async (data) => {

    const response = await axios.get('https://smarthospitalback1.onrender.com/user/admin/find',data)

    return response
};