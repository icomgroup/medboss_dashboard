import useLanguage from '@/locale/useLanguage';
import CrudModule from '@/modules/CrudModule/CrudModule';
import { useDate } from '@/settings';
import React from 'react';
import { fields } from './config';
import DynamicForm from '@/forms/DynamicForm';
import State from '@/utils/State';
import University from '@/utils/University';
import Year from '@/utils/Year';
import Section from '@/utils/Section';

export default function Users() {
  const translate = useLanguage();
  const { dateFormat } = useDate();
  const entity = 'users';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
    outputValue: 'id',
  };

  const deleteModalLabels = ['name'];

  const dataTableColumns = [
    {
      title: translate('Name'),
      dataIndex: 'name',
    },
    {
      title: translate('Role'),
      dataIndex: 'role_name',
    },
    {
      title: translate('State'),
      dataIndex: 'state',
      render: (state) => State[state],
    },
    {
      title: translate('University'),
      dataIndex: 'university',
      render: (university) => University[university],
    },
    {
      title: translate('Year'),
      dataIndex: 'year',
      render: (year) => Year[year],
    },
    {
      title: translate('Section'),
      dataIndex: 'section',
      render: (section) => Section[section],
    },
  ];

  const readColumns = [
    {
      title: translate('Name'),
      dataIndex: 'name',
    },
    {
      title: translate('Email'),
      dataIndex: 'email',
    },
    {
      title: translate('Points'),
      dataIndex: 'points',
    },
    {
      title: translate('Phone'),
      dataIndex: 'phone',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('user'),
    DATATABLE_TITLE: translate('user_list'),
    ADD_NEW_ENTITY: translate('add_new_user'),
    ENTITY_NAME: translate('user'),
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
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} isUpdateForm={true} />}
      config={config}
    />
  );
}
