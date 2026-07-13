import '../CSS/Components/NavBar.css';
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar({playAnim}) {
    const API_SERVICE_URL = 'http://petshop-api-service:4000';
    const navigate = useNavigate();
    const [signUpPrompt, setSignUpPrompt] = useState(false);
    const [logInPrompt, setLogInPrompt] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    let init = { opacity: 0};
    let anim = { y: [-50, 0], opacity: 1};
    let transition = { duration: 0.5};

    if(!playAnim){
        init = {};
        anim = {};
        transition = {};
    }

    return (
        <>
            <motion.div className="NavBar" 
                initial={init}
                animate={anim}
                transition={transition}
            >
                {/* <img
                    src="/petshoplogo.jpg"
                    alt="Pet Shop Logo"
                    style={{ }}
                /> */}
                <div className="NavBarCenter">
                    <motion.div whileHover={{scale : 1.1}} onClick={()=>navigate("/")} className="BarElem">PRINCIPIO</motion.div>
                    <motion.div whileHover={{scale : 1.1}} onClick={()=>navigate("/catalogo")} className="BarElem">CATALOGO</motion.div>
                    <motion.div whileHover={{scale : 1.1}} onClick={()=>window.location.href = "https://cialespetshop.com"} className="BarElem">PRODUCTOS</motion.div>
                    <motion.div whileHover={{scale : 1.1}} onClick={()=>navigate("/grooming")} className="BarElem">GROOMING</motion.div>
                </div>
                <motion.div whileHover={{scale : 1.1}} onClick={()=>setLogInPrompt(true)} className="BarElem">Log In!</motion.div>
            </motion.div>

            {/* Signup and Login Functionality */}
            <div>
                {!loggedIn && logInPrompt && !signUpPrompt &&
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
                            <div style={{ display: 'flex', flexDirection: 'column'}}>
                                <input className="button2"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email..."
                                style={{ margin: '1rem', padding: '0.5rem'}}
                                />
                                <input className="button2"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password..."
                                    style={{ margin: '1rem', padding: '0.5rem'}}
                                />
                            </div>
                            <button className="button1" onClick={() => {
                                const logData = {'email': email, 'password': password};
                                fetch(API_SERVICE_URL, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(logData),
                                }).then(response => response.json())
                                .then(data => setLoggedIn(data.exists))
                                .catch((error) => {
                                    console.error('Error:', error);
                                });
                            }}>
                                Log In!
                            </button>
                            <button className="button1" onClick={() => {setSignUpPrompt(true); setLogInPrompt(false)}}>
                                Sign Up!
                            </button>
                            <button className="button1" onClick={() => setLogInPrompt(false)}>
                                Exit
                            </button>
                        </motion.div>
                    </div>
                }

                {!loggedIn && signUpPrompt && !logInPrompt &&
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
                            <div style={{ display: 'flex', flexDirection: 'column'}}>
                                <input className="button2"
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name"
                                style={{ margin: '1rem', padding: '0.5rem'}}
                                />
                                <input className="button2"
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Last Name"
                                    style={{ margin: '1rem', padding: '0.5rem'}}
                                />
                                <input className="button2"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                style={{ margin: '1rem', padding: '0.5rem'}}
                                />
                                <input className="button2"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    style={{ margin: '1rem', padding: '0.5rem'}}
                                />
                            </div>
                            <button className="button1" onClick={() => {
                                const signData = {'firstName': firstName, 'lastName': lastName, 'email': email, 'password': password};
                                fetch('http://localhost:4000/signup', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(signData),
                                })
                                .then(response => response.json()) 
                                .then(data => { 
                                    setSignUpPrompt(false);
                                    setLogInPrompt(true);
                                })
                                .then(()=> alert("Signup succesful!"))
                                .catch((error) => {
                                    console.error('Error:', error);
                                    alert("Signup unsuccesful!");
                                    return;
                                });
                            }}>
                                Submit
                            </button>
                            <button className="button1" onClick={() => setSignUpPrompt(false)}>
                                Exit
                            </button>
                        </motion.div>
                    </div>
                }
            </div>
            {/* Signup and Login Functionality */}
        </>
    );
}
export default NavBar;