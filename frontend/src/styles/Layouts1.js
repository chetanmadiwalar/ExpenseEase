import styled from "styled-components";

export const MainLayout1 = styled.div`
    padding: 0.5rem;
    padding-top:2rem;
    height: 100%;
    display: flex;
    gap: 1rem;
    padding-bottom:2rem;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem 0.2rem;
    }
`;

export const InnerLayout1 = styled.div`
    padding: 2rem 1.5rem;
    width: 90%;

    @media (max-width: 900px) {
        padding: 1rem 0.5rem;
        width: 100%;
    }
`;