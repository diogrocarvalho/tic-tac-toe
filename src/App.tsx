import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <main className="w-full rounded-md bg-slate-100 flex h-dvh">
        <nav className="bg-yellow-200 basis-1/5">
          <ul>
            <li>
              <a href="/tic-tac-toe">Tic Tac Toe</a>
            </li>
          </ul>
        </nav>
        <section className="basis-4/5 flex justify-center pt-10 p-4">
          <Outlet />
        </section>
      </main>
    </>
  );
}

export default App;
