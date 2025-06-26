import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import AddTransactionModal from "./AddTransactionModal";

export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  month: number;
  day: number;
  type: string;
  category: string;
  card: string;
}

interface TransactionsProps {
  transactions?: Transaction[];
  setTransactions?: StateSetter<Transaction[]>;
  originalTransactions: Transaction[];
  setOriginalTransactions: StateSetter<Transaction[]>;
}

const TransactionFilter: React.FC<TransactionsProps> = ({
  transactions,
  setTransactions,
  originalTransactions,
  setOriginalTransactions,
}) => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  if (!setTransactions) return null;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);

    if (query.length > 0) {
      const filtered = transactions?.filter((t) =>
        t.title.toLowerCase().includes(query.toLowerCase())
      );
      setTransactions(filtered || []);
    } else {
      setTransactions(originalTransactions);
    }
  };

  const handleAddTransaction = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between my-2">
        <div className="xl:w-75 w-42.5 border border-search-border/60 rounded-lg flex items-center gap-3 px-2">
          <MagnifyingGlassIcon className="w-5 h-5 text-search-border" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full outline-none bg-transparent text-sm placeholder:text-card-border text-primary"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <button
          onClick={handleAddTransaction}
          className="h-10 bg-primaryButton text-white rounded-lg flex items-center gap-2 justify-center cursor-pointer px-2"
        >
          <PlusCircleIcon className="w-5 h-5 text-white" />
          <span className="text-sm font-medium">Add transaction</span>
        </button>
      </div>
      {showModal && (
        <AddTransactionModal
          setShowModal={setShowModal}
          setTransactions={setOriginalTransactions}
          transactions={transactions}
        />
      )}
    </>
  );
};

export default TransactionFilter;
