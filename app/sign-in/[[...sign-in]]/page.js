import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
};
export default SignInPage;

{
  /* <SignUp
  path="/sign-up"
  routing="path"
  onSignIn={() => router.push('/your-desired-path')}
/>; */
}
