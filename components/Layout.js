import styles from "../styles/Layout.module.css";

// Same style on all pages
// cf _app.js
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
