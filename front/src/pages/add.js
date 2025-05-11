import React, { useState } from "react";
import  "../style/add.css";

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  const [dis, setDis] = useState("container1");
  function Add(){
    setDis("container0");
  }
  function cancel(){
    setDis("container1");
  }
  return (
    <>
    <button onClick={Add}>Add Patient</button>
    <h1>{dis}</h1>
    <div className= {dis} >
      <div className="card">
        <h1 className="title">
          Patient Registration
        </h1>
        
        <form onSubmit={handleSubmit}>
          <div className="gridContainer">
            <div className="inputGroup">
              <label className="label">First Name:</label>
              <input
                type="text"
                className="input"
              />
            </div>
            
            <div className="inputGroup">
              <label className="label">Last Name:</label>
              <input
                type="text"
                className="input"
              />
            </div>
            
            <div className="inputGroup">
              <label className="label">Birth of a Date:</label>
              <input
                type="date"
                className="input"
              />
            </div>
            
            <div className="inputGroup">
              <label className="label">Email Address:</label>
              <input
                type="email"
                className="input"
              />
            </div>
          </div>
          
          <div className="walletAddressGroup">
            <label className="label">Wallet Address:</label>
            <input
              type="text"
              className="input"
            />
          </div>
          
          <div className="buttonContainer">
            <button type="button" className="cancelButton" onClick={cancel}> Cancel </button>
            <button
              type="submit"
              className="submitButton"
            >
              Add Patient
            </button>
          </div>
        </form>
      </div>
    </div>
    <h1>{dis}</h1>
    <h1>{dis}</h1>
    </>
    
  );
};

export default Index;