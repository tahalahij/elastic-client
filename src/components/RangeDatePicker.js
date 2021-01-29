import React, { useEffect, useState } from 'react';
import { DatePicker, Input } from 'antd';

export default function RangeDatePicker({ value = [], onChange, ...props }) {
  const [endDate, setEndDate] = useState(value[1]);
  const [startDate, setStartDate] = useState(value[0]);

  useEffect(() => {
    if (onChange) {
      onChange([startDate, endDate]);
    }
  }, [endDate, startDate]);

  return (
    <Input.Group compact>
      <div id="wrapper-flex">
        <DatePicker
          onChange={setStartDate}
          value={startDate}
          id="startPicker"
          placeholder="تاریخ شروع"
          {...props}
        />
        <DatePicker
          onChange={setEndDate}
          value={endDate}
          id="endPicker"
          placeholder="تاریخ پایان"
          {...props}
        />
      </div>
    </Input.Group>
  );
}
