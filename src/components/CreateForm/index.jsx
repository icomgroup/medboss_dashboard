import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { useCrudContext } from '@/context/crud';
import { selectCreatedItem } from '@/redux/crud/selectors';

import useLanguage from '@/locale/useLanguage';
import ExcelJS from 'exceljs';
import { Button, Form } from 'antd';
import Loading from '@/components/Loading';

export default function CreateForm({
  config,
  formElements,
  withUpload = false,
  WithExcelFile = false,
}) {
  let { entity } = config;
  const dispatch = useDispatch();
  const { isLoading, isSuccess, result } = useSelector(selectCreatedItem);
  const { crudContextAction } = useCrudContext();
  const { panel, collapsedBox, readBox } = crudContextAction;
  const [form] = Form.useForm();
  const translate = useLanguage();
  const onSubmit = (fieldsValue) => {
    // Manually trim values before submission

    if (fieldsValue.file && withUpload) {
      fieldsValue.file = fieldsValue.file[0].originFileObj;
    }
    if (fieldsValue.files && withUpload) {
      fieldsValue.files = fieldsValue.files[0].originFileObj;
    }
    if (fieldsValue.attach && withUpload) {
      fieldsValue.attach = fieldsValue.attach[0].originFileObj;
    }

    if (fieldsValue.img && withUpload) {
      fieldsValue.img = fieldsValue.img[0].originFileObj;
    }

    // const trimmedValues = Object.keys(fieldsValue).reduce((acc, key) => {
    //   acc[key] = typeof fieldsValue[key] === 'string' ? fieldsValue[key].trim() : fieldsValue[key];
    //   return acc;
    // }, {});

    dispatch(crud.create({ entity, jsonData: fieldsValue, withUpload }));
  };

  useEffect(() => {
    if (isSuccess) {
      readBox.open();
      collapsedBox.open();
      panel.open();
      form.resetFields();
      WithExcelFile ? handelExportExcel() : '';
      dispatch(crud.resetAction({ actionType: 'create' }));
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  const handelExportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(entity);

    worksheet.columns = Object.keys(result[0]).map((col) => {
      return {
        header: col.toString(),
        key: col.toString(),
      };
    });

    await result.map(async (res) => {
      worksheet.addRow({ ...res });
    });

    workbook.xlsx.writeBuffer().then(function (data) {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'download.xlsx';
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <Loading isLoading={isLoading}>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        {formElements}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {translate('Submit')}
          </Button>
        </Form.Item>
      </Form>
    </Loading>
  );
}
