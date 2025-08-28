import { LockFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Flex,
  Form,
  Input,
  Layout,
  Space,
} from "antd";
import Logo from "../../components/icons/Logo";
import { useMutation } from "@tanstack/react-query";
import type { UserCredentials } from "../../types";
import { login } from "../../http/api";

const loginUser = async (credentials: UserCredentials) => {
  // server call logic
  const { data } = await login(credentials);
  return data;
};

function Login() {
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async (data) => {
      console.log("Login successful:", data);
    },
  });
  return (
    <>
      <Layout
        style={{ height: "100vh", display: "grid", placeItems: "center" }}
      >
        <Space direction="vertical" align="center" size="large">
          <Layout.Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Logo />
          </Layout.Content>
          <Card
            title={
              <Space
                style={{
                  width: "100%",
                  fontSize: 16,
                  justifyContent: "center",
                }}
                size={10}
              >
                <LockFilled />
                Sign in
              </Space>
            }
            style={{ width: 320 }}
            variant="borderless"
          >
            <Form
              initialValues={{ remember: true }}
              onFinish={(values) => {
                mutate({ email: values.username, password: values.password });
                console.log("Form submitted:", values);
              }}
            >
              {isError && (
                <Alert
                  message={error.message}
                  description={
                    error?.message || "Invalid username or password."
                  }
                  type="error"
                  showIcon
                  style={{ marginBottom: 16 }}
                />
              )}
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                  { type: "email", message: "The input is not valid E-mail!" },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
              <Flex justify="space-between">
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="#" id="forgot-password">
                  Forgot password?
                </a>
              </Flex>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                  loading={isPending}
                >
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </Layout>
    </>
  );
}

export default Login;
