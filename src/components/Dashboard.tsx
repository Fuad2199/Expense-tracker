import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import TransactionFilter from "./TransactionFilter";
import { initialTransactions } from "../../data";
import RecentTransactions from "./RecentTransactions";

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filteredTransactions, setFilteredTransactions] =
    useState(initialTransactions);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  return (
    <div className="2xl:w-[80%] xl:w-[65%] w-full flex flex-col xl:py-7 xl:pl-7 xl:pr-5 p-5">
      <div className="flex flex-col gap-1">
        <div className="text-3xl font-bold text-primary">Hey There Fuad!</div>
        <span className="text-sm text-primary">
          We're here to help you manage
        </span>
      </div>
      <div className="font-semibold text-primary mt-10">Your cards</div>
      <Cards />
      <span className="font-semibold tex-primary mt-10 mb-2">
        Recent transactions
      </span>
      <TransactionFilter
        transactions={transactions}
        setTransactions={setFilteredTransactions}
        originalTransactions={transactions}
        setOriginalTransactions={setTransactions}
      />
      <RecentTransactions
        transactions={filteredTransactions}
        setTransactions={setFilteredTransactions}
        setOriginalTransactions={setTransactions}
      />
    </div>
  );
};

export default Dashboard;
