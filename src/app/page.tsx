import Image from "next/image";
import  styles  from "./home.module.css";

export default function Home() {
  return (
    <main>
       <div className={styles.banner}>
        <Image src="/interviewp_dribbble.gif" alt='banner' width={700} height={700}></Image>
        <div className={styles.bannerContent}>
          <h1>Creative Thoughts Agency</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <div className={ styles.btns}>
            <button className={styles.themeBtn}>Learn More</button>
            <button className={styles.outline}>Contact Us</button>
            </div>        
          </div>
   </div>
    </main>
  );
}
