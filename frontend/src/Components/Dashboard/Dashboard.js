import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout1 } from '../../styles/Layouts1';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {
        totalExpenses,
        incomes,
        expenses,
        totalIncome,
        totalBalance,
        getIncomes,
        getExpenses,
    } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <DashboardStyled>
            <InnerLayout1>
                <h1>Analyze Your Money</h1>
                <div className="stats-con">
                    <div className="amount-con">
                        <div className="income">
                            <h2>Total Income</h2>
                            <p>
                                {dollar} {totalIncome()}
                            </p>
                        </div>
                        <div className="expense">
                            <h2>Total Expense</h2>
                            <p>
                                {dollar} {totalExpenses()}
                            </p>
                        </div>
                        <div className="balance">
                            <h2>Total Balance</h2>
                            <p>
                                {dollar} {totalBalance()}
                            </p>
                        </div>
                    </div>
                    <div className="chart-con">
                        <Chart />
                    </div>
                    <div className="history-con">
                        <h2 className="salary-title">
                            Min <span>Income</span> Max
                        </h2>
                        <div className="salary-item">
                            <p>
                                ${incomes.length === 0 ? 0 : Math.min(...incomes.map(item => isNaN(parseFloat(item.amount)) ? Infinity : parseFloat(item.amount)))}
                            </p>
                            <p>
                                ${incomes.length === 0 ? 0 : Math.max(...incomes.map(item => isNaN(parseFloat(item.amount)) ? Infinity : parseFloat(item.amount)))}
                            </p>
                        </div>
                        <h2 className="salary-title">
                            Min <span>Expense</span> Max
                        </h2>
                        <div className="salary-item">
                            <p>
                                ${expenses.length === 0 ? 0 : Math.min(...expenses.map(item => isNaN(parseFloat(item.amount)) ? Infinity : parseFloat(item.amount)))}
                            </p>
                            <p>
                                ${expenses.length === 0 ? 0 : Math.max(...expenses.map(item => isNaN(parseFloat(item.amount)) ? Infinity : parseFloat(item.amount)))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout1>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2rem;
    }

    .stats-con {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        margin: 0 auto;

        .amount-con {
            // display: grid;
            // grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            display: flex;
            justify-content: space-between;
            gap: 1.5rem;

            .income, .expense, .balance {
                background: #fcf6f9;
                border: 2px solid #ffffff;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                border-radius: 20px;
                padding: 1.5rem;
                text-align: center;
                width: 100%;

                h2 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }

                p {
                    font-size: 2rem;
                    font-weight: 700;
                }
            }

            .balance p {
                color: var(--color-green);
                opacity: 0.6;
            }
        }

        .chart-con {
            width: 100%;
            background: #fcf6f9;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            border-radius: 20px;
        }

        .history-con {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            .salary-title {
                font-size: 1.2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                    font-size: 1.5rem;
                    color: var(--color-green);
                }
            }

            .salary-item {
                background: #fcf6f9;
                border: 2px solid #ffffff;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1.5rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;

                p {
                    font-weight: 600;
                    font-size: 1.3rem;
                }
            }
        }
    }

    @media (max-width: 992px) {
        .stats-con {
            .amount-con {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            }
        }
    }

    @media (max-width: 768px) {
        .stats-con {
            gap: 1.5rem;
            padding: 0 0.5rem;

            .amount-con {
                 display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 1rem;

                .income, .expense, .balance {
                    padding: 1rem;
                    
                    p {
                        font-size: 1.8rem;
                    }
                }
            }

            .chart-con {
                min-height: 350px;
            }

            .history-con {
                .salary-title {
                    font-size: 1rem;
                    
                    span {
                        font-size: 1.2rem;
                    }
                }

                .salary-item {
                    padding: 1rem;
                    
                    p {
                        font-size: 1.1rem;
                    }
                }
            }
        }
    }

    @media (max-width: 576px) {
        h1 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .stats-con {
            .amount-con {
                display: grid;
                grid-template-columns: 1fr;
            }

            .history-con {
                .salary-item {
                    flex-direction: column;
                    gap: 0.5rem;
                    align-items: center;
                }
            }
        }
    }
`;

export default Dashboard;