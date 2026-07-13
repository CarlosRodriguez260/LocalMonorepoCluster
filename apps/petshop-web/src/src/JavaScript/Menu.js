// Pagina Principal
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from "motion/react";
import '../CSS/JavaScript/Menu.css';
import NavBar from '../Components/NavBar'

function Menu() {
  const navigate = useNavigate();
  const [warning, setWarning] = useState(false);
  return (
    <>
      { !warning ? 
        // Warning = False
        (
          <div className="Menu">
            <NavBar playAnim={true}/>
            <header style={{ height: '25%'}}>
              <div style={{ paddingTop: '1.25rem' }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ y: [50, 0], opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src="/petshoplogo.jpg"
                    alt="Pet Shop Logo"
                    style={{ width: '15vh' }}
                  />
                </motion.div>

                <motion.div
                  style={{ textAlign: 'center', marginTop: '0.5rem' }}
                  initial={{ opacity: 0 }}
                  animate={{ y: [50, 0], opacity: 1 }}
                  transition={{ delay: 0.5, duration: 2 }}
                >
                  El hogar de tus Mascotas!
                </motion.div>
              </div>
            </header>

            <section style={{ height: '75%'}}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0], opacity: 1 }}
                transition={{ delay: 0.75, duration: 2 }}
                style={{ textAlign: 'center',  marginTop: '1rem' }}
              >
                Servicios
              </motion.div>

              <motion.div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  justifyContent: 'center',
                  paddingTop: '1rem'
                }}
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0], opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
              >
                <motion.button whileHover={{ scale: 1.1 }} className="button1" onClick={()=>navigate("/catalogo")}>CATALOGO DE MASCOTAS</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="button1" onClick={()=>window.location.href = "https://cialespetshop.com"}>PRODUCTOS PARA MASCOTAS</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="button1" onClick={()=>navigate("/grooming")}>SOLICITAR GROOMING</motion.button>
                {/* <motion.button whileHover={{ scale: 1.1 }} className="button1" onClick={()=>setWarning(true)}>SOLICITAR GROOMING</motion.button> */}
              </motion.div>

              <motion.div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '2rem'
                }}
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0], opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
              >
                <div className="infoCard" style={{ width: 'min(500px, 100%)' }}>
                    <strong>HORARIO</strong><br />
                    Lunes: 9:00 am - 4:00 pm<br />
                    Martes: 9:00 am - 4:00 pm<br />
                    Miércoles: 9:00 am - 4:00 pm<br />
                    Jueves: 9:00 am - 4:00 pm<br />
                    Viernes: 9:00 am - 4:00 pm<br />
                    Sábado: 9:00 am - 2:00 pm<br />
                    Domingo: CERRADO
                </div>

                <div className="infoCard" style={{ width: 'min(500px, 100%)' }}>
                  Visítenos para ver mascotas, <br />
                  hacer recogidos y atender citas <br />
                  de grooming. Encuéntrenos en: <br /><br />
                  <strong>17 CALLE PALMER</strong> <br />
                  <strong>CIALES PR 00683</strong>
                  <br />
                  Tel. 939-279-6169<br />
                  ¡Los Esperamos!
                </div>
              </motion.div>
              <motion.div style={{padding: '2rem'}}
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0], opacity: 1 }}
                transition={{ delay: 2.5, duration: 2 }}
              >
                Marcas de Productos
              </motion.div>
              <motion.div style={{paddingBottom: '1.25rem', display: 'flex', gap:'2vh', justifyContent: 'center', flexWrap: 'wrap'}}
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0], opacity: 1 }}
                transition={{ delay: 2.75, duration: 2 }}
              >
                <img src="/eukanaba.jpg" alt="Logo" style={{ width: '15vh' }}/>
                <img src="/diamond.png" alt="Logo" style={{ width: '15vh' }}/>
                <img src="/hills.png" alt="Logo" style={{ width: '15vh' }}/>
                <img src="/ppp.webp" alt="Logo" style={{ width: '15vh' }}/>
                <img src="/totw.png" alt="Logo" style={{ width: '20vh' }}/>
              </motion.div>
            </section>
          </div>
        )
        :
        (
        // Warning = True
        <>
          <div style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ y: [50, 0], opacity: 1 }}
              transition={{ duration: 1.25 }}
            >
              ¡Lo Sentimos!
            </motion.h1>
            <motion.div className="infoCard" 
              style={{ 
                width: 'min(90vw, 500px)', 
                textAlign: 'center'
              }} 
              initial={{ opacity: 0 }}
              animate={{ y: [50, 0], opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Por el momento, todo sobre grooming se confirma <br />
              a través del número <strong>939-279-6169.</strong> <br/>
              <br/>
              <motion.button whileHover={{ scale: 1.1 }} className="button1" onClick={()=>setWarning(false)}>Entendido</motion.button>
            </motion.div>
          </div>
        </>
        )
      }
    </>
  );
}
export default Menu;

