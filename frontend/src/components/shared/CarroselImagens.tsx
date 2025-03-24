import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export interface CarroselImagensProps {
  imagens: string[]
}

export default function CarroselImagens(props: CarroselImagensProps) {
  return (
    <Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full ">
      <CarouselContent>
        {props.imagens.map((imagem) => (
          <CarouselItem key={imagem} className="relative h-96 w-full">
            <Image src={imagem} alt="Imagem" fill className="object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  )
}
