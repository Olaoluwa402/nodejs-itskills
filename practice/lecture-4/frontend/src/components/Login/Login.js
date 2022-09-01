import React, {useState} from 'react'
import Input from '../Input/Input'
import InputLabel from '../Input/InputLabel'
import styles from '../Register/Register.module.css'
import Button from '../Button/Button'

const Login = () => {
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
  return (
    <div  className= {styles.formWrapper}>
        <form  className= {styles.form}>
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
                <Button text='Login' style={{
                    backgroundColor:'black',
                    color:'white',
                }}/>
            </div>
        </form>
    </div>
  )
}

export default Login