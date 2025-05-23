"use client"
import { useRouter } from "next/navigation";
import styles from "./loginPage.module.css"
import { signIn, useSession } from 'next-auth/react';

const LoginPage = () => {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }

  console.log(data, status);
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} onClick={() => signIn("google")}>
              Sign in with Google
              </div>
            <div className={styles.socialButton}>Sign in with Github</div>
            <div className={styles.socialButton}>Sign in with Facebook</div>
        </div>
      
    </div>
  )
}

export default LoginPage
