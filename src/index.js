import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import App2 from './App2'
import reportWebVitals from './reportWebVitals';
import './indexArrays'

function ReactApp() {
    return (
        <div>
            <App/>
            {/*<App2/>*/}
        </div>
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactDOM.createRoot(document.getElementById("root")).render(<ReactApp/>)