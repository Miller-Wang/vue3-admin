import {
  Button,
  Form,
  Input,
  Table,
  Select,
  Checkbox,
  Radio,
  Layout,
  Breadcrumb,
  Menu,
  Pagination,
  DatePicker,
  InputNumber,
  TimePicker,
  Avatar,
  Popover,
  Dropdown,
  Modal,
} from 'ant-design-vue';

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';
import { Icon } from '../components/index';

export default function lazyLoadAntComponent(app) {
  // 注册antd组件
  [
    Button,
    Table,
    Form,
    Input,
    Select,
    Checkbox,
    Radio,
    Layout,
    Breadcrumb,
    Menu,
    Pagination,
    DatePicker,
    TimePicker,
    InputNumber,
    Avatar,
    Popover,
    Dropdown,
    Modal,
  ].forEach(com => app.use(com));

  // 加载自定义组件和图标
  [
    Icon,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LogoutOutlined,
    MailOutlined,
  ].forEach(com => app.component(com.name, com));
}
