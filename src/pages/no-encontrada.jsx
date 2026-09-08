import Boton from '@/components/boton'

export default function NoEncontrada() {
  return (
    <section className="mx-auto max-w-xl px-6 py-28 text-center">
      <p className="font-titulo text-6xl text-terracota">404</p>
      <h1 className="mt-4 font-titulo text-3xl">Por aquí no pasa ninguna ruta</h1>
      <p className="mt-3 text-humo">La página que buscabas no existe.</p>
      <div className="mt-8">
        <Boton a="/">Ir al catálogo</Boton>
      </div>
    </section>
  )
}
