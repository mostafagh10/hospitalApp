import axios from 'axios';

export const addspecificationprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/specialization' , data , config)

    return response
};

export const getspecializationprocess = async () => {
    const response = await axios.get('https://smarthospitalback1.onrender.com/specialization')

    return response
};

export const editspecializationprocess = async (data,specializationId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://smarthospitalback1.onrender.com/specialization/${specializationId}` , data , config)

    return response
};