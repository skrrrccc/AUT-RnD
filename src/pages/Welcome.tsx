import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import * as THREE from 'three'
import styles from './Welcome.less';
import STLViewer from 'stl-viewer'

const STLLoader = require("three-stl-loader")(THREE);

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => {
  const intl = useIntl();
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  // const renderer = new THREE.WebGLRenderer();
  // let loader = new STLLoader();
  // loader.load("./../../public/cochleahorizontal.stl", (geometry) => {

  //   const material = new THREE.MeshPhongMaterial({ color: 'skyblue' });

  //   const mesh = new THREE.Mesh(geometry, material);
  //   console.log(mesh);

  //   scene.add(mesh);

  // });
  // camera.position.z = 5;

  // const animate =  () => {
  //   requestAnimationFrame(animate);
  //   renderer.render(scene, camera);
  // };

  // animate();
  // renderer.setSize(window.innerWidth, window.innerHeight);

  return (
    <PageContainer>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Welcome to Sheep Page',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
      </Card>
      <STLViewer
        model='/public/cochleahorizontal.stl'
        width={800}
        modelColor='unset'
        backgroundColor='#EAEAEA'
        rotate={false}
      />
    </PageContainer>
  );
};
