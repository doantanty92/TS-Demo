import React from 'react'
import { Header } from '../Header/Header'
import './MainLayout.scss'
import { Outlet } from 'react-router-dom'

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  )
}
