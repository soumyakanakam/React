import React, { Component } from 'react';
class AddInfo extends Component{
    state={
        name:"",
        age:"",
        email:"",
    };
    handleChange = (e) =>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);
        console.log(e.target.value);
        this.setState({
            [e.target.id]:e.target.value,
        });
    };
    render(){
        return(
            <form className='form'>
                <label>Enter name</label>
                <input id='name' placeholder='please enter name' onChange={this.handleChange} value=""/>
                <label>Enter DOB</label>
                <input id='DOB' placeholder='please enter DOB' onChange={this.handleChange}/>
                <label>Enter Email Id</label>
                <input id='Email Id' placeholder='please enter Email Id' onChange={this.handleChange}/>
                <label>Enter Contact Number</label>
                <input id='Contact Number' placeholder='please enter Contact Number' onChange={this.handleChange}/>
                <label>Tell me about yourself</label>
                <input id='Tell me about yourself' placeholder='please Tell me about yourself' onChange={this.handleChange}/>
            </form>
        )
    }
}

class AddInfo extends Component {
    render() {
        return 
           
        
    }
}

export default AddInfo;