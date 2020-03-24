import React from 'react'
import styles from './InfoPanel.module.scss'

// Import components
import OverviewTab from '../components/OverviewTab.js'

class InfoPanel extends React.Component {
  constructor(props) {
    super(props)

    this.tabList = [
      { title: 'salary', value: '108K' },
      { title: 'hours', value: '8h/days' },
      { title: 'test3', value: '1h/days' },
    ]
  }

  render() {
    return (
      <div className={styles.container}>
        <OverviewTab tabList={this.tabList} />
      </div>
    )
  }
}

export default InfoPanel