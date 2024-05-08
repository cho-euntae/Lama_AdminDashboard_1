"use client"

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css"
import { useState } from "react";
import {useFormState} from "react-dom"
// import { authenticate } from "@/app/lib/actions";

const LoginForm = () => {

    const [state, formAction] = useFormState(authenticate, undefined);

    // const [err,setErr] = useState();
    // const handleLogin = async (formData) => {
    //     const data = await authenticate(formData)
    //     data.error && setErr(data.error)
    // }

    return (
        // <form action={authenticate} className={styles.form}>
        // <form action={handleLogin} className={styles.form}>
        <form action={formAction} className={styles.form}>
        <h1>Login</h1>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
          {/* {err & err} */}
          {state && state}
        </form>
    )
  }
  
  export default LoginForm