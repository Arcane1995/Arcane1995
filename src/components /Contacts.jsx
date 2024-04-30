import styles from "./Contscts.module.css";

export default function Contacts() {
  return (
    <div id ="Contacts"className={styles.main}>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <h3>Телефон</h3>
          <p>+7 123 456 7890</p>
        </div>
        <div className={styles.contactItem}>
          <h3>Местоположение</h3>
          <p>Москва, Россия</p>
        </div>
        <div className={styles.contactItem}>
          <h3>Instagram</h3>
          <p>@your_instagram_handle</p>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.433553351638!2d71.37886857641406!3d51.13735563766908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458662245f7513%3A0xc5c2be878ea7ef6b!2z0YPQu9C40YbQsCDQkNC50YLQtdC60LUg0JHQuCAxNCwg0JDRgdGC0LDQvdCwIDAyMDAwMA!5e0!3m2!1sru!2skz!4v1713746179618!5m2!1sru!2skz"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="PilatesPro"
        style={{ width: "100%" ,display: 'block'}}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className={styles.taime}>
      <p>Часы работы:</p>
        <p>БУДНИ - 10.00 - 22.00</p>
        <p>ВЫХ. - 10.00 - 21.00</p>
      </div>
    </div>
  );
}
