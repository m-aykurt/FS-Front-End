import React from 'react'
import './App.css';
import { Recap } from './components/RECAP/recap-lifecycle/Recap';
// import ClassBased from './components/RECAP/components/ClassBased'
// import Functional from './components/RECAP/components/Functional';


function App2() {
    return (
        <div className="App">
            {/* <ClassBased name="murat" surname="aykurt" /> */}
            {/* <Functional /> */}
            <Recap name="Murat1" />
        </div>
    )
}

export default App2
