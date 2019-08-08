import React, { useEffect, useState } from 'react';
import Layout from './javascript/utils/components/Layout';
import PlaceCardList from './javascript/utils/components/PlaceCardList';

const App = () => {
  const [areas, setAreas] = useState([]);
  const [title, setTitle] = useState('');
  const [areaId, setAreaId] = useState('5d4313ab4e41702ed0d671be');
  const [area, setArea] = useState({ places: [] });
//make a method for this fetch that calls on areaChange handle for formcomponent
  useEffect(() => {
    fetch(`http://localhost:4000/api/areas/${areaId}`)
      .then(res => res.json())
      .then(area => setArea(area));

    fetch('http://localhost:4000/api/areas/')
      //Change the fetch to get a single area and add it to this.state
      .then(res => res.json())
      .then(areas => setAreas(areas));
    // Dynamic titles based on the fetch or 'page'
    setTitle('Date Night Roulette');
  }, []);
  return (
    <div className="wrapper">
      <Layout title={title}>
        <PlaceCardList places={area.places} />
      </Layout>
    </div>
  );
};
export default App;
