import React from 'react';
import {Layout, Row, Col} from 'antd';
import {selectLangDirection} from '@/redux/translate/selectors';
import {useSelector} from 'react-redux';
import {Content} from 'antd/lib/layout/layout';

export default function AuthLayout({children}) {
    const langDirection = useSelector(selectLangDirection);

    return (
        <Layout
            style={{textAlign: langDirection === 'rtl' ? 'right' : 'left', direction: langDirection}}
        >
            <Row>
                {children}
            </Row>
        </Layout>
    );
}
