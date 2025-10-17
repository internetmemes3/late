import Image from "next/image";


const Hero = () => {

    return (
        <div className="flex flex-col items-center justify-center  bg-black text-foreground">
        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="text-left md:text-left w-3/4 md:w-2/3 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white leading-tight nabla-hero-title">
            Late Coin
          </h1>
            <p className="mt-4 text-lg text-white w-3/4 text-muted-foreground indie-flower-regular">If you've ever felt the Fear Of Missing Out, been on the lookout for a sign, or wondered if you're too late and unsure whether it's the right time for an opportunity... <br/> Let us assure you: We know that timing is key, and LateCoin is here to prove that the best opportunities come when you're prepared for them. <br/> We believe that being late isn’t a setback, and the right moment is always now.</p>
            <div className="mt-6 flex space-x-4">
              <a className="bg-yellow-400 text-black text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80"  href="https://pump.fun/coin/2ZDdkWe2MNEfWXxoVgyefUmWSwtA5AoFWMNtpWYFpump" target="_blank" >$LATECOIN</a>
              <a className="text-gray-200 border border-gray-500 text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80" href="https://x.com/i/communities/1979237655453012019" target="_blank" >Join The Movement</a>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <Image  width={700} height={700} alt="yellow-crypto-coin" src="/3d.png" />
          </div>
        </div>
      </div>
);
};

export default Hero;