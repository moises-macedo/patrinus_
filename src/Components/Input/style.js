import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; 
  width : 100%;
  max-width: 400px;
  height: 75px;   
  label{
    font-size: 2.37em;
    color: rgba(0, 0, 0, 0.56);
  }
  
`
export const InputContainer = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.76);
  textarea:focus, input:focus, select:focus {
    outline: 0;
}
  input{
    font-size: 1.125em;     
    border: none;
    background: transparent;

    &::placeholder{
      background: transparent;
    }
  }
`
;