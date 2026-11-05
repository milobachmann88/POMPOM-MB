import { Reveal } from './reveal'

export function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <Reveal className="mb-10 flex flex-col items-center text-center md:mb-14">
      <h2 id={id} className="title-white text-3xl font-black tracking-wider text-balance md:text-5xl">
        {children}
      </h2>
      <span aria-hidden="true" className="mt-4 flex gap-1.5">
        <span className="size-2 rounded-full bg-primary/60" />
        <span className="size-2 rounded-full bg-card" />
        <span className="size-2 rounded-full bg-primary/60" />
      </span>
    </Reveal>
  )
}
