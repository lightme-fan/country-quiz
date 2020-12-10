import React from 'react'
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router} from 'react-router-dom';
import { ContextProvider } from './components/ContextProvider';
import App from "./components/App";

ReactDOM.render(<ContextProvider><App/></ContextProvider>, document.getElementById('root'))
