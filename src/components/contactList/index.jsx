import Image from "next/image";
import styles from "./contactlist.module.scss";

export default function IconList({ icon, link }) {
  return (
    <div className={styles.container}>
      {icon}
      <a href={link} />
    </div>
  );
}
