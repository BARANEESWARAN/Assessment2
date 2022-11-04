import React, { useState,useEffect } from 'react'


export default function ProductsData(props) {
 console.log(props,"propsss")
    const [values,setvalues]=useState()
 
    useEffect(()=>{
        console.log("kkkk")
    },[])
   


    
    const tableRows =props.new.map((item, i) => {

        console.log(i,"barfatttagt")
        return(
                <tr key={i=1}>
                  
                    
                    <td>{item.Coursename}</td>
                    <td>{item.CourseDuration}</td>
                    <td>{item.Price}</td>
                   

                    

                </tr>
    ) })

  
     
    
   






 

       
    
    
 
    return (
        
        <div>
    
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">Coursename </th>
                        <th scope="col">CourseDuration</th>
                        <th scope="col">Price</th>
                       
                    </tr>
                </thead>
                <tbody>
                 
                   {tableRows}
                </tbody>
            </table>
        </div>
    )
}
