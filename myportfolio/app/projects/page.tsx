import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function projects() {
  return (
    <div className="bg-black w-screen h-[calc(100vh-4rem)] text-white flex justify-center overflow-auto">
      <div className="mt-7 gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
        <a href="https://venuly.vercel.app/" target="blank">
          <div className="relative flex flex-col  bg-black shadow-sm border border-black rounded-lg hover:scale-110 transition ease-in-out duration-500 w-96">
            <div className="relative h-48 m-2.5 overflow-hidden text-white rounded-md">
              <Image width={500} height={500} src="/myportfolio/venuly.png" alt="card-image" />
            </div>
            <div className="p-4">
              <div className="grid grid-cols-4">
                <div className="mb-4  rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  NextJs
                </div>
                <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  ReactJs
                </div>
                <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  PostgreSQL
                </div>
                <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  Prisma
                </div>
                <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  Next-Auth
                </div>
                <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  Tailwind
                </div>
              </div>
              <h6 className="mb-2 text-white text-xl font-semibold">
                VENULY - A Venue Booking Website
              </h6>
              <p className="text-white leading-normal font-light">
                Venuly is your ultimate destination for effortless venue
                booking. Whether you&apos;re planning an intimate gathering, a grand
                wedding, or a corporate event, Venuly simplifies the process of
                finding and reserving the perfect venue. Our user-friendly
                platform offers a curated selection of venues tailored to suit
                every occasion and budget.
              </p>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <GithubIcon className="relative inline-block h-8 w-8 p-1 rounded-full" />
                <div className="flex flex-col ml-3 text-sm">
                  <span className="text-white font-semibold">
                    <Link
                      target="blank"
                      href="https://github.com/abhishek5173/Venuly"
                    >
                      Source Code
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://currencyconverter-abhishek.vercel.app/" target="blank">
          <div className="relative flex flex-col  bg-black shadow-sm border border-black rounded-lg hover:scale-110 transition ease-in-out duration-500 w-96">
            <div className="relative h-48 m-2.5 overflow-hidden text-white rounded-md">
              <Image height={500} width={500} src="/myportfolio/currency.png" alt="card-image" />
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  ReactJs
                </div>
                <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  JavaScript
                </div>
                <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  RestAPIs
                </div>
                <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                  Tailwind
                </div>
              </div>
              <h6 className="mb-2 text-white text-xl font-semibold">
                Currency Converter
              </h6>
              <p className="text-white leading-normal font-light">
                Currency Converter is your go-to tool for seamless and accurate
                currency conversions. Whether you&apos;re traveling abroad, managing
                international transactions, or simply curious about exchange
                rates, Currency ConvertPro delivers reliable and up-to-date
                information with ease.
              </p>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <GithubIcon className="relative inline-block h-8 w-8 p-1 rounded-full" />
                <div className="flex flex-col ml-3 text-sm">
                  <span className="text-white font-semibold">
                    <Link
                      target="blank"
                      href="https://github.com/abhishek5173/Currency-Converter"
                    >
                      Source Code
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
