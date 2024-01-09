import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import LocationBar  from './components/LocationBar'
import getLocation from './components/Location'
import JournalEditor from './components/JournalEditor';
import JournalTable from './components/JournalTable';

function App() {
  let [location, setLocation] = useState('null');
  let [date, setDate] = useState(new Date().toLocaleDateString())
  let [journalData, setJournalData] = useState([])
  function updateLocation() {
    setLocation(getLocation())
  }

  function onAddClick() {
    let record = {
      'date': date,
      'location': location.toString(),
      'description': 'bla'
    }
    setJournalData([...journalData, record]);  
  }
  return (
    <div className="App">
      <LocationBar location={location} updateLocation={updateLocation}/>
      <JournalEditor date={date} onAddClick={onAddClick}/>
      <JournalTable data={journalData}/>
    </div>
  );
}

export default App;
