import Fake_api from "../Fake_api/Fake_api";
import styles from "./F_api.module.css"; // Import the CSS module

const F_api = () => {
  return (
    <>
      <h2 className={styles.heading}>API Fetching Demo</h2> {/* Apply the CSS class */}
      <Fake_api />
    </>
  );
};

export default F_api;
