import Image from "next/image";

const Side = () => {



  return (

    <div>
      <div className=" z-50 bg-amber-400 fixed top-20 mt-20 border rounded-r-lg p-1 border-yellow-300" >
        <p className="text-sm font-bold italic font-serif max-md:text-[8px]">
          $LATECOIN
        </p>
      </div>
      <div className="ml-4 z-50 bottom-60 fixed space-y-4 ">
        <a className=" p-2 " href="https://x.com/latecoinlol" target="_blank" rel="noopener noreferrer">
          <Image className="rounded-full transform hover:scale-110 transition duration-300 " src="/x.png" width={40} height={40} alt="x-icon" />
        </a>

        <a className=" p-2 " href="https://bags.fm/DwBfiFftT32oByb4xyxrB3GknD4w4bxTNZX66xC5BAGS" target="_blank" rel="noopener noreferrer">
          <Image className="rounded-full transform hover:scale-110 transition duration-300" src="/bags.png" width={40} height={40} alt="pump-icon" />
        </a>
      </div>
    </div>
  );

};

export default Side;