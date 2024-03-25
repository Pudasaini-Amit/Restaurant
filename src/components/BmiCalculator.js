import React from "react";

function BmiCalculator(){

   const [height, setHeight]=React.useState(0);
   const [weight, setWeight]=React.useState(0);
   const [heightErrorMsg, setHeightErrorMsg]=React.useState("");
   const [weightErrorMsg, setWeightErrorMsg]=React.useState("");



   const calculate=()=>{
    
      var BMI=(weight/(Math.pow(height,2)));
      //setcalculate(BMI); setting to BMI value to calculate function
      //setcalculate((weight/(Math.pow(height,2)));  this can be done as well

      if(height<=0){
        return setHeightErrorMsg("Height should be more than 0");
      }
      setHeightErrorMsg("");
      if(weight<=0){
         return  setWeightErrorMsg("Weight should be more than 0");
      }
      setWeightErrorMsg("");

      document.getElementById("bmi").innerHTML=BMI;
   };

   return(
      <div>
         <h1>BMI calculator</h1>

         <label>Enter your height in Meter  </label>
         <input type="number" name="Height" value={height} id="height" min={0} onChange={(event)=>setHeight(event.target.value)}/>
         <span>{heightErrorMsg}</span>
         <br/><br/>



         <label>Enter your weight in KG  </label>
         <input type="number" name="Weight" value={weight} id="weight" min={0} onChange={(event)=>setWeight(event.target.value)}/>
         <span>{weightErrorMsg}</span>
         <br/> <br/>
         <button onClick={calculate}>Calculate</button>

         <p>Your BMI is:<span id="bmi"></span></p>
      </div>
   );
}
export default BmiCalculator;