import React, { useContext } from 'react';
import { PieChart, Pie } from "recharts";
import { AppContext } from '../context/AppContext';

function RePieChart() {

const { expenses } = useContext(AppContext);
console.log("expenses in pie chart", expenses);

const data = [];
expenses.forEach(element => {
    data.push({
name: element.name,
value: element.cost
    });
});

//   const data01 = [
//     { name: "Team A", value: 800 },
//     { name: "Team B", value: 600 },
//     { name: "Team C", value: 300 },
//     { name: "Team D", value: 200 },
//   ];

  return (
    <div>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={60}
            fill="#8884d8"
          />

        </PieChart>
      
    </div>
  );
}
export default RePieChart;