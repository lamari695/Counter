import React from 'react';
import './App.css';
import { useState } from 'react';

import {  Increase , Descrease,Undo }  from './main_counter';
import Display from './main_counter';
import './main_counter.css';
function App() {

 const[count , new_count] = useState(0)
 function funcInc(){
    const increase = () => new_count(prevcount => prevcount + 1)
    return increase()
 }
 function funcDec(){
const dec = () =>new_count(prevcount=>prevcount-1);
return dec()
 }
 function funRest(){
const rest = () =>new_count(prevcount=>
  prevcount = 0)
return rest()


  
}
return(<div>
<Display count= {count}></Display>
<Descrease dec = {funcDec}></Descrease>
<Increase inc = {funcInc}></Increase>
<Undo rec = {funRest}></Undo>
</div>)
}
export default App;
