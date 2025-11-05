import Link from "next/link";
import styles from "@/styles/home.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>大屏适配方案对比</h1>
        <p className={styles.subtitle}>选择一种实现方式进入示例页面</p>

        <div className={styles.cards} role="list">
          <Link href="/vw-vh" className={styles.card} aria-label="进入 VW/VH 自适应方案">
            <span className={styles.badge}><span className={styles.dot} /> 方案 A</span>
            <h2 className={styles["card-title"]}>VW/VH 自适应</h2>
            <p className={styles["card-desc"]}>基于视口单位按比例布局，随分辨率自然伸缩。</p>
          </Link>

          <Link href="/scale" className={styles.card} aria-label="进入 Scale 缩放方案">
            <span className={styles.badge}><span className={styles.dot} /> 方案 B</span>
            <h2 className={styles["card-title"]}>Scale 缩放</h2>
            <p className={styles["card-desc"]}>固定基准尺寸，按屏幕缩放以适配多分辨率。</p>
          </Link>
        </div>
      </div>
    </main>
  );
}