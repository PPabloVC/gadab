import logo1 from './assets/img/logo1.jpg';
import './App.css';
import MiPrimerComponente from './components/MiPrimerConmponente';
import NavBAr from './components/NavBAr/NavBAr';

function App() {
  return (
    <div className="App">
      <NavBAr/>
      <header className="App-header">
        <MiPrimerComponente/>
        <img src={logo1}/>

        
        
      </header>
    </div>
  );
}

export default App;
