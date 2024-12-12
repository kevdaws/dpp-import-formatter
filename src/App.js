import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
 
  const [selectedFile, setSelectedFile] = useState(null);
  const [headerResults, setHeaderResults] = useState([]);
  const [deluxeHeaders, setDeluxeHeaders] = useState({
    MID:'',
    First_Name:'',
    Last_Name:'',
    Country:'',
    Address:'',
    City:'',
    State_Province:'',
    Zip_Postal:'',
    Email:'',
    Phone:'',
    Payment_Type:'',
    Account_Number:'',
    CC_Exp_Date:'',
    ACH_Routing_Number:'',
    ACH_Nickname:'',
    ACH_Checking_Savings:'',
    Recurring_type:'',
    Recurring_day:'',
    Recurring_month:'',
    Recurring_amt:'',
    Recurring_start:'',
    Recurring_end:''
  });
  //const [deluxeMappings, setDeluxeMappings] = useState([])

  useEffect(() => {
    // console.log(headerResults);
  }, [headerResults]);

  useEffect(() => {
    console.log(deluxeHeaders);
  }, [deluxeHeaders]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  
  // Send input file to server, receive back list of headers.
  const handleUpload = async () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);

      const formData = new FormData();
      formData.append('file', selectedFile);
      
      const headerList = [];
      
      await axios.post('http://localhost:5000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
          }).then(response => response.data.map((value, i) => (
            headerList.push({
              id: headerList.length,
              name: response.data[i]
            })
          ))).catch(error => console.log('Error uploading file:', error));

        setHeaderResults([headerList]);

    }

  } 

  return (
    <div className="App-header">
      <input type="file" onChange={handleFileChange} />
      <div>
      {selectedFile && headerResults.length === 0 && <button onClick={handleUpload}>Upload</button>}
    </div>
      
      {headerResults.length > 0 && <div> Select the corresponding fields:
    
        <pre><label>MID </label>

          <select onChange={(event) => setDeluxeHeaders({
            ...deluxeHeaders,
              MID: event.target.value
          })}>
          {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
          </select></pre>


          <pre><label>First Name </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              First_Name: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Last Name </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Last_Name: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Country </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Country: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Address </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Address: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>City </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              City: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>State/Province </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              State_Province: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Zip/Postal </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Zip_Postal: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Email </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Email: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Phone </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Phone: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Payment Type </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Payment_Type: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Account Number </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Account_Number: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>CC Exp </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              CC_Exp_Date: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>ACH Routing Number </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              ACH_Routing_Number: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>ACH Nickname </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              ACH_Nickname: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>ACH Checkings/Savings </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              ACH_Checkings_Savings: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Recurring Type </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Recurring_type: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Recurring Day </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Recurring_day: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Recurring Month </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Recurring_month: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Recurring Amount </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Recurring_amt: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Recurring Start </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Recurring_start: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>

            <pre><label>Recurring End </label>

            <select onChange={(event) => setDeluxeHeaders({
              ...deluxeHeaders,
              Recurring_end: event.target.value
            })}>
            {headerResults[0].map((header) => (
              <option key={header.id} value={header.name}>{header.name}</option>))}
            </select></pre>
    
            <button>Submit Headers</button>
    
    </div>}

              
    </div>
  );

}


export default App;
