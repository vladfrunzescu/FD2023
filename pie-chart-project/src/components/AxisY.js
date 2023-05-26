import React, {Component} from 'react';

class AxisY extends Component{

    render() {
        const {x1, y1, x2, y2, xT, yT, label, maxY, rangeY, yLength} = this.props;
        const numYTicks = 5;
        return (
            <g>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="grey" />
                {Array.from({ length: numYTicks }).map((_, index) => {
                    const y = y1 + index * (yLength / numYTicks);
                    const yValue = Math.round(maxY - index * (rangeY / numYTicks));

                    return (
                        <g key={index}>
                            <line x1={x1} y1={y} x2={x2 - 5} y2={y} stroke="grey" />
                            <text x={x2 - 5} y={y + 5} textAnchor="end">
                                {yValue}
                            </text>
                        </g>
                    );
                })}
                <text x={xT} y={yT} textAnchor="middle">
                    {label}
                </text>
            </g>
        );
    }
}

export default AxisY;