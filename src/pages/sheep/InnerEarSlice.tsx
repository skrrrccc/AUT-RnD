import React, { useState }from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Image, Row, Col, Slider } from 'antd';
import { useIntl, FormattedMessage } from 'umi';

export default (): React.ReactNode => {
    const intl = useIntl();
    const [value, setValue] = useState(30);
    const [urlValue, setUrl] = useState<string>("");
    const style = {
        display: 'inline-block',
        innerWidth: 300,
        marginLeft: 70,
    };
    let generateUrl = (defaultValue: number) => {
        let baseValue = 581;
        baseValue += defaultValue * 4;
        
        let urlString = "";
        let toStringValue = [...baseValue.toString()];
        console.log(baseValue.toString());
        console.log(toStringValue);
    
        for (let j = 0; j < 8-toStringValue.length; j++) {
            urlString += "0";
        }
        urlString += baseValue.toString();
        
        let url = "./public/quarter_sheep5/resized_20191028s__IR_rec" + urlString  + ".tif"
        return url;
    }

    const handleChange: any = (value: any) => {
        setValue(value);
        setUrl("");
        setUrl(generateUrl(value));
    };
    return (
        <PageContainer style={{background: 'white'}}>
            <Row>
                <Col span={12}>
                    <p>Inner Ear Slice</p>
                    <div style={style}>
                        <Slider onChange={handleChange} style={{ width: 800 }} max={367} defaultValue={value} />
                        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                    </div>
                </Col>
                <Col span={12}>
                    <img src={urlValue} />
                </Col>
            </Row>

        </PageContainer>
    );
};
