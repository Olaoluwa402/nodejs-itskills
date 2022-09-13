import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from '../Spinner/Spinner'
import Message from '../Message/Message'
import Input from '../Input/Input'
import {createPostAction} from '../../redux/actions/postActions'
import Button from '../Button/Button'

import styles from '../Contact/Contact.module.css'

const PostForm = () => {
    const dispatch = useDispatch()
const [state, setState] = useState({
    title:'',
    body:'',
    image:''
})

const [errors, setErrors] = ({
    title:'',
    body:'',
    image:''
})

    const {loading, error, post} = useSelector((state)=> state.createPost)

    const changeHandler= (e)=>{
        const {name, value} = e.target;

        setState({
            ...state,
            [name]:value
        })
    }

    const validate = (title,body,image) => {
            if(!title){
                    setErrors({...errors, title:'provide title'})
                    return
            }
            if(!body){
                setErrors({...errors, title:'provide body'})
                return
        }

        if(!image){
            setErrors({...errors, title:'provide image'})
            return
         }
    }    
    const submitHandler= (e)=>{
        e.preventDefault()
        const {title, body, image, } = state
        //validation
         validate(title,body, image)
      
        dispatch(createPostAction(title, body, image))

        setState({
            title:'',
            body:'',
            image:''
        })
    }

  return (
    <div>
        <form className={styles.form}>
    
            <Input inputProperties={{
                    type:'text',
                    name:'title',
                    placeholder:'title',
                    value:state.title,
                    onChange:changeHandler
                }}/>

            <Input inputProperties={{
                    type:'file',
                    name:'image',
                    placeholder:'image',
                    value:state.image,
                    onChange:changeHandler
                }}/>

                <textarea col={10} row={30} onChange={changeHandler} name='body' placeholder='Enter content'>

                </textarea>

                {error && (<Message message='dangerMessage'>{error}</Message>)}
                  
                 {loading ? (<Spinner />) : (
                    <Button text='Submit' onClick={submitHandler}/>
                 )}
            </form>
    </div>
  )
}

export default PostForm