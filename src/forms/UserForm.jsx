import { Button, Form, Image, Input, message, Select, Upload } from 'antd';

import useLanguage from '@/locale/useLanguage';
import { UploadOutlined } from '@ant-design/icons';
import Password from 'antd/es/input/Password';
import University from '@/utils/University';
import Year from '@/utils/Year';
import Section from '@/utils/Section';
import Role from '@/utils/Role';
import State from '@/utils/State';
export default function UserForm({ isUpdateForm = false }) {
  const translate = useLanguage();

  return (
    <>
      <Form.Item
        name="name"
        label={translate('name')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label={translate('email')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        name="password"
        label={translate('password')}
        rules={[
          {
            required: !isUpdateForm,
          },
        ]}
      >
        <Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label={translate('phone')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder={'0953214589'} />
      </Form.Item>

      <Form.Item
        label={'University'}
        name={'university'}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          key={'university'}
          style={{
            width: '100%',
          }}
        >
          {Object.keys(University)?.map((key) => {
            return (
              <Select.Option key={key} value={key}>
                {University[key]}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label={'State'}
        name={'state'}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          style={{
            width: '100%',
          }}
        >
          {Object.keys(State)?.map((key) => {
            return (
              <Select.Option key={key} value={key}>
                {State[key]}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label={'Year'}
        name={'year'}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          style={{
            width: '100%',
          }}
        >
          {Object.keys(Year)?.map((key) => {
            return (
              <Select.Option key={key} value={key}>
                {Year[key]}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label={'Section'}
        name={'section'}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          style={{
            width: '100%',
          }}
        >
          {Object.keys(Section)?.map((key) => {
            return (
              <Select.Option key={key} value={key}>
                {Section[key]}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item
        label={'Role'}
        name={'role_id'}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          style={{
            width: '100%',
          }}
        >
          {Object.keys(Role)?.map((key) => {
            return (
              <Select.Option key={key} value={key}>
                {Role[key]}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </>
  );
}
