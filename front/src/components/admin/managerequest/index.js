import React , {useState , useEffect} from 'react';
import './style.css'
import {Link , useHistory} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {GET_REQUESTS , APPROVE_REQUEST} from '../../../redux/actions/requestAction'
import {DELETE_DOCTOR} from '../../../redux/actions/doctorAction'
import { useSelector } from 'react-redux'
import { showloading } from '../helpers/loader';

const ManageRequest = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_REQUESTS())
      },[dispatch])
    
      const { requests } = useSelector(state => state.requests)
      const [loading , setloading] = useState(false)

      const makedeleteprocess = async(doctorId) => {
        setloading(true);
        await axios.delete(`https://smarthospitalback1.onrender.com/user/doctor/reject/${doctorId}`).then(() => {
          history.push('/admin/manageadmin')
          history.push('/admin/managerequest')
        }).catch((err) => {
          history.push('/admin/managerequest')
        })
      }

      const makeapproveprocess = async(doctorId) => {
        setloading(true);
        await axios.get(`https://smarthospitalback1.onrender.com/user/doctor/activate-status/${doctorId}`).then(() => {
          history.push('/admin/manageadmin')
          history.push('/admin/managerequest')
        }).catch((err) => {
          history.push('/admin/manageadmin')
          history.push('/admin/managerequest')
        })
      }

    return(
    <div>
        <div className="container" style={{marginTop:'70px'}}>
        {loading && showloading()}
        {requests?.length > 0 ?
        <table className="managerequesttable">
        <thead className="bg-info">
            <th>doctor name</th>
            <th>request's created at</th>
            <th>doctor specialization</th>
            <th>Approve the request</th>
            <th>Reject the requst</th>
        </thead>
        <tbody>
        {requests && requests.map(doctor => (
              <tr key={doctor.Name}>
              <td data-label="doctor Name"><a href={`/request/${doctor._id}`}>{doctor.name}</a></td>
              <td data-label="request's created at">{new Intl.DateTimeFormat('en-GB', { 
                month: 'long', 
                day: '2-digit',
                year: 'numeric', 
            }).format(new Date(doctor.createdAt))}</td>
            <td data-label="doctor specialization">{doctor.specialization}</td>
              <td data-label="Approve the requst">
                <button className="btn btn-success text-white" onClick={() => makeapproveprocess(doctor._id)} ><i className="fas fa-thumbs-up"></i></button> 
              </td>
              <td data-label="Reject the request">
                <button className="btn btn-danger text-white" onClick={() => makedeleteprocess(doctor._id)}><i className="fas fa-times-circle"></i></button>             
              </td>
              </tr>
           ))}
        </tbody> 
        </table>
        : <div style={{textAlign:'center'}}><h2>there's no request added yet</h2></div>}
        </div>
    </div>
    )
}

export default ManageRequest;