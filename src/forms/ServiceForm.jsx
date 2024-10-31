import { Button, Form, Input, message, Select, Upload } from 'antd';
import { DatePicker } from 'antd';
import { validatePhoneNumber } from '@/utils/helpers';
import { useDate } from '@/settings';

import useLanguage from '@/locale/useLanguage';
import { UploadOutlined } from '@ant-design/icons';

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
export default function ServiceForm({ isUpdateForm = false }) {
  const translate = useLanguage();
  const { dateFormat } = useDate();

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
