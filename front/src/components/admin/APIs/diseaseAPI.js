import axios from 'axios';

export const adddiseaseprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/disease' , data , config)

    return response
};

export const getdiseaseprocess = async () => {
    const response = await axios.get('https://smarthospitalback1.onrender.com/disease')

    return response
};

export const editdiseaseprocess = async (data,diseaseId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://smarthospitalback1.onrender.com/disease/${diseaseId}` , data , config)

    return response
};