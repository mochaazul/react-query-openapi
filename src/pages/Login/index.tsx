import { Alert, Button, Form, Input } from 'antd';
import { LoginPageContainer, StyledCard } from './style';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAuthControllerSignIn } from '../..';


const Login = () => {
  const {mutate: signIn, error} = useAuthControllerSignIn<any>()

  const onFinish = ( values: any ) => {
    console.log( 'Success:', values );
    console.log(import.meta.env.VITE_BASE_URL)
    signIn({data:{username: values.username, password: values.password}})
  };

  const onFinishFailed = ( errorInfo: any ) => {
    console.log( 'Failed:', errorInfo );
  };

  return <LoginPageContainer>
    <StyledCard title="Log in" bordered={ false } size={ 'small' }>
      {
        error && 
        <Alert
          message={error.response?.data.message}
          type="error"
          closable
          style={{marginBottom: '24px'}}
        />
      }
      <Form
        name="normal_login"
        className="login-form"
        initialValues={ { remember: true } }
        onFinish={ onFinish }
      >
        <Form.Item
          name="username"
          rules={ [ { required: true, message: 'Please input your Username!' } ] }
        >
          <Input prefix={ <UserOutlined className="site-form-item-icon" /> } placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={ [ { required: true, message: 'Please input your Password!' } ] }
        >
          <Input
            prefix={ <LockOutlined className="site-form-item-icon" /> }
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </StyledCard>
  </LoginPageContainer>;
};
export default Login;