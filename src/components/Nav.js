import { Menu } from 'antd';
import logo from '../assets/img/mandu.svg';

const style = {
  background:
    'rgb(46,82,248) linear-gradient(90deg, rgba(46,82,248,1) 0%, rgba(86,167,242,1) 35%)',
  height: '4rem',
  lineHeight: '4rem',
};

export default function Nav() {
  return (
    <Menu mode='horizontal' style={style} theme='dark'>
      <Menu.Item>
        <img src={logo} alt='Mandu' />
      </Menu.Item>
      <Menu.Item>Dashboard</Menu.Item>
      <Menu.Item>Organización</Menu.Item>
      <Menu.Item>Modelos</Menu.Item>
      <Menu.Item>Reportes</Menu.Item>
      <Menu.Item>Seguimiento</Menu.Item>
    </Menu>
  );
}
