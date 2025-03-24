import Image from 'next/image'

export default function MiniCV() {
  return (
    <div className="gap-6 flex flex-1 flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
      <div className="relative min-w-52 h-60 xl:self-center">
        <Image src="/minhaFoto.png" alt="foto ilustrativa" fill={true} />
      </div>
      <div className="flex flex-col gap-5 self-center p-6 items-center md:items-start xl:items-start lg:items-center">
        <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start ">
          <span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text font-bold text-2xl ">
            Guilherme Martins
          </span>
          <span>Desenvolvedor web</span>
        </div>
        <p className="text-sm text-zinc-400 text-center md:text-left lg:text-center xl:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos debitis
          doloremque facilis totam omnis vero minima magnam nostrum aut itaque assumenda tempora
          ipsa ipsam qui, culpa perspiciatis! Voluptate, itaque? Minus veritatis nesciunt autem hic!
        </p>
      </div>
    </div>
  )
}
