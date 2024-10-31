import { Button, Form, Image, Input, InputNumber, message, Select, Upload } from 'antd';

import useLanguage from '@/locale/useLanguage';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';

const { TextArea } = Input;

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error('Image must smaller than 5MB!');
  }
  return false;
};
export default function ReviewForm({ isUpdateForm = false }) {
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
        name="title"
        label={translate('title')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="msg"
        label={translate('Message')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item
        name="rate"
        label={translate('Rate')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber min={0} max={5} />
      </Form.Item>
      <Form.Item
        name="img"
        label={translate('Photo')}
        valuePropName="fileList[]"
        getValueFromEvent={(e) => e.fileList}
        rules={[
          {
            required: !isUpdateForm,
          },
        ]}
      >
        <Upload
          beforeUpload={beforeUpload}
          listType="picture"
          accept="image/png, image/jpeg"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>{translate('click_to_upload')}</Button>
        </Upload>
      </Form.Item>
    </>
  );
}
