import { registerMicroApps, start } from 'qiankun';

const apps = [
  {
    name: 'app1',
    entry: '//localhost:4001',
    container: '#subApp',
    activeRule: '/app1',
  },
  {
    name: 'app2',
    entry: '//localhost:4002',
    container: '#subApp',
    activeRule: '/app2',
  },
];

registerMicroApps(apps);

start({ sandbox: { strictStyleIsolation: true } });
