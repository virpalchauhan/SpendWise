
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

function Transactions() {


  // const transactions = [
  //   {
  //     id: 1,
  //     type: "income",
  //     amount: 25000,
  //     category: "Salary",
  //     date: "2026-11-20",
  //     description: "Monthly Salary"
  //   },
  //   {
  //     id: 2,
  //     type: "expense",
  //     amount: 500,
  //     category: "Food",
  //     date: "2026-11-19",
  //     description: "Dinner"
  //   },
  //   {
  //     id: 3,
  //     type: "income",
  //     amount: 5000,
  //     category: "Freelancing",
  //     date: "2026-11-18",
  //     description: "Website Project"
  //   },
  //   {
  //     id: 4,
  //     type: "expense",
  //     amount: 2000,
  //     category: "Shopping",
  //     date: "2026-11-17",
  //     description: "Clothes Shopping"
  //   },
  //   {
  //     id: 5,
  //     type: "expense",
  //     amount: 1200,
  //     category: "Transport",
  //     date: "2026-11-16",
  //     description: "Petrol"
  //   },
  //   {
  //     id: 6,
  //     type: "income",
  //     amount: 3000,
  //     category: "Business",
  //     date: "2026-11-15",
  //     description: "Extra Income"
  //   }
  // ];




  const category = JSON.parse(
  localStorage.getItem("categories") || "[]"
);





  const [transactionType, setTransactionType] = useState("income");
  const [transaction, setTransaction] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [editId, setEditId] = useState(null);
  const filterTransactions = transaction.filter((item) => activeTab === "all" ? true : item.type === activeTab);
const searchTransactions = filterTransactions.filter((item) =>
  (item.description || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
  (item.category || "").toLowerCase().includes(searchTerm.toLowerCase())
);


  const categoryFilter = category.filter((item) => item.type === transactionType);
  const deleteTransactions = (refID) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (confirmDelete) {
      const newData = transaction.filter((item) => item.id !== refID);

      setTransaction(newData);

      localStorage.setItem("transaction", JSON.stringify(newData));


       reset({
        typeDrop: "income",
        amount: "",
        category: "",
        date: new Date().toLocaleDateString("en-CA"),
        description: ""
      })


    }
  };
  const editTransactions = (data) => {
    document.querySelector("main").scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setEditId(data.id);

    setTransactionType(data.type);

    reset({
      typeDrop: data.type,
      amount: data.amount,
      category: data.category,
      date: data.date,
      description: data.description
    });

  };



  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      date: new Date().toLocaleDateString("en-CA")
    }
  });

  const delay = (second) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, second * 1000);
    })
  }


  const onSubmit = async (data) => {
    await delay(1);
    let editTransaction;
    

    if (editId!==null) {
      editTransaction = {
        id: editId,
        type: data.typeDrop,
        amount: data.amount,
        category: data.category,
        date: data.date,
        description: data.description
      }


      const updateTransaction = transaction.map((item) =>
        item.id === editId ? { ...item, ...editTransaction } : item
      );

      localStorage.setItem("transaction", JSON.stringify(updateTransaction));
      setTransaction(updateTransaction);
      setEditId(null);
      reset({
        typeDrop: "income",
        amount: "",
        category: "",
        date: new Date().toLocaleDateString("en-CA"),
        description: ""
      })

      setTransactionType("income");



      alert("Transactions info Update successfully");




    }
    else {
      const newTransaction = {
        id: Date.now(),
        type: data.typeDrop,
        amount: data.amount,
        category: data.category,
        date:data.date,
        description: data.description
      }

       const exisitingTransaction = JSON.parse(localStorage.getItem("transaction") || "[]");

    const updateTransaction = [...exisitingTransaction, newTransaction];

    localStorage.setItem("transaction", JSON.stringify(updateTransaction));

    setTransaction(updateTransaction);

    reset({
      typeDrop: "income",
      amount: "",
      category: "",
      date: new Date().toLocaleDateString("en-CA"),
      description: ""
    })

    setTransactionType("income");

    alert("Transactions added Successfully");
    }




   




  };



  useEffect(() => {

    const savedTransaction = JSON.parse(localStorage.getItem("transaction") || "[]");
    setTransaction(savedTransaction);
  }, []);






  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Transactions
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage all your income and expenses
          </p>
        </div>

        {/* <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl font-medium transition">
          + Add Transaction
        </button> */}
      </div>

      {/* Transaction Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

          <h2 className="text-lg font-semibold text-gray-800 mb-5">
            {editId === null ? "Add New Transaction" : "Update Transaction"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

            {/* Transaction Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transaction Type
              </label>

              <select
                {...register("typeDrop", {
                  required: true,
                  onChange: (e) => setTransactionType(e.target.value)
                })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              {errors.typeDrop && <p className="text-red-500 text-xs mt-1">{errors.typeDrop.message}</p>}
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>

              <input
                {...register("amount", {
                  required: "Amount is required",
                   valueAsNumber: true,
                  min: {
                    value: 0.01,
                    message: "Amount must be greater than 0",
                  },
                })}
                type="number"
                placeholder="Enter amount"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              />
              {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}

            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>

              <select
                {...register("category", {
                  required: "Category is required",
                })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500">
                <option value="">Select Category</option>
                {categoryFilter.map((item) => {
                  return (
                    <option key={item.id} value={item.name}>{item.name}</option>
                  )
                })}
              </select>
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>

              <input
                {...register("date", {
                  required: "Date is required"
                })}
                max={new Date().toISOString().split("T")[0]}
                type="date"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>

              <input
                {...register("description", {
                  required: "Description is required",
                  validate: (value) =>
                    value.trim().length > 0 || "Description cannot contain only spaces",
                  minLength: {
                    value: 1,
                    message: "Description is required",
                  },
                })}
                type="text"
                placeholder="Enter transaction description"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              />

              {errors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

          </div>

          <div className="flex justify-end gap-3 mt-5">

            <button
              onClick={() => {
                reset({
                  typeDrop: "income",
                  amount: "",
                  category: "",
                  date: new Date().toLocaleDateString("en-CA"),
                  description: "",
                });

                setEditId(null);
                setTransactionType("income");
              }}
              type="button"
              className="px-6 py-3 rounded-xl font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-800 transition-all duration-200"
            >
              Cancel
            </button>

            {/* Add / Update Button */}
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-purple-300 border-t-white rounded-full animate-spin" />
                  <span>{editId === null ? "Adding" : "Updating"}</span>
                  <span className="flex gap-0.5">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce [animation-delay:150ms]">.</span>
                    <span className="animate-bounce [animation-delay:300ms]">.</span>
                  </span>
                </>
              ) : (
                editId === null ? "Add Transaction" : "Update Transaction"
              )}
            </button>

          </div>

        </div>
      </form>
      {/* Transaction List */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">

        <div className="p-5 border-b border-gray-100">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                All Transactions
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                View and manage your transactions
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 flex-wrap">

              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-lg ${activeTab === "all"
                  ? "bg-purple-600 text-white text-sm font-medium"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600 text-sm font-medium"
                  }`} >
                All
              </button>

              <button
                onClick={() => setActiveTab("income")}
                className={`px-4 py-2 rounded-lg ${activeTab === "income"
                  ? "bg-purple-600 text-white text-sm font-medium"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600 text-sm font-medium"
                  }`} >
                Income
              </button>

              <button
                onClick={() => setActiveTab("expense")}
                className={`px-4 py-2 rounded-lg ${activeTab === "expenses"
                  ? "bg-purple-600 text-white text-sm font-medium"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600 text-sm font-medium"
                  }`} >
                Expenses
              </button>

            </div>

          </div>

          {/* Search */}
          <div className="mt-5 mb-5">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search transactions..."
              className="w-full sm:max-w-sm border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>


          {/* Table */}
          <div className="overflow-x-auto">

            {searchTransactions.length > 0 ? (

              <table className="w-full text-left">

                <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                  <tr>
                    <th className="px-5 py-4 font-medium">Transaction</th>
                    <th className="px-5 py-4 font-medium">Category</th>
                    <th className="px-5 py-4 font-medium">Date</th>
                    <th className="px-5 py-4 font-medium">Type</th>
                    <th className="px-5 py-4 font-medium">Amount</th>
                    <th className="px-5 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">

                  {searchTransactions.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition">

                      <td className="px-5 py-4">
                        <p className="font-medium text-gray-800">
                          {item.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          ID: #{item.id}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <span className="text-sm text-gray-600">
                          {item.category}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {item.date}
                      </td>

                      <td className="px-5 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.type === "income"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                          }`}>
                          {item.type}
                        </span>
                      </td>

                      <td className={`px-5 py-4 font-semibold whitespace-nowrap ${item.type === "income"
                          ? "text-green-600"
                          : "text-red-500"
                        }`}>
                        {item.type === "income" ? "+" : "-"} ₹
                        {item.amount.toLocaleString("en-IN")}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-2">

                          <button
                            onClick={() => editTransactions(item)}
                            className="p-2 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50">
                            Edit
                          </button>

                          <button
                            onClick={() => deleteTransactions(item.id)}
                            className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50"
                          >
                            Delete
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            ) : (

              <div className="flex flex-col items-center justify-center py-16 text-center">

                <div className="text-4xl mb-3">🔍</div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {searchTerm
                    ? "No matching transactions found"
                    : "No transactions available"}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {searchTerm
                    ? "Try another search keyword."
                    : `No transactions found in ${activeTab} category. Try changing the filter or add a new transaction.`}
                </p>

              </div>

            )}

          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100 flex items-center justify-between">

            <p className="text-sm text-gray-500">
              Showing {searchTransactions.length} transactions
            </p>

            <p className="text-sm text-gray-500">
              Total Transactions: {searchTransactions.length}
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Transactions;
