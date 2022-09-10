import React,{useState} from "react";
import './styles.css'
import './styles-priority.css'
import api from "../../services/api";

function Notes({data , handleDelete , hangleChangePriority}){


    const [changedNote,setChangedNote] = useState('')


    function handleEdit(e,priority){
        e.style.cursor = 'text';
        e.style.borderRadius = '5px';

        if(priority){
            e.style.boxShadow ='0 0 5px white'
        }else{
            e.style.boxShadow = '0 0 5px gray'
        }

    }

    async function handleSave(e,notes){
        e.style.cursor = 'default';
        e.style.boxShadow = 'none'
        if(changedNote && changedNote !== notes ){
            await api.post(`/contents/${data._id}`,{
                notes:changedNote,
            })
        }
    }

    return(
        <li className={data.priority? "notepad-infos-priority":"notepad-infos"}>
            <div>
                <strong>{data.title}</strong>
                    <div onClick={()=>handleDelete(data._id)}>
                    x
                    </div>
                </div>
                <textarea 
                onClick={e=>handleEdit(e.target,data.priority)}
                onChange={e=>setChangedNote(e.target.value)}
                onBlur={e=>handleSave(e.target,data.notes)}
                defaultValue={data.notes}>
                </textarea>
            <span onClick={()=> hangleChangePriority(data._id)}>
            !</span>
        </li>
    )
}



export default Notes