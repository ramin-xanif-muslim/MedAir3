import { Form, Select } from "antd";
import React, { memo, useEffect } from "react";
import { useQueryContext } from "../../../../modules/store/QueryContext";

const { Option } = Select;


const UseTabs = ({ dataIndex, title, inputRef, save }) => {

  console.log('%c UseTabs','background: red; color: dark');

  const onBlur = () => {
    let inputType = 'select'
    save(inputType)
  };

  const { managersTabs, isFetchingManagersTabs, setIsFetchManagersTabs } = useQueryContext();

  useEffect(() => {
    setIsFetchManagersTabs(true)
  },[])

  return (
    <Form.Item
      style={{
        margin: 0,
      }}
      name={dataIndex}
    >
      <Select
        allowClear
        ref={inputRef}
        lazyLoad
        onBlur={onBlur}
        loading={isFetchingManagersTabs}
      >
        {managersTabs?.map((c, index) => {
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
