import {Showsuccessmessage,Showerrormessage} from '../constants/messagesConstant'
import {Getpharmacies , Getpharmacy , Deletepharmacy} from '../constants/pharmacyConstant'
import axios from 'axios'

export const GET_PHARMACIES = () => async dispatch => {
    try {
        const response = await axios.get('https://smarthospitalback1.onrender.com/pharmacy')
        dispatch({type:Getpharmacies , payload:response.data})
    } catch (err) {
        console.log("getpharmacies error is ",err)
        dispatch({type:Showerrormessage , payload:err.response.data.error})
    }
}
export const GET_PHARMACY = (pharmacyId) => async dispatch => {
    try {
        const response = await axios.get(`https://smarthospitalback1.onrender.com/pharmacy/get/${pharmacyId}`)
        dispatch({type:Getpharmacy , payload:response.data})
    } catch (err) {
        console.log("getpharmacy error is ",err)
        dispatch({type:Showerrormessage , payload:err.response.data.error})
    }
}
export const DELETE_PHARMACY = pharmacyId => async dispatch => {
    try {
        const response = await axios.delete(`https://smarthospitalback1.onrender.com/pharmacy/${pharmacyId}`)
        dispatch({type:Deletepharmacy , payload:response.data})
    } catch (err) {
        console.log("deletepharmacy error is ",err)
        dispatch({type:Showerrormessage , payload:err.response.data.error})
    }
}