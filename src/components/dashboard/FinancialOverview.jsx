
import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../index.css";

const incomeColors = [
  "#635BFF",
  "#22C55E",
  "#F59E0B",
  "#0EA5E9",
];

const expenseColors = [
  "#EF4444",
  "#F59E0B",
  "#8B5CF6",
  "#0EA5E9",
  "#22C55E",
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p>{payload[0].name}</p>
        <strong>
          ₹{payload[0].value.toLocaleString("en-IN")}
        </strong>
      </div>
    );
  }

  return null;
};

const ChartCard = ({ title, data, colors, total }) => {
  return (
    <div className="financial-chart-card">

      <div className="chart-heading">
        <h3>{title}</h3>
        <span>Monthly</span>
      </div>

      <div className="chart-content">

        <div className="pie-chart-wrapper">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={data}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={62}
                outerRadius={88}
                paddingAngle={4}
                stroke="none"
              >
                {data.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>

              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          <div className="chart-center-text">
            <span>Total</span>
            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>
          </div>
        </div>

        <div className="chart-legend">
          {data.map((item, index) => (
            <div className="legend-item" key={item.name}>

              <div className="legend-label">
                <span
                  className="legend-dot"
                  style={{
                    backgroundColor:
                      colors[index % colors.length],
                  }}
                />

                <span>{item.name}</span>
              </div>

              <strong>
                ₹{item.amount.toLocaleString("en-IN")}
              </strong>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const FinancialOverview = ({
  incomeData,
  expenseData,
}) => {

  const incomeTotal = incomeData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const expenseTotal = expenseData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="financial-overview">

      <ChartCard
        title="Income Sources"
        data={incomeData}
        colors={incomeColors}
        total={incomeTotal}
      />

      <ChartCard
        title="Expense Categories"
        data={expenseData}
        colors={expenseColors}
        total={expenseTotal}
      />

    </div>
  );
};

export default FinancialOverview;
