import './App.css';
import NameProp from './components/NameProp'
import Contacts from './components/challenges/day02/Contacts'
import State from './components/State'


function App() { 
  return (
    <div className="App">
      <NameProp name="Lindsay" />
      <Contacts name="Lindsay Newell" age="34" school="Indiana University" graduationYear="2009" />
      <State />
    </div>
  );
}

export default App;
