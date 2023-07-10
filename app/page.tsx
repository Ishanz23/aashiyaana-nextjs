import Link from "next/link";
import { DatePickerWithRange } from "../components/ui/dateRangePicker";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between w-full h-full ">
      <section className="flex flex-1 w-full p-8 sm:items-center sm:justify-center bg-gradient-to-b md:bg-gradient-to-r from-violet-500 to-fuchsia-300 bg-clip-text">
        <h1 className="flex flex-wrap my-3 text-2xl font-bold leading-loose tracking-widest text-transparent lg:text-4xl">
          WHERE DO YOU SEE YOURSELF ON YOUR NEXT . . .
        </h1>
      </section>
      <section className="flex items-baseline w-full px-8 sm:justify-center">
        <h1 className="text-5xl font-bold tracking-wider delay-1000 text-fuchsia-400 lg:text-7xl animate-toYellow">
          VACATION
        </h1>
        <h1 className="pl-1 text-6xl font-bold text-violet-600 lg:text-8xl animate-toTeal">
          ?
        </h1>
      </section>
      <div className="flex flex-col items-center justify-end flex-1 w-full p-8 sm:justify-center ">
        <div className="flex flex-col items-center justify-center w-full py-4">
          <h1 className="py-4">Choose your Dates </h1>
          <DatePickerWithRange />
        </div>
        <Link href="/places" className="w-full sm:w-80 lg:w-[28rem]">
          <button className="w-full p-4 text-xl font-semibold tracking-widest rounded-md animate-pulse lg:text-2xl sm:mt-8 bg-gradient-to-br from-fuchsia-400 to-violet-700 text-slate-50">
            DIVE IN
          </button>
        </Link>
      </div>
    </main>
  );
}
