import { Screen } from "../components/Screen"
import { useState } from "react";
import { Button } from "../components/Button"

export const CalculatorPage=()=>{
    
    const [inp , updateArea] = useState('');

    const func=(val)=>{
        if(val === 'AC'){
            updateArea('');
        }
        else if(val === '='){
           try {
            updateArea(eval(inp).toString());


           } catch (error) {
                updateArea('ERROR');
           }
           

            
            
            
        }
        else if(val === 'Back'){
            let len = inp.length-1;
            
            updateArea( inp.substring(0,len));
        }   
        
        
        else{
            updateArea(inp + val);
            
        }

        console.log(inp);
        
    }

    return(
        <div className="container  main w-25 mt-5 border border-black rounded text-center">
           <div className="text">
           <Screen show={inp}/>
           </div>
            
            <div className="rows ms-3">
                {/* <div className="col-4"> */}
                    <Button fn={func} input ={inp} val='('/>
                    <Button fn={func} input ={inp} val=')'/>
                    <Button fn={func} input ={inp} val='%'/>
                    <Button fn={func} input ={inp} val='AC'/>
            </div>
                {/* </div> */}
                {/* <div className="col-4"> */}
                <div className="rows ">
                    <Button fn={func} input ={inp} val='7'/>
                    <Button fn={func} input ={inp} val='8'/>
                    <Button fn={func} input ={inp} val='9'/>
                    <Button fn={func} input ={inp} val='/'/>
                {/* </div> */}
                {/* <div className="col-4"> */}
                </div>
                <div className="rows ">
                    <Button fn={func} input ={inp} val='4'/>
                    <Button fn={func} input ={inp} val='5'/>
                    <Button fn={func} input ={inp} val='6'/>
                    <Button fn={func} input ={inp} val='*'/>
                {/* </div> */}
                </div>
                {/* <div className="col-4"> */}
                <div className="rows ">
                    <Button fn={func} input ={inp} val='1'/>
                    <Button fn={func} input ={inp} val='2'/>
                    <Button fn={func} input ={inp} val='3'/>
                    <Button fn={func} input ={inp} val='-'/>
                    </div>
                {/* </div> */}
                {/* <div className="col-4"> */}
                <div className="rows ">
                    <Button fn={func} input ={inp} val='0'/>
                    <Button fn={func} input ={inp} val='.'/>
                    <Button fn={func} input ={inp} val='='/>
                    <Button fn={func} input ={inp} val='+'/>
                    </div>
                {/* </div> */}
                <Button fn={func} input ={inp} val='Back'/>

            </div>

        
    )
}