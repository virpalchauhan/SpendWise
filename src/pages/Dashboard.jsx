
import {
  FiCreditCard,
  FiTrendingUp,
  FiTrendingDown,
  FiTarget,
  FiPlus,
} from "react-icons/fi";

import SummaryCard from "../components/dashboard/SummaryCard";
import FinancialOverview from "../components/dashboard/FinancialOverview";
import "../index.css";

const Dashboard = ({ onAddTransaction }) => {

  const summaryData = [
    {
      id: 1,
      title: "Total Balance",
      amount: "₹12,450",
      icon: FiCreditCard,
      percentage: "+12.5%",
      trend: "positive",
    },
    {
      id: 2,
      title: "Total Income",
      amount: "₹5,800",
      icon: FiTrendingUp,
      percentage: "+8.2%",
      trend: "positive",
    },
    {
      id: 3,
      title: "Total Expenses",
      amount: "₹4,100",
      icon: FiTrendingDown,
      percentage: "3.1%",
      trend: "negative",
    },
    {
      id: 4,
      title: "Budget Used",
      amount: "68%",
      icon: FiTarget,
      percentage: "5%",
      trend: "negative",
    },
  ];

  return (
    <div className="dashboard-container">

      {/* Dashboard Header */}
      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>
          <p>
            Welcome back! Here's your financial overview
          </p>
        </div>

        <button
          className="add-transaction-btn"
          onClick={onAddTransaction}
        >
          <FiPlus />
          Add Transaction
        </button>

      </div>

      {/* Summary Cards */}
      <div className="summary-grid">

        {summaryData.map((item) => (
          <SummaryCard
            key={item.id}
            title={item.title}
            amount={item.amount}
            icon={item.icon}
            percentage={item.percentage}
            trend={item.trend}
          />
        ))}

      </div>


<FinancialOverview
  incomeData={[
    { name: "Salary", amount: 15000 },
    { name: "Freelancing", amount: 8000 },
    { name: "Business", amount: 5000 },
    { name: "Other", amount: 2000 },
  ]}
  expenseData={[
    { name: "Food", amount: 4000 },
    { name: "Shopping", amount: 3000 },
    { name: "Travel", amount: 2000 },
    { name: "Bills", amount: 2500 },
    { name: "Other", amount: 1500 },
  ]}
/>


    </div>
  );
};

export default Dashboard;
