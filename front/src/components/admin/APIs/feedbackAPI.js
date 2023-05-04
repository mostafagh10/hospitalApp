import axios from 'axios';

export const addfeedbackprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://smarthospitalback1.onrender.com/feedback' , data , config)

    return response
};

export const getfeedbacksprocess = async () => {
    const response = await axios.get('https://smarthospitalback1.onrender.com/feedback')

    return response
};