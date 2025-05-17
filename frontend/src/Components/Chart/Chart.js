import React from 'react';
import { Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);

function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const lineData = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date);
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => income.amount),
                backgroundColor: 'green',
                tension: 0.2,
                borderColor: 'green',
                borderWidth: 2
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => expense.amount),
                backgroundColor: 'red',
                tension: 0.2,
                borderColor: 'red',
                borderWidth: 2
            }
        ]
    };

    const doughnutData = {
        labels: ['Income', 'Expenses'],
        datasets: [
            {
                data: [
                    incomes.reduce((total, income) => total + income.amount, 0),
                    expenses.reduce((total, expense) => total + expense.amount, 0)
                ],
                backgroundColor: ['green', 'red'],
                hoverBackgroundColor: ['darkgreen', 'darkred'],
                borderWidth: 1
            }
        ]
    };

    return (
        <ChartStyled>
            <div className='line-chart'>
                <Line 
                    data={lineData} 
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    font: {
                                        size: 12
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                ticks: {
                                    font: {
                                        size: 10
                                    }
                                }
                            },
                            x: {
                                ticks: {
                                    font: {
                                        size: 10
                                    }
                                }
                            }
                        }
                    }} 
                />
            </div>
            <div className='doughnut-chart'>
                <Doughnut 
                    data={doughnutData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    font: {
                                        size: 12
                                    }
                                }
                            }
                        }
                    }}
                />
            </div>
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    height: 100%;
    padding: 1rem;

    .line-chart, .doughnut-chart {
        position: relative;
        width: 100%;
        min-height: 300px;
    }

    @media (min-width: 992px) {
        flex-direction: row;
        .line-chart {
            width: 65%;
        }
        .doughnut-chart {
            width: 30%;
        }
    }

    @media (max-width: 991px) and (min-width: 768px) {
        flex-direction: row;
        .line-chart {
            width: 60%;
        }
        .doughnut-chart {
            width: 35%;
        }
    }

    @media (max-width: 767px) {
        flex-direction: column;
        gap: 1rem;
        padding: 0.75rem;

        .line-chart, .doughnut-chart {
            width: 100%;
        }

        .doughnut-chart {
            min-height: 250px;
        }
    }

    @media (max-width: 576px) {
        padding: 0.5rem;
        border-radius: 15px;
        
        .line-chart, .doughnut-chart {
            min-height: 220px;
        }
    }
`;

export default Chart;