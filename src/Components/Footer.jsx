import logo from "../../Assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="p-5 flex justify-between  flex-col items-start lg:flex-row lg:items-center">
      <div className="flex flex-col items-start gap-2">
        <img src={logo} alt="" />
        <div className="flex gap-10">
          <div className="flex flex-col text-start my-2">
            <a href="/" className="font-bold">
              Product
            </a>
            <a href="/">Homepage</a>
            <a href="/">Pricing</a>
            <a href="/">Features</a>
          </div>
          <div className="flex flex-col text-start my-2">
            <a href="/" className="font-bold">
              Help
            </a>
            <a href="/">Live Chat</a>
            <a href="/">Send Email</a>
            <a href="/">FAQ</a>
          </div>
          <div className="flex flex-col text-start my-2">
            <a href="/" className="font-bold">
              Company
            </a>
            <a href="/">About</a>
            <a href="/">Customers</a>
            <a href="/">Blog</a>
          </div>
        </div>
      </div>
      <form action="" className="md:flex md:flex-col items-start lg:flex mt-2">
        <label htmlFor="email" className="font-bold mr-1 items-start flex">
          Try TweetNow
        </label>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="border-solid border-gray-200 border-2 p-2 rounded-md mr-1 outline-none"
          />
          <button className="bg-blue-900 text-white p-2 font-bold rounded-md hover:opacity-80">
            Start Scheduling
          </button>
        </div>
      </form>
    </footer>
  );
}
