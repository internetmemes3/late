import { ArrowRightOutlined } from '@ant-design/icons'

const Faq = () => {

    return (

        <section className="bg-black p-20">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-3xl lg:text-4xl text-white font-bold lg:tracking-tight">
            Common Questions from LATE community
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
                      <span>Is it too late to invest in crypto?</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRightOutlined />
                      </span>
                    </summary>
                    <p className="text-white mt-3 group-open:animate-fadeIn">
                    It's never too late! The crypto market. LATE coin embraces this reality and turns it into an opportunity.
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
                    LATE coin combines a movement with sense of humour, building a supportive community that transforms the anxiety of being "late" into a strength.
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
                    Simply join our telegram group : @latecoinsol , and stay tuned in our X : @latecoinsol</p>
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