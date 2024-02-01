import React, { useState } from 'react'
import { List as NavContainer } from '@mui/material'

import {
  ComponentContainer,
  navContainerStyles
} from './styles'

import { ReactComponent as SquareXIcon } from './../../assets/icons/closesquare.svg'
import { ReactComponent as BarsIcon } from './../../assets/icons/bars.svg'
import { ReactComponent as CompanyIcon } from './../../assets/icons/p-pagare.svg'
import { ReactComponent as CompanyExpandedIcon } from './../../assets/icons/pagare.svg'

import NavigationItems from './NavigationItems'

const Navigation: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  return (
    <ComponentContainer open={navOpen}>
      <header className='navigation-top'>
        <button className='toggle-menu-state-button' onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <SquareXIcon /> : <BarsIcon />}
        </button>
      </header>

      <div className='company-logo-container'>
        {navOpen ? <CompanyExpandedIcon /> : <CompanyIcon />}
      </div>

      <div className='menu-items-container'>
        <NavContainer sx={navContainerStyles} component='nav'>
          <NavigationItems navOpen={navOpen} setNavOpen={setNavOpen} />
        </NavContainer>
      </div>
    </ComponentContainer>
  )
}

export default Navigation
