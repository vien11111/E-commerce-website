import React from 'react';

import FormLogin from 'features/Auth/Signin/Form';
import AuthLayout from 'features/Auth/Layout';

const LoginPage = () => {
  return (
    <AuthLayout>
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
