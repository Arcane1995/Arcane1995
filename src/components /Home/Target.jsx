import styles from './Target.module.css'

export default function Target ({children,src,alt,text,Right}){
   return <div className={styles.target}>
        <div className={Right ? styles.Right :''} >
          {!Right && <img src={src} alt={alt} />}
          <p className={styles.text}>
            <p className={styles.name}>{children}</p>
            <br />
            {text}
          </p>
          {Right && <img src={src} alt={alt} />}
        </div>
      </div>
}