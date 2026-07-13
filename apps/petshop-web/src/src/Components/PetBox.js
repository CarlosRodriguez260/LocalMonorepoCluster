// Componente de PetBox
import '../CSS/Components/PetBox.css';
import { motion } from "motion/react";

function PetBox({petname, petimage, petcategory, petstock}){
    return(
        <>
            <motion.div className="Rectangle">
                <div style={{width: '45%', display: 'flex'}}>
                    <img 
                        src={petimage}
                        alt='Pet'
                        style={{width: '100%',
                            height: '100%', 
                            borderRadius: '20px',
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <div className="Textbox">
                    <div><strong>Nombre</strong>: {petname}</div>
                    <div><strong>Categoria</strong>: {petcategory}</div>
                    <div><strong>Disponibles</strong>: {petstock}</div>
                </div>
            </motion.div>
        </>
    )
}
export default PetBox;