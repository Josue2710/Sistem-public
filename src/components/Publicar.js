import { useState } from "react"
import { collection,addDoc,Timestamp } from "firebase/firestore"; 
import {db} from '../firebase-config'
import { useAuth } from "../authContext";



export function Publicar(){
    const [publi,setPubli] = useState('')
    const {user} = useAuth()
    const handleChange=({target})=>{
        setPubli(target.value)
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
            if(publi!=='')
            {

                await addDoc(collection(db, "publicaciones"), {
                    nombre:user.displayName ? user.displayName: '',
                    email:user.email,
                    creado:Timestamp.now().toDate().toString(),
                    post:publi
              });
              setPubli('')
            }
        }catch(err){
            alert(err.message)
        }

    }

    return(
        <div>
        { user &&
        <form onSubmit={handleSubmit}>
        <textarea type="textarea" value={publi} placeholder="Tu estado de animo?" onChange={handleChange}/>
        <button className="post">Publicar</button>
        </form>
        }
        </div>
    )
}

