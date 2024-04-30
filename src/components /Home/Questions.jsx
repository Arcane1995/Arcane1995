import { useState } from "react";
import styles from "./Questions.module.css";
import { CiCirclePlus } from "react-icons/ci";

export default function Questions({ children, text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={styles.questions}
      >
        <h2>{children}</h2>
        <CiCirclePlus className={styles.icon} />
      </div>
      {isExpanded && <p className={styles.questions}>{text}</p>}
    </>
  );
}

