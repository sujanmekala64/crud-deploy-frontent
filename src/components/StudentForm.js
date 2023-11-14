import {useState,useEffect} from 'react';
function StudentForm(props){
    const [name,setName] = useState(props.nameValue);
    const [email,setEmail] = useState(props.emailValue);
    const [rollno,setRollno] = useState(props.rollnoValue);
    const arr = [name,email,rollno];  //[sujan,sujan@gmail.com,33]
    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollno(props.rollnoValue);
    },[props.nameValue,props.emailValue,props.rollnoValue]) 
    const handleClick = () =>{
            props.getState(arr);
    } 
    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue}  onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="enter your name"></input>
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="enter your email"></input>
            <input defaultValue={props.rollnoValue} onChange={(event)=>setRollno(event.target.value)} class="form-control my-3" placeholder="enter your roll number"></input>
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}
export default StudentForm;