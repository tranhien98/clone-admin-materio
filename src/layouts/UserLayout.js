import React from 'react'
import VerticalLayout from '../@core/layouts/VerticalLayout'

// react router
import { BrowserRouter } from 'react-router-dom'
const UserLayout = ({ children }) => {
    return (
        <BrowserRouter>
            <VerticalLayout>
            </VerticalLayout>
        </BrowserRouter>
    )
}

export default UserLayout