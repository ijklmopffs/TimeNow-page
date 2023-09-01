import checkmark from "../../Assets/Shield.svg";
import mockup from "../../Assets/Mockup.png";
import ua from "../../Assets/UA1.png";
import ua2 from "../../Assets/UA2.png";
import ua3 from "../../Assets/UA3.png";
import ua4 from "../../Assets/UA4.png";
import ua5 from "../../Assets/UA5.png";
import ua6 from "../../Assets/UA6.png";
import ua7 from "../../Assets/UA7.png";
import ua8 from "../../Assets/UA8.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-5">
      <section className="flex flex-col justify-between gap-10 mt-10 md:flex-row">
        <div>
          <h1 className="font-bold text-5xl text-blue-900 text-start w-96">
            Post when your audience is most active.
          </h1>
          <p className="text-blue-900 text-start my-3 w-96 font-medium">
            With TimeNow, automatically schedule your posts on Twitter, LinkedIn
            and Instagram to post when you followers are most active.
          </p>
          <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2 lg:flex-row lg:items-center">
            <button className="bg-blue-900 text-white p-2 font-bold rounded-md hover:opacity-80">
              Start Scheduling
            </button>
            <p className="text-blue-900 font-semibold">View Demo</p>
          </div>
          <div className="flex items-center mt-5 gap-4">
            <img src={checkmark} alt="" />
            <div className="flex lg:gap-2 md:items-start ">
              <p className="text-blue-900">TimeNow does not sell your data.</p>
              <a href="/" className="text-blue-900 font-bold underline">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div>
          <img
            src={mockup}
            alt=""
            className="w-full md:w-[500px] md:h-[500px]"
          />
        </div>
      </section>
      <section className="mt-10 flex justify-between flex-col lg:flex-row">
        <div className="flex flex-col md:flex-row lg:flex-col md:justify-between md:items-center">
          <h2 className="font-extrabold text-3xl text-blue-900 w-96 text-start mb-5">
            TimeNow is used by the most influential people.
          </h2>
          <div className="flex">
            {[ua, ua2, ua3, ua4, ua5, ua6, ua7, ua8].map((user, index) => (
              <img key={index} src={user} alt="" className={`ml-3 w-10 h-10`} />
            ))}
          </div>
        </div>
        <div className="text-start">
          <p className="w-96 my-5 text-blue-900 font-semibold">
            The most influential people on Facebook, Twitter and Instagram are
            using TweetNow to schedule posts when their followers are most
            active.
          </p>
          <p className="text-blue-900 font-semibold">
            They generally receive 23% more engagement than people who do not.
          </p>
        </div>
      </section>
    </header>
  );
}
