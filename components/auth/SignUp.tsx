'use client';

import { SignUp as ClerkSignUp } from '@clerk/nextjs';
 
export const SignUp = (props: any) => {
  return <ClerkSignUp {...props} />;
};
