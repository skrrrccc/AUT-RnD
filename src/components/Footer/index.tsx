import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2021 AUT R&D"
    links={[
      {
        key: 'AUT',
        title: 'AUT',
        href: 'www.aut.ac.nz',
        blankTarget: true
      }
    ]}
  />
);
