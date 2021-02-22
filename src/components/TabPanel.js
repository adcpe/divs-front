import { Tabs, Radio } from 'antd';
import TableContent from './TableContent';

const { TabPane } = Tabs;

export default function TabPanel() {
  return (
    <Tabs defaultActiveKey='1'>
      <TabPane tab='Divisiones' key='1'>
        <Radio.Group style={{ marginBottom: 8 }}>
          <Radio.Button value='top'>Listado</Radio.Button>
          <Radio.Button value='left'>Organigrama</Radio.Button>
        </Radio.Group>
        <TableContent />
      </TabPane>
      <TabPane tab='Colaboradores' key='2'>
        Colaboradores
      </TabPane>
      <TabPane tab='Puestos' key='3'>
        Puestos
      </TabPane>
      <TabPane tab='Segmentos' key='4'>
        Segmentos
      </TabPane>
    </Tabs>
  );
}
