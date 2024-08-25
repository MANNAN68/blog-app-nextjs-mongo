const LoginForm = () => {
  return (
    <form>
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

      <button type="submit" className="btn btn-primary btn-sm">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
