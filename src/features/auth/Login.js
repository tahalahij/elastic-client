// import React from 'react';
// import { Form, Input, Button, Row, Col, Card } from 'antd';
// import { useHistory } from 'react-router-dom';
// const layout = {
//   lg: { span: 8 },
//   md: { span: 12 },
//   xs: { span: 24 },
// };
//
// export default function Auth() {
//   const history = useHistory();
//
//   const onFinish = (values) => {
//     dispatch(
//       login(values, () => {
//         history.push('/Models');
//       }),
//     );
//   };
//
//   return (
//     <Row justify="center" align="middle" className="login-form">
//       <Col {...layout}>
//         <Card title="پنل مدیریت بامبو" className="bambo">
//           <Form name="auth" onFinish={onFinish}>
//             <Form.Item
//               name="email"
//               rules={[
//                 { required: true, message: 'لطفا ایمیل را وارد کنید' },
//                 { type: 'email', message: 'ایمیل وارد شده معتبر نیست'}
//               ]}
//             >
//               <Input size="large" placeholder="ایمیل" />
//             </Form.Item>
//             <Form.Item
//               name="password"
//               rules={[
//                 { required: true, message: 'لطفا کلمه عبور را وارد کنید' },
//                 { min: 8, message: 'کلمه عبور حداقل باید ۸ کارکتر باشد'}
//               ]}
//             >
//               <Input size="large" type="password" placeholder="کلمه عبور" />
//             </Form.Item>
//             <Form.Item>
//               <Button
//                 size="large"
//                 block
//                 loading={loading}
//                 type="primary"
//                 htmlType="submit"
//               >
//                 ورود
//               </Button>
//             </Form.Item>
//           </Form>
//         </Card>
//       </Col>
//     </Row>
//   );
// }
