import Image from "next/image";

const Side = () => {

return (

   <div>
       <div className=" z-50 bg-amber-400 fixed top-20 mt-20 border rounded-r-lg p-2 border-yellow-300" >
       <p className="text-sm font-bold italic font-serif max-md:text-xl">
           $LATECOIN
       </p>
       </div>
       <div className="ml-4 z-50 bottom-60 fixed space-y-4 ">
       <a className="rounded-full p-2 " href="https://t.me/latecoinsol" target="_blank" rel="noopener noreferrer">
         <Image className="transform hover:scale-110 transition duration-300" src="/Telegram.png"  width={40} height={40} alt="telegram-icon" />
       </a>
       <a className=" p-2 " href="https://x.com/latecoinsol" target="_blank" rel="noopener noreferrer">
         <Image className="rounded-full transform hover:scale-110 transition duration-300 " src="/x.png" width={40} height={40} alt="x-icon" />
       </a>
       <a className=" p-2 " href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer">
         <Image className="rounded-full transform hover:scale-110 transition duration-300" src="/dex.png" width={40} height={40} alt="x-icon" />
       </a>
       <a className=" p-2 " href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
         <Image className="rounded-full transform hover:scale-110 transition duration-300" src="/pump.jpg" width={40} height={40} alt="pump-icon" />
       </a>
     </div>
   </div>
);
   
};

export default Side;