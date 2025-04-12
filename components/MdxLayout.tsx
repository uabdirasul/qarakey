export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="container w-[90%] mx-auto mt-4 rounded-lg px-5 pb-3 mb-10 text-base md:text-lg leading-[150%] gt-standard-mono backdrop-blur-lg ackdrop-blur-lg bg-white/20 bg-gradient-to-tr from-gray-800/50 to-gray-800/50 border border-white/30">
      {children}
    </section>
  );
}
