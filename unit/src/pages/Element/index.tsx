import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { add, reduce } from "@/utils/compute";
const Element = () => {
  const [value, setValue] = useState<number>(0);

  const onAdd = () => {
    setValue(add(value, 1));
  }

  const onReduce = () => {
    setValue(reduce(value, 1));
  }


  return (
    <Space>
      <Button id={"button_plus"} onClick={onAdd}>
        Plus
      </Button>
      <Button id={"button_reduce"} onClick={onReduce}>
        Reduce
      </Button>
      <p className={"value"}>{value}</p>
    </Space>
  );
};

export default Element;
