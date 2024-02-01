import React, { useState } from 'react'
import { Collapse, List, ListItemButton as NavItemButton } from '@mui/material'
import coin from '../../../assets/icons/coin.svg'
import { NavItemContainer } from './styles'
import NavigationItemPropsInterface from '../../../interfaces/Navigation/NavigationItemPropsInterface'

const NavigationItems: React.FC<NavigationItemPropsInterface> = ({ navOpen, setNavOpen }) => {
  const [exchangeState, setExchangeState] = useState<boolean>(false)

  const css = {
    items: {
      padding: navOpen ? '28px 50px' : '28px 0',
      display: 'flex',
      justifyContent: navOpen ? 'start' : 'center',
      gap: '1rem',
      borderTop: '1px solid #303030',
      borderBottom: '1px solid #303030',
    },

    sub: {
      background: '#414141',
      padding: '18px',
      fontSize: '16px',
      fontWeight: 500,
      borderTop: '1px solid #383838',
      borderBottom: '1px solid #383838',
    }
  }

  const collapses = {
    exchange: () => {
      if (!navOpen) {
        setNavOpen(true)
      }
      setExchangeState(!exchangeState)
    },
  }

  return (
    <NavItemContainer open={navOpen}>
      <NavItemButton onClick={collapses.exchange} sx={css.items}>
        <img src={coin} alt="coin icon" />
        <span>Câmbios</span>
      </NavItemButton>

      <Collapse in={!navOpen ? false : exchangeState} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <NavItemButton sx={css.sub}>
            <span>Clientes</span>
          </NavItemButton>
          <NavItemButton sx={css.sub}>
            <span>Histórico</span>
          </NavItemButton>
          <NavItemButton sx={css.sub}>
            <span>Beneficiário</span>
          </NavItemButton>
        </List>
      </Collapse>
    </NavItemContainer>
  )
}

export default NavigationItems
