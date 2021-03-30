import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Form, Input, InputNumber, Button } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import * as THREE from 'three'
import styles from './Welcome.less';
import STLViewer from 'stl-viewer';

export default (): React.ReactNode => {
    const intl = useIntl();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
      
    return (
        <PageContainer>
            
    <Form {...layout} name="nest-messages"  validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </PageContainer>
    );
};
