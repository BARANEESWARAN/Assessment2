import './App.css';
import axios from 'axios';
import AddProduct from './Components/Addcourse';
import Head from './Components/navbar';
import { useState, useEffect } from "react";
import ProductsData from './Components/courseData';
import Footer from './Components/footer';
function App() {

  const [newdata, Setnewdata] = useState([])
  const [newdata1, Setnewdata1] = useState(0)

  let url =" http://localhost:3000/resume"


  const getNotes=()=>{
    return axios.get(`${url}`);
}
  const addNotes=(newvalues)=>{
    return axios.post(`${url}`,newvalues)
   

}

useEffect(() => {
   
  getNotes().then((data) => {
    Setnewdata(data.data)
 
})
},[newdata1])

  const SaveData = (newvalues) => {
    
    // export const addNotes=(newNotes)=>{
    //   return axios.post(`${url}`,newNotes)
   console.log(newvalues,"newvalues")
    let notes = newdata;
    newvalues.notesId = newdata.length + 1;
    notes.push(newvalues);
    Setnewdata(notes);
    Setnewdata1(newdata1 + 1)
    addNotes(newvalues).then((data) => {
   
  })
 
  
     
  }

 




  


 



  return (
   
    <div className="App">
       <Head/>
      <ProductsData new={newdata}/> 
      <AddProduct  savedata={SaveData}/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
        
    </div>
  );
}

export default App;
