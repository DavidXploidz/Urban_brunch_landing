interface Testimonial {
    id: number;
    name: string;
    testimonial: string;
    image: string;
    ocupation: string;
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="space-y-4 bg-cafe-50 rounded-xl p-2 md:p-3 lg:p-4 shadow-xs">
        <p className="font-medium text-xl text-cafe-500 italic">"{testimonial.testimonial}"</p>
        <div className="flex items-center gap-2 pl-10">
            <img className="rounded-full object-cover w-16 h-16" loading="lazy" width={64} height={64} src={testimonial.image || "./images/user_default.png"} alt={`profile image ${testimonial.name}`} onError={(e) => (e.currentTarget.src = "./images/user_default.png")} />
            <p className="text-cafe-800 font-bold text-xl">{testimonial.name} <span className="text-cafe-500 text-base font-normal block">{testimonial.ocupation}</span></p>
        </div>
    </div>
  )
}
