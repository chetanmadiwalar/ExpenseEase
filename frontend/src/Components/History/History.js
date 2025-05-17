import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat';

function History() {
    const {transactionHistory} = useGlobalContext()

    return (
        <HistoryStyled>
            <h2>All Transactions</h2>
            <div className="history-con">
                {transactionHistory().map((item) => {
                    const { _id, title, amount, type, date } = item;
                    return (
                        <div key={_id} className="history-item">
                            <p className="title" data-type={type}>
                                {title}
                            </p>
                            <p className="amount" data-type={type}>
                                {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
                            </p>
                            <p className="date">
                                {dateFormat(date)}
                            </p>
                        </div>
                    );
                })}
            </div>
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    h2 {
        margin: 1rem 0;
        font-size: 2rem;
        font-weight: 300;
        text-align: center;
    }

    .history-con {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .history-item {
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.75rem 0;
        gap: 1rem;
    }

    .title, .amount, .date {
        margin: 0;
        flex: 1;
        text-align: center;
    }

    .title[data-type="expense"], 
    .amount[data-type="expense"] {
        color: red;
    }

    .title[data-type="income"], 
    .amount[data-type="income"] {
        color: var(--color-green);
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1.5rem;
        }

        .history-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
            padding: 0.75rem;
        }

        .title, .amount, .date {
            text-align: left;
            width: 100%;
        }

        .date {
            color: rgba(0, 0, 0, 0.6);
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .history-con {
            padding: 0 0.5rem;
        }

        .history-item {
            padding: 0.5rem;
            border-radius: 12px;
        }

        h2 {
            font-size: 1.3rem;
            margin: 0.5rem 0;
        }
    }
`;

export default History