import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import {fields} from './config';

import useLanguage from '@/locale/useLanguage';
import {Switch} from "antd";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";

export default function Blocks() {
    const translate = useLanguage();
    const entity = 'blocks';
    const searchConfig = {
        displayLabels: ['name', 'points', 'description', 'published'],
        searchFields: ['name', 'points', 'description', 'published'],
    };
    const deleteModalLabels = ['name', 'points', 'description', 'published'];

    const dataTableColumns = [
        {
            title: translate('Name'),
            dataIndex: 'name',
        },
        {
            title: translate('Points'),
            dataIndex: 'point',
        },
        {
            title: translate('Description'),
            dataIndex: 'description',
        },
        {
            title: translate('Published'),
            dataIndex: 'published',
        }
    ];

    const Labels = {
        PANEL_TITLE: translate('blocks'),
        DATATABLE_TITLE: translate('blocks_list'),
        ADD_NEW_ENTITY: translate('add_new_blocks'),
        ENTITY_NAME: translate('blocks'),
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
        dataTableColumns
    };
    return (
        <CrudModule
            createForm={<DynamicForm fields={fields}/>}
            updateForm={<DynamicForm fields={fields} isUpdateForm={true}/>}
            config={config}
        />
    );
}
