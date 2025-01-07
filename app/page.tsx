export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <section>
        <div className="pb-10">
          <h1 className="text-7xl text-center font-bold">Coming Soon!</h1>
          <p className="text-center pt-4">
            Subscribe to get notified when we launch.
          </p>
        </div>
        <div className="">
          <form className="bg-gray-100 flex p-2 rounded-full justify-between">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-100 rounded-full pl-4"
            />
            <button
              type="submit"
              className=" rounded-full text-center bg-purple-500 text-white px-5 py-3"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
