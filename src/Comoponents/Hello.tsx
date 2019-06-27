import * as React from 'react'
import * as styles from  '../styles/text.module.scss'

type Props = {
    text: string
}

export default class extends React.Component<Props> {
    render(){
        return <p className={styles.tt}>
            {this.props.text}
            <span className={styles.ti}> te</span>
        </p>
    }
}
