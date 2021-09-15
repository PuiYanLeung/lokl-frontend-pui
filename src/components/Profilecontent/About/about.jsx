import React, {Component} from 'react';
import "./about.css"
import EditButton from "./editbutton.png"

class Aboutmebox extends Component{
 state ={
     value:"About me!!",
     isInEditMode: false

 }
 changeEditMode = () => {
     this.setState({
            isInEditMode: !this.state.isInEditMode
         })
 }

 updateComponentValue = () => {
     this.setState({
         isInEditMode: false,
         value: this.refs.theTextInput.value
     })
 }
 renderEditView = () => {
     return <div>
         <input
         type="text"
         defaultValue={this.state.value}
         ref="theTextInput"
         />
         <button onClick={this.changeEditMode}>X</button>
         <button onClick={this.updateComponentValue}>Ok</button>
         <button img src={EditButton} alt="editicon" onClick={this.changeEditMode}>Edit</button>
     </div>
 }

 
 renderDefaultView =() =>{
     return  <div>
     <button onClick={this.changeEditMode}>Edit</button>
     {this.state.value}
     </div>
 }
 render() {
     return this.state.isInEditMode ?
     this.renderEditView() :
     this.renderDefaultView()
    
 }
}
export default Aboutmebox