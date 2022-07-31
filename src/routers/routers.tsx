import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HOME_PATH, TODO_PATH } from './routers.constant'
import { MainLayout } from '../common'
import { Home, TodoPage } from '../pages'

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={TODO_PATH} element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Routers
