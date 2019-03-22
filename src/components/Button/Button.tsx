import {styled} from "theme";
import {LinkProps, ButtonProps} from "components/Button/Button.props";

export const Button = styled.button<ButtonProps>`
    color: ${({theme, primary}) => !primary ? theme.primaryColor : 'white'};
    box-shadow: ${({theme}) => theme.depth2};
    background-color: ${({theme, primary, disabled}) =>
        (!disabled ? (primary ? theme.primaryColor : 'white') : theme.grey)};
    padding: 10px;
    border-radius: 5px;
    min-width: 80px;
    text-align: center;
    outline: none;
    transition: 0.5s;
    &:hover {
        background-color: ${({theme, primary}) => !primary ? theme.primaryColor : 'white'};
        color: ${({theme, primary}) => primary ? theme.primaryColor : 'white'};
        outline: none;
        border: none;
    }
`

export const LinkButton = styled.a<LinkProps>`
    color: ${({theme, primary}) => !primary ? theme.primaryColor : 'white'};
    box-shadow: ${({theme}) => theme.depth2};
    background-color: ${({theme, primary}) => primary ? theme.primaryColor : 'white'};
    padding: 10px;
    border-radius: 5px;
    min-width: 80px;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;
    &:hover {
        background-color: ${({theme, primary}) => !primary ? theme.primaryColor : 'white'};
        color: ${({theme, primary}) => primary ? theme.primaryColor : 'white'};
    }
`
