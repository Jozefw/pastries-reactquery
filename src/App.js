import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import HomePage from './HomePage';
import QueryPage from './QueryPage';
import {QueryClient,QueryClientProvider} from 'react-query'

const routes = createBrowserRouter([
  {path: '/',element:<RootLayout></RootLayout>,children:[
    {path:'/',element:<HomePage></HomePage>},
    {path:'/query',element:<QueryPage></QueryPage>}
  ]}
])

const queryResults = new QueryClient()

function App() {
  return (
  <QueryClientProvider client={queryResults}>
    <RouterProvider router={routes}></RouterProvider>
  </QueryClientProvider>
  )
}

export default App;
