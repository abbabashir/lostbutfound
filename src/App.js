import React from 'react'
import ReportLostItem from './components/ReportLostItem';
import AllLostItems from './components/AllLostItems';
import { GlobalStyle } from './components/GlobalStyle';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Post from "./components/post";
import SHOW from "./components/SHOW ALL";
import ToHOME from "./components/ToHOME";
import SUCCESS from "./components/SUCCESS";


function App() {

 /* const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);*/

 /* return (
    <div>
        <ReportLostItem />
        <br/>
        <Post />
        <br/>

        <Post />
        <br/>
        <Post />
        <br/>
        <SHOW />


    </div>
  );*/
    return(
        <div>
            <ToHOME />
            <SUCCESS />
        </div>
    )
}

export default App;
