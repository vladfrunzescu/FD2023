import React, {Component} from 'react';

class AxisX extends Component {

    render() {
        const {x1, y1, x2, y2, x, y, label} = this.props;
        return (
            <g>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="grey"/>
                <text x={x} y={y}>
                    {label}
                </text>
            </g>
        );
    }
}

export default AxisX;