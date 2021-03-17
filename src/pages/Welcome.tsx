import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Col, Row, Card } from 'antd';
import { useIntl, FormattedMessage, history } from 'umi';
import * as THREE from 'three'
import styles from './Welcome.less';
import STLViewer from 'stl-viewer';
import { Header } from 'antd/lib/layout/layout';
import Title from 'antd/lib/skeleton/Title';
export default (): React.ReactNode => {
  const intl = useIntl();
  const { Meta } = Card;
  return (
    <PageContainer>
      <Title>Virtual Inner Ear Map </Title>
      <Row>
        <Col span={8}>
          <Card
            hoverable
            onClick={() => {
              history.push('/inner-ear/mice' || '/');
            }}
            style={{ height: 480 }}
            cover={
            <img 
                alt="mice" src="https://www.researchgate.net/profile/Selina-Pearson/publication/221845473/figure/fig5/AS:305475305394180@1449842396459/Cleared-Inner-Ears-from-Control-and-Tc1-mice-Gross-morphology-of-the-inner-ears-of-a.png" />}
          >
            <Meta title="Mice"/>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            onClick={() => {
              history.push('/inner-ear/sheep' || '/');
            }}
            style={{ height: 480 }}
            cover={<img alt="sheep" src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs00359-020-01430-w/MediaObjects/359_2020_1430_Fig1_HTML.png" />}
          >
            <Meta title="Sheep" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable 
            onClick={() => {
              history.push('/inner-ear/human' || '/');
            }}
            style={{ height: 480 }}
            cover={<img alt="human" src="https://slocountyhearingaids.com/wp-content/uploads/2017/01/Inner-Ear-1.jpg"/>}
        >
          <Meta title="Human"/>
        </Card></Col>
      </Row>
    </PageContainer>
  );
};
