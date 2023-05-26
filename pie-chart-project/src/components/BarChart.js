import React, {Component} from 'react';
import Bar from "./Bar";
import {getHexColor} from "../helpers";
import AxisX from "./AxisX";
import AxisY from "./AxisY";

class BarChart extends Component{

    render() {
        const {data, xLabel, yLabel} = this.props;
        const maxWidth = this.props.width;
        const maxHeight = this.props.height;
        const x0 = 50;
        const y0 = 50;

        const xLength = maxWidth - x0 * 2;
        const yLength = maxHeight - y0 * 2;

        const xAxisY = y0 + yLength;

        const maxY = data.reduce(
            (currMax, [_, dataY]) => Math.max(currMax, dataY),
            -Infinity
        );
        const minY = data.reduce(
            (currMin, [_, dataY]) => Math.min(currMin, dataY),
            Infinity
        );
        const rangeY = maxY - minY;

        const barWidth = xLength / data.length;
        return (
            <div className='main'>
                <svg width={maxWidth} height={maxHeight}>
                    <AxisX
                        x1={x0}
                        y1={xAxisY}
                        x2={x0 + xLength}
                        y2={xAxisY}
                        x={x0 + xLength + 5}
                        y={xAxisY + 4}
                        label={xLabel}
                    />

                    <AxisY
                        x1={x0}
                        y1={y0}
                        x2={x0}
                        y2={y0 + yLength}
                        xT={x0}
                        yT={y0 - 8}
                        label={yLabel}
                        maxY={maxY}
                        rangeY={rangeY}
                        yLength={yLength}
                    />

                    {data.map(([label, dataY], index) => {
                        const padding = 10;
                        const x = x0 + index * barWidth + padding / 2;

                        const yRatio = (dataY - minY) / rangeY;

                        const y = y0 + (1 - yRatio) * yLength;
                        const height = yRatio * yLength;
                        const width = barWidth - padding;

                        return (
                            <Bar
                                x={x}
                                y={y}
                                yValue={dataY}
                                width={width}
                                height={height}
                                label={label}
                                xAxisY={xAxisY}
                                fill={getHexColor()}
                            />
                        );
                    })}
                </svg>
            </div>
        )
    }
}

export default BarChart;
