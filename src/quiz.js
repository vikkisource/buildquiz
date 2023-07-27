
import React, {  useState }  from "react";
import {  useNavigate } from "react-router-dom";
import question from './assets/data.json';
function Quiz(){
 
 const [score,setscore] = useState();

   
  const handlechange = (e) =>{

     e.target.name = e.target.value;
     console.log(e.target.name);
      
    }
  
     
  
  const handlesubmit = (e) =>{
  
    e.preventDefault();
    

}
     
   
      // React.useEffect(()=>{
      
      //     if(!localStorage.getItem('name')) navigate('/');
      // })
    return  <div className="quizContainer">
        <h2 className="quizTitle">Quiz Title Here</h2>
        <form className="quizForm" onSubmit={handlesubmit}>
        { question && question.map( (data,index) => {
          return(
            <div key={data.id}>
                        
                      <div>
                        <p>{data.questionname}</p>
               {
                  data.answer && data.answer.map((qulist,index2) => { 
                return (
                  <li> 
                 {index}    {index2}
                    <input type="radio" name={'answer'+index } id={"answer"+index+index2} onChange={handlechange}  value={qulist.isoption} required/> 
                  <label htmlFor={"answer"+index+index2}>{qulist.option}</label> 
                  </li>
                    
                )
                    
                     
                    
                })
              }
              </div>
            </div>
          )
         
        }
        )}
            
            
            <div className="text-center">
                    <input type="submit" value='Submit' />
            </div>
        </form>

    </div>;
  }

export default Quiz;