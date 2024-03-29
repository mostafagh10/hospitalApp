import React , {useState,useEffect} from 'react';
import './style.css'
import {Link , useHistory} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {GET_DISEASES,DELETE_DISEASE} from '../../../redux/actions/diseaseAction'
import { useSelector } from 'react-redux'
import { getdiseaseprocess } from '../APIs/diseaseAPI'
import {showloading} from '../helpers/loader'

const Managedisease = () => {
    let history = useHistory();
    const dispatch = useDispatch();

      const [diseases , setdiseases] = useState(null)
      const [loading , setloading] = useState(false)

      const loaddiseases = async () => {
          await getdiseaseprocess().then((response) => {
              setdiseases(response.data)
          }).catch((err) => {
              console.log(err)
          });
      }
      useEffect(() => {
          loaddiseases();
      },[])

    const [diseases2 , setdiseases2] = useState(null)

    const loaddiseases2 = async () => {
        await getdiseaseprocess().then((response) => {
            setdiseases2(response.data)
        }).catch((err) => {
            console.log(err)
        });
    }
    useEffect(() => {
        loaddiseases2();
    },[])

    const filterContent = (diseases , searchterm) => {
        const result = diseases.filter((disease) => disease.diseaseName.includes(searchterm))
        setdiseases(result)
      }
      const handletextsearch = async e => {
        const searchterm = e.currentTarget.value
        await getdiseaseprocess().then((response) => {
          filterContent(response.data , searchterm)
      }).catch((err) => {
          console.log(err)
      });
    
      }

      const makedeleteprocess = async(diseaseId) => {
        setloading(true);
        await axios.delete(`https://smarthospitalback1.onrender.com/disease/${diseaseId}`).then(() => {
          history.push('/admin/manageadmin')
          history.push('/admin/managedisease')
        }).catch((err) => {
          history.push('/admin/managedisease')
        })
      }

    return(
    <div>
        <div className="container" style={{marginTop:'30px' , textAlign:'center'}}>
        {loading && showloading()}
        <h1 className="pagetitle" data-aos="fade-right">list of diseases</h1>
        <hr className="titlehr" size="20" data-aos="fade-right" />
            <Link to="/admin/adddisease" style={{textDecoration:'none'}}>
                <button className="btn btn-outline-info btn-block managediseasebutton" data-toggle="modal">
                    <i className="fas fa-plus"></i> Add disease
                </button>
            </Link>

            <select onChange={handletextsearch} className="selectsearch">
            <option value="" disabled selected hidden>search by disease name</option>
                {diseases2 && diseases2.map((c) => (
                    <option key={c._id}>{c.diseaseName}</option>
                ))}
            </select>
        
        {diseases ?
        <table className="managediseasetable">
        <thead className="bg-info">
            <th>disease name</th>
            <th>Delete</th>
            <th>Update</th>
        </thead>
        <tbody>
        {diseases && diseases.map(disease => (
              <tr key={disease.Name}>
              <td data-label="disease Name"><a href={`/disease/${disease._id}`}>{disease.diseaseName}</a></td>
              <td data-label="Delete">
                <button className="btn btn-danger text-white" onClick={() => makedeleteprocess(disease._id)}><i className="fas fa-trash-alt"></i></button>             
              </td>
              <td data-label="Update">
              <a href={`/admin/manage/editdisease/${disease._id}`}>
                <button className="btn btn-success text-white" ><i className="fas fa-edit"></i></button> 
                </a> 
              </td>
              </tr>
           ))}
        </tbody> 
        </table>
        : <div style={{textAlign:'center'}}><h2>there's no disease added yet</h2></div>}
        </div>
    </div>
    )
}

export default Managedisease;