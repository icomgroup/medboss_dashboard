import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';
import { Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

export default function Centers() {
  const translate = useLanguage();
  const entity = 'centers';
  const searchConfig = {
    displayLabels: ['name', 'region', 'phoneNumber', 'address'],
    searchFields: ['name', 'region', 'phoneNumber', 'address'],
  };
  const deleteModalLabels = ['name', 'region', 'phoneNumber', 'address'];

  const dataTableColumns = [
    {
      title: translate('Name'),
      dataIndex: 'name',
    },
    {
      title: translate('Phone Number'),
      dataIndex: 'phoneNumber',
    },
    {
      title: translate('Region'),
      dataIndex: 'region',
    },
    {
      title: translate('Address'),
      dataIndex: 'address',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('center'),
    DATATABLE_TITLE: translate('center_list'),
    ADD_NEW_ENTITY: translate('add_new_center'),
    ENTITY_NAME: translate('center'),
  };
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    fields,
    searchConfig,
    deleteModalLabels,
    dataTableColumns,
  };
  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} isUpdateForm={true} />}
      config={config}
    />
  );
}
