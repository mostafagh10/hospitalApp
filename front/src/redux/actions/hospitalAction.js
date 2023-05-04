import {Showsuccessmessage,Showerrormessage} from '../constants/messagesConstant'
import {Gethospitals , Gethospital , DeleteHospital} from '../constants/hospitalConstant'
import axios from 'axios'

export const GET_HOSPITALS = () => async dispatch => {
    try {
        const response = await axios.get('https://smarthospitalback1.onrender.com/hospital')
        dispatch({type:Gethospitals , payload:response.data})
    } catch (err) {
        console.log("gethospitals error is ",err)
        dispatch({type:Showerrormessage , payload:err.response.data.error})
    }
}
export const GET_HOSPITAL = (hospitalId) => async dispatch => {
    try {
        const response = await axios.get(`https://smarthospitalback1.onrender.com/hospital/get/${hospitalId}`)
        dispatch({type:Gethospital , payload:response.data})
    } catch (err) {
        console.log("gethospital error is ",err)
        dispatch({type:Showerrormessage , payload:err.response.data.error})
    }
}
export const DELETE_HOSPITAL = hospitalId => async dispatch => {
    try {
        const response = await axios.delete(`https://smarthospitalback1.onrender.com/hospital/${hospitalId}`)
        dispatch({type:DeleteHospital , payload:response.data})
    } catch (err) {
        console.log("deletehospital error is ",err)
        dispatch({type:Showerrormessage , payload:err.response.data.error})
    }
}