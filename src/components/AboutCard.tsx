import { FaLeaf, FaHeart, FaClock } from "react-icons/fa6";

interface Card{
    icon: string;
    title: string;
    description: string;
}

const IconMap: { [key: string]: React.ElementType } = {
    "FaLeaf": FaLeaf,
    "FaHeart": FaHeart,
    "FaClock": FaClock,
};

export default function AboutCard( { icon, title, description } : Card ) {

    const IconComponent = IconMap[icon];

    if (!IconComponent) {
        console.error(`Icono no encontrado: ${icon}`);
        return null;
    }

    return (
        <div className="flex flex-col items-center space-y-2 text-center">
            <div className="w-14 h-14 grid place-items-center rounded-full bg-cafe-100 mb-6">
                <IconComponent className="flex-none text-cafe-700 size-7" />
            </div>
            <h3 className="text-2xl text-cafe-900 font-semibold">{title}</h3>
            <p className="text-xl font-medium text-cafe-600">{description}</p>
        </div>
    )
}