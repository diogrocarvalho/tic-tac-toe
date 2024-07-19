export function Cell({
  value,
  i,
  j,
  handleClick,
}: {
  value: string;
  i: number;
  j: number;
  handleClick: (i: number, j: number) => void;
}) {
  return (
    <div
      className="hover:cursor-pointer hover:bg-slate-300 border text-3xl basis-full w-36 max-w-36 p-4 text-center justify-center items-center"
      onClick={() => handleClick(i, j)}
    >
      {value}
    </div>
  );
}
