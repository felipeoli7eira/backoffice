import React from 'react'
import { ComponentContainer, ContentArea } from './styles'

interface ContentPropsInterface {
    children: React.ReactNode;
}

// navigation top icons imports
import homeIcon from './../../assets/icons/home.svg';
import chatIcon from './../../assets/icons/chat.svg';
import bellIcon from './../../assets/icons/bell.svg';
import gearIcon from './../../assets/icons/gear.svg';

import ModelUserPicture from './../../assets/images/usuario-modelo.jpg';

import ButtonClean from '../ButtonClean';

const ContentMain = ({ children }: ContentPropsInterface) => {

    return (
        <ComponentContainer>
            <nav className="nav-top">
                <div className="nav-top-items">
                    <div className="profile">
                        <p className='nav-top-customer-name'>Olá Felipe Alves de Oliveira</p>
                        <p className='nav-top-balance-info'>R$ 5.542,99</p>
                    </div>

                    <img className='nav-top-profile-picture' src={ModelUserPicture} alt="Foto do usuario" />

                    <ButtonClean onClick={() => console.log(1)}>
                        <img src={homeIcon} width={50} alt="icone de casa" />
                    </ButtonClean>

                    <ButtonClean onClick={() => console.log(2)}>
                        <img src={chatIcon} width={50} alt="icone de balão de fala" />
                    </ButtonClean>

                    <ButtonClean onClick={() => console.log(3)}>
                        <img src={bellIcon} width={50} alt="icone de sino" />
                    </ButtonClean>

                    <ButtonClean onClick={() => console.log(4)}>
                        <img src={gearIcon} width={50} alt="icone de engrenagem" />
                    </ButtonClean>
                </div>
            </nav>

            <ContentArea>
                {children}
            </ContentArea>
        </ComponentContainer>
    )
}

export default ContentMain