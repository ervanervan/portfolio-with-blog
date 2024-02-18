import "./index.css";
import { Link } from "react-router-dom";
import { Home, Github } from "iconoir-react";

function App() {
  return (
    <header className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mx-auto px-8 md:px-0 lg:max-w-2xl">
        <div className="border-2 rounded-full">
          <img
            src="/ervan.jpg"
            alt=""
            className="object-cover w-36 h-36 rounded-full"
          />
        </div>
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-center my-9 btn-shine">
          Ervan Kurniawan
        </h1>

        <p className="text-zinc-400 text-center font-normal">
          I have interest and ability in programming, especially in HTML, CSS,
          JavaScript, ReactJS, and TailwindCSS programming languages.
        </p>

        <div className="flex justify-center">
          <div className="fixed bottom-8 flex gap-x-5 text-neutral-500">
            <Link href={"/dashboard"}>
              <span>
                <Home color="gray" height={24} width={24} />
              </span>
            </Link>
            {/* <span>
                <Github color="gray" height={24} width={24} />
              </span> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
