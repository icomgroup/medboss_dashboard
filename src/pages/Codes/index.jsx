import CrudModule from '@/modules/CrudModule/CrudModule';

import useLanguage from '@/locale/useLanguage';
import CodeForm from '@/forms/CodeForm.jsx';
import { Flex, Image } from 'antd';
import QRCode from 'react-qr-code';

export default function Codes() {
  const translate = useLanguage();
  const entity = 'codes';
  const searchConfig = {
    displayLabels: ['center', 'points', 'numCode'],
    searchFields: ['center', 'points', 'numCode'],
  };
  const deleteModalLabels = ['center', 'points', 'numCode'];

  const readColumns = [
    {
      title: translate('Points'),
      dataIndex: 'points',
    },
    {
      title: translate('Code'),
      dataIndex: 'uuid',
    },
  ];
  const dataTableColumns = [
    {
      title: translate('Points'),
      dataIndex: 'points',
    },
    {
      title: translate('Code'),
      dataIndex: 'uuid',
    },
    {
      title: translate('QR-Code'),
      dataIndex: 'uuid',
      render: (Code) => {
        return <QRCode value={Code ?? ''} size={50} />;
      },
    },
    {
      title: translate('Center'),
      dataIndex: 'center',
      render: (center, record, index) => {
        return center?.name ?? '';
      },
    },
    {
      title: translate('Is Used'),
      dataIndex: 'is_used',
      render: (isUsed, record, index) => {
        return isUsed ? 'True' : 'False';
      },
    },
  ];
  const Labels = {
    PANEL_TITLE: translate('codes'),
    DATATABLE_TITLE: translate('codes_list'),
    ADD_NEW_ENTITY: translate('add_new_codes'),
    ENTITY_NAME: translate('codes'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
      WithExcelFile={true}
      createForm={<CodeForm />}
      updateForm={<CodeForm isUpdateForm={true} />}
      config={config}
    />
  );
}
