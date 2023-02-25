import React from 'react'
import ReportLostItem from './components/ReportLostItem';
import AllLostItems from './components/AllLostItems';
import { GlobalStyle } from './components/GlobalStyle';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <ReportLostItem />
        <AllLostItems />
        <GlobalStyle />
    </div>
  );
}

export default App;
