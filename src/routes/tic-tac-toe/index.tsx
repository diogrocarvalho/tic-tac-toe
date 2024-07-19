import React from 'react';
import { Table } from './components/table';

export function Page() {
  const tableSize = 3;
  const [currentStatus, setCurrentStatus] = React.useState({
    table: new Array(tableSize)
      .fill(null)
      .map(() => new Array(tableSize).fill('.')),
    currentPlayer: 'O',
    score: {
      X: 0,
      O: 0,
    },
    currentWinner: '',
  });

  const handleClick = (i: number, j: number) => {
    if (currentStatus.table[i][j] !== '.' || currentStatus.currentWinner) {
      return;
    }

    let newTable = [...currentStatus.table];
    newTable[i][j] = currentStatus.currentPlayer;
    setCurrentStatus({
      ...currentStatus,
      table: newTable,
      currentPlayer: currentStatus.currentPlayer === 'X' ? 'O' : 'X',
    });
    const winner = checkWinner(newTable);
    if (winner) {
      const score = currentStatus.score;
      if (winner === 'O') {
        score.O = score.O + 1;
      }
      if (winner === 'X') {
        score.X = score.X + 1;
      }
      setCurrentStatus({
        ...currentStatus,
        currentWinner: winner,
        currentPlayer: winner,
        score,
      });
    }
  };

  const checkWinner = (table: any[][]): 'X' | 'O' | undefined => {
    const size = tableSize;
    // check rows
    for (let i = 0; i < size; i++) {
      const xWinner = table[i].every((cell) => cell === 'X');
      const oWinner = table[i].every((cell) => cell === 'O');
      if (oWinner || xWinner) {
        return table[i][0];
      }
    }

    //check columns
    for (let i = 0; i < size; i++) {
      const count: any = { X: 0, O: 0, '.': 0 };
      for (let j = 0; j < size; j++) {
        count[table[j][i]] = count[table[j][i]] + 1;
      }
      if (count.X === size) {
        return 'X';
      } else if (count.O === size) {
        return 'O';
      }
    }

    //Check diagonal
    const count: any = { X: 0, O: 0, '.': 0 };

    for (let i = 0; i < size; i++) {
      count[table[i][i]] = count[table[i][i]] + 1;
    }
    if (count.X === 3) {
      return 'X';
    } else if (count.O === 3) {
      return 'O';
    }
    count.X = 0;
    count.O = 0;
    count['.'] = 0;
    let i = 0;
    let j = size - 1;
    while (i <= size - 1 && j >= 0) {
      count[table[i][j]] = count[table[i][j]] + 1;
      i++;
      j--;
    }

    if (count.X === 3) {
      return 'X';
    } else if (count.O === 3) {
      return 'O';
    }
  };

  const restart = () => {
    setCurrentStatus({
      table: new Array(tableSize)
        .fill(null)
        .map(() => new Array(tableSize).fill('.')),
      currentPlayer: 'O',
      score: {
        X: 0,
        O: 0,
      },
      currentWinner: '',
    });
  };

  const rematch = () => {
    setCurrentStatus({
      ...currentStatus,
      currentWinner: '',
      table: new Array(tableSize)
        .fill(null)
        .map(() => new Array(tableSize).fill('.')),
    });
  };

  return (
    <div className="text-3xl select-none">
      <div className="flex justify-center items-center border-b-2 border-b-gray-200 p-3 ">
        <span className="text-center justify-center items-center flex mx-3 bg-red-500 text-white w-14 h-14 rounded-full">
          X
        </span>
        <span className="text-2xl">
          {currentStatus.score.X} vs {currentStatus.score.O}{' '}
        </span>
        <span className=" text-center flex justify-center items-center mx-3 bg-green-500 text-white w-14 h-14 rounded-full">
          O
        </span>
      </div>

      <Table
        className="my-10"
        table={currentStatus.table}
        handleClick={handleClick}
      ></Table>

      <div className="mt-20 flex justify-center">
        <button
          className="mr-4 px-6 py-3 disabled:opacity-50 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out bg-red-500"
          onClick={restart}
          disabled={currentStatus.currentWinner === ''}
        >
          New game!
        </button>

        <button
          className="px-6 py-3 disabled:opacity-50  text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out bg-green-500"
          onClick={rematch}
          disabled={currentStatus.currentWinner === ''}
        >
          Play again!
        </button>
      </div>
    </div>
  );
}
export default Page;
