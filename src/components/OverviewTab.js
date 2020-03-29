import React from 'react'
import styles from './OverviewTab.module.scss'

// Single Tab
function SingleTab({ title, value }) {
  return (
    <div className={styles.tab}>
      <span className={styles.title}>{ title }</span>
      <span className={styles.value}>{ value }</span>
    </div>
  )  
}

// TabInfo Component
function OverviewTab({ tabList }) {
  return (
    <div className={styles.container}>
      {
        tabList.map(tab => <SingleTab title={tab.title} value={tab.value} />)
      }
    </div>
  )
}

export default OverviewTab