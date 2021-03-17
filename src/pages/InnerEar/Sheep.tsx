import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import * as THREE from 'three'
import styles from './Welcome.less';
import STLViewer from 'stl-viewer';

export default (): React.ReactNode => {
    const intl = useIntl();
    return (
        <PageContainer>
            <STLViewer
                model='https://raw.githubusercontent.com/skrrrccc/AUT-RnD/b4aa16e232ce44b56bacbdd577f1925ffc203dbc/public/cochleahorizontal.stl'
                width={innerWidth}
                height={innerHeight}
                modelColor='unset'
                backgroundColor='#EAEAEA'
                rotate={false}
                crossOrigin=''
            />
        </PageContainer>
    );
};
