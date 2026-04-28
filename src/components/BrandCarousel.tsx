import { motion } from "framer-motion";
import solidworksLogo from "@/assets/solidworks-logo.png";
import sketchupLogo from "@/assets/sketchup-logo.png";
import windowsLogo from "@/assets/windows-logo.png";
import bricscadLogo from "@/assets/bricscad-logo.png";

const brands = [
  { name: "SolidWorks", logo: solidworksLogo, className: "h-[110px] md:h-[150px]" },
  { name: "SketchUp", logo: sketchupLogo, className: "h-[130px] md:h-[180px]" },
  { name: "Windows", logo: windowsLogo, className: "h-[130px] md:h-[180px]" },
  { name: "BricsCAD", logo: bricscadLogo, className: "h-[25px] md:h-[35px]" },
];

// Duplicate brands for seamless infinite scroll
const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

const BrandCarousel = () => {
  return (
    <section className="brand-carousel-section">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm md:text-base text-muted-foreground font-medium tracking-wider uppercase mb-8"
        >
          Marcas que comercializamos
        </motion.p>
      </div>

      <div className="carousel-mask">
        <div className="carousel-track">
          {duplicatedBrands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="carousel-item">
              <img
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className={`carousel-logo ${brand.className}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
