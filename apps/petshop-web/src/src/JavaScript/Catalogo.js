import '../CSS/JavaScript/Catalogo.css';
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PetBox from '../Components/PetBox';
import NavBar from '../Components/NavBar';
import petdata from '../Data/petdata.json';

// Acquire JSON file with pet data
const petbox_info = petdata['pets']

const petbox_arr = [];
for(var i = 0; i<petbox_info.length; i++){
  petbox_arr.push([
    petbox_info[i]['photo'],
    petbox_info[i]['name'],
    petbox_info[i]['category'],
    petbox_info[i]['stock']
  ]);
}

function Catalogo() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [filter, setFilter] = useState('Name');

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // Delay time in ms

    return () => clearTimeout(handler); // Clean up on new keystroke
  }, [query]);

  const filteredPetNames = petbox_arr.filter(([_, name]) =>
    name.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  const filteredPetCategories = petbox_arr.filter(([_, __, category]) =>
    category.toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <>
      <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <NavBar playAnim={false}/>
        <div className="filters">
          {filter === 'Name' && <input className="button2"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre..."
            style={{ margin: '1rem', padding: '0.5rem'}}
          />}
          {filter === 'Category' && <input className="button2"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por categoria..."
            style={{ margin: '1rem', padding: '0.5rem'}}
          />}

          FILTRAR POR:
          <button className="button2" 
            style={{
              margin: '1rem', 
              padding: '0.5rem', 
            }}
            onClick={()=> setFilter('Name')}
          >
            Nombre
          </button>
          <button className="button2" 
            style={{
              margin: '0.25rem', 
              padding: '0.5rem', 
            }}
            onClick={()=> setFilter('Category')}
          >
            Categoria
          </button>
        </div>
        <div className="Catalogo">
          {filter === 'Name' && filteredPetNames.map((pet) => (
            <motion.div
              key={`${pet[1]}-${debouncedQuery}`}
              initial={{ opacity: 0 }}
              animate={{ y: [50, 0], opacity: 1 }}
              transition={{ duration: 0.5 }}
              onHov
              style={{display: 'flex', justifyContent: 'center', cursor: 'pointer'}}
              onClick={()=>navigate(`/catalogo/${pet[1]}`)}
            >
              <PetBox
                petimage={pet[0]}
                petname={pet[1]}
                petcategory={pet[2]}
                petstock={pet[3]}
              />
            </motion.div>
          ))}
          {filter === 'Category' && filteredPetCategories.map((pet) => (
            <motion.div
              key={`${pet[1]}-${debouncedQuery}`}
              initial={{ opacity: 0 }}
              animate={{ y: [50, 0], opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{display: 'flex', justifyContent: 'center', cursor: 'pointer'}}
              onClick={()=>navigate(`/catalogo/${pet[1]}`)}
            >
              <PetBox
                petimage={pet[0]}
                petname={pet[1]}
                petcategory={pet[2]}
                petstock={pet[3]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Catalogo;