import axios from 'axios';

export const addpharmacyprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/pharmacy' , data , config)

    return response
};

export const editpharmacyprocess = async (data,pharmacyId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://smarthospitalback1.onrender.com/pharmacy/${pharmacyId}` , data , config)

    return response
};

export const getpharmaciesprocess = async () => {
    const response = await axios.get('https://smarthospitalback1.onrender.com/pharmacy')

    return response
};