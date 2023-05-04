import React , {useState , useEffect} from 'react';
import './style.css'
import {Link , useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {GET_MEDICINES , DELETE_MEDICINE} from '../../../redux/actions/medicineAction'
import { useSelector } from 'react-redux'
import { getmedicinesprocess } from '../APIs/medicineAPI'
import {showloading} from '../helpers/loader'
import axios from 'axios';

const Managemedicine = () => {
    let history = useHistory();
    const dispatch = useDispatch();

      const [medicines , setmedicines] = useState(null)
      const [loading , setloading] = useState(false)

      const loadmedicines = async () => {
          await getmedicinesprocess().then((response) => {
              setmedicines(response.data)
          }).catch((err) => {
              console.log(err)
          });
      }
      useEffect(() => {
          loadmedicines();
      },[])


      const [medicines2 , setmedicines2] = useState(null)

      const loadmedicines2 = async () => {
          await getmedicinesprocess().then((response) => {
              setmedicines2(response.data)
          }).catch((err) => {
              console.log(err)
          });
      }
      useEffect(() => {
          loadmedicines2();
      },[])
  
      const filterContent = (medicines , searchterm) => {
          const result = medicines.filter((medicine) => medicine.name.includes(searchterm))
          setmedicines(result)
        }
        const handletextsearch = async e => {
          const searchterm = e.currentTarget.value
          await getmedicinesprocess().then((response) => {
            filterContent(response.data , searchterm)
        }).catch((err) => {
            console.log(err)
        });
      
        }

        const makedeleteprocess = async(medicineId) => {
            setloading(true);
            await axios.delete(`https://smarthospitalback1.onrender.com/medicine/${medicineId}`).then(() => {
              history.push('/admin/manageadmin')
              history.push('/admin/managemedicine')
            }).catch((err) => {
              history.push('/admin/managemedicine')
            })
          }

    return(
    <div>
        <div className="container" style={{marginTop:'30px' , textAlign:'center'}}>
        {loading && showloading()}
            <Link to="/admin/addmedicine" style={{textDecoration:'none'}}>
                <button className="btn btn-outline-info btn-block managemedicinebutton" data-toggle="modal">
                    <i className="fas fa-plus"></i> Add medicine
                </button>
            </Link>
        
            <select onChange={handletextsearch} className="selectsearch">
            <option value="" disabled selected hidden>search by medicine name</option>
                {medicines2 && medicines2.map((c) => (
                    <option key={c._id}>{c.name}</option>
                ))}
            </select>
        
        <table style={{width:'80%'}}>
        <thead className="bg-info">
            <th>medicine name</th>
            <th>Delete</th>
            <th>Update</th>
        </thead>
        <tbody>
        {medicines && medicines.map(medicine => (
              <tr key={medicine.Name}>
              <td data-label="medicine Name"><a href={`/medicine/${medicine._id}`}>{medicine.name}</a></td>
              <td data-label="Delete">
                <button className="btn btn-danger text-white" onClick={() => makedeleteprocess(medicine._id)}><i className="fas fa-trash-alt"></i></button>              
              </td>
              <td data-label="Update">
              <a href={`/admin/manage/editmedicine/${medicine._id}`}>
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

export default Managemedicine;