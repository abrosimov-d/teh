import logo from './logo.svg';
import './App.css';
import {useState, useEffect, use} from 'react'
import LocationBar  from './components/LocationBar'
import {getLocation, getNearRest, getAllRests} from './components/Location'
import JournalEditor from './components/JournalEditor';
import JournalTable from './components/JournalTable';
import {db} from './firebase';
import { doc, addDoc, getDoc, setDoc } from "firebase/firestore";
import SettingsModal from './components/SettingsModal';

function App() {
  let [location, setLocation] = useState({});
  let [date, setDate] = useState(new Date().toLocaleDateString())
  let [journalData, setJournalData] = useState([])
  let [journalDescription, setJournalDescritpion] = useState('');
  let [showSettingsModal, setShowSettingsModal] = useState(false);

  async function fetchLocation() {
    await getLocation(setLocation)
  }

  async function setToDB(journal) {
    try {
      await setDoc(doc(db, 'teh' , 'journal'),
      {
        journal: journal,
      })
    } catch(err) {
      console.log('setToDB() error', err);
    }
  }

  async function getFromDB() {
    let data = await getDoc(doc(db, 'teh', 'journal'));
    try {
      setJournalData(data.data().journal)
    } catch {}
  }

  async function onAddClick() {
    let record = {
      'date': date,
      'location': location,
      'description': journalDescription
    }
    setJournalData([...journalData, record]);
    await setToDB([...journalData, record])
  }

  useEffect(() => {
    console.log(db);
    fetchLocation();
    getFromDB();
  }, [])

  function onJournalEditorChange(e) {
    setJournalDescritpion(e.target.value);
  }

  return (
    <div className="App">
      <button className="editor-settings" onClick={() => {}}>Настройки</button>
      <JournalEditor date={date} 
        journalDescription={journalDescription} 
        onAddClick={onAddClick} 
        onChange={onJournalEditorChange} 
        rests={getAllRests()} 
        locationTitle={location.title}/>
      <JournalTable data={journalData}/>
      {showSettingsModal && <SettingsModal/>}
    </div>
  );
}

export default App;
