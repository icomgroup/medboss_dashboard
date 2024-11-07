import { Button, Form, Input, InputNumber, message, Select, Upload } from 'antd';

import { useDate } from '@/settings';

import useLanguage from '@/locale/useLanguage';
import { UploadOutlined } from '@ant-design/icons';
import SelectAsync from '@/components/SelectAsync/index.jsx';
import React, { useEffect } from 'react';

const { TextArea } = Input;
const beforeUploadImage = (file) => {
  const isJpgOrPng =
    file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG/JPEG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error('Image must smaller than 5MB!');
  }
  return isJpgOrPng && isLt2M;
};

const beforeUploadFile = (file) => {
  console.log(file.type);
  const isPDF = file.type === 'application/pdf';
  if (!isPDF) {
    message.error('You can only upload PDF file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 50;
  if (!isLt2M) {
    message.error('Image must smaller than 50MB!');
  }
  return isPDF && isLt2M;
};

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
export default function FileForm({ isUpdateForm = false }) {
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
        name="description"
        label={translate('description')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea />
      </Form.Item>

      <Form.Item
        name="subject"
        label={translate('subject')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="points"
        label={translate('Points')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber min={0} max={1000000} />
      </Form.Item>

      <Form.Item
        name="number_of_page"
        label={translate('Number of pages')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber min={0} max={1000000} />
      </Form.Item>

      <Form.Item
        name="study_time"
        label={translate('Number of Minutes')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber min={0} max={1000000} />
      </Form.Item>

      <Form.Item
        label={translate('Block')}
        name="block_id"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <SelectAsync
          entity={'blocks'}
          displayLabels={['name']}
          withRedirect={true}
          urlToRedirect="/payment/mode"
          redirectLabel="Add Payment Mode"
          multiple={true}
        ></SelectAsync>
      </Form.Item>

      <Form.Item
        name="img"
        label={translate('Image')}
        valuePropName="fileList[]"
        getValueFromEvent={normFile}
        rules={[
          {
            required: !isUpdateForm,
          },
        ]}
      >
        <Upload beforeUpload={beforeUploadImage} listType="picture" maxCount={1}>
          <Button icon={<UploadOutlined />}>{translate('click_to_upload')}</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="file"
        label={translate('File')}
        valuePropName="fileList[]"
        getValueFromEvent={normFile}
        rules={[
          {
            required: !isUpdateForm,
          },
        ]}
      >
        <Upload beforeUpload={beforeUploadFile} listType="file" maxCount={1}>
          <Button icon={<UploadOutlined />}>{translate('click_to_upload')}</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="attach"
        label={translate('Attach')}
        valuePropName="fileList[]"
        getValueFromEvent={normFile}
      >
        <Upload beforeUpload={beforeUploadFile} listType="file" maxCount={1}>
          <Button icon={<UploadOutlined />}>{translate('click_to_upload')}</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label={translate('Publish')}
        name="is_published"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder={translate('Select')}
          options={[
            {
              value: 1,
              label: translate('True'),
            },
            {
              value: 0,
              label: translate('False'),
            },
          ]}
        />
      </Form.Item>
    </>
  );
}
