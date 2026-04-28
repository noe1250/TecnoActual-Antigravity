import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Tag, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const BlogSuscripcion = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Volver al Blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Artículos
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                25 de Octubre, 2025
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              ¿Por qué cambiar a{" "}
              <span className="text-gradient-brand">software por suscripción</span>?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              El modelo tradicional de comprar licencias perpetuas está quedando atrás.
              Aquí te explicamos por qué el software por suscripción es la decisión más
              inteligente para tu empresa hoy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-foreground"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                Durante décadas, las empresas adquirían software pagando una gran suma
                inicial por una licencia perpetua. Este modelo, aunque sólido en su momento,
                presenta desafíos importantes en un entorno tecnológico que evoluciona
                rápidamente. La suscripción ha llegado para cambiar las reglas del juego.
              </p>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Tag size={20} className="text-primary" />
                  El problema con las licencias perpetuas
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Comprar una licencia perpetua implica un desembolso inicial elevado, y eso
                  es solo el comienzo. Con el tiempo, las actualizaciones se convierten en
                  costos adicionales, el soporte técnico puede volverse limitado para
                  versiones antiguas y la empresa queda "atrapada" en una versión que
                  eventualmente queda obsoleta frente a las necesidades del mercado.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Además, gestionar inventarios de licencias, claves de activación y
                  compatibilidades entre versiones genera una carga administrativa nada
                  despreciable para los equipos de TI.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary" />
                  Las ventajas del modelo por suscripción
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Costos predecibles",
                      desc: "Paga mensual o anualmente sin grandes inversiones iniciales. Facilita la planificación financiera y reduce el riesgo de presupuesto.",
                    },
                    {
                      title: "Siempre la última versión",
                      desc: "Las actualizaciones se incluyen automáticamente. Tu equipo trabaja siempre con las herramientas más recientes, sin costos adicionales ni trámites.",
                    },
                    {
                      title: "Soporte técnico incluido",
                      desc: "La mayoría de los planes de suscripción incluyen soporte prioritario, lo que reduce tiempos de inactividad y mejora la productividad.",
                    },
                    {
                      title: "Escalabilidad inmediata",
                      desc: "Añade o reduce usuarios según necesites. Perfecto para empresas en crecimiento o con equipos variables.",
                    },
                    {
                      title: "Acceso desde cualquier lugar",
                      desc: "Muchas soluciones por suscripción incluyen acceso en la nube o múltiples instalaciones, adaptándose al trabajo remoto e híbrido.",
                    },
                    {
                      title: "Gestión centralizada",
                      desc: "Administra todas tus licencias desde un solo panel, sin malabarismos con claves de activación o verificaciones manuales.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl bg-muted/50 border border-border"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                        <CheckCircle size={16} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  ¿Es adecuado para tu empresa?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  La suscripción es especialmente beneficiosa para empresas que dependen
                  de herramientas de diseño, ingeniería o productividad que lanzan
                  actualizaciones frecuentes con nuevas funcionalidades. Si tu equipo
                  trabaja con herramientas como SketchUp, Solidworks, BricsCAD u otras
                  soluciones especializadas, el modelo de suscripción te garantiza competitividad
                  permanente sin el peso de una inversión monolítica.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  En TecnoActual llevamos años ayudando a empresas a hacer la transición
                  hacia modelos de licenciamiento modernos. Nuestro equipo puede asesorarte
                  para encontrar el plan que mejor se adapte a tu organización y presupuesto.
                </p>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-3">
                  ¿Listo para modernizar tu software?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Conoce nuestras soluciones por suscripción y encuentra la que mejor
                  se adapta a tu empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/marcas">Ver soluciones disponibles</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="btn-outline">
                    <Link to="/contacto">Hablar con un asesor</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogSuscripcion;
