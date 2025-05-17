import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signout } from '../utils/Icons';
import styled from 'styled-components';

const Logout = (props) => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <LogoutContainer>
            <StyledButton
                onClick={handleLogout}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                isHovered={isHovered}
                style={{backgroundColor:props.mode==='dark'?'#cecbd1':'rgb(240, 234, 236)'}}
            >
                <span className="icon">{signout}</span>
                <span className="text">Logout</span>
            </StyledButton>
        </LogoutContainer>
    );
};

const LogoutContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`;

const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 30px;
    background-color: rgb(240, 234, 236);
    color: rgba(34, 34, 96, .6);
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;

    &:hover {
        color: rgba(34, 34, 96, 1);
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    }

    .text {
        @media (max-width: 600px) {
            display: none;
        }
    }

    @media (max-width: 768px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
        
        .icon {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        padding: 0.3rem;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        justify-content: center;
        
        .icon {
            font-size: 1rem;
            margin-right: 0;
        }
    }
`;

export default Logout;