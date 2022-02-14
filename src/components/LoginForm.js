import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

const LoginForm = () => {
  const [email, emailSet] = useState('');
  const [password, passwordSet] = useState('');
  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="user@gmail.com"
          value={email}
          onChangeText={text => emailSet(text)}
        />
      </CardSection>
      <CardSection>
        <Input
          label="Password"
          placeholder="password"
          value={password}
          onChangeText={text => passwordSet(text)}
          secureTextEntry={true}
        />
      </CardSection>

      <CardSection>
        <Button>Log in</Button>
      </CardSection>
    </Card>
  );
};

export default LoginForm;
