import { Drawer } from '@mui/material'
import React from 'react'
import { NavHeader } from './NavHeader'

const Navigation = () => {
  return (
    <Drawer open={true}>
        <NavHeader/>
    </Drawer>
  )
};

export default Navigation;
