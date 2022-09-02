import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Input from '../Input/Input'
import InputLabel from '../Input/InputLabel'
import styles from './Register.module.css'
import Button from '../Button/Button'
import { createUserAction } from '../../redux/actions/userActions'

const Register = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        email:'',
        password:''
    })

    const changeHandler = (e) => {
        const {name, value} = e.target
        setState({
            ...state,
            [name]:value
        })
        // setState((state)=> {
        //         return {
        //             ...state,
        //             [name]:value
        //         }
        // })
    }

    const submitHandler = (e)=>{
        console.log('hit')
            e.preventDefault();

            if(!state.email || ! state.password){
                alert('Provide email and password')
                return
            }

            dispatch(createUserAction(state.email, state.password))

            setState({
                email:'',
                password:''
            })

    }
  return (
    <div  className= {styles.formWrapper}>
        <form className= {styles.form}>
            <div className= {styles.inputGroup}>
                <InputLabel title='Email'/>
                <Input 
                inputProperties={{
                        type:'email',
                        name:'email',
                        placeholder:'example@gmail.com',
                        value:state.email,
                        onChange: changeHandler 
                }}
            />
            </div>

            <div className= {styles.inputGroup}>
                <InputLabel title='Password'/>
                <Input 
                inputProperties={{
                        type:'password',
                        name:'password',
                        placeholder:'Password',
                        value:state.password,
                        onChange: changeHandler 
                }}
            />
            </div>

            <div className="action">
                <Button text='Submit' style={{
                    backgroundColor:'black',
                    color:'white',
                }}
                onClick={submitHandler}
                />
            </div>
        </form>
    </div>
  )
}

export default Register