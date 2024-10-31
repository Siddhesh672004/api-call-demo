import React from "react";
import styles from "./Fake_api.module.css";

const Fake_api = () => {
  const [users, setUsers] = React.useState([]);

  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };

  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className={styles.App}>
      <div className={styles.flex}>
        {users.length > 0 &&
          users.map((user) => (
            <div className={styles.card} key={user.id}>
              <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>{user.email}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Fake_api;
