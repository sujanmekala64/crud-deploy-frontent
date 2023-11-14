import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Axios from 'axios';
function EditStudent(){
    const {id} = useParams();
    const [initialValue,setInitialValue] = useState({name:"",email:"",rollno:""});
    const [newData,setNewData] = useState([]);
    useEffect(()=>{
        Axios.get("https://crudrepo-deploy.onrender.com/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status===200){
                const {name,email,rollno} = res.data;
                setInitialValue({name,email,rollno});
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    },[id])
    const getState = (childData) => {
            setNewData(childData);
    }
    const handleSubmit = () =>{
       
        const data = {name:newData[0],email:newData[1],rollno:newData[2]};
        Axios.put("https://crudrepo-deploy.onrender.com/studentRoute/update-student/"+id,data)
        .then((res)=>{
            if(res.status===200){
                alert("Record updated successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }
    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState = {getState} 
                        nameValue={initialValue.name}
                        emailValue={initialValue.email}
                        rollnoValue={initialValue.rollno} >
                            Update Student
            </StudentForm>
        </form>
    )
}
export default EditStudent;