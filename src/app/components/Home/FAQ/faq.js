import { ArrowRightOutlined } from '@ant-design/icons'

const Faq = () => {

    return (

        <section className="bg-black p-20">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-3xl lg:text-4xl text-white font-bold lg:tracking-tight">
            Common Questions

              </h3>
            <p className="text-lg mt-4  text-white">
            Everything you need to know about joining the LATE Movement
            </p>
          </div>
          <div className="w-full md:w-1/2 max-w-xl mx-auto">
            <div className="grid divide-y divide-slate-400">
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between text-lg text-white items-center font-medium cursor-pointer list-none">
                      <span>Is it too late to dive in crypto?</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRightOutlined />
                      </span>
                    </summary>
                    <p className="text-white mt-3 group-open:animate-fadeIn">
                    Never too late, degen! The crypto market is a wild ride that’s always spinning new opportunities every day. LateCoin is your ticket to join with confidence, turning being “late” into your superpower...
                    </p>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between text-lg items-center text-white font-medium cursor-pointer list-none">
                      <span>How is LATE coin different from other meme coins?</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRightOutlined />
                      </span>
                    </summary>
                    <p className="text-white mt-3 group-open:animate-fadeIn">
                    $LATECOIN combines a movement with sense of humour, building a supportive community that transforms the anxiety of being "late" into a strength.
                     </p>
                  </details>
                </div>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between text-white text-lg items-center font-medium cursor-pointer list-none">
                      <span>How can I join the LATE community?</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRightOutlined />
                      </span>
                    </summary>
                    <p className="text-white mt-3 group-open:animate-fadeIn">
                    Grab some $LATECOIN and join the party! Join X on : @LateCoinlol, and stay updated on the movement. It’s that simple, just show up! </p>
                  </details>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    );

};

export default Faq;