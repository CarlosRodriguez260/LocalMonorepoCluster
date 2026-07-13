import '../CSS/JavaScript/Grooming.css';
import { motion } from "motion/react";
import { useState, useMemo } from 'react';
import NavBar from '../Components/NavBar';
import EmpCard from '../Components/EmpCard';
import { Calendar } from 'react-calendar';
import scheduledata from '../Data/grooming.json'
import 'react-calendar/dist/Calendar.css';

// Acquire JSON data with the schedules
const schedule_info = scheduledata['grooming'];
const employees_info = scheduledata['employees'];

function Grooming() {
    const [setup, setSetup] = useState(false);
    const [value, setValue] = useState(new Date());
    const today = new Date();

    const minSelectableDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
    }, []);

    const maxSelectableDate = useMemo(() => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date;
    }, []);

    return (
        <>
            <div className="Grooming">
                <NavBar playAnim={false}/>
                <motion.div 
                    style={{ 
                        paddingTop: '5rem',
                    }}
                    initial={{ opacity: 0}}
                    animate={{ y: [50,0], opacity: 1 }}
                    transition={{ duration: 1}}
                >
                    <h1>¡Escoja una fecha!</h1>
                    <strong>Puede escojer fecha con 1 mes de anticipacion.</strong>
                    <br/>
                    <strong>Fecha de hoy: {today.toDateString('es-ES')}</strong>
                </motion.div>

                <motion.div 
                    style={{ 
                        display: 'flex',
                        justifyContent: 'center', 
                        paddingTop: '1rem',
                        // paddingBottom: '100rem',
                        color: 'black'
                    }}
                    initial={{ opacity: 0}}
                    animate={{ y: [50,0], opacity: 1 }}
                    transition={{ delay: 1, duration: 1}}
                >
                    <Calendar
                        
                        value={value}
                        // {value.toISOString().split("T")[0]}
                        onClickDay={setSetup}
                        onChange={setValue}
                        minDate={minSelectableDate}
                        maxDate={maxSelectableDate}
                        tileDisabled={({ date, view }) => {
                            const formatted = date.toISOString().split("T")[0];
                            const isTaken = schedule_info.some(entry => entry.date === formatted);

                            return view === 'month' && (date.getDay() === 0 || isTaken) 
                        }}
                    />
                </motion.div>

                {setup && value &&
                    <div style={{
                        position: 'fixed',
                        top: 0, left: 0,
                        width: '100vw', height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(3px)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000
                    }}>
                        <motion.div className="infoCard" 
                            style={{
                                maxWidth: '50%',
                                boxShadow: '0px 0px 20px #ffffff'
                            }}
                            initial={{ opacity: 0}}
                            animate={{ y: [50,0], opacity: 1}}
                        >
                        <h2>¿Confirmar cita?</h2>
                        <strong>{value.toDateString('es-ES')}</strong>
                        <br/><br/>
                        <button className="button1" onClick={() => {
                            // Send data to backend or update JSON if simulated
                            setSetup(false);
                            alert("¡Cita confirmada!");
                        }}>Confirmar</button>
                        &nbsp;
                        <button className="button1" onClick={() => setSetup(false)}>Cancelar</button>
                        </motion.div>
                    </div>
                }

                <motion.div
                    style={{ 
                        paddingTop: '3rem',
                    }}
                    initial={{ opacity: 0 }}
                    animate= {{ opacity: 1}}
                    transition={{ delay: 2, duration: 2 }}
                >
                    <h1>
                        Pero antes de eso, conoce nuestro equipo <br/>
                        de grooming.
                    </h1>
                    <strong>Todos son licenciados 😉</strong>
                </motion.div>
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10vh',
                        paddingTop: '5rem',
                        paddingBottom: '10rem'
                    }}
                    initial={{ opacity: 0 }}
                    animate= {{ opacity: 1}}
                    transition={{ delay: 2, duration: 3 }}
                >
                    { employees_info.map((empinfo)=>(
                        <EmpCard 
                            empfname={empinfo['firstname']} 
                            emplname={empinfo['lastname']}
                            empphoto={empinfo['photo']}
                        />
                    ))}
                </motion.div>
            </div>
        </>
    );
}
export default Grooming;