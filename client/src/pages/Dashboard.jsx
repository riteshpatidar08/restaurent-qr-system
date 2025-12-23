import React from 'react';

function Dashboard() {
  return (
    <div className="">
      <header className="bg-gray-900/50 fixed w-full top-0 border-b border-gray-800 h-20">
        header
      </header>
      <div className="flex">
        <aside className="bg-gray-900/50 border-b fixed top-[80px] border-gray-800 h-screen w-64">
          Sidebar
        </aside>
        <main className="flex-1 ml-70 mt-22"> content</main>
      </div>
    </div>
  );
}

export default Dashboard;
