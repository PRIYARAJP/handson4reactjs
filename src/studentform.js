
import './App.css';
import React, { useState } from "react";
// function Studentform() {

function Studentform() {
  const [showdata,setshowdata]=useState(false)
  const [Allformdata,setAllformdata ]=useState([])
  const [formvalues, setformvalues] =useState({
    Name:"",
    Age:"",
    Course:"",
    Batch:"",

  });
   const Handlechange =(event)=>{
      const {name ,value} =event.target;
      setformvalues({...formvalues,[name]:value})
     
     
   };
   
  //  console.log("formvalues",formvalues);
   if(showdata){
      return(
       
          <>
        
          <br /><br />
          <div className='feild'>
          <fieldset><legend>Name:</legend>
          <input type="text"
             
             name="Name"
             value={formvalues.Name}
              onChange={
               Handlechange  
             }/>
          </fieldset>
          <fieldset><legend>Age:</legend>
          <input type="numbers"
             
              name="Age"
              value={formvalues.Age}
               onChange={
                Handlechange  
              }/>
          </fieldset>
          <fieldset><legend>Course:</legend>
          <input type="text"
             
             name="Course"
             value={formvalues.Course}
              onChange={
               Handlechange  
             }/>
          </fieldset>
          <fieldset><legend>Batch:</legend>
          <input type="text"
              
              value={formvalues.Batch}
              onChange={
                Handlechange  
              }
              name="Batch"/>
              
          </fieldset>
          </div>
   
          {/* <form  >
              <input type="text"
             
              name="Name"
              value={formvalues.Name}
               onChange={
                Handlechange  
              }/>
                   <br />
        
             
               <br />
               <label>Age : </label>
              <input type="number"
             
              name="Age"
              value={formvalues.Age}
               onChange={
                Handlechange  
              }/>
                   <br />
        
             
               <br />
               <label>Course : </label>
              <input type="text"
             
              name="Course"
              value={formvalues.Course}
               onChange={
                Handlechange  
              }/>
                   <br />
        
             
               <br />
              <label>Batch : </label>
              <input type="text"
              
              value={formvalues.Batch}
              onChange={
                Handlechange  
              }
              name="Batch"/>
              
              <br />
            
              <br />
               */}
              {/* <label>Change : </label>
              <input 
              type="text"
             
              value={formvalues.Change}
              onChange={
                Handlechange  
              }
              name="Change"/><br />
              
              <br />
              */}
              <br />
              <button type="submit" onClick={()=>{ setshowdata(false);
                 setformvalues({
                  Name:"",
                  Age:"",
                  Course:"",
                  Batch:"",
                 
              })
              }}>Cancel</button>
              <button type="submit"
             
              
              onClick={(params)=>{
                params.preventDefault();
                const tempobj =[...Allformdata];
                tempobj.push(formvalues);
                setAllformdata(tempobj);
                // console.log("all form data  =  " ,Allformdata);  
                setformvalues({
                    Name:"",
                    Age:"",
                    Course:"",
                    Batch:"",
                   
                })
                setshowdata(false);
             }}
             className='buttons'
                  >Submit</button>
          {/* </form> */}
          </>
          
      )
      
  }
  else{
    // console.log("Resultttttttt");
    let showon =(Name,Age,Course,Batch)=>{
           
      setformvalues({
        Name:[Name],
        Age:[Age],
        Course:[Course],
        Batch:[Batch],
       
      })
      setshowdata(true);
                }

                let Name1="john";
                let Name2="Roman";
                let age1=24;
                let age2=25;
                let Course="MERN";
                let Batch1="oct";
                let Batch2="sep";

    return(<>
     
     <div className="sttop">
<nav className="addbt1">Students Details</nav> 
<nav className="addbt"onClick={()=>{setshowdata(true);}}

>Add New Student</nav>
</div>
     <table className="tableupdate" 
    //  border={1}
           >
            <tr  className="newwer">
             
                <td>Name</td>
                <td>Age </td>
                <td>Course </td>
                <td>Batch </td>
                <td>value</td>
            </tr> <hr />
            <tr  className="updateer"
               
            >
                <td>{Name1}</td>
                <td >{age1}</td>
                <td >{Course}</td>
                <td >{Batch1}</td>
                <td 
                className='edit'
                onClick={()=> 

                {showon(Name1,age1,Course,Batch1)}
                 }
                 >Edit</td>
               
            </tr><hr></hr>
            <tr  className="updateer"
               
            >
                <td>{Name2}</td>
                <td >{age2}</td>
                <td >{Course}</td>
                <td >{Batch2}</td>
                <td onClick={()=>  
                          
                {showon(Name1,age1,Course,Batch1)}
                 } className='edit'
                 >Edit</td>
               
            </tr><hr></hr>
            <tr  className="updateer"
               
               >
                   <td>{Name1}</td>
                   <td >{age1}</td>
                   <td >{Course}</td>
                   <td >{Batch1}</td>
                   <td onClick={()=>            
                   {showon(Name1,age1,Course,Batch1)}
                    } className='edit'
                    >Edit</td>
                  
               </tr><hr></hr>
               <tr  className="updateer"
                  
               >
                   <td>{Name2}</td>
                   <td >{age2}</td>
                   <td >{Course}</td>
                   <td >{Batch2}</td>
                   <td onClick={()=>            
                   {showon(Name1,age1,Course,Batch1)}
                    } className='edit'
                    >Edit</td>
                  
               </tr><hr></hr>
               <tr  className="updateer"
               
               >
                   <td>{Name1}</td>
                   <td >{age1}</td>
                   <td >{Course}</td>
                   <td >{Batch1}</td>
                   <td onClick={()=>            
                   {showon(Name1,age1,Course,Batch1)}
                    } className='edit'
                    >Edit</td>
                  
               </tr><hr></hr>
               <tr  className="updateer"
                  
               >
                   <td>{Name2}</td>
                   <td >{age2}</td>
                   <td >{Course}</td>
                   <td >{Batch2}</td>
                   <td onClick={()=>            
                   {showon(Name1,age1,Course,Batch1)}
                    } className='edit'
                    >Edit</td>
                  
               </tr><hr></hr>
          
                  
   



           {Allformdata.map((value,index)=>{


          let showon =(Name,Age,Course,Batch)=>{
           
setformvalues({
  Name:[Name],
  Age:[Age],
  Course:[Course],
  Batch:[Batch],
 
})
setshowdata(true);
          }
         
          
          return (<>
         
         
            <tr  className="updateer"
               key={index}
            >
                <td>{value.Name }</td>
                <td>{value.Age }</td>
                <td>{value.Course }</td>
                <td>{value.Batch }</td>
                
                <td><span


                 onClick={()=>
                 {showon(value.Name,value.Age ,value.Course ,value.Batch)}
                // {showon(event)}
                 }
                 className='edit'
                 >Edit</span></td>
            </tr><hr></hr>
           {/* Name : {value.name } | Department : {value.Department} | Rating :{value.rating} */}
         
          </>
          ) 
       
          }
          )
          
          
          }
         
           </table>

  <div  className='buttonsstrick'>
    
     <button onClick={()=>{setshowdata(true);}}  className='buttons'>GO BACK</button>
     </div>
     
    </>)
   
    
  }
} 


export default Studentform;