function Login() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label>
          Username
          <input type="text" placeholder="Username" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign in</button>
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">Forgot password?</a>
      </form>
    </>
  );
}

export default Login;
