'use client';

import { SignIn as ClerkSignIn } from '@clerk/nextjs';

export const SignIn = (props: any) => {
  return <ClerkSignIn {...props} />;
};
