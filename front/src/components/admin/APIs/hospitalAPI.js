import axios from 'axios';

export const addhospitalprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/hospital' , data , config)

    return response
};

export const edithospitalprocess = async (data,hospitalId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://smarthospitalback1.onrender.com/hospital/${hospitalId}` , data , config)

    return response
};

export const gethospitalprocess = async () => {
    const response = await axios.get('https://smarthospitalback1.onrender.com/hospital')

    return response
};

