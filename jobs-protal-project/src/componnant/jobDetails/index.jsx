import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Cookies from 'js-cookie';
import Header from "../header";
import './index.css';

const JobDetails = ()=>{

const {id} = useParams();

const token = Cookies.get("jwtToken");
const[allvalue,setvalue] = useState({

    alljob:{},

       
    
    
})

const[newarray,setaaray] = useState({

    Skills:[]
})

useEffect(()=>{


    const userDetailsAllData = async()=>{

        const api = `https://apis.ccbp.in/jobs/${id}`;

        const option = {

            method:"Get",

            headers:{

                Authorization:`Bearer ${token}`
            }


        }
        try {
            
            const response = await fetch(api,option);

            const data = await response.json();
         
            console.log(data);
             if(response.ok === true){

                setvalue({...allvalue,alljob:data.job_details});

                setaaray({...newarray,Skills:data.job_details.skills})

               
             }
             if(response.ok === true){

           
             }
        } 
        
        
        catch (error) {
            
            console.log("past code willbe exicuted");
        }
    }


    userDetailsAllData();

},[]);

return(
<>
    <Header/>
<div className="br-tags">
<br /><br /><br /><br /><br /><br /><br />
</div>

<div className="bg-contianer">
    <div className="jobdails-main-div container">

<img src={allvalue.alljob.company_logo_url} alt="" />

<div className="job-part-det">
    <p>{allvalue.alljob.title}  ({allvalue.alljob.employment_type})</p>
    <p>{allvalue.alljob.location}</p>
    <p>{allvalue.alljob.package_per_annum}</p>

    <hr />
    

</div>
<div className="job-discription">

<p>{allvalue.alljob.job_description}</p>

</div>


<div className="jobs-skillls">


{
    newarray.Skills.map(each=>(
<li key={each.id}>

    <p>{each.name}</p>

        <img src={each.image_url} alt="" />
        </li>
    ))
}    


</div>

    </div>
    </div>
    </>
   
)

}
export default JobDetails;