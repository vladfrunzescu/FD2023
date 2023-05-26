import React, {Component} from 'react';
import {getHexColor} from "../helpers";
import { Tooltip } from 'react-svg-tooltip';

class Bar extends Component {
    render() {
        const {x, y, width, height, index, label, xAxisY, yValue} = this.props;
        const rectRef = React.createRef();
        return (
            <g className='group' key={index}>
                <rect
                    ref={rectRef}
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={getHexColor()}
                />
                <text x={x + 16} y={xAxisY + 16} textAnchor="middle">
                    {label}
                </text>
                <Tooltip
                    triggerRef={rectRef}>
                    <rect x={2} y={2} width={50} height={25} rx={8} fill='#dadce0'/>
                    <text x={16} y={20} fill='black'>{yValue}</text>
                </Tooltip>
            </g>
        );
    }
}

export default Bar;
