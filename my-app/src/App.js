import React,{useState,useEffect} from "react";

import './app.css'
import './global.css'
import './sidebar.css'
import './main.css'

import Notes from "./Components/Notes";

import api from './services/api'
import RadioButton from "./Components/RadionButton";

function App() {

 
  const [title,setTitles] = useState('')
  const [notes,setNotes] = useState('')
  const [allNotes,setAllNotes] = useState([])

  useEffect(()=>{
    async function getAllNotes(){
      
      const response = await api.get('/buscar',)
      setAllNotes(response.data)

    }
    getAllNotes()
  },[])


  async function handleSubmit(e){
    e.preventDefault();

    const response = await api.post('/annotations',{
      title,
      notes,
      priority:false
    })

    setTitles('')
    setNotes('')

    setAllNotes([...allNotes,response.data])

  }

  useEffect(()=>{
    function enableSubmitButton(){
      let btn = document.getElementById('btn_submit')
      btn.style.background='#FFD3CA'
      if(title && notes){
        btn.style.background = '#EB87FA'
      }
    }
    enableSubmitButton()
  },[title,notes])

  return (
    <div className="App">
       <aside>
         <strong>Caderno de Notas</strong>
         <form onSubmit={handleSubmit}>
            <div className="input-block">
               <label htmlFor="title">Título Da Anotação</label>
               <input
                 maxLength="30"
                 required
                 value={title}
                 onChange={e=>setTitles(e.target.value)}
               />
            </div>

            <div className="input-block">
              <label htmlFor="nota">Anotações </label>
              <textarea
               required
               value={notes}
               onChange={e=>setNotes(e.target.value)}

              ></textarea>
            </div>

             <button id="btn_submit" type="submit">salvar</button>

         </form>
         <RadioButton></RadioButton>
       </aside>
       <main>
          <ul>
            {allNotes.map(data=>(
               <Notes data={data}/>
            ))}
           
          </ul>
       </main>
    </div>
  );
}

export default App;
