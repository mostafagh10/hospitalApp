import React , {useState , useEffect} from 'react';
import './style.css'
import {Link , useHistory} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {GET_ALLADMINS,DELETE_ADMIN} from '../../../redux/actions/adminAction'
import { getadminsprocess } from '../APIs/adminAPI'
import { useSelector } from 'react-redux'
import {showloading} from '../helpers/loader'

const ManageAdmin = () => {

  let history = useHistory();
  const dispatch = useDispatch();

  const [admins2 , setadmins2] = useState(null)
  const [admins , setadmins] = useState(null)
  const [loading , setloading] = useState(false)

    const loadadmins = async () => {
        await getadminsprocess().then((response) => {
            setadmins(response.data)
        }).catch((err) => {
            console.log(err)
        });
    }
    useEffect(() => {
        loadadmins();
    },[])

    const loadadmins2 = async () => {
      await getadminsprocess().then((response) => {
          setadmins2(response.data)
      }).catch((err) => {
          console.log(err)
      });
  }
  useEffect(() => {
      loadadmins2();
  },[])

  const filterContent = (admins , searchterm) => {
    const result = admins.filter((admin) => admin.name.includes(searchterm))
    setadmins(result)
  }
  const handletextsearch = async e => {
    const searchterm = e.currentTarget.value
    await getadminsprocess().then((response) => {
      filterContent(response.data , searchterm)
  }).catch((err) => {
      console.log(err)
  });

  }

  const makedeleteprocess = async(adminId) => {
    setloading(true);
    await axios.delete(`https://smarthospitalback1.onrender.com/user/admin/${adminId}`).then(() => {
      history.push('/admin/managespecialization')
      history.push('/admin/manageadmin')
    }).catch((err) => {
      history.push('/admin/manageadmin')
    })
  }

    const showTheItems = () => (
    <div>
        <div className="container" style={{marginTop:'30px' , textAlign:'center'}}>
        {loading && showloading()}
        <h1 className="pagetitle" data-aos="fade-right">list of admins</h1>
        <hr className="titlehr" size="20" data-aos="fade-right" />
            <Link to="/admin/addadmin" style={{textDecoration:'none'}}>
                <button className="btn btn-outline-info btn-block manageadminbutton" data-toggle="modal">
                    <i className="fas fa-plus"></i> Add Admin
                </button>
            </Link>

            <select onChange={handletextsearch} className="selectsearch">
            <option value="" disabled selected hidden>search by admin name</option>
                {admins2 && admins2.map((c) => (
                    <option key={c._id}>{c.name}</option>
                ))}
            </select>

        
        <table className="manageadmintable">
        <thead className="bg-info">
            <th>admin name</th>
            <th>admin's last login</th>
            <th>Delete</th>
            <th>Update</th>
        </thead>
        <tbody>
        {admins && admins.map(admin => (
              <tr key={admin.Name}>
              <td data-label="admin Name"><a href={`/admin/admin/${admin._id}`}>{admin.name}</a></td>
              <td data-label="admin's last login">{new Intl.DateTimeFormat('en-GB', { 
                month: 'long', 
                day: '2-digit',
                year: 'numeric', 
            }).format(new Date(admin.lastLogin))}</td>
              <td data-label="Delete">
                <button className="btn btn-danger text-white" onClick={() => makedeleteprocess(admin._id)}><i className="fas fa-trash-alt"></i></button>          
              </td>
              <td data-label="Update">
                <a href={`/admin/manage/editadmin/${admin._id}`}>
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

    return(
        <div>
            {showTheItems()}
        </div>
    )
}

export default ManageAdmin;