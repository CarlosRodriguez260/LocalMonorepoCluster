// Componente de PetBox Alterno
import '../CSS/Components/PetBox.css';
import { motion } from "motion/react";

function PetBoxAlt({petimage, petname, petage, petprice}){
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
                    <div><strong>Edad</strong>: {petage}</div>
                    <div><strong>Precio</strong>: {petprice}</div>
                </div>
            </motion.div>
        </>
    )
}
export default PetBoxAlt;