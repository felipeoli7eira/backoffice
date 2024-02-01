import styled from 'styled-components';

import NavgationPropInterface from '../../interfaces/Navigation';

export const ComponentContainer = styled.aside<NavgationPropInterface>`
    transition: width .1s;
    background-color: #1E1E1E;
    z-index: 10;
    border-right: 2px solid #6ACC32;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    width: ${props => props.open ? 370 : 85}px;

    header.navigation-top {
      padding: 20.5px;
      display: flex;
      align-items: center;
      justify-content: ${props => props.open ? 'start' : 'center'};
      margin-bottom: 43px;

      button.toggle-menu-state-button {
        cursor: pointer;
        background: none;
        border: none;
        outline: 0;
        width: 25px;
        height: 25px;

        svg {
          width: 100%;
        }
      }
    }

    .company-logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 113px;
    }
`;

export const navContainerStyles = {
  width: '100%',
  bgcolor: '#121212',
  padding: 0,
};