import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import { userName ,userPassword} from '../Redux/Actions/actionIndex'

const UserDetails = (props) => {
    
    const {userName,userPassword,username,password} = props

    const userNameChage = (e) =>{
        const value = e.target.value
        userName(value)
    }

    const userPasswordChange = (e) =>{
        const values = e.target.value
        userPassword(values)
    }
    return (
        <div className='container'>
            <div>
                <label className='nametext'>UserName:</label>
                <input className='inp' type='text'   onChange={userNameChage}/>
            </div>
            <div>
                <label className='nametext'>password:</label>
                <input className='inp' type='password' onChange={userPasswordChange}/>
            </div>
            <button className='btn'>Submit</button>
            <div>
                <p>{username}</p>
                <p>{password}</p>
            </div>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return{
        username: state.username,
        password: state.password
    }
}


const mapDispatchToProps = {
    userName,
    userPassword
  };




export default connect(mapStateToProps,mapDispatchToProps)(UserDetails)
