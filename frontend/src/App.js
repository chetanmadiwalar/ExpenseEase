import React, { useState, useContext, useCallback } from 'react';
import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout1 } from './styles/Layouts1';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import History from './Components/History/History';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import Set_budget from './Components/Set_budget/Set_budet';
import { useGlobalContext } from './context/globalContext';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from './Components/Footer/footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Introduction from './pages/Introduction';
import { AuthProvider, AuthContext } from './context/AuthContext';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const [active, setActive] = useState(1);

    const showAlert = useCallback((message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }, []);

    const toggleMode = useCallback(() => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#001739';
            showAlert("Dark mode is enabled", "success");
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode is enabled", "success");
        }
    }, [mode, showAlert]);

    const displayData = useCallback(() => {
        switch (active) {
            case 1:
                return <Dashboard />;
            case 2:
                return <History />;
            case 3:
                return <Income showAlert={showAlert} />;
            case 4:
                return <Expenses showAlert={showAlert} />;
            case 5:
                return <Set_budget />;
            default:
                return <Dashboard />;
        }
    }, [active, showAlert]);

    const PrivateRoute = ({ children }) => {
        const { isAuthenticated } = useContext(AuthContext);
        return isAuthenticated ? children : <Navigate to="/login" />;
    };

    return (
        <AuthProvider>
            <div style={{ height: '600px', overflowX: 'hidden' }}>
                <BrowserRouter>
                    <Navbar title='ExpenseEase' mode={mode} toggleMode={toggleMode} />
                    <Alert alert={alert} />
                    <div className="container-fliud" mode={mode}>
                        <Routes>
                            <Route path="/about" element={<About mode={mode} />} />
                            <Route path="/login" element={<Login mode={mode}/>} />
                            <Route path="/register" element={<Register mode={mode}/>} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/" element={<Introduction mode={mode}/>} />
                            {/* <Route path="/" element={<Navigate to="/introduction" />} /> */}
                            <Route path="/home" element={
                                <PrivateRoute>
                                    <AppStyled bg={bg} className="App">
                                        <MainLayout1>
                                            <Navigation active={active} setActive={setActive} mode={mode}/>
                                            <main>
                                                {displayData()}
                                            </main>
                                        </MainLayout1>
                                    </AppStyled>
                                </PrivateRoute>
                            } />
                            <Route path="/dashboard" element={
                                <PrivateRoute>
                                    <AppStyled bg={bg} className="App">
                                        <MainLayout1>
                                            <Navigation active={active} setActive={setActive} mode={mode}/>
                                            <main>
                                                {displayData()}
                                            </main>
                                        </MainLayout1>
                                    </AppStyled>
                                </PrivateRoute>
                            } />
                        </Routes>
                    </div>
                    <Footer mode={mode} />
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

const AppStyled = styled.div`
    height: 150vh;
    background-color: rgba(103, 90, 85, 0.39);
    main {
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
    @media (max-width: 900px) {
        border-radius: 16px;
        padding: 0.75rem;
    }
    
    @media (max-width: 600px) {
        border-radius: 8px;
        padding: 0.5rem;
        margin: 0.25rem 0;
        border-width: 2px;
    }
    
    @media (max-width: 400px) {
        border-radius: 0;
        padding: 0.25rem;
        border: none;
    }
`;

export default App;
