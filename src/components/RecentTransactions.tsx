import React, { useState } from "react";
import type { StateSetter, Transaction } from "./TransactionFilter";
import {
  CurrencyDollarIcon,
  PencilSquareIcon,
  ShoppingBagIcon,
  TrashIcon,
  TruckIcon,
} from "@heroicons/react/16/solid";
import AddTransactionModal from "./AddTransactionModal";

interface TransactionProps {
  transactions: Transaction[];
  setTransactions: StateSetter<Transaction[]>;
  setOriginalTransactions: StateSetter<Transaction[]>;
}

const RecentTransactions: React.FC<TransactionProps> = ({
  transactions,
  setTransactions,
  setOriginalTransactions,
}: TransactionProps) => {
  const [showModal, setShowModal] = useState(false);
  const [initialData, setInitialData] = useState<Transaction | undefined>(undefined);
  const tableHeaders = [
    "Transaction title",
    "Amount",
    "Date",
    "Card",
    "Actions",
  ];

  const onDelete = (id: number) => {
    const newTransactions =
      transactions?.filter((transaction) =>
        transaction.id !== id
      ) || [];
    setTransactions(newTransactions);
    setOriginalTransactions(newTransactions);
  };

  const onEdit = (transaction: Transaction) => {
    setShowModal(true);
    setInitialData(transaction);
  };
  return (
    <>
      <div className="w-full relative overflow-x-auto xl:h-87.5 overflow-y-auto mt-3 pb-1">
        <table className="w-full text-sm rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 border-b border-gray-300">
            <tr>
              {tableHeaders.map((header: string, index: number) => (
                <th
                  scope="col"
                  className={`${
                    index === 0 ? "pr-6" : "px-6"
                  } py-3 text-gray-400 font-semibold`}
                  key={index}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions
              ?.slice()
              .reverse()
              .map((transaction: Transaction) => (
                <tr className="bg-white" key={transaction?.id}>
                  <th
                    scope="row"
                    className="pr-6 py-3 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div className="flex items-center gap-2">
                      {transaction.category === "car" && (
                        <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-blue-500">
                          <TruckIcon className="w-5 h-5 text-white" />
                        </span>
                      )}
                      {transaction.category === "groceries" && (
                        <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-green-500">
                          <ShoppingBagIcon className="w-5 h-5 text-white" />
                        </span>
                      )}
                      {transaction.category === "salary" && (
                        <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-yellow-500">
                          <CurrencyDollarIcon className="w-5 h-5 text-white" />
                        </span>
                      )}
                      <span className="font-semibold text-primary">
                        {transaction.title}
                      </span>
                    </div>
                  </th>
                  <td
                    className={`px-6 py-3 font-medium ${
                      transaction.type === "expense"
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {transaction.type === "expense" ? "-" : "+"}$
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-3 font-medium text-primary">
                    {transaction.month}/{transaction.day}
                  </td>
                  <td className="px-6 py-3 font-medium text-primary">
                    {transaction.month}/{transaction.day}
                  </td>
                  <td className="px-6 py-3 font-medium text-primary">
                    {transaction.card}
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <PencilSquareIcon
                        onClick={() => onEdit(transaction)}
                        className="w-5 h-5 text-blue-600 cursor-pointer font-medium"
                      />
                      <TrashIcon
                        onClick={() => onDelete(transaction.id)}
                        className="w-5 h-5 text-red-600 cursor-pointer font-medium"
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <AddTransactionModal
          setShowModal={setShowModal}
          setTransactions={setOriginalTransactions}
          transactions={transactions}
          initialData={initialData}
        />
      )}
    </>
  );
};

export default RecentTransactions;
