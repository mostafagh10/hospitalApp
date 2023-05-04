import {Getfeedbacks} from '../constants/feedbackConstant'
import axios from 'axios'


export const GET_FEEDBACKS = (patientId) => async dispatch => {
    try {
        const response = await axios.get(`https://smarthospitalback1.onrender.com/feedback/get/${patientId}`)
        dispatch({type:Getfeedbacks , payload:response.data})
    } catch (err) {
        console.log("getfeedbacks error is ",err)
    }
}