import { motion } from "framer-motion";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import sketchupImg from "@/assets/products/sketchup.jpg";
import solidworksImg from "@/assets/products/solidworks.jpg";
import workstationsImg from "@/assets/products/workstations.jpg";
import hardwareAccessoriesImg from "@/assets/products/hardware-accessories.png";

const WHATSAPP_NUMBER = "528181880009";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me interesa información sobre sus soluciones de software.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const products = [
  {
    name: "SketchUp Pro / Studio",
    description: "Software líder en diseño 2D y 3D para arquitectura y construcción",
    image: sketchupImg,
    showPlans: true,
    features: [
      "Modelado 3D intuitivo y potente",
      "Extension Warehouse con miles de plugins",
      "Exportación a DWG, PDF, OBJ y más",
      "Trimble Connect para colaboración",
      "Visualización avanzada con V-Ray (Studio)",
      "Análisis energético con Sefaira (Studio)",
    ],
  },
  {
    name: "SolidWorks",
    description: "CAD 3D profesional para ingeniería y manufactura",
    image: solidworksImg,
    features: [
      "Diseño paramétrico 3D avanzado",
      "Simulación y análisis de esfuerzos",
      "Documentación técnica automatizada",
      "Gestión de datos de producto (PDM)",
      "Diseño eléctrico y de cableado",
      "Renderizado fotorrealista",
    ],
  },
  {
    name: "Workstations HP / Dell / Lenovo",
    description: "Hardware especializado para diseño, ingeniería y CAD",
    image: workstationsImg,
    features: [
      "Procesadores Intel Xeon y AMD Ryzen Pro",
      "Tarjetas gráficas NVIDIA Quadro / RTX",
      "Memoria ECC para máxima estabilidad",
      "Certificación ISV para software profesional",
      "Configuraciones personalizadas",
      "Garantía y soporte empresarial",
    ],
  },
  {
    name: "Hardware y Accesorios",
    description: "Complementos esenciales para tu espacio de trabajo",
    image: hardwareAccessoriesImg,
    features: [
      "Monitors de alta resolución",
      "Periféricos ergonómicos",
      "Soluciones de almacenamiento",
      "Accesorios para videoconferencia",
      "Componentes de actualización",
    ],
  },
];

const Marcas = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestras <span className="text-gradient-brand">Soluciones</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Descubre el software y hardware por suscripción que mejor se adapta a las necesidades de tu empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="feature-card h-full flex flex-col overflow-hidden">
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-2 flex-1">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 space-y-3">
                        <Button asChild className="btn-secondary w-full">
                          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            Solicitar Cotización <ArrowRight className="ml-2" size={18} />
                          </a>
                        </Button>
                        {product.showPlans && (
                          <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                            <Link to="/sketchup-planes">
                              Ver planes
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contamos con acceso a cientos de soluciones de software. Contáctanos y te ayudaremos a encontrar la herramienta perfecta.
            </p>
            <Button asChild size="lg" className="btn-primary">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                Contáctanos
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Marcas;
