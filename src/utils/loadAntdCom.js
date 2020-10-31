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
import Icon from '../components/Icon';

export default function lazyLoadAntComponent(app) {
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
  ].forEach(com => app.use(com));

  // 加载图标
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
