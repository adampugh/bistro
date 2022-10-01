import styles from './Menu.module.scss';

const menuItems = [
  {
    title: 'Starters',
    items: [
      'Corona',
      'Guiness',
      'Moretti',
      'Corona',
      'Guiness',
      'Moretti',
    ]
  }, {
    title: 'Starters',
    items: [
      'Corona',
      'Guiness',
      'Moretti',
      'Corona',
      'Guiness',
      'Moretti',
    ]
  }, {
    title: 'Starters',
    items: [
      'Corona',
      'Guiness',
      'Moretti',
      'Corona',
      'Guiness',
      'Moretti',
    ]
  },
];

const Menu = () => (
  <section className={styles.menu}>
    <div className="container">
      <div className={styles.menuWrapper}>
        <h2 className="title">Menu</h2>
        <div className={styles.menuGrid}>
          {menuItems.map((item) => (
            <div key={item.title} className={styles.menuSection}>
              <h3>{item.title}</h3>
              {item.items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Menu;