import React, { useState, useEffect } from 'react';
import { Input, Select } from 'antd';

export default function NumberFilter({
  onChange,
  depArr = ['lt', 'lte', 'eq', 'gte', 'gt'],
}) {
  const [amount, setAmount] = useState();
  const [operator, setOperator] = useState('');

  useEffect(() => {
    if (onChange) {
      onChange({ [operator]: amount });
    }
  }, [amount, operator]);

  return (
    <Input.Group compact>
      <Select
        className="number-filter-select"
        value={operator}
        onChange={(value) => setOperator(value)}
      >
        {depArr.includes('eq') && (
          <Select.Option value="$eq"> برابر </Select.Option>
        )}
        {depArr.includes('ne') && (
          <Select.Option value="$ne"> نابرابر </Select.Option>
        )}
        {depArr.includes('lte') && (
          <Select.Option value="$lte"> کمتر مساوی </Select.Option>
        )}
        {depArr.includes('gte') && (
          <Select.Option value="$gte"> بزرگتر مساوی </Select.Option>
        )}
        {depArr.includes('gt') && (
          <Select.Option value="$gt"> بزرگتر </Select.Option>
        )}
        {depArr.includes('lt') && (
          <Select.Option value="$lt"> کوچکتر </Select.Option>
        )}
      </Select>
      <Input
        value={amount}
        onChange={(e) => {
          const { value } = e.target;
          if (isNaN(value)) return;
          setAmount(value);
        }}
        className="number-filter-input"
      />
    </Input.Group>
  );
}
