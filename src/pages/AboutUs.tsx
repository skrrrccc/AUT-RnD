import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';


export default (): React.ReactNode => {
    const intl = useIntl();
    return (
        <PageContainer>
            <Card>
                <Alert
                    message="comming soon"
                    type="warning"
                    showIcon
                    banner
                    style={{
                        margin: -12,
                        marginBottom: 24,
                    }}
                />
            </Card>
        </PageContainer>
    );
};
