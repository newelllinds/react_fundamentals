import './App.css';
import Header from './components/Header'
import Aboutme from './components/challenges/day01/Aboutme'
import Home from './components/challenges/day01/Home'
import Footer from './components/challenges/day01/Footer'

function App() { // this is a root component
  const name = 'Lindsay' // JS above return statement can be injected into JSX using {}
  
  return (
    <div className="App">
      <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root App component</h2>
      <h3>CHALLENGE!</h3>
      <p>Create a ./components/challenges/day01 folder</p>
      <p>Create a component with an h1 tag of your name, p tag with description of yourself, and an unordered list of two truths and a lie.</p>
      <p>Export, import into App, and mount it.</p>
      <p>Create footer and home components to round off the site</p>
      <p>SPICY MODE: In your footer, utilize JS time method to dynamically insert current date after Copyright</p>
      <p>EXTRA: Have some fun with reactstrap if you're brave to utilize some additional elements</p>

      <Header /> { /* this is how you mount a component */ }
      <Aboutme />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
