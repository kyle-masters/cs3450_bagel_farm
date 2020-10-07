import React from 'react';
import {PieChart, Pie, Cell} from 'recharts';
import classes from './PieGraph.module.css';
import {format} from '../../../../JavaScript/Helpers/Helpers'

const pieGraph = (props) => {

    const difference = props.total - props.amount;

    const renderCustomizedLabel = ({
        cx, cy
      }) => {
        const x = cx;
        const y = cy;
      
        return (
            <text x={x + 90} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {format.format(props.amount) + "/" + format.format(props.total)}
            </text>
        );
      };

    return (
        <div className={classes.PieGraph}>
            <PieChart width={props.size} height={props.size}>
                <Pie 
                    data={[{"amount": props.amount}, {"amount": difference < 0 ? 0 : difference}]}  
                    dataKey="amount" 
                    cx="50%" 
                    cy="50%" 
                    startAngle={-270}
                    endAngle={90}
                    innerRadius={props.size / 2.933}
                    outerRadius={props.size / 2} 
                    fill="#2b2b2b" 
                    labelLine={false}
                    isAnimationActive={false}
                    label = {renderCustomizedLabel}
                    >
                        <Cell key={1} fill={difference < 0 ? "#9B1B30": "#82ca9d"} />
                        <Cell key={2} fill={"#2b2b2b"} />
                </Pie>   
            </PieChart>
        </div>
    );
}


export default pieGraph;