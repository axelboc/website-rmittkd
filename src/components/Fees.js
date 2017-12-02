import React from 'react'

import styles from './styles/fees.module.css'

function Fees(props) {
  const { fees } = props

  return (
    <div className={styles.fees}>
      <div className={styles.option}>
        <p className={styles.group}>Everyone</p>
        <div className={styles.content}>
          <p className={styles.free}>
            <span>Free</span>{' '}
            <span>First 3 classes</span>
          </p>
        </div>
      </div>
      {fees.map(({ who, year, semester }) => (
        <div key={who} className={styles.option}>
          <p className={styles.group}>{who}</p>
          <div className={styles.content}>
            <p className={styles.cost}>
              <span className={styles.amount}>${year}</span>{' '}
              <span className={styles.period}>per year</span>
            </p>
            <p className={styles.cost}>
              <span className={styles.amount}>${semester}</span>{' '}
              <span className={styles.period}>per semester</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Fees
