import Nav from './components/Nav';
import TabPanel from './components/TabPanel';
import { PageHeader } from 'antd';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <PageHeader title='Organización' style={{ fontWeight: '400' }} />
      <TabPanel />
    </div>
  );
}

export default App;
