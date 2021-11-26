import React,{useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import {Layer,DefaultButton,
    Stack,
    TextField,} from '@fluentui/react'
const styles ={
    btn:{
        background:'#fc2847',
        padding:'5%',
        width: '80%',
        marginLeft: '10%',
        marginTop: '15px',
        marginBottom: '15px',
        borderRadius: '15px'
    },
    text:{
        width: '80%',
    },
    stack:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:'10%',
        marginBottom: '0',
        width: '30%',
        background: '#f5f5f5',
        borderBottomLeftRadius: '35px',
        borderBottomRightRadius: '15px',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '35px',
    },
    layer:{
        position:'center'
    }
}

function Login(){
    const [isLoading,setLoading] = useState(false)
    function click(){
        setLoading(true)
    }
    return(
        <div>
            <Stack style={styles.stack} tokens={{childrenGap: 15}}>
                <TextField label ="Email" errorMessage="Empty email"/>
                <TextField label="Password with reveal button"
                           type="password"
                           canRevealPassword
                           revealPasswordAriaLabel="Show password"/>
                <TextField label="Repeat password"
                           type="password"/>
                <DefaultButton text="Log In" onClick={click} style={styles.btn}/>
            </Stack>
        </div>
        )
}
export default  Login