import React,{ useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
    {loading ? <Preloader /> : (
    <Router>
      <AppRoutes />
    </Router>
    )}
    </div>
  )
}

export default App
