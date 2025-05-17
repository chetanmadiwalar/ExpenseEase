import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout1 } from '../../styles/Layouts1';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses(props) {
    const {addIncome,expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])
    return (
        <ExpenseStyled>
            <InnerLayout1>
                <h1 className='text-center'>Expenses</h1>
                <h2 className="total-income">Total Expense: <span>${totalExpenses()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm showAlert={props.showAlert}/>
                    </div>
                    <div className="incomes">
                        {expenses.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout1>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    width: 100%;
    &::-webkit-scrollbar{ width: 0; }
    
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
        }
    }
    
    .income-content{
        display: flex;
        gap: 2rem;
        width: 100%;
        
        .form-container {
            flex: 1;
            min-width: 300px;
        }
        
        .incomes{ 
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
    
    @media (max-width: 1024px) {
        .income-content {
            flex-direction: column;
            gap: 1.5rem;
            
            .form-container, .incomes {
                width: 100%;
            }
        }
    }
    
    @media (max-width: 768px) {
        .total-income {
            flex-direction: column;
            text-align: center;
            padding: 0.8rem;
            font-size: 1.5rem;
            
            span {
                font-size: 2rem;
            }
        }
        
        .income-content {
            gap: 1rem;
        }
    }
    
    @media (max-width: 480px) {
        .total-income {
            font-size: 1.2rem;
            padding: 0.6rem;
            margin: 0.5rem 0;
            
            span {
                font-size: 1.5rem;
            }
        }
        
        h1 {
            font-size: 1.5rem;
        }
        
        .income-content {
            gap: 0.8rem;
            
            .form-container {
                min-width: auto;
            }
        }
    }
`;

export default Expenses