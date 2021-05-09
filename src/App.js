import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [result, setResult] = useState("PIYUSH");
    const clear_screen = () => {
        setResult("");
    }

    const handle_click = (e) => {
        if(result.charAt(0) == "E" || result.charAt(0) == "P"){
            // window.location.reload(false);
            setResult(e.target.name);
        }else{
            setResult(result.concat(e.target.name));
        }
    }

    const clear = (e) => {
        var temp = result.slice(0,-1);
        setResult(temp);
    }

    const show_result = (e) => {
        try{
            setResult(eval(result));
        }catch(e){
            setResult("ERROR");
        }
    }

    return(
        <div className = "main">
            <form>
                <input value = {result}/>
            </form>
            <div className="container">
                <button  className = "cl" onClick = {clear_screen}>Clear</button>
                <button onClick = {clear}>C</button>
                <button name = "/" onClick = {handle_click} >&divide;</button>
            </div>
            <div className="container">
                <button name = "7" onClick = {handle_click} >7</button>
                <button name = "8" onClick = {handle_click} >8</button>
                <button name = "9" onClick = {handle_click} >9</button>
                <button name = "*" onClick = {handle_click} >x</button>
            </div>
            <div className="container">
                <button name = "4" onClick = {handle_click} >4</button>
                <button name = "5" onClick = {handle_click} >5</button>
                <button name = "6" onClick = {handle_click} >6</button>
                <button name = "-" onClick = {handle_click} >-</button>
            </div>
            <div className="container">
                <button name = "1" onClick = {handle_click} >1</button>
                <button name = "2" onClick = {handle_click} >2</button>
                <button name = "3" onClick = {handle_click} >3</button>
                <button name = "+" onClick = {handle_click} >+</button>
            </div>
            <div className="container">
                <button name = "0" onClick = {handle_click} >0</button>
                <button name = "." onClick = {handle_click} >.</button>
                <button className = "cl" onClick = {show_result}>=</button>
            </div>
            
        </div>
    )
}

export default App;