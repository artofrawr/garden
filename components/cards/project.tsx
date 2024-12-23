import { ReactNode } from "react"

type FeatureCardProps = {
  title: string
  client: string
  img: string
  href: string
}

const Project = ({ title, client, img, href }: FeatureCardProps) => (
  <a className="group cursor-pointer hover:scale-90 transition-all" href={href}>
    <div 
      className="aspect-video bg-cover bg-center" 
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