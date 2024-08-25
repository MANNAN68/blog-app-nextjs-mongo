"use client";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      response.status === 201 && router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div class="form-group position-relative mb-3 ">
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          placeholder="Enter your name"
          value=""
        />
      </div>
      <div class="form-group position-relative mb-3 ">
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          placeholder="Enter your email "
          value=""
        />
      </div>
      <div class="form-group position-relative mb-3 ">
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          placeholder="Enter your password"
          value=""
        />
      </div>
      <div class="form-group position-relative mb-3 ">
        <input
          type="password"
          class="form-control"
          name="confirm-password"
          id="confirm-password"
          placeholder="Enter your confirm-password"
          value=""
        />
      </div>

      <button type="submit" className="btn btn-primary btn-sm">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
