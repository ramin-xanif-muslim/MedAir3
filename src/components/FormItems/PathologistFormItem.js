import React, { memo, useEffect } from 'react';
import { useQueryContext } from '../../modules/store/QueryContext';
import { Form, Select } from 'antd';

const PathologistFormItem = (
    {
        label = "Pathologist",
        name = "pathologist"
    }
) => {

    const { pathologists, isFetchingPathologists, setIsFetchPathologists } = useQueryContext();

    useEffect(() => {
        setIsFetchPathologists(true)
    }, [])

    return (

        <Form.Item
            label={label}
            name={name}
        >
            <Select
                allowClear
                lazyLoad
                loading={isFetchingPathologists}
            >
                {pathologists?.map((i) => {
                    return (
                        <Select.Option key={i.pathologistId} value={i.pathologistName}>
                            {i.pathologistName}
                        </Select.Option>
                    );
                })}
            </Select>
        </Form.Item>
    );
};

export default memo(PathologistFormItem);