import React, { ReactElement } from 'react';
import styled from 'styled-components';

type ButtonCleanProps = {
    children: ReactElement;
    onClick: () => void;
}

const ButtonCleanStyle = styled.button`
    background: none;
    border: none;
    outline: 0;

    &:hover {
        cursor: pointer;
    }
`;

const ButtonClean: React.FC<ButtonCleanProps> = ({ children, onClick }: ButtonCleanProps) => {
    return (
        <ButtonCleanStyle onClick={onClick}>
            {children}
        </ButtonCleanStyle>
    );
};

export default ButtonClean;