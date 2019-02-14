import React, { Component } from 'react';


class Book extends Component {
    state ={
        hide:'hidden'
        
    }

    // every time click any text or h1 will run the function 
    hideinfo=()=>{
       
        if(this.state.hide ==='false'){
            this.setState({hide :"hidden"});
        }else{
            this.setState({hide :'false'}); 
        }
    }

    render() {
        return (
         <ul>
              <h3 className={this.state.hide }>isbn : {this.props.info.isbn}</h3>
             <h1 onClick={this.hideinfo}>{this.props.info.title}</h1>
             <h2 className={this.state.hide }>{this.props.info.subtitle}</h2>
             <h3 className={this.state.hide }>The author :  {this.props.info.author}</h3>
          <h3 className={this.state.hide }>published : {this.props.info.published}</h3>
          <h3 className={this.state.hide }>publisher : {this.props.info.publisher}</h3>
          <h3 className={this.state.hide }> pages : {this.props.info.pages}</h3>
          <h3 className={this.state.hide }>The description : {this.props.info.description}</h3>
          <a className={this.state.hide } href={this.props.info.website}>Click me</a>
             
         </ul>
              );
            }
          }
  
      
   
  
  export default Book;