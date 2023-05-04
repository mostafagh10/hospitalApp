import axios from 'axios';

export const addmedicineprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/medicine' , data , config)

    return response
};

export const editmedicineprocess = async (data,medicineId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://smarthospitalback1.onrender.com/medicine/${medicineId}` , data , config)

    return response
};

export const getmedicinesprocess = async () => {
    const response = await axios.get('https://smarthospitalback1.onrender.com/medicine')

    return response
};