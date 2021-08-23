import React from 'react'
import './App.css';
import ClassBased from './components/RECAP/components/ClassBased'
import Functional from './components/RECAP/components/Functional';

function App2() {
    return (
        <div className="App">
            {/* <ClassBased name="murat" surname="aykurt" /> */}
            <Functional />
        </div>
    )
}

export default App2
