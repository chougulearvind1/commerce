
import axios, { AxiosRequestConfig } from 'axios';
import React, { useState } from 'react'

import Cookies from 'js-cookie'

interface form_error{
    UserName:string,
    password:string
  }
  interface form_data{
    UserName:string,
    password:string
  }

  interface modal_prop{
    closeModal:any,

}

const LoginModal:React.FC<modal_prop> = ({closeModal}) => {
    const [Errors, setErrors] = useState<form_error>({
        UserName:'',password:''
      })
      const [Form_Data, setForm_Data] = useState<form_data>({
        UserName:'',password:''
      })
     
  
       // validate  userName  and password
      const validate = async () => {
        let errors:form_error={
         UserName:'',password:'' 
        }
        if(!Form_Data.UserName)errors.UserName='User Name or Email is required'
        if(!Form_Data.password)errors.password='password required'
        const config:AxiosRequestConfig={
          headers:{
            "Content-Type":"application/json"
          }
        }
        
        try {
          const resp=await axios.post('http://localhost:5000/API/auth/login',Form_Data,config)
          // if request is sucessfull set the cookies
        if(await resp.data.success){
          Cookies.set('token',resp.data.token ,{expires:1})
          Cookies.set('LoggedUser',resp.data.LoggedUser,{expires:1})
          console.log('login',resp.data);     
          Cookies.set('userName',resp.data.UserName ,{expires:1})
          closeModal()          
          //if login sucessful then navigate to Home
          // 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
          if(resp.status===200){
          
            alert('login sucessful')
          }
          alert('Logged Sucessfully')
  
        }
        } catch (error:any) {
          alert(error)
          
        }
          return errors;
      }
      
      const Submit = async (e:any) => {
          e.preventDefault();
          const validate_error= await validate()  
          if(Object.keys(validate_error).length!==0){     
            setErrors( validate_error)
          }
      }
      const handle = (e:any) => {
        const {value,name}=e.target;
        setForm_Data({...Form_Data,[name]:value.trim()})
      }
      
    const tab =-1;
    return (     
        <div>
          <div className={`modal d-block `} tabIndex={tab} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header ">
            <h5 className="modal-title justify-content-between">Login</h5>
            <button type="button" className="close" onClick={closeModal} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form action="" method="" onSubmit={Submit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                        <input type="text" name="UserName" id="" className={`form-control ${Errors.UserName?'is-invalid':''}`} placeholder='Enter User Name'value={Form_Data.UserName}onChange={handle}/>{Errors.UserName && <div className='invalid-feedback'>{Errors.UserName}</div> }
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fa fa-lock"></i></span>
                        <input type="text" name="password" id="" className={`form-control ${Errors.password?'is-invalid':''}`} placeholder='Enter password' value={Form_Data.password} onChange={handle}/>{Errors.password && <div className="invalid-feedback">{Errors.password}</div> }
                    </div>
                    
                    <div className="row">
                    <div className="col-6">
                        <button type="submit" className="btn btn-primary px-4">Login</button>
                    </div>
                    <div className="col-6 text-right">
                    <p className="mb-3">Not registered? <a href="/Register">Register here</a></p>
                    </div>
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

export default LoginModal