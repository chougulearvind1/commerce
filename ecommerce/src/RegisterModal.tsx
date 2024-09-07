import axios, { AxiosRequestConfig } from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface modal_prop{
    closeModal:any,

}
interface form_error{
    Name:string;
    UserName:string,
    Email:string,
    password:string,
    confirm_password:string

}
interface Form_Data{
    Name:string;
    UserName:string,
    Email:string,
    password:string,
}

interface registeration{
    success:boolean,
    message:string,
    
}
const RegisterModal:React.FC<modal_prop> = ({closeModal}) => {
  
    const [Form_Data, setForm_Data] = useState<Form_Data>({
        Name:'',
        UserName:'',
        Email:'',
        password:''
        
       })
       
        const [errors, seterrors] = useState<form_error|null>({
            Name:'',
            UserName:'',
            Email:'',
            password:'',
            confirm_password:''
        })
       
        const [confirm_password, setconfirm_password] = useState('')
        const Navigate=useNavigate() ;
        //  Here we cheacks  validation  of feild on client side before send
       const validate = async ()=> {
         let errors:form_error={
             Name: '',
             UserName: '',
             Email: '',
             password: '',
             confirm_password:''
         };
        //  validate data  at client side and set all error in erros object
         if(!Form_Data.Name) errors.Name=' Name is required ';
         if(!Form_Data.UserName)errors.UserName='user Name is required';
         if(!Form_Data.Email)errors.Email='Email Address is required'
         if(!Form_Data.password)errors.password='password required'
         if(!(Form_Data.password===confirm_password)|| !Form_Data.password) errors.confirm_password='Both password not same'
         try {
            const config:AxiosRequestConfig={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const resp=await axios.post<registeration>('http://localhost:5000/API/auth/register',Form_Data,config);
             
            if((await resp).data.success){         
              
              Navigate('/login')                 
            }
            
         } catch (error:any) {
    
            alert(error)
    
         }
       
         return errors;
    
    
       }
     
       
       const handle = (e:any) => {
        const {name,value}=e.target;
        setForm_Data({...Form_Data,[name]:value.trim()})
        
       }
       
       const confirmation =  (e:any) => {
        const {value}=e.target;
        setconfirm_password(value.trim())
        
       }
    
    
       const Submit = async (e:any) => {   
        e.preventDefault()  
       const validate_error= await validate();
       if(Object.keys(validate_error).length===0){    
       seterrors(null);
       }else{
        seterrors(await validate_error)
       }
       }
    const tab=-1;    
    return (     
      <div>
        <div className={`modal d-block `} tabIndex={tab} role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header ">
          <h5 className="modal-title justify-content-between">Register</h5>
          <button type="button" className="close" onClick={closeModal} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="" method="get" onSubmit={Submit}>
               <div className="mb-3 input-group "><span className="input-group-text"><i className="fa fa-user"></i></span><input type="text" name="Name" id="" className={`form-control ${errors?.Name && errors.Name?'is-invalid':''}`}placeholder=' Enter Name' value={Form_Data.Name} onChange={handle} />{errors?.Name && errors.Name && <div className='invalid-feedback'>{errors.Name}</div> }</div>
               <div className="mb-3 input-group "><span className="input-group-text"><i className="fa fa-id-badge"></i></span><input type="text" name="UserName" id="" className={`form-control ${errors?.UserName && errors.UserName?'is-invalid':''}`} placeholder='Enter User Name'value={Form_Data.UserName}onChange={handle}/>{errors?.UserName && errors.UserName && <div className='invalid-feedback'>{errors.UserName}</div> }</div>
               <div className="mb-3 input-group "><span className="input-group-text"><i className="fa fa-envelope"></i></span><input type="text" name="Email" id="" className={`form-control ${errors?.Email &&  errors.Email?'is-invalid':''}`}placeholder='Enter Email Address'value={Form_Data.Email} onChange={handle} />{errors?.Email && errors.Email && <div className="invalid-feedback">{errors.Email}</div> }</div>
               <div className="mb-3 input-group "><span className="input-group-text"><i className="fa fa-lock"></i></span><input type="text" name="password" id="" className={`form-control ${errors?.password && errors.password?'is-invalid':''}`} placeholder='Enter password' value={Form_Data.password} onChange={handle}/>{errors?.password && errors.password && <div className="invalid-feedback">{errors.password}</div> }</div>
               <div className="mb-3 input-group "><span className="input-group-text"><i className="fa fa-lock"></i></span><input type="text" name="Confirm_password" id="" className={`form-control ${errors?.confirm_password && errors.confirm_password?'is-invalid':''}`} placeholder='Confirm above Password' onChange={confirmation}/>{errors?.confirm_password && errors.confirm_password && <div className="invalid-feedback">{errors.confirm_password}</div> }</div>
               <div className="mb-3 input-group ">   <button type="submit" className="btn btn-primary px-4">Register</button></div>
               <div className="text-center">
               <p className="mb-3">Already registered? <a href="/login">Login here</a></p>
               </div>
        </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>        
        </div>
      </div>
    </div>
  </div>        
      </div>
    )
}

export default RegisterModal