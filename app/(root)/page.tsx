import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalancebox from '@/components/TotalBalancebox';
import React from 'react'

const Dashboard = () => {

  const LoggedIn = { firstName: 'Olujimi', lastName: 'o', email: 'omoladebu231@gmail.com'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstName || "Guest"}
            subtext="Discover a new era of banking — where innovation meets simplicity, and your financial journey is empowered like never before."
          />

          <TotalBalancebox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={10000.34}
          />
        </header>
        Recent Transactions
      </div>

      <RightSideBar
        user={LoggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1000.5 }, { currentBalance: 700.5 }]}
      />
    </section>
  );
}

export default Dashboard