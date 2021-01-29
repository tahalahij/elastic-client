import React from 'react';
import faIR from 'antd/es/locale/fa_IR';
import { ConfigProvider } from 'antd';

// replace momentjs with dayjs for jalali support and smaller bundle size.
// momentjs is almost 65 gzipped and dayjs is 4kb gzipped.
// used antd-dayjs-webpack-plugin.
import dayjs from 'dayjs';
import jalaliday from 'jalaliday';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(jalaliday);
dayjs.calendar('jalali');
dayjs.locale('fa');
dayjs.extend(relativeTime);

// this is a hack for antd datepicker bug which even with faIR locale
// shows months in gregorian calendar.
const jalaliMonths = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];

const customFaIR = {
  ...faIR,
  DatePicker: {
    ...faIR.DatePicker,
    lang: {
      ...faIR.DatePicker.lang,
      shortMonths: jalaliMonths,
    },
  },
};

export default function LocaleProvider({ children }) {
  return (
    <ConfigProvider locale={customFaIR} direction="rtl">
      {children}
    </ConfigProvider>
  );
}
