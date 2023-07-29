import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/buttons/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Stories of Kindness & Transformation</h1>
        <p className={styles.desc}>
          Together, Let's Raise Awareness for Causes that Bring Lasting Impact
          and Forge a Path Towards a Better Future.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image
          width={600}
          height={350}
          src="https://images.unsplash.com/photo-1652858672796-960164bd632b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxjaGFyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          alt=""
          className={styles.img}
        />
      </div>
    </div>
  );
}
