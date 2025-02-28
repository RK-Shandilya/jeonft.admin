import React, { useState } from "react";

const Wallet = () => {
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate withdrawal processing
    setIsWithdrawing(true);
    setTimeout(() => {
      setIsWithdrawing(false);
      alert(`Withdrawal of ${amount} ETH to ${address} initiated!`);
      setAmount("");
      setAddress("");
    }, 2000);
  };
  
  // Sample transaction data
  const transactions = [
    {
      id: "tx1",
      type: "deposit",
      amount: "5.0",
      date: "Feb 27, 2025",
      hash: "0xabc...123",
      status: "completed"
    },
    {
      id: "tx2",
      type: "fee",
      amount: "0.25",
      date: "Feb 25, 2025",
      hash: "0xdef...456",
      status: "completed"
    },
    {
      id: "tx3",
      type: "withdrawal",
      amount: "2.5",
      date: "Feb 20, 2025",
      hash: "0xghi...789",
      status: "completed"
    },
    {
      id: "tx4",
      type: "fee",
      amount: "0.3",
      date: "Feb 15, 2025",
      hash: "0xjkl...012",
      status: "completed"
    }
  ];
  
  // Transaction status colors
  const getStatusColor = (status) => {
    switch(status) {
      case "completed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "failed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  // Transaction type icons
  const getTypeIcon = (type) => {
    switch(type) {
      case "deposit":
        return (
          <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        );
      case "withdrawal":
        return (
          <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        );
      case "fee":
        return (
          <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      default:
        return (
          <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-blue-900">Admin Wallet</h3>
            <p className="text-sm text-blue-600">Manage marketplace funds and transfers</p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
              <div className="flex-1 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium text-blue-100">Platform Wallet</div>
                    <div>
                      <svg className="h-8 w-8 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-white text-3xl font-bold">50.128 ETH</div>
                    <div className="text-blue-100 text-sm">≈ $98,750.24 USD</div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="text-blue-100 text-sm mb-1">Wallet Address</div>
                    <div className="flex items-center bg-white/10 rounded-md p-2">
                      <span className="text-white text-sm font-mono mr-2 truncate">0x1234...5678</span>
                      <button className="p-1 hover:bg-white/20 rounded">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-4">
                  <div className="grid grid-cols-2 divide-x divide-white/20">
                    <div className="text-center">
                      <div className="text-sm text-blue-100">Monthly Revenue</div>
                      <div className="text-white text-lg font-medium">+8.45 ETH</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-blue-100">Pending Fees</div>
                      <div className="text-white text-lg font-medium">1.25 ETH</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="text-lg font-medium text-blue-900 mb-4">Withdraw Funds</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-1">
                      Amount (ETH)
                    </label>
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0.00"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-1">
                      Destination Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0x..."
                      required
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isWithdrawing}
                      className={`w-full flex justify-center items-center p-3 border border-transparent rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        isWithdrawing ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isWithdrawing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Withdraw ETH"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-blue-900">Recent Transactions</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hash
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getTypeIcon(transaction.type)}
                        <div className="ml-2 text-sm font-medium text-gray-900 capitalize">
                          {transaction.type}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{transaction.amount} ETH</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{transaction.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-mono text-blue-600 hover:text-blue-800 cursor-pointer">{transaction.hash}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-blue-900">Wallet Stats</h3>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">ETH Price</h4>
              <div className="flex items-center">
                <div className="text-2xl font-bold text-gray-900">$1,968.42</div>
                <div className="ml-2 px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded">
                  +2.4%
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Monthly Volume</h4>
              <div className="text-2xl font-bold text-gray-900">12.65 ETH</div>
              <div className="text-sm text-gray-500">≈ $24,901.53 USD</div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Gas Prices</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-gray-700">Low</div>
                  <div className="text-sm text-gray-900">25 Gwei</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-gray-700">Medium</div>
                  <div className="text-sm text-gray-900">32 Gwei</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-gray-700">High</div>
                  <div className="text-sm text-gray-900">45 Gwei</div>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Actions</h4>
              <div className="space-y-2">
                <button className="w-full flex justify-center items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <svg className="mr-2 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export Transaction History
                </button>
                <button className="w-full flex justify-center items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <svg className="mr-2 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Wallet Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;