import './App.css';
import Map from './components/Map/map';

function App() {
  return (
    <div className="app-container">
      <header>
        <p>navbar</p>
      </header>

      <div className="map-wrapper">
        <div style={{ width: '100%', height: '1000px' }}>
          <Map center={[23.7806, 90.4070]} zoom={13} />
        </div>
      </div>

      <footer>
        <h3>Additional Content</h3>
        
      </footer>
    </div>
  );
}

export default App;
