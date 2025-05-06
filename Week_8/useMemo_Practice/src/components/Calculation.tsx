// Calculation.tsx
import React, { useMemo } from 'react';

const Calculation = ({ num }: { num: number }) => {
  // Memoize the result, only recompute when `num` changes
  const result = useMemo(() => {
    let calculationResult = 0;

    if (num <= 25) {
      // If num <= 25, perform a lightweight calculation
      calculationResult = num;
    } else {
      // If num > 25, perform an expensive calculation
      console.log("Num value changed, recalculating...");
      let temp = num;
      for (let i = 1; i < 1e7; i++) {
        temp += num;
      }
      calculationResult = temp;
    }

    return calculationResult;
  }, [num]); // Recalculate only when `num` changes

  return <div>Calculation result: {result}</div>;
};

export default Calculation;
