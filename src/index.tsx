import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '@components/App'
import { LazyAboutPage } from '@pages/about/AboutPage.lazy'
import { LazyShopPage } from '@pages/shop/ShopPage.lazy'

const root = document.getElementById('root')
if (!root) throw Error('root not found')

const container = createRoot(root)
const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/about',
            element: (
               <Suspense fallback={'loading...'}>
                  <LazyAboutPage />
               </Suspense>
            ),
         },
         {
            path: '/shop',
            element: (
               <Suspense fallback={'loading...'}>
                  <LazyShopPage />
               </Suspense>
            ),
         },
      ],
   },
])

container.render(<RouterProvider router={router} />)
