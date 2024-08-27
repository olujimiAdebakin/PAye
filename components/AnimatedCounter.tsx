'use client'

import CountUp from "react-CountUp"


const AnimatedCounter = ({ amount}: {amount: number})=> {
  return (
    <div>
      <CountUp
        decimal=","
        prefix="$"
        suffix="left"
        duration={2}
        decimals={2}
        end={amount}
      />
    </div>
  );
}

export default AnimatedCounter