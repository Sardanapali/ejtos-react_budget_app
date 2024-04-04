import React, { useContext } from 'react';
import { PieChart, Pie, Cell,Legend ,Tooltip} from 'recharts';

import { AppContext } from '../context/AppContext';

function RePieChart() {

const { expenses } = useContext(AppContext);
console.log("expenses in pie chart", expenses);

const data = [];
expenses.forEach(element => {
    data.push({
name: element.name,
value: element.cost,
color: element.color
    });
});

  return (
    <div>
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={60}
            fill={data.color}
            label
          >
              {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        <Legend  verticalAlign="bottom"></Legend>
        </PieChart>
       
      
    </div>
  );
}
export default RePieChart;