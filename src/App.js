import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import LocationBar  from './components/LocationBar'
import {getLocation, getNearRest, getAllRests} from './components/Location'
import JournalEditor from './components/JournalEditor';
import JournalTable from './components/JournalTable';

function App() {
  let [location, setLocation] = useState({});
  let [date, setDate] = useState(new Date().toLocaleDateString())
  let [journalData, setJournalData] = useState([])
  let [journalDescription, setJournalDescritpion] = useState('');

  async function fetchLocation() {
    await getLocation(setLocation)
  }

  function onAddClick() {
    let record = {
      'date': date,
      'location': location,
      'description': journalDescription
    }
    setJournalData([...journalData, record]);  
  }

  useEffect(() => {
    fetchLocation();
  }, [])

  function onJournalEditorChange(e) {
    setJournalDescritpion(e.target.value);
  }

  return (
    <div className="App">

      <JournalEditor date={date} 
        journalDescription={journalDescription} 
        onAddClick={onAddClick} 
        onChange={onJournalEditorChange} 
        rests={getAllRests()} 
        locationTitle={location.title}/>
      <JournalTable data={journalData}/>
    </div>
  );
}

export default App;
