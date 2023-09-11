import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grafana.tech.dnb.no/api/dashboards/tags', {
          headers: {
            Authorization: `Bearer ${process.env.GRAFANA_API_KEY}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header" />
      <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
    </div>
  );
}

export default App;
