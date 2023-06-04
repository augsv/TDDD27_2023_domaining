import React from "react";

interface Charge {
  amount: number;
  currency: string;
  created: Date;
  domain: any;
}

const BoughtDomainList: React.FC<{ chargeList: Charge[] }> = ({ chargeList }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Datum
            </th>
            <th scope="col" className="px-6 py-3">
              Belopp
            </th>
            <th scope="col" className="px-6 py-3">
              Domän
            </th>
          </tr>
        </thead>
        <tbody>
          {chargeList.map((charge, index) => (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {new Date(charge.created).toLocaleDateString("sv-SE", {
                  timeZone: 'Europe/Stockholm',
                  hour: '2-digit',
                  minute: '2-digit',
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </th>
              <td className="px-6 py-4">
                {charge.amount + " " + charge.currency.toUpperCase()}
              </td>
              <td className="px-6 py-4">
                {charge.domain}
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  )

  return (
    <ul>
      {chargeList.map((charge, index) => (
        <li key={index}>
          Amount: {charge.amount}, Currency: {charge.currency}, Created: {charge.created}, Domain: {charge.domain}
        </li>
      ))}
    </ul>
  );
};

export default BoughtDomainList;