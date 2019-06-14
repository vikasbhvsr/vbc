import React from "react"
import aboutStyles from "./about.module.scss"
import "./layout.css"

const about = () => {
  return (
    <div className={aboutStyles.about}>
      <div className={aboutStyles.fancyTextBox}>
        <h2 className={aboutStyles.fancyForegroundText}>
          Vaidehi Beauty Care & Spa
        </h2>
        <p className={aboutStyles.fancyBackgroundText}>
          Look Better, Feel Better
        </p>
      </div>
      <p style={{ maxWidth: "800px", textAlign: "center" }}>
        Hairstylist and Bridal Specialist, Deepa is an expert in versatility and
        a master of her craft. She is self-taught and certified by biggest name
        in the industry at L'oreal, Georgio Kyot, Vidal Sassoon. Her unique,
        organic approach to beauty care allows her to create curated looks that
        highlight client's natural features.
      </p>
      <a href="/about" className={aboutStyles.btnLg}>
        More About
      </a>
    </div>
  )
}

export default about
