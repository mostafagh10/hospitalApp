import {Showsuccessmessage,Showerrormessage} from '../constants/messagesConstant'
import {Getdisease , Getdiseases , Deletedisease} from '../constants/diseasesConstant'
import axios from 'axios'

export const GET_DISEASES = () => async dispatch => {
    try {
        const response = await axios.get('https://smarthospitalback1.onrender.com/disease')
        dispatch({type:Getdiseases , payload:response.data})
    } catch (err) {
        console.log("getdiseases error is ",err)
        dispatch({type:Showerrormessage , payload:err.response.data.error})
    }
}

export const GET_DISEASE = (diseaseId) => async dispatch => {
    try {
        const response = await axios.get(`https://smarthospitalback1.onrender.com/disease/get/${diseaseId}`)
        dispatch({type:Getdisease , payload:response.data})
    } catch (err) {
        console.log("getdisease error is ",err)
        dispatch({type:Showerrormessage , payload:err.response.data.error})
    }
}

export const DELETE_DISEASE = diseaseId => async dispatch => {
    try {
        const response = await axios.delete(`https://smarthospitalback1.onrender.com/disease/${diseaseId}`)
        dispatch({type:Deletedisease , payload:response.data})
    } catch (err) {
        console.log("deletedisease error is ",err)
        dispatch({type:Showerrormessage , payload:err.response.data.error})
    }
}