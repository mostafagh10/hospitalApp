
import axios from 'axios'
// import { BE_URL } from '../utils/URL'

// type >> 'admin', 'doctor', 'patient'
const loginUser = async (data, type) => {
        const response = await axios.post(`https://smarthospitalback1.onrender.com/user/${type}/login`, data)
        console.log(response)
        return response;
}

export default loginUser