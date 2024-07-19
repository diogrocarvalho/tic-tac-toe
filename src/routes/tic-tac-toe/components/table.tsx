import { Cell } from './cell';

export function Table({
  handleClick,
  className = '',
  table,
}: {
  handleClick: (i: number, j: number) => void;
  table: string[][];
  className: string;
}) {
  return (
    <div className={`${className} text-3xl flex flex-wrap `}>
      {table.map((row, i) => (
        <div className="flex flex-row basis-full justify-center" key={i}>
          {row.map((cell, j) => (
            <Cell handleClick={handleClick} value={cell} i={i} j={j} key={j} />
          ))}
        </div>
      ))}
    </div>
  );
}
