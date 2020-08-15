import React, {Component} from 'react'


 export default class  SimpleComponent extends React.Component{
     constructor(props){
         super(props) 
         console.log(this.state)
     this.state = {
     mood:'happy'

     }

     handleClick= () => {
     this.setState = ({
         mood: "sad"
     })


     }


     }




 render () {
    return (
  <div >
  <button onClick={this.handleClick}>{this.state.mood} </button>
  
  
   </div>



    )




 }







}
