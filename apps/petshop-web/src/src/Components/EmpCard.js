import '../CSS/Components/EmpCard.css';
import { motion } from "motion/react";
import 'react-calendar/dist/Calendar.css';

function EmpCard({empfname, emplname, empphoto}) {
    return (
        <>
            <motion.div
                className="ContainerBG"
                // viewport={{}}
            >
                <motion.div 
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [-50,0], opacity: 1}}
                    transition={{ duration: 0.5 }}
                    viewport={{ amount: 0.7 }}
                >
                    <img 
                        src={empphoto}
                        alt="Employee"
                        style={{ width: '20vh', borderRadius: '10px'}}
                    >
                    </img>
                    <h3>{empfname + " " + emplname}</h3>
                </motion.div>
            </motion.div>
        </>
    )
}
export default EmpCard;