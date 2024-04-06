import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center h-screen justify-center">

          <div className="bg-black w-full h-screen">
            <h1 className="text-white">Products In Discounts</h1>
          </div>

          <div className="flex flex-row items-center w-full h-screen">
            <div className="bg-blue-600 w-full h-full">
              <h1>Top sales</h1>
            </div>
            <div className="bg-red-700 w-full h-full">
              <h1>Offers</h1>
            </div>
          </div>

        </div>
      </div>
      <h1>Main page</h1>
    </>
  );
}
