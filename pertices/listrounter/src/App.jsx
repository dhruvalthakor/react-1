import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TaskInput />} />
                <Route path="/tasks" element={<TaskList />} />
            </Routes>
        </Router>
    );
}

export default App;
