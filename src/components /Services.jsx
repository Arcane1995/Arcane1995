
import styles from "./Services.module.css"

export default function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Услги и цены</h1>
      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <img src="/Arcane1995/date/yoga.JPG" alt="yoga" className={styles.serviceImage} />
          <h2 className={styles.serviceTitle}>Хатха йога</h2>
          <p className={styles.serviceDescription}>
Хатха йога – это древняя практика физических упражнений, дыхательных техник и медитации, направленная на достижение гармонии между телом и разумом. В ее основе лежит идея о том, что здоровье и благополучие достигаются через балансирование энергии в организме. Практика хатха йоги помогает укрепить тело, улучшить гибкость, уравновесить эмоции и улучшить концентрацию. В результате занятий вы обретаете не только физическую силу, но и внутренний покой.</p>
          <p className={styles.servicePrice}>Цена: от 3000тг</p>
        </div>
        <div className={styles.serviceItem}>
          <img src="/Arcane1995/date/Pilates.jpg" alt="Услуга 1" className={styles.serviceImage} />
          <h2 className={styles.serviceTitle}>Reformer</h2>
          <p className={styles.serviceDescription}>Reformer подходит для людей всех возрастов и уровней физической подготовки, так как упражнения могут быть модифицированы под индивидуальные потребности и возможности каждого ученика. Тренировки на реформере способствуют развитию силы, выносливости, гибкости и улучшению координации движений, а также способствуют релаксации и снятию напряжения.</p>
          <p className={styles.servicePrice}>Цена: от 4200тг</p>
        </div>
        <div className={styles.serviceItem}>
          <img src="/Arcane1995/date/yogaPregnet.JPG" alt="Услуга 1" className={styles.serviceImage} />
          <h2 className={styles.serviceTitle}>Йога для беременых</h2>
          <p className={styles.serviceDescription}>
Йога для беременных – это специально разработанные практики, направленные на поддержание физического и эмоционального благополучия женщины во время беременности. Эта форма йоги сочетает в себе упражнения для укрепления мышц, растяжки, дыхательные техники и медитацию, адаптированные к особенностям беременного тела.</p>
          <p className={styles.servicePrice}>Цена: от 3000тг</p>
        </div>
      </div>
    </div>
  )
}
