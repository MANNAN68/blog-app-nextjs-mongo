import Link from "next/link";
import LoginForm from "./component/authForm/LoginForm";
import CSLayout from "./Layout/CSLayout";

export default function Home() {
  return (
    <>
      <CSLayout>
        <div className="auth-wrapper">
          <div className="container-fluid">
            <LoginForm />
            <p className="my-3">
              Don't you have an account?
              <Link href="register" className="mx-2 underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </CSLayout>
    </>
  );
}
