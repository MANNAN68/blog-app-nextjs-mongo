"use client";
import { doCredentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/home");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group position-relative mb-3 ">
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="Enter your email "
        />
      </div>
      <div className="form-group position-relative mb-3 ">
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-sm">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
