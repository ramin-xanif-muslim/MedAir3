import { Box } from '@chakra-ui/react';
import './App.css';
import ReactComponent from './components/RoutComponent';
import SideBar from './components/SideBar';
import { useLocalStorageStore } from './modules/store';
import Login from './pages/Login';
import { Layout } from 'antd';
import { useEffectOnDidMountApp } from './modules/hooks';

function App() {

  useEffectOnDidMountApp()

  const token = useLocalStorageStore((store) => store.token)

  // if (!token) return <Login />;

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Layout className='brent-bg-color'>

        <SideBar />

        <Layout.Content
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'relative',
          }}
        >
          <Box p={['1', '4']}>

            {/* <Breadcrumb /> */}

            <ReactComponent />

          </Box>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
