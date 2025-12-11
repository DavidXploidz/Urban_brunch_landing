import type { Video } from "../types"

export default function VideoCompont({src}: Video) {
  return (
    <video className="h-dvh lg:h-full w-full" controls={false} muted autoPlay loop playsInline>
         <source src={src} type="video/mp4"></source>
    </video>
  )
}
