import React from 'react'
import PropTypes from 'prop-types'

import styles from './fees.module.css'

function Fees(props) {
  const { fees } = props

  return (
    <div className={fees.length > 2 ? styles.feesTight : styles.fees}>
      <div className={styles.optionWrap}>
        <div className={styles.option}>
          <p className={styles.group}>Everyone</p>
          <div className={styles.content}>
            <p className={styles.cost}>
              <span className={styles.free}>Free</span>
              <span className={styles.first3}>First 3 classes</span>
            </p>
          </div>
        </div>
      </div>
      {fees.map(({ who, year, semester }) => (
        <div key={who} className={styles.optionWrap}>
          <div className={styles.option}>
            <p className={styles.group}>{who}</p>
            <div className={styles.content}>
              <p className={styles.cost}>
                <span className={styles.amount}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.value}>{year}</span>
                </span>
                <span className={styles.period}>full year</span>
              </p>
              <span className={styles.sep} />
              <p className={styles.cost}>
                <span className={styles.amount}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.value}>{semester}</span>
                </span>
                <span className={styles.period}>semester</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

Fees.propTypes = {
  fees: PropTypes.arrayOf(
    PropTypes.shape({
      who: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      semester: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Fees
