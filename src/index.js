import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./screens/Search";



const App = () => {

    return (<div>
        <Search/>
    </div>);
};

ReactDOM.render(<App/>, document.getElementById('root'))


