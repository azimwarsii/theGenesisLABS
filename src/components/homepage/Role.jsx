
export default function Role({forwardedRef}) {
  return (
    <section ref={forwardedRef} id="about" className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change" aria-label="">
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
        We create with precision building scalable, high-performance web and app solutions.Every line of code and interface is optimized for seamless engagement and lasting impact.From architecture to deployment, we drive innovation that transforms digital experiences
        <span style={{ color: '#b60000' }}>.</span>

      </h1>        
      </div>
    </section>
  );
}
