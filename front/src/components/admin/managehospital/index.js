import React , {useState,useEffect} from 'react';
import './style.css'
import {Link , useHistory} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {GET_HOSPITALS , DELETE_HOSPITAL} from '../../../redux/actions/hospitalAction'
import { useSelector } from 'react-redux'
import { gethospitalprocess } from '../APIs/hospitalAPI'
import {showloading} from '../helpers/loader'


const Managehospital = () => {
    let history = useHistory();
    const dispatch = useDispatch();

      const [hospitals , sethospitals] = useState(null)
      const [loading , setloading] = useState(false)

      const loadhospitals = async () => {
          await gethospitalprocess().then((response) => {
              sethospitals(response.data)
          }).catch((err) => {
              console.log(err)
          });
      }
      useEffect(() => {
          loadhospitals();
      },[])

      const [hospitals2 , sethospitals2] = useState(null)

      const loadhospitals2 = async () => {
          await gethospitalprocess().then((response) => {
              sethospitals2(response.data)
          }).catch((err) => {
              console.log(err)
          });
      }
      useEffect(() => {
          loadhospitals2();
      },[])

      const filterContent = (hospitals , searchterm) => {
        const result = hospitals.filter((hospital) => hospital.name.includes(searchterm))
        sethospitals(result)
      }
      const handletextsearch = async e => {
        const searchterm = e.currentTarget.value
        await gethospitalprocess().then((response) => {
          filterContent(response.data , searchterm)
      }).catch((err) => {
          console.log(err)
      });
    
      }

      const makedeleteprocess = async(hospitalId) => {
        setloading(true);
        await axios.delete(`https://smarthospitalback1.onrender.com/hospital/${hospitalId}`).then(() => {
          history.push('/admin/manageadmin')
          history.push('/admin/managehospital')
        }).catch((err) => {
          history.push('/admin/managehospital')
        })
      }

    return(
    <div>
        <div className="container" style={{marginTop:'30px' , textAlign:'center'}}>
        {loading && showloading()}
            <Link to="/admin/addhospital" style={{textDecoration:'none'}}>
                <button className="btn btn-outline-info btn-block managehospitalbutton" data-toggle="modal">
                    <i className="fas fa-plus"></i> Add hospital
                </button>
            </Link>
        
            <select onChange={handletextsearch} className="selectsearch">
            <option value="" disabled selected hidden>search by hospital name</option>
                {hospitals2 && hospitals2.map((c) => (
                    <option key={c._id}>{c.name}</option>
                ))}
            </select>


        <table className="managehospitaltable">
        <thead className="bg-info">
            <th>hospital name</th>
            <th>Delete</th>
            <th>Update</th>
        </thead>
        <tbody>
        {hospitals && hospitals.map(hospital => (
              <tr key={hospital.Name}>
              <td data-label="hospital Name"><a href={`/hospital/${hospital._id}`}>{hospital.name}</a></td>
              <td data-label="Delete">
                <button className="btn btn-danger text-white" onClick={() => makedeleteprocess(hospital._id)}><i className="fas fa-trash-alt"></i></button>             
              </td>
              <td data-label="Update">
              <a href={`/admin/manage/edithospital/${hospital._id}`}>
                <button className="btn btn-success text-white" ><i className="fas fa-edit"></i></button> 
                </a> 
              </td>
              </tr>
           ))}
        </tbody> 
        </table>
        </div>
    </div>
    )
}

export default Managehospital;