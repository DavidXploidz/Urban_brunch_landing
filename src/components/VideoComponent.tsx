import type { Video } from "../types"

export default function VideoCompont({src}: Video) {
  return (
    <video className="h-full w-full" controls={false} muted autoPlay loop>
         <source src={src} type="video/mp4"></source>
    </video>
  )
}
