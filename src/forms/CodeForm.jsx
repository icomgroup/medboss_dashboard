import { Button, Form, Input, InputNumber, message, Select, Upload } from 'antd';

import useLanguage from '@/locale/useLanguage';
import { UploadOutlined } from '@ant-design/icons';
import SelectAsync from '@/components/SelectAsync/index.jsx';
import React, { useEffect } from 'react';

export default function CodeForm({ isUpdateForm = false }) {
  const translate = useLanguage();

  return (
    <>
      <Form.Item
        name="points"
        label={translate('Points')}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber min={1} />
      </Form.Item>

      {!isUpdateForm && (
        <Form.Item
          name="number_to_generate"
          label={translate('Number of codes')}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber min={1} max={100} />
        </Form.Item>
      )}

      <Form.Item
        label={translate('Center')}
        name="center_id"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <SelectAsync
          entity={'centers'}
          displayLabels={['name']}
          withRedirect={true}
          urlToRedirect={'/centers'}
          redirectLabel="Add Center"
        ></SelectAsync>
      </Form.Item>
    </>
  );
}
