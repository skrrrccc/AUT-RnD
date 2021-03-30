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
      },
      {
        key: 'UOA', 
        title: 'UOA', 
        href: 'https://www.fmhs.auckland.ac.nz/en/sms/about/our-departments/physiology/research-groups/auditory-neurobiology.html?fbclid=IwAR2FC-77hVeRTNDayDZ1Y_B2KtQagUXHfXUQaJgc7Fyi7gjUh2ng49SJEMU',
        blankTarget: true
      },
      {
        key: 'Facebook', 
        title: 'Facebook', 
        href: 'https://www.facebook.com/AVTNC1/',
        blankTarget: true
      }
    ]}
  />
);
