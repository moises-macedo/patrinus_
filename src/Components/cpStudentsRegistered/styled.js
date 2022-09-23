import styled from "styled-components";

export const Container = styled.div`
    ul{
        width: 100%;
        padding-right: 70px;
        height: 74.5vh;
        overflow-y: scroll;
        ::-webkit-scrollbar{
            overflow: hidden;
        }
    }
`

export const Li = styled.li`
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f5f5f5;

    span{
        flex: 1;
        height: 26px;
        border: 2px solid #000;
        text-overflow:ellipsis;
        overflow: hidden;
        text-align: center;
    }
`