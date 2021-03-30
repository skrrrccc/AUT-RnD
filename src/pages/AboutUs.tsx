import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';


export default (): React.ReactNode => {
    const intl = useIntl();
    return (
        <PageContainer>
           <p>
               <ul><li>Our research interest is in auditory neuroscience, with a focus on the mechanisms, diagnosis and treatment of inner ear diseases, and clinical and population health approaches to the prevention and alleviation of hearing impairment in the community.</li>
                   <br></br>
                   <li>Our current programme of research incorporates a series of projects that directly investigate the protective role of purinergic signaling pathways (adenosine receptors in particular) against noise- and drug-induced cochlear injury and prevention of age-related cochlear degeneration.</li>
                   <br></br>
                   <li>Our projects also focus on the role of oxidative stress, inflammation, and glutamate excitotoxicity in the development of cochlear neuropathy and sensorineural hearing loss.</li>
                   <br></br>
                   <li>We are developing MR imaging of the cochlea in both animals and humans and investigating novel drug delivery approaches to the inner ear. Our research portfolio also includes relationship between hearing loss and cognitive decline in animal models of Alzheimer’s disease, and auditory processing in people with mild cognitive decline.</li>
                   <br></br>
                   <li>Population Health research projects are around the epidemiology of noise-induced hearing loss in the New Zealand community, development of targeted interventions to reduce noise-induced hearing loss in industrial and leisure environments and
the development of hearing services in developing countries, with a focus on Pacific Island nations. These studies form a multidisciplinary programme of research to prevent, treat and reduce hearing impairment.</li></ul>
</p>

</PageContainer>
    );
};
