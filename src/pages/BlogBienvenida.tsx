import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Star, Users, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const pilares = [
  {
    icon: Star,
    title: "Software siempre actualizado",
    desc: "Nos aseguramos de que tengas siempre la versión más reciente de cada herramienta, sin costos de actualización adicionales.",
  },
  {
    icon: Users,
    title: "Servicio personalizado",
    desc: "No somos una tienda en línea: somos asesores. Te acompañamos desde la elección hasta la implementación y más allá.",
  },
  {
    icon: Layers,
    title: "Portafolio especializado",
    desc: "Nos enfocamos en software de diseño, ingeniería y productividad empresarial: las herramientas que realmente mueven negocios.",
  },
];

const BlogBienvenida = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-16 md:py-20">
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
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                Noticias
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                1 de Octubre, 2025
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Bienvenido al nuevo{" "}
              <span className="text-gradient-brand">TecnoActual</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Después de 20 años en el negocio de TI, hemos decidido dar un paso importante
              y reinventarnos para servirte mejor. Te contamos qué cambió y por qué.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-10 text-foreground"
            >
              {/* Intro */}
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Hace más de dos décadas comenzamos como una empresa generalista de
                  tecnología, comercializando hardware y software de todo tipo. Con el
                  tiempo, el mercado evolucionó, la tecnología se especializó y quedó
                  claro que la mejor manera de crear valor real para nuestros clientes
                  era enfocarnos en lo que verdaderamente sabemos hacer.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  Hoy, el nuevo TecnoActual nace con una misión clara: <strong className="text-foreground">ser el socio de software
                  empresarial más confiable de México</strong>. No vendemos de todo; vendemos
                  lo que funciona, lo que está actualizado y lo que respalda con servicio real.
                </p>
              </div>

              {/* ¿Qué cambió? */}
              <div>
                <h2 className="text-2xl font-bold mb-6">¿Qué cambió exactamente?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  El cambio más importante es nuestro enfoque. Pasamos de ser un distribuidor
                  generalista a convertimos en especialistas en <strong className="text-foreground">software empresarial
                  por suscripción</strong>. Esto nos permite:
                </p>
                <div className="space-y-4">
                  {pilares.map((pilar, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                      className="flex gap-4 p-5 rounded-xl bg-muted/50 border border-border"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center">
                        <pilar.icon size={18} className="text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{pilar.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{pilar.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Nuestro portafolio */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Nuestro portafolio actual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hoy contamos con soluciones líderes en su categoría, entre ellas:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                  <li>
                    <strong className="text-foreground">SketchUp</strong> — La herramienta de modelado 3D más popular para arquitectura y diseño.
                  </li>
                  <li>
                    <strong className="text-foreground">SOLIDWORKS</strong> — Software de diseño mecánico e ingeniería industrial de clase mundial.
                  </li>
                  <li>
                    <strong className="text-foreground">BricsCAD</strong> — La alternativa más potente y accesible a AutoCAD, con todas sus funciones y más.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Y seguimos creciendo. En los próximos meses estaremos anunciando nuevas
                  marcas y soluciones que complementarán nuestro catálogo.
                </p>
              </div>

              {/* Un mensaje personal */}
              <div className="rounded-2xl bg-muted/50 border border-border p-6">
                <p className="text-muted-foreground leading-relaxed italic">
                  "Hemos trabajado con cientos de empresas a lo largo de estos años y el
                  aprendizaje más valioso es que el mejor software del mundo no sirve de
                  nada sin el mejor servicio. Ese es nuestro compromiso: estar contigo
                  antes, durante y después de la venta."
                </p>
                <p className="mt-4 font-semibold text-sm">— Equipo TecnoActual</p>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-3">
                  ¿Quieres conocer todo lo que TecnoActual puede ofrecerte?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explora nuestras soluciones o ponte en contacto con nuestro equipo.
                  Estamos aquí para ayudarte.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/marcas">Ver todas las soluciones</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="btn-outline">
                    <Link to="/contacto">Contáctanos</Link>
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

export default BlogBienvenida;
