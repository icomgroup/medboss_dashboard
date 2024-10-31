import { Button, Form, Image, Input, message, Select, Upload } from 'antd';

import useLanguage from '@/locale/useLanguage';
import { UploadOutlined } from '@ant-design/icons';

const beforeUpload = (file) => {
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error('Image must smaller than 5MB!');
  }
  return false;
};

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
export default function MemberForm({ isUpdateForm = false }) {
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
        name="description"
        label={translate('description')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
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
