import { useState } from 'react';

const BuggyCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Bug intencional: suma string en lugar de número
    setCount(count + "1");
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-2">🐛 Buggy Counter</h2>
      <p className="text-4xl mb-4">{count}</p>
      <button
        onClick={handleClick}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default BuggyCounter;
