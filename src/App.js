import Nav from './components/Nav';
import TabPanel from './components/TabPanel';
import { PageHeader } from 'antd';
import './App.less';

function App() {
  return (
    <div className='App'>
      <Nav />
      <PageHeader title='Organización' style={{ fontWeight: '400' }} />
      <main>
        <TabPanel />
      </main>
    </div>
  );
}

export default App;
