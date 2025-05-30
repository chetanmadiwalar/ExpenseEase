import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-left: 1.7rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 95%;
    color: #222260;
    
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
        gap: 1rem;
        width: 100%;
        margin-left: 0rem;

        .icon {
            width: 60px;
            height: 60px;
            i {
                font-size: 2rem;
            }
        }

        .content {
            width: 100%;
            
            h5 {
                font-size: 1.1rem;
                padding-left: 1.5rem;
            }

            .inner-content {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;

                .text {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.5rem;
                    width: 100%;
                    
                    p {
                        width: 100%;
                        justify-content: flex-start;
                    }
                }

                .btn-con {
                    align-self: flex-end;
                    margin-top: 0.5rem;
                }
            }
        }
    }

    @media (max-width: 480px) {
    margin-left: 0rem;
        .content {
            h5 {
                font-size: 1rem;
                padding-left: 1.2rem;
                
                &::before {
                    width: 0.6rem;
                    height: 0.6rem;
                }
            }
        }
        
        .icon {
            width: 50px;
            height: 50px;
            i {
                font-size: 1.6rem;
            }
        }
    }
`;

export default IncomeItem