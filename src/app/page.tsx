import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen grid grid-cols-3 justify-evenly">
      <div className="text-center justify-center flex place-items-center"></div>
      <div className="text-center justify-center flex place-items-center">
        <a className="text-2xl" href="./beer/ale">
          Ale
        </a>
      </div>
      <div className="text-center justify-center flex place-items-center"></div>
      <div className="text-center justify-center flex place-items-center">
        <a className="text-2xl" href="./beer/lager">
          Lager
        </a>
      </div>
      <div className="text-center justify-center flex place-items-center">
        <span className="text-6xl">Le tour du monde de la bière</span>
      </div>
      <div className="text-center justify-center flex place-items-center">
        <a className="text-2xl" href="./beer/spontanee">
          Spontanée
        </a>
      </div>
      <div className="text-center justify-center flex place-items-center"></div>
      <div className="text-center justify-center flex place-items-center">
        <a className="text-2xl" href="./beer/mixte">
          Mixte
        </a>
      </div>
      <div className="text-center justify-center flex place-items-center"></div>
    </div>
  );
}
