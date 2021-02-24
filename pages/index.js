import { useEffect, useState } from "react";
import Head from "next/head";
import Button from "../components/Button";
import GitHub from "../components/Icons/Github";
import styles from "../styles/Home.module.css";

import { loginWithGitHub, onAuthStateChanged } from "../firebase/client";
import Avatar from "../components/Avatar";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGitHub()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <img src="/devter-logo.png" alt="Logo" />
          <h1>Devter</h1>
          <h2>
            Talk about development
            <br />
            with developers 👩‍💻👨‍💻
          </h2>
          {user ? (
            <Avatar alt={user.username} src={user.avatar} text={user.email} />
          ) : (
            <Button onClick={handleClick}>
              <GitHub fill="#fff" width={24} height={24} />
              Login with GitHub
            </Button>
          )}
          {/* <Button>
            <GitHub fill='white' width={32} height={32} />
            Login with Github
          </Button> */}
        </section>
      </main>
    </div>
  );
}
