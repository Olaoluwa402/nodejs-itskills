import React,{useState, useEffect} from 'react';
import axios from 'axios';


function App() {
 const [state, setState]  = useState('')

 useEffect(()=> {
  fetchData();
 }, [])

 console.log(state)
 const fetchData = async()=> {
    const {data} = await axios.get('http://127.0.0.1:5000/get-user?name=daniel&email=ola@example.com&password=12345')
    setState(data)
 }
  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}

export default App;
