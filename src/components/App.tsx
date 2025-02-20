import { FC, useState } from 'react'
import * as s from './app.module.scss'
import { SvgIcon } from '@components/UIKit/SvgIcon/SvgIcon'
import jpg_image from '@assets/jpg_image.jpg'
import { Link, Outlet } from 'react-router-dom'
// TODO вернуть импорт
import '@/icons'

interface Props {}

const App: FC<Props> = ({}) => {
   const [count, setCount] = useState(0)

   return (
      <div>
         <Link to={'/about'}>about</Link>
         <br />
         <Link to={'/shop'}>shop</Link>
         <br />
         TEST: {process.env.NODE_ENV}
         <img
            data-testid="App.jpg_image"
            src={jpg_image}
            alt="jpg_image"
         />
         <SvgIcon
            data-testid={'App.svg_twitter'}
            name={'twitter'}
            color={'red'}
         />
         <SvgIcon
            data-testid={'App.svg_home'}
            name={'home'}
            color={'pink'}
         />
         <h1>Count: {count}</h1>
         <button
            className={s.test}
            onClick={() => setCount(prev => prev + 1)}
         >
            +
         </button>
         <br />
         <br />
         <Outlet />
      </div>
   )
}

export default App
