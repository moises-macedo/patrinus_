import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const Content = styled.div`
    margin-top: 10%;
    margin-left: 8%;
    display: flex;
    flex-direction: column;

    h2{
        font-size: 2rem;
        text-decoration: underline;
        font-family: var(--font-inter);
        margin-bottom: 60px;
    }
`;