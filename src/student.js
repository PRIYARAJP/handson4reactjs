import React,{ useState} from "react";
import Studentform from "./studentform";

  //State components
 const Student =() => {

         // const
   const [Allformdata,setAllformdata ]=useState()
   const [update,setupdate ]=useState(
    {
      a:"Students Details",
      b:<span className="addbt">Add New Student</span>
    }
   )
//    const [addnewst,setaddnewstudent ]=useState()

   
//  const [formData , setFormData] =useState(
//  {
//     name :"",
//     Department :"",
//     rating :"",
//  }
//  );
//  const Handlechange =(event)=>{
  
//  setFormData({...formData, [event.target.name] : event.target.value})

//  };

let opening =()=>{
  setupdate(
    {
      a:"",
      b:"",
    }
  )
    setAllformdata(
      <Studentform></Studentform>
    )

}

    return(

        <>
               <div className="sttop">
<nav className="addbt1">{update.a}</nav> 
<nav  onClick={()=>{opening()

}}>{update.b}</nav>
</div>
<p>{Allformdata}</p>
{/* <input type="button" name="Submit"></input> */}

        {/* <form ><br /><br />
            <label>NAME : 
            <input type="text" 
            name="name"
             onChange={
              Handlechange  
            }
            /></label>
            <br />
            <label>Department : 
            <input type="text" 
            name="Department"
 
            onChange={
               Handlechange  }
            /><br />
            </label>
            <label>rating : 
            <input type="text"
             name="rating"
            onChange={
               Handlechange  
            }
            />
             
            <br />
            </label>
            <button 
            type="button"
             onClick={(params)=>{
               params.preventDefault();
               const tempobj =[...Allformdata];
               tempobj.push(formData);
               setAllformdata(tempobj);
               console.log("all form data  =  " ,Allformdata);             
            }}

                >Submit</button>
        </form>
<div>
         {Allformdata.map((value,index)=>{


        return (<>
        <div
         key={index}
         >
         Name : {value.name } | Department : {value.Department} | Rating :{value.rating}
        </div>
        </>
        ) 
     
        }
        )
        
        
        }

</div> */}

        </>
    )
};

export default Student;