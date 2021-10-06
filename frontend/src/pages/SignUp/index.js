import React, { useCallback, useState } from 'react';

// antd
import { Button, Form, Input, Select } from 'antd';

// style
import { FormContainer, SignUpContainer, SignUpSuccess, Wrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from 'redux/actions/user_actions';

function SignUp() {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const { name, email, password, passwordCheck } = form;

      if (password !== passwordCheck) {
        alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
      } else {
        const user = { name, email, password };

        dispatch(registerAction(user));
      }
    },
    [form, dispatch],
  );

  return (
    <SignUpContainer>
      <Wrap>
        {isAuthenticated ? (
          <SignUpSuccess>
            <div>회원가입에 성공했습니다.</div>
            <a href="/">홈으로 가기</a>
          </SignUpSuccess>
        ) : (
          <FormContainer>
            <div>
              <a href="/">Logo Logo</a>
            </div>
            <Form>
              <Form.Item label="NAME">
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={onChange}
                />
              </Form.Item>
              <Form.Item label="EMAIL">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={onChange}
                />
              </Form.Item>

              <Form.Item label="PASSWORD">
                <Input.Password
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={onChange}
                />
              </Form.Item>

              <Form.Item label="PASSWORD CHECK">
                <Input.Password
                  type="password"
                  name="passwordCheck"
                  id="passwordCheck"
                  placeholder="Password Check"
                  onChange={onChange}
                />
              </Form.Item>

              <Form.Item label="Role">
                <Select defaultValue="student">
                  <Select.Option value="student">Student</Select.Option>
                  <Select.Option value="professor">Professor</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button style={{ width: '100%' }} type="primary">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </FormContainer>
        )}
      </Wrap>
    </SignUpContainer>
  );
}

export default SignUp;
