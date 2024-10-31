import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';


export default function Faqs() {
  const translate = useLanguage();
  const entity = 'faqs';
  const searchConfig = {
    displayLabels: ['question', 'answer'],
    searchFields: ['question', 'answer'],
  };
  const deleteModalLabels = ['question'];

  const dataTableColumns = [
    {
      title: translate('Question'),
      dataIndex: 'question',
    },
    {
      title: translate('Answer'),
      dataIndex: 'answer',
    },
  ];

  const readColumns = [
    {
      title: translate('Question'),
      dataIndex: 'question',
    },
    {
      title: translate('Answer'),
      dataIndex: 'answer',
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('FAQs'),
    DATATABLE_TITLE: translate('FAQS_list'),
    ADD_NEW_ENTITY: translate('add_new_FAQs'),
    ENTITY_NAME: translate('FAQs'),
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
    readColumns,
  };
  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} isUpdateForm={true} />}
      config={config}
    />
  );
}
