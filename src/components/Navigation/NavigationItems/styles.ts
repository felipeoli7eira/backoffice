import styled from 'styled-components'
import NavgationPropsInterface from '../../../interfaces/Navigation';

export const NavItemContainer = styled.div<NavgationPropsInterface>`
    span {
        transition: opacity .2s;
        display: ${props => props.open ? 'inline': 'none'};
        opacity: ${props => props.open ? 1 : 0};
    }
`;