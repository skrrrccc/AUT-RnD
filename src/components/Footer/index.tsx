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
        href: 'https://www.aut.ac.nz/study/study-options/engineering-computer-and-mathematical-sciences/ecms-poster-showcase/bachelor-of-computer-and-information-sciences',
        blankTarget: true
      }
    ]}
  />
);
