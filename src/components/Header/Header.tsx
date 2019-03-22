import * as React from 'react';
import {styled, withTheme} from "theme";
import {Props} from "components/Header/Header.props";
import {Avatar} from "components/Avatar/Avatar";
import {LinkButton} from "components/Button/Button";

const HeaderComponent = (props: Props) => (
    <div className={props.className}>
        <Avatar src={'/assets/erifranck.png'} />
        <div className='button-content' >
            <LinkButton href='link' >Github</LinkButton>
            <LinkButton href='link' >Linkedin</LinkButton>
            <LinkButton href='link' >Instagram</LinkButton>
            <LinkButton href='link' >Twitter</LinkButton>
        </div>
    </div>
);

export const Header = withTheme(styled(HeaderComponent)`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: ${({theme}) => theme.depth2};
    padding-bottom: 20px;
    background-color: white;
    .button-content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            margin-right: 25px;
            &:last-child {
                margin-right: 0px;
            }
        }
    }
`);
