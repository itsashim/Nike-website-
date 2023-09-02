import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin">
        Sign Up from <span className="text-coral-red">Uupdates </span> &
        Newsletter
      </h3>
      <div className="border-slate-gray border-2 w-full lg:w-[50%] flex rounded-full px-3 py-3 max-sm:border-none">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label={"Sign Up"} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
