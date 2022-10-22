import './App.css';
import React, { Component }  from 'react';
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <AddEmployee />
        </React.Fragment>
    );
}

export default App;
