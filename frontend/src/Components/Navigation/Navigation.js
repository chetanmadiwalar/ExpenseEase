import React, { useEffect } from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { menuItems } from '../../utils/menuItems';
import Logout from '../../pages/Logout';
import { useGlobalContext } from '../../context/globalContext';

function Navigation({ active, setActive, mode }) {
    const { userName, getName } = useGlobalContext();

    useEffect(() => {
        getName();
    }, []);

    return (
        <NavStyled>
            <div className="mobile-header">
                <div className="user-con">
                    <img src={avatar} alt="" />
                    <div className="text">
                        <h2>{userName}</h2>
                        <p>Your Money</p>
                    </div>
                </div>
                <div className="menu-container">
                    <ul className="menu-items">
                        {menuItems.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    onClick={() => setActive(item.id)}
                                    className={active === item.id ? 'active' : ''}
                                >
                                    {item.icon}
                                    <span className="menu-text">{item.title}</span>
                                </li>
                            );
                        })}

                    </ul>
                </div>
            </div>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 300px;
    height: 100%;
    max-height: 400px;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2 {
            color: rgba(34, 34, 96, 1);
        }
        p {
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-container {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            margin-left: -10px;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
            
            &.logout-item {
                display: none;
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;
        i {
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }


    @media (max-width: 1024px) {
        width: 250px;
        padding: 1.5rem 1rem;
        
        .user-con {
            gap: 0.8rem;
            img {
                width: 70px;
                height: 70px;
            }
            h2 {
                font-size: 1.2rem;
            }
        }
        
        .menu-items li {
            padding-left: 0.8rem;
            grid-template-columns: 35px auto;
        }
    }

    @media (max-width: 768px) {
        width: 220px;
        padding: 1rem 0.8rem;
        
        .user-con {
            height: 80px;
            img {
                width: 60px;
                height: 60px;
            }
            h2 {
                font-size: 1.1rem;
            }
            p {
                font-size: 0.9rem;
            }
        }
        
        .menu-items li {
            margin: 0.5rem 0;
            margin-left: -8px;
            i {
                font-size: 1.2rem;
            }
            span {
                font-size: 0.9rem;
            }
        }
    }

    @media (max-width: 600px) {
        padding: 1rem;
        width: 100%;
        max-height: 110px;
        border-radius: 22px;
        border: none;
        border: 3px solid #FFFFFF;
        
        .mobile-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
        }
        
        .user-con {
            flex-direction: column;
            align-items: center;
            height: auto;
            gap: 0.5rem;
            margin: 0;
            img {
                width: 50px;
                height: 50px;
            }
            .text {
                text-align: center;
                h2 {
                    font-size: 1rem;
                    margin-bottom: 0;
                }
                p {
                    font-size: 0.7rem;
                }
            }
        }
        
        .menu-container {
            width: auto;
        }
        
        .menu-items {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 0.5rem;
            margin: 0;
            
            li {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0.4rem 0.6rem;
                margin: 0;
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.3);
                min-width: 60px;
                
                .menu-text {
                    font-size: 0.6rem;
                    margin-top: 0.2rem;
                }
                
                i {
                    font-size: 1rem;
                }
                
                &.active {
                    background: rgba(255, 255, 255, 0.6);
                    &::before {
                        display: none;
                    }
                }
                
                &.logout-item {
                    display: flex;
                    padding: 0;
                    background: transparent;
                    min-width: auto;
                }
            }
        }
    }

    @media (max-width: 480px) {
    max-height: 110px;
        padding: 0.8rem;
        
        .user-con {
            img {
                width: 45px;
                height: 45px;
            }
            .text {
                h2 {
                    font-size: 0.9rem;
                }
                p {
                    font-size: 0.65rem;
                }
            }
        }
        
        .menu-items {
            gap: 0.3rem;
            li {
                padding: 0.3rem 0.5rem;
                min-width: 55px;
                i {
                    font-size: 0.9rem;
                }
                .menu-text {
                    font-size: 0.55rem;
                }
            }
        }
    }

    @media (max-width: 380px) {
     max-height: 110px;
        .menu-items {
            li {
                min-width: 50px;
                padding: 0.25rem 0.4rem;
                i {
                    font-size: 0.85rem;
                }
                .menu-text {
                    font-size: 0.5rem;
                }
            }
        }
    }
`;
export default Navigation;