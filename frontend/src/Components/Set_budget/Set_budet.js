import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout1 } from '../../styles/Layouts1';
import Button from '../Button/Button';
import { set } from '../../utils/Icons';

function Set_limit() {
  const { addLimit, getLimit, error, setError } = useGlobalContext();
  const [limit, setLimit] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchLimit = async () => {
      const limitAmount = await getLimit();
      if (limitAmount !== null) {
        setLimit(limitAmount);
      } else {
        setError('Failed to fetch limit');
      }
    };

    fetchLimit();
  }, [getLimit, setError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const limitValue = parseFloat(inputValue);
    if (isNaN(limitValue) || limitValue <= 0) {
      setError('Please enter a valid limit amount');
      return;
    }
    setLimit(limitValue);
    addLimit({ amount: limitValue });
    setInputValue('');
  };

  return (
    <StyledSetLimit>
      <InnerLayout1>
        <h2 className="budget">Your Limit: <span>${limit}</span></h2>
        <div className='setBudget'>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Limit Amount"
                step={50}
                className='input-control'
              />
            </div>
            <div className="submit-btn">
              <Button 
                name={'Set Limit'}
                icon={set}
                bPad={'.4rem 1.2rem'}
                bRad={'30px'}
                bg={'var(--color-accent'}
                color={'#fff'}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </InnerLayout1>
    </StyledSetLimit>
  );
};

const StyledSetLimit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .budget {
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
    
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }

  .setBudget {
    width: 100%;
    
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 100%;
    }
  }

  .input-container {
    width: 100%;
    max-width: 500px;
  }

  .input-control {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    width: 100%;
    
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }

  .submit-btn {
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
  }

  .error-message {
    color: var(--color-red);
    text-align: center;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    .budget {
      font-size: 1.5rem;
      padding: 0.8rem;
      
      span {
        font-size: 2rem;
      }
    }

    .input-control {
      padding: 0.5rem 0.8rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .budget {
      font-size: 1.2rem;
      padding: 0.6rem;
      flex-direction: column;
      text-align: center;
      gap: 0.3rem;
      
      span {
        font-size: 1.5rem;
      }
    }

    form {
      gap: 0.8rem;
    }

    .input-control {
      padding: 0.4rem 0.6rem;
    }
  }
`;

export default Set_limit;