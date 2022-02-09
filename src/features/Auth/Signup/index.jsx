import React from 'react';

import AuthLayout from 'features/Auth/Layout';
import FormRegister from 'features/Auth/Signup/Form';

const RegisterPage = () => {
  return (
    <AuthLayout>
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
