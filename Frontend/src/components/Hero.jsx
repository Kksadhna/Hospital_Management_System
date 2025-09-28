import React from "react"

const Hero = ({title,imageUrl}) => {
  return (
    <div className="hero container">
        <div className="banner">
            <h1>{title}</h1>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis dignissimos commodi deleniti accusamus neque modi illo rem, nam hic, nesciunt vel est quos quasi. Eos magnam suscipit recusandae dignissimos.
               Expedita sint dolore nobis explicabo repellat, deleniti velit, nesciunt sequi obcaecati corrupti quisquam nihil minima perferendis esse error saepe eius? Dolor saepe laboriosam sequi numquam possimus eos quasi culpa eum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio minus error quasi, accusantium, expedita veritatis vitae repudiandae aperiam odio eaque eum? Unde blanditiis autem in qui, dolore eligendi quasi!
            </p>
        </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className="animated-image" />
            <span>
                <img src="/Vector.png" alt="vector" />
            </span>

        </div>
      
    </div>
  )
}

export default Hero
