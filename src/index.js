import React from 'react'
import ReactDOM from 'react-dom'
import KandyKorner from './components/KandyKorner';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        {console.log("index")}
        <KandyKorner />
    </Router>
, document.querySelector("#root"))
