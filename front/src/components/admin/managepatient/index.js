import React , {useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './style.css'
import {useDispatch} from 'react-redux'
import {GET_PATIENTS , DELETE_PATIENT} from '../../../redux/actions/patientAction'
import { useSelector } from 'react-redux'
import { getpatientsprocess } from '../APIs/patientAPI'
import {showloading} from '../helpers/loader'
import axios from 'axios';

const ManagePatient = () => {
    let history = useHistory();
    const dispatch = useDispatch();

  const [patients , setpatients] = useState(null)
  const [loading , setloading] = useState(false)

  const loadpatients = async () => {
      await getpatientsprocess().then((response) => {
          setpatients(response.data)
      }).catch((err) => {
          console.log(err)
      });
  }
  useEffect(() => {
      loadpatients();
  },[])

  const [patients2 , setpatients2] = useState(null)

  const loadpatients2 = async () => {
      await getpatientsprocess().then((response) => {
          setpatients2(response.data)
      }).catch((err) => {
          console.log(err)
      });
  }
  useEffect(() => {
      loadpatients2();
  },[])

  const filterContent = (patients , searchterm) => {
    const result = patients.filter((patient) => patient.name.includes(searchterm))
    setpatients(result)
  }
  const handletextsearch = async e => {
    const searchterm = e.currentTarget.value
    await getpatientsprocess().then((response) => {
      filterContent(response.data , searchterm)
  }).catch((err) => {
      console.log(err)
  });

  }

  const makedeleteprocess = async(patientId) => {
    setloading(true);
    await axios.delete(`https://smarthospitalback1.onrender.com/user/patient/${patientId}`).then(() => {
      history.push('/admin/manageadmin')
      history.push('/admin/managepatient')
    }).catch((err) => {
      history.push('/admin/managepatient')
    })
  }



    const showTheItems = () => (
    <div>
        <div className="container" style={{marginTop:'70px',textAlign:'center'}}>
        {loading && showloading()}
        <select onChange={handletextsearch} className="selectsearch">
            <option value="" disabled selected hidden>search by patient name</option>
                {patients2 && patients2.map((c) => (
                    <option key={c._id}>{c.name}</option>
                ))}
        </select>

        <table className="managepatienttable">
        <thead className="bg-info">
            <th>patient name</th>
            <th>Delete the patient</th>
        </thead>
        <tbody>
        {patients && patients.map(patient => (
              <tr key={patient._id}>
              <td data-label="patient Name"><a href={`/patient/${patient._id}`}>{patient.name}</a></td>
              <td data-label="Delete the patient">
                <button className="btn btn-danger text-white" onClick={() => makedeleteprocess(patient._id)}><i className="fas fa-trash-alt"></i></button>         
              </td>
              </tr>
           ))}
        </tbody> 
        </table>
        </div>
    </div>
    )

    return(
        <div>
            {showTheItems()}
        </div>
    )
}

export default ManagePatient;