import { Form, Select } from "antd";
import React, { memo } from "react";

const { Option } = Select;

const UseTabs = ({ dataIndex, title, inputRef, save }) => {

  const onBlur = () => {
    let inputType = 'select'
    save(inputType)
  };

  return (
    <Form.Item
      style={{
        margin: 0,
      }}
      name={dataIndex}
      rules={[
        {
          required: true,
          message: `Please enter the valid ${title.toLowerCase()}...`,
        },
      ]}
    >
      <Select
        allowClear
        ref={inputRef}
        lazyLoad
        onBlur={onBlur}
      >
        {[].map((c, index) => {
          return (
            <Option key={c.cureTabId} value={JSON.stringify(c)}>
              {c.cureTabName}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

export default memo(UseTabs);