// // Main Page
// import '../CSS/JavaScript/Menu.css'
// import {motion} from "motion/react"

// function Menu(){

//     return(
//     <>
//         <div className="Menu">
//             <div style={{ height: '25%'}}>
//                 <div style={{ paddingTop: '20px'}}>
//                     <motion.div initial={{opacity: 0}} animate={{y: [50,0] , opacity: 1}} transition={{duration: 1}}>
//                         <img src='/petshoplogo.jpg' style={{ width: '10vw' }}/>
//                     </motion.div>
//                     <motion.div initial={{opacity: 0}} animate={{y: [50,0], opacity:1}} transition={{delay: 0.5, duration: 2}}>
//                         El hogar de tus Mascotas!
//                     </motion.div>
//                 </div>
//             </div>
//             <div style={{ height: '75%'}}>
//                 <motion.div initial={{opacity: 0}} animate={{y: [50,0], opacity:1}} transition={{delay: 0.75, duration: 2}}>
//                     <div>Servicios</div>
//                 </motion.div>
//                 <motion.div style={{ display: 'flex', gap: '1vh', justifyContent: 'center', paddingTop: '10px'}} initial={{opacity: 0}} animate={{y: [50,0], opacity:1}} transition={{delay: 1, duration: 2}}>
//                     <button className="button1">
//                         CATALOGO DE MASCOTAS
//                     </button>    
//                     <button className="button1">
//                         PRODUCTOS PARA MASCOTAS
//                     </button>  
//                     <button className="button1">
//                         SOLICITAR GROOMING
//                     </button>     
//                 </motion.div>
//                 <motion.div style={{paddingLeft:'50px', paddingTop:'100px', paddingRight: '50px', display: 'flex', gap: '10vh'}} initial={{opacity: 0}} animate={{y: [50,0], opacity:1}} transition={{delay: 2, duration: 2}}>
//                     <div className="button1" style={{ width: '50%' }}>
//                         HORARIO
//                         <ul>
//                             <li>Lunes: 9:00 am - 4:00pm</li>
//                             <li>Martes: 9:00 am - 4:00pm</li>
//                             <li>Miercoles: 9:00 am - 4:00pm</li>
//                             <li>Jueves: 9:00 am - 4:00pm</li>
//                             <li>Viernes: 9:00 am - 4:00pm</li>
//                             <li>Sabado: 9:00 am - 4:00pm</li>
//                             <li>Domingo: CERRADO</li>
//                         </ul>
//                     </div>
//                     <div className="button1" style={{ width: '50%'}}>
//                         Visitenos para ver mascotas, <br />
//                         hacer recogidos y atender citas <br />
//                         de grooming. Encuentrenos en: <br />
//                         <br />
//                         17 CALLE PALMER <br/>
//                         CIALES PR 00683
//                         <br />
//                         <br />
//                         <br />
//                         Los Esperamos!
//                     </div>
//                 </motion.div>   
//             </div>
//         </div>
//     </>
//     )
// }
// export default Menu;
// Old Code