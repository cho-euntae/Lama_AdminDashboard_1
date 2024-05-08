import styles from "@/app/ui/login/login.module.css";
// import { authenticate } from "../lib/actions";
import LoginForm from "./loginForm/loginForm";

const Login = () => {
    return (
      <div className={styles.container}>
        <LoginForm /> 
        {/* 따로 뺀 이유는 에러 표현을 위해 */}
        {/* <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
        </form> */}
      </div>
    )
  }
  
  export default Login