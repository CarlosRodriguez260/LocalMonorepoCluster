import '../CSS/JavaScript/Catalogo.css';
import { motion } from "motion/react";
import { useParams } from 'react-router-dom';
import PetBoxAlt from '../Components/PetBoxAlt';
import NavBar from '../Components/NavBar';
import petdata from '../Data/petdata.json';

// Acquire JSON file with pet list data
const petbox_info = petdata['pets']

function PetLister() {
  const { generalName }  = useParams();
  const petbox_arr = [];
  var index = 0;
  var found = false;

  while(!found) {
    if(petbox_info[index]['name']===generalName) {
        found = true;
        for(var i = 0; i<petbox_info[index]['list'].length; i++) {
            petbox_arr.push([
                // Get the data from the 'list' array of each instance of the animal
                petbox_info[index]['list'][i]['photo'],
                petbox_info[index]['list'][i]['name'],
                petbox_info[index]['list'][i]['age'],
                petbox_info[index]['list'][i]['price']
            ])
        }
        break;
    }
    else{
        index++;
    }
  }

  return (
    <>
      <div style={{ 
            backgroundColor: 'black',
            minHeight: '100vh'
        }}
      >
        <NavBar playAnim={false}/>
        <motion.div style={{ color: 'white', paddingTop: '1rem' }}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 1}}
        >
            <h1>Disponibles para: {generalName}</h1>
        </motion.div>
        <div className="Catalogo">
            {petbox_arr.map((pet) => (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{display: 'flex', justifyContent: 'center'}}
                >
                <PetBoxAlt
                    petimage={pet[0]}
                    petname={pet[1]}
                    petage={pet[2]}
                    petprice={pet[3]}
                />
                </motion.div>
            ))}
        </div>
      </div>
    </>
  );
}
export default PetLister;