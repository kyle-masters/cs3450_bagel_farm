import React, {Component} from 'react';

import classes from './ProgressBar.module.css'
import {format} from '../../../../JavaScript/Helpers/Helpers'


class ProgressBar extends Component {
    outerRef = React.createRef()
    textRef = React.createRef()

    state = {
        outerWidth: 0,
        textWidth: 0
    }

    componentDidMount () {
        const outerWidth = this.outerRef.current.offsetWidth
        const textWidth = this.textRef.current.offsetWidth
        this.setState({
            outerWidth: outerWidth,
            textWidth: textWidth
        })
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        const outerWidth = this.outerRef.current.offsetWidth
        const textWidth = this.textRef.current.offsetWidth
        this.setState({
            outerWidth: outerWidth,
            textWidth: textWidth
        })
    }

    render () {
        const goodColor = this.props.core ? classes.Blue : classes.Yellow
        const className = this.props.percent >= 100 ? classes.Red : goodColor
        let leftOffset = this.state.outerWidth - this.state.textWidth
        if (leftOffset <= 0) {
            leftOffset = 0;
        }

        let percent = this.props.percent
        if (percent < 0) {
            percent = 0
        }

        return (
            <div className={classes.ProgressBar}>
                <div ref={this.outerRef} className={[classes.Filler, className].join(' ')} style={{width: percent + '%'}}/>
                <div className={classes.Text} style={{left: leftOffset}}>
                    <p style={{
                            paddingRight: '10px',
                            margin: 0, 
                            height: '100%',
                            verticalAlign: 'middle', 
                            display: 'table-cell'}} ref={this.textRef}>{format.format(this.props.amount)}</p>
                </div>
            </div>
        )
    }
};

export default ProgressBar;