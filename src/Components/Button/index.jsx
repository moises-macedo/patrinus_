import {ButtonStyled} from './style';
export const Button = ({children,theme, ...rest}) =>{
    return(
        <ButtonStyled  theme={theme}  {...rest}>{children}</ButtonStyled>
       )
}