import {
  FiX,
  FiBriefcase,
  FiCoffee,
  FiShoppingBag,
  FiHome,
  FiTruck,
  FiHeart,
  FiGift,
  FiBook,
  FiMonitor,
  FiDollarSign,
  FiCreditCard,
  FiMusic,
  FiSmartphone,
  FiCode,
  FiTrendingUp,
  FiMoreHorizontal,
  FiZap,
  FiFilm,
  FiPlus,
  FiTrendingDown,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiAward,
  FiGlobe,
  FiUsers,
  FiPercent,
  FiPocket,
  FiDatabase,
  FiPieChart,
  FiRepeat,
  FiFileText,
  FiShoppingCart,
  FiCalendar,
  FiShield,
  FiWifi,
  FiDroplet,
  FiCamera,
  FiTool

} from "react-icons/fi";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"

const iconList = [

  { name: "FiBriefcase", icon: FiBriefcase, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiDollarSign", icon: FiDollarSign, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiCreditCard", icon: FiCreditCard, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiGift", icon: FiGift, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiMonitor", icon: FiMonitor, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiTrendingUp", icon: FiTrendingUp, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiHome", icon: FiHome, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiAward", icon: FiAward, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiGlobe", icon: FiGlobe, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiUsers", icon: FiUsers, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiPercent", icon: FiPercent, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiPocket", icon: FiPocket, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiDatabase", icon: FiDatabase, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiPieChart", icon: FiPieChart, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiRepeat", icon: FiRepeat, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiFileText", icon: FiFileText, type: "income", color: "bg-green-100 text-green-600" },
  { name: "FiCoffee", icon: FiCoffee, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiShoppingBag", icon: FiShoppingBag, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiHome", icon: FiHome, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiTruck", icon: FiTruck, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiHeart", icon: FiHeart, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiBook", icon: FiBook, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiMusic", icon: FiMusic, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiSmartphone", icon: FiSmartphone, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiShoppingCart", icon: FiShoppingCart, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiWifi", icon: FiWifi, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiZap", icon: FiZap, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiDroplet", icon: FiDroplet, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiFilm", icon: FiFilm, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiCamera", icon: FiCamera, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiTool", icon: FiTool, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiGift", icon: FiGift, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiShield", icon: FiShield, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiCreditCard", icon: FiCreditCard, type: "expense", color: "bg-red-100 text-red-600" },
  { name: "FiCalendar", icon: FiCalendar, type: "expense", color: "bg-red-100 text-red-600" },
];

const iconMap = {
  FiX,
  FiBriefcase,
  FiCoffee,
  FiShoppingBag,
  FiHome,
  FiTruck,
  FiHeart,
  FiGift,
  FiBook,
  FiMonitor,
  FiDollarSign,
  FiCreditCard,
  FiMusic,
  FiSmartphone,
  FiCode,
  FiTrendingUp,
  FiMoreHorizontal,
  FiZap,
  FiFilm,
  FiPlus,
  FiTrendingDown,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiAward,
  FiGlobe,
  FiUsers,
  FiPercent,
  FiPocket,
  FiDatabase,
  FiPieChart,
  FiRepeat,
  FiFileText,
  FiShoppingCart,
  FiCalendar,
  FiShield,
  FiWifi,
  FiDroplet,
  FiCamera,
  FiTool
};




function Categories() {

  const openCategoryModal = () => {
    setEditId(null);

    reset({
      typeDrop: activeTab,
      cateName: ""
    });

    setSelectCate(activeTab);

    const firstIcon = iconList.find(
      (item) => item.type === activeTab
    );

    setSelectedIcon(firstIcon?.name);

    setShowModal(true);
  };


  const [activeTab, setActiveTab] = useState("income");


  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      typeDrop: activeTab
    }
  });

  const delay = (second) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, second * 1000);
    })
  }

  useEffect(() => {
    setValue("typeDrop", activeTab);
    setSelectCate(activeTab);

    const selected = iconList.find(
      (item) => item.type === activeTab
    );

    setSelectedIcon(selected?.name);
  },
    [activeTab, setValue]);

  const onSubmit = async (data) => {
    debugger;


    let newCategories;
    let isDuplicate;
    const existingCategories = JSON.parse(localStorage.getItem("categories") || "[]");
    await delay(1);
    if (editId) {

      newCategories = {
        id: editId,
        name: data.cateName,
        icon: selectedIcon,
        color: data.typeDrop === "income" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600",
        type: data.typeDrop
      }

      isDuplicate = existingCategories.some((item) => item.id !== editId
        && item.name.toLowerCase() === data.cateName.trim().toLowerCase()
        && item.type === newCategories.type);




    }
    else if (editId == null) {
      newCategories = {
        id: Date.now(),
        name: data.cateName,
        icon: selectedIcon,
        color: data.typeDrop === "income" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600",
        type: data.typeDrop
      }

      isDuplicate = existingCategories.some((item) => item.name.toLowerCase() === data.cateName.trim().toLowerCase() && item.type === newCategories.type);
    }

    const EditCategories = existingCategories.map((item) =>
      item.id === editId ? { ...item, ...newCategories } : item
    );


    if (isDuplicate) {
      alert("Category already exists!");
      return;
    }

    if (editId !== null) {
      localStorage.setItem("categories", JSON.stringify(EditCategories));
      setCategories(EditCategories);

      reset();

      setShowModal(false);
      alert("categories Update successfully");
    }
    else {
      const updatedCategories = [...existingCategories, newCategories];

      localStorage.setItem("categories", JSON.stringify(updatedCategories));

      setCategories(updatedCategories);

      reset();

      setShowModal(false);

      alert("categories added successfully");
    }


  };





  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(iconList.find((item) => item.type === activeTab)?.name);
  const [selectCate, setSelectCate] = useState(activeTab);
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [editId, setEditId] = useState(null);







  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(savedData);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories, isLoaded]);

  let incomeCategoriesCount = 0;
  let expenseCategoriesCount = 0;
  let filterCategories = [];

  if (categories) {
    filterCategories = categories.filter(
      (item) =>
        item.type === activeTab &&
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    incomeCategoriesCount = categories.filter((item) => item.type === "income").length;

    expenseCategoriesCount = categories.filter((item) => item.type === "expense").length;
  }




  const icons = iconList.filter(((icon) => icon.type === selectCate));

  const deleteCategory = (categoriesId) => {

    const confirmDelete = window.confirm("Are you sure you want to delete this category?");

    if (!confirmDelete) return;

    const updatedCategories = categories.filter((item) => item.id !== categoriesId);

    setCategories(updatedCategories);

    localStorage.setItem("categories", JSON.stringify(updatedCategories));

    alert("Category deleted successfully!");

  }

  const editCategory = (category) => {
    setEditId(category.id);

    reset({
      cateName: category.name,
      typeDrop: category.type
    })

    setSelectCate(category.type);
    setSelectedIcon(category.icon);

    setShowModal(true);

  }


  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Categories
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your income and expense categories.
          </p>
        </div>

        <button
          onClick={() => {
            openCategoryModal();
          }}
          className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl font-medium transition"
        >
          <FiPlus size={18} />
          Add Category
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
            <FiTrendingUp size={23} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Income Categories</p>
            <h2 className="text-2xl font-bold text-gray-800">{incomeCategoriesCount}</h2>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
            <FiTrendingDown size={23} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Expense Categories</p>
            <h2 className="text-2xl font-bold text-gray-800">{expenseCategoriesCount}</h2>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

        {/* Tabs and Search */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex bg-gray-100 p-1 rounded-xl w-full sm:w-fit">
            <button
              onClick={() => {
                setActiveTab("income");

              }}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-semibold transition ${activeTab === "income"
                ? "bg-white text-green-600 shadow-sm"
                : "text-gray-500 hover:text-gray-800"
                }`}
            >
              Income
            </button>

            <button
              onClick={() => {
                setActiveTab("expense");

              }}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-semibold transition ${activeTab === "expense"
                ? "bg-white text-red-600 shadow-sm"
                : "text-gray-500 hover:text-gray-800"
                }`}
            >
              Expenses
            </button>
          </div>

          <div className="relative w-full lg:w-72">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:border-purple-500 text-sm"
            />
          </div>
        </div>

        {/* Category Heading */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-gray-800 text-lg">
              {activeTab === "income" ? "Income Categories" : "Expense Categories"}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {filterCategories.length} categories available
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filterCategories.map((category) => {
            // debugger;
            const Icon = iconMap[category.icon];

            return (
              <div
                key={category.id}
                className="group border border-gray-100 rounded-xl p-4 hover:border-purple-200 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${category.color}`}>

                      <Icon size={21} />
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {category.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {category.count} transactions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={() => editCategory(category)}
                      className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg">
                      <FiEdit2 size={16} />
                    </button>
                    <button
                      onClick={() => deleteCategory(category.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg">
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {categories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No categories found.</p>
          </div>
        )}
      </div>

      {/* Add Category Modal - UI only */}
      {showModal && (

        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">

            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {editId === null ? "Add Category" : "Update Category"}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                   {editId === null ? "Create a new category." : "Update a Category"}
                  
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
              >
                <FiX size={20} />
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

              {/* Category Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category Type
                </label>

                <select
                  {...register("typeDrop", {
                    required: true,
                    onChange: (e) => {
                      const selectedType = e.target.value;

                      setSelectCate(selectedType);

                      const firstIcon = iconList.find(
                        (item) => item.type === selectedType
                      );

                      setSelectedIcon(firstIcon?.name);
                    }
                  })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>

                {errors.typeDrop && <span>{errors.typeDrop.message}</span>}


              </div>

              {/* Category Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category Name
                </label>

                <input
                  {...register("cateName", {
                    required: "Category name is required",
                    
                  })}
                  type="text"
                  placeholder="e.g. Salary, Food, Shopping"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                />

                {errors.cateName && (
                  <span className="text-red-700">{errors.cateName.message}</span>
                )}
              </div>

              {/* Select Icon */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Icon
                </label>

                <div className="grid grid-cols-7 gap-2">
                  {icons.map((item) => {
                    const Icon = item.icon;
                    const isSelected = selectedIcon === item.name;

                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setSelectedIcon(item.name)}
                        className={`h-11 rounded-xl border flex items-center justify-center transition-all 
                  ${isSelected
                            ? "border-purple-500 bg-purple-50 text-purple-600"
                            : `${item.color} border-gray-200 hover:border-purple-500 hover:bg-purple-50 hover:text-purple-600`
                          }`}
                      >
                        <Icon size={20} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Icon Preview */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                  {(() => {
                    const Icon = iconList.find(
                      (item) => item.name === selectedIcon
                    )?.icon;

                    return Icon ? <Icon size={22} /> : null;
                  })()}
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Selected Icon
                  </p>
                  <p className="text-xs text-gray-500">
                    {selectedIcon}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-gray-200 text-gray-600 rounded-xl py-3 font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="flex-1 bg-purple-600 text-white rounded-xl py-3 font-medium 
             hover:bg-purple-700 disabled:opacity-70 
             disabled:cursor-not-allowed flex items-center 
             justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-purple-300 
                      border-t-white rounded-full animate-spin" />

                      <span>Adding</span>

                      <span className="flex gap-0.5">
                        <span className="animate-bounce">.</span>
                        <span className="animate-bounce [animation-delay:150ms]">.</span>
                        <span className="animate-bounce [animation-delay:300ms]">.</span>
                      </span>
                    </>
                  ) : (
                    editId === null ? "Add Category" : "Update Category"
                    // "Add Category"
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

      )}
    </div>
  );
}

export default Categories;
