import React from "react";

export type IWorksContentComponent = {
  image: string
  name: string
  description: string | React.ReactNode
  tags: string[]
  reverse?: boolean
  url?: string
}

export const WorksContentComponent = (props: IWorksContentComponent) => {
  console.log(props)
  return (
    <div className={`my-8 h-full bg-base-100 flex flex-col justify-around snap-center lg:justify-between ${props.reverse ? "lg:flex-row-reverse" : "lg:flex-row "}`}>
      <figure className={`max-w-full lg:w-full lg:w-3/5 ${props.reverse ? "text-right": ""}`}><img src={props.image} alt={props.name}/></figure>
      <div className="max-w-full lg:w-full lg:w-2/5 p-8 flex-col justify-center">
        <h2 className="text-xl font-bold">{props.name}</h2>
        <p className="text-lg hidden lg:inline">{props.description}</p>
        <div className="flex-row my-2">
          {props.tags.map((tag, index) => (
            <span key={index} className="daisy-badge daisy-badge-outline border-solid mr-2">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
