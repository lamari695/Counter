  import React from "react"
  export default function Display(props){
let dis = (<div>
<button id='display'>{props.count}</button>
</div>)
return dis
}

 export function Increase(props){
let increase = (<div>
<button onClick={props.inc} id='Increase'>increase</button>
</div>)
return increase
}

 export function Descrease(props){
let decrease = (<div>
<button onClick={props.dec} id='Decrease'>descrease</button>
</div>)
return decrease
}
export function Undo (props){
let reset = (<div>
<button onClick={props.rec}id='Reset'>Rest</button>

</div>)
return reset
}
;
