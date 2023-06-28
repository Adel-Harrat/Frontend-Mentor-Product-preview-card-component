const App = () => {
  return (
    <div className="bg-cream min-h-screen py-8 lg:flex lg:items-center lg:justify-center">
      <main className="bg-white rounded-xl mx-5 overflow-hidden lg:flex lg:items-center lg:justify-between lg:max-w-[40rem] shadow-sm">
        <section className="basis-1/2">
          <img
            src="./images/image-product-mobile.jpg"
            alt="image"
            className="lg:hidden w-full"
          />
          <img
            src="./images/image-product-desktop.jpg"
            alt="image"
            className="hidden lg:block"
          />
        </section>
        {/* Content */}
        <section className="p-5 lg:p-8 basis-1/2">
          <span className="uppercase tracking-[0.2rem] font-montserrat font-[500] text-dark-grayish-blue text-sm">
            Perfume
          </span>
          <h1 className="text-3xl font-fraunces text-very-dark-blue mt-2 lg:mt-5 leading-8">
            Gabrielle <br className="hidden lg:block" /> Essence Eau{" "}
            <br className="hidden lg:block" /> De Parfum
          </h1>
          <p className="text-dark-grayish-blue text-md mt-3 lg:mt-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center space-x-5 mt-5">
            <h3 className="text-3xl text-dark-cyan font-bold font-fraunces">
              $149.99
            </h3>
            <span className="text-sm text-dark-grayish-blue line-through">
              $169.99
            </span>
          </div>
          <button className="bg-dark-cyan text-white py-3 font-bold font-montserrat w-full focus:outline-none text-sm rounded-lg mt-5 lg:mt-8 flex items-center justify-center space-x-3 hover:bg-green-900 transition-all ease-in-out duration-300">
            <img src="/images/icon-cart.svg" alt="" />
            <span>Add to Cart</span>
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
