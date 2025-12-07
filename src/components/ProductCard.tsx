import { BiPlus } from "react-icons/bi";

interface Product{
    nombre: string;
    descripcion_corta: string;
    precio: number;
    imagen_comida: string;
}

export default function ProductCard( { product } : { product: Product } ) {

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-gray-50">
        <img className="max-h-60 object-cover h-auto" src={product.imagen_comida} alt={`image product ${product.nombre}`} />
        <div className="p-4 flex flex-col gap-y-2 h-full">
            <h3 className="text-xl text-cafe-800 font-semibold font-montserrat">{product.nombre}</h3>
            <p className="text-lg font-normal text-cafe-600">{product.descripcion_corta}</p>
            <p className="text-2xl font-semibold text-cafe-600 mt-auto flex items-center justify-between gap-x-2">${product.precio} <BiPlus className="flex-none size-7" /></p>
        </div>
    </div>
  )
}
