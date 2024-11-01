import { ReactNode } from "react"

type FeatureCardProps = {
  title: string
  client: string
  img: string
  href: string
}

const Project = ({ title, client, img, href }: FeatureCardProps) => (
  <a className="group cursor-pointer" href={href}>
    <div 
      className="filter grayscale aspect-video bg-cover bg-center group-hover:scale-90 group-hover:grayscale-0 transition-all " 
      style={{
        backgroundImage: `url(${img})`
      }}
    />
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="">{client}</p>
    </div>
  </a>
)


export default Project