import {styled} from "theme";

export const Field = styled.input`
    height: 40px;
    border-radius: ${({theme}) => theme.borderRadius};
    outline: none;
    font-size: ${({theme}) => theme.fontLarge}
    appearance: none;
    box-shadow: none;
    text-align: center;
`
