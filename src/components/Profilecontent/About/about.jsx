import React, {Component} from 'react';
import "./about.css"
import EditButton from "./editbutton.png"
import Xbt from "./X.png"
import ok from "./OK.png"

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
         className="input"
         type="text"
         defaultValue={this.props.aboutmsg ? this.props.aboutmsg : this.state.value}
         ref="theTextInput"
         />
         <div className="xbutton"> <img src={Xbt} alt="xBUTTON" width="25px" height="35px" onClick={this.changeEditMode}/></div>
         <div className="okbtn"> <img src={ok} alt="okBUTTON" width="28px" height="32px" onClick={this.updateComponentValue}/></div>

    
     </div>
 }

 
 renderDefaultView =() =>{
     return  <div>
     <div className="editbutton"> <img src={EditButton} alt="EDITBUTTON" width="33px" height="38px"onClick={this.changeEditMode} /></div>
     <div className="Value">{this.props.aboutmsg ? this.props.aboutmsg : this.state.value}</div>
     </div>
 }
 render() {
     return this.state.isInEditMode ?
     this.renderEditView() :
     this.renderDefaultView()
    
 }
}
export default Aboutmebox