
import {
  FiCreditCard,
  FiTrendingUp,
  FiTrendingDown,
  FiTarget,
  FiPlus,
  FiChevronDown
} from "react-icons/fi";
import { useState } from "react";
import SummaryCard from "../components/dashboard/SummaryCard";
import FinancialOverview from "../components/dashboard/FinancialOverview";
import "../index.css";

const Dashboard = () => {

 

  

  const transaction = JSON.parse(localStorage.getItem("transaction")||"[]");


  const transactionDates = transaction.map((item) => item.date.slice(0, 7));
  

const sortedDates = [...transactionDates].sort();

const minDate =
  sortedDates.length > 0 ? sortedDates[0] : currentDate.toISOString().slice(0, 7);

const maxDate =
  sortedDates.length > 0
    ? sortedDates[sortedDates.length - 1]
    : currentDate.toISOString().slice(0, 7);

     const minYear = Number(minDate.slice(0, 4));
const maxYear = Number(maxDate.slice(0, 4));

const years = [];

for (let year = maxYear; year >= minYear; year--) {
  years.push(year);
}





      const [selectedMonth, setSelectedMonth] = useState(maxDate);

      const selectmonthincome = transaction.filter((item)=>item.type==="income" &&
  item.date.slice(0, 7)===selectedMonth);

  const totalIncome = selectmonthincome.reduce(
  (total, item) => total + Number(item.amount),
  0
);



const incomeCategoryData = selectmonthincome.reduce((acc, item) => {
  const existingCategory = acc.find(
    (category) => category.name === item.category
  );

  if (existingCategory) {
    existingCategory.amount += Number(item.amount);
  } else {
    acc.push({
      name: item.category,
      amount: Number(item.amount),
    });
  }

  return acc;
}, []);


// console.log(incomeCategoryData);


const [year, month] = selectedMonth.split("-").map(Number);

const previousDate = new Date(year, month - 2, 1);

const previousMonth = `${previousDate.getFullYear()}-${String(
  previousDate.getMonth() + 1
).padStart(2, "0")}`;


const previousMonthincome = transaction.filter((item)=>item.type==="income" &&
  item.date.slice(0, 7)===previousMonth);

  const previousMonthtotalIncome = previousMonthincome.reduce(
  (total, item) => total + Number(item.amount),
  0
);
      

const incomePercentage =previousMonthtotalIncome > 0 ? ((totalIncome - previousMonthtotalIncome) /
        previousMonthtotalIncome) * 100
    : null;

  

  const formattedPercentage =
  incomePercentage === null
    ? "No previous month data"
    : `${incomePercentage > 0 ? "+" : ""}${incomePercentage.toFixed(1)}%`;

const incomeTrend =
  incomePercentage === null
    ? "neutral"
    : incomePercentage > 0
      ? "positive"
      : incomePercentage < 0
        ? "negative"
        : "neutral";


      const selectmonthexpense = transaction.filter(
  (item) =>
    item.type === "expense" &&
    item.date.slice(0, 7) === selectedMonth
);

const totalExpense = selectmonthexpense.reduce(
  (total, item) => total + Number(item.amount),
  0
);


const expenseCategoryData = selectmonthexpense.reduce((acc, item) => {
  const existingCategory = acc.find(
    (category) => category.name === item.category
  );

  if (existingCategory) {
    existingCategory.amount += Number(item.amount);
  } else {
    acc.push({
      name: item.category,
      amount: Number(item.amount),
    });
  }

  return acc;
}, []);


console.log(expenseCategoryData);


// Previous Month

const previousMonthexpense = transaction.filter(
  (item) =>
    item.type === "expense" &&
    item.date.slice(0, 7) === previousMonth
);

const previousMonthtotalExpense = previousMonthexpense.reduce(
  (total, item) => total + Number(item.amount),
  0
);


// Percentage

const expensePercentage =
  previousMonthtotalExpense > 0
    ? ((totalExpense - previousMonthtotalExpense) /
        previousMonthtotalExpense) * 100
    : null;


// Formatted Percentage

const formattedExpensePercentage =
  expensePercentage === null
    ? "No previous month data"
    : `${expensePercentage > 0 ? "+" : ""}${expensePercentage.toFixed(1)}%`;


// Trend

const expenseTrend =
  expensePercentage === null
    ? "neutral"
    : expensePercentage > 0
      ? "negative"
      : expensePercentage < 0
        ? "positive"
        : "neutral";


        const totalBalance = totalIncome - totalExpense;

        const previousMonthTotalBalance =
  previousMonthtotalIncome - previousMonthtotalExpense;

  

    const balancePercentage =
  previousMonthTotalBalance !== 0
    ? ((totalBalance - previousMonthTotalBalance) /
        Math.abs(previousMonthTotalBalance)) * 100
    : null;

    const formattedBalancePercentage =
  balancePercentage === null
    ? "No previous month data"
    : `${balancePercentage > 0 ? "+" : ""}${balancePercentage.toFixed(1)}%`;

    const balanceTrend =
  balancePercentage === null
    ? "neutral"
    : balancePercentage > 0
      ? "positive"
      : balancePercentage < 0
        ? "negative"
        : "neutral";


 const summaryData = [
    {
      id: 1,
      title: "Total Balance",
      amount: `₹${totalBalance.toLocaleString("en-IN")}`,
      icon: FiCreditCard,
      percentage: formattedBalancePercentage,
      trend: balanceTrend,
    },
    {
      id: 2,
      title: "Total Income",
      amount: `₹${totalIncome.toLocaleString("en-IN")}`,
      icon: FiTrendingUp,
      percentage: formattedPercentage,
      trend: incomeTrend,
    },
    {
      id: 3,
      title: "Total Expenses",
      amount: `₹${totalExpense.toLocaleString("en-IN")}`,
      icon: FiTrendingDown,
      percentage: formattedExpensePercentage,
      trend:expenseTrend,
    },
    // {
    //   id: 4,
    //   title: "Budget Used",
    //   amount: "68%",
    //   icon: FiTarget,
    //   percentage: "5%",
    //   trend: "negative",
    // },
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

 {/* Month Input */}
<div className="relative">
  <input
    type="month"
    min={minDate}
    max={maxDate}
    value={selectedMonth}
    onChange={(e) => setSelectedMonth(e.target.value)}
    className="appearance-none bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl px-4 py-3 shadow-sm outline-none cursor-pointer hover:border-purple-400 focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all duration-200"
  />
</div>

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
  incomeData={incomeCategoryData}
  expenseData={expenseCategoryData}
/>


    </div>
  );
};

export default Dashboard;
