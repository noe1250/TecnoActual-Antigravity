import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Shield, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import blogImage from "@/assets/blog-sketchup-legal.png";

const BlogSketchupLegal = () => {
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
                Guías
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                31 de Marzo, 2026
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              SketchUp Pro en México: la guía definitiva para{" "}
              <span className="text-gradient-brand">dejar atrás las licencias pirata</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Descubre por qué cada vez más despachos de arquitectura en México migran a SketchUp Pro 
              legal y cómo una licencia por suscripción puede ahorrarte dinero, auditorías y dolores de cabeza.
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
              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={blogImage}
                  alt="Arquitectos trabajando con SketchUp Pro en un despacho moderno en México"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Intro */}
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  En México, el uso de software sin licencia sigue siendo una realidad en muchos 
                  despachos de arquitectura y empresas de diseño. Según datos del BSA (Business Software Alliance), 
                  <strong className="text-foreground"> el 49% del software instalado en México no tiene licencia</strong>. 
                  Esto no solo pone en riesgo legal a las empresas, sino que también las deja vulnerables a 
                  malware, sin soporte técnico y sin acceso a las últimas funcionalidades.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  SketchUp Pro se ha convertido en la herramienta de modelado 3D favorita en la industria 
                  de la arquitectura, el diseño de interiores y la construcción. Pero, ¿realmente vale la pena 
                  invertir en una licencia legal? La respuesta corta es: <strong className="text-foreground">absolutamente sí</strong>.
                </p>
              </div>

              {/* Los riesgos */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-amber-500" />
                  Los riesgos reales de usar SketchUp pirata
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Además de las implicaciones éticas, usar software sin licencia en tu despacho o empresa 
                  tiene consecuencias tangibles que pueden afectar tu negocio directamente:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Multas y sanciones legales",
                      desc: "El IMPI (Instituto Mexicano de la Propiedad Industrial) puede imponer multas de hasta 40,000 días de salario mínimo por uso de software sin licencia. Además, las auditorías sorpresa son cada vez más frecuentes.",
                    },
                    {
                      title: "Vulnerabilidades de seguridad",
                      desc: "Las versiones pirateadas con frecuencia incluyen malware, spyware o ransomware oculto que puede comprometer los datos de tus proyectos y los de tus clientes.",
                    },
                    {
                      title: "Sin actualizaciones ni soporte",
                      desc: "Te quedas atrapado en versiones obsoletas que no son compatibles con archivos de clientes, presentan errores no corregidos y no aprovechan nuevas funcionalidades.",
                    },
                    {
                      title: "Pérdida de credibilidad profesional",
                      desc: "Trabajar con herramientas legales genera confianza con clientes corporativos y contratos gubernamentales que exigen cumplimiento normativo.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200/60"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <AlertTriangle size={16} className="text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Ventajas de la licencia legal */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Shield size={20} className="text-primary" />
                  ¿Qué incluye una licencia legal de SketchUp Pro por suscripción?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cuando adquieres SketchUp Pro a través de un distribuidor autorizado como TecnoActual, 
                  obtienes mucho más que solo el software:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "SketchUp Pro Desktop + Web",
                      desc: "Acceso completo a la aplicación de escritorio para Windows/Mac y a la versión web para trabajar desde cualquier navegador, ideal para trabajo remoto.",
                    },
                    {
                      title: "Trimble Connect incluido",
                      desc: "Almacenamiento en la nube ilimitado para tus proyectos. Comparte modelos con colaboradores y clientes directamente desde un enlace.",
                    },
                    {
                      title: "Actualizaciones automáticas",
                      desc: "Siempre tendrás la versión más reciente con las últimas herramientas, mejoras de rendimiento y correcciones de seguridad.",
                    },
                    {
                      title: "Soporte técnico en español",
                      desc: "A través de TecnoActual tienes acceso a soporte en tu idioma, con asesores que conocen tu industria y tus necesidades.",
                    },
                    {
                      title: "Factura fiscal mexicana (CFDI)",
                      desc: "Factura 100% deducible de impuestos. Emitimos CFDI 4.0 válido para tu contabilidad en México.",
                    },
                    {
                      title: "Extensiones y plugins premium",
                      desc: "Acceso al Extension Warehouse con miles de complementos que amplían las capacidades de SketchUp según tu especialidad.",
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

              {/* Comparativa */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Licencia pirata vs. suscripción legal: la comparativa real
                </h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/70">
                        <th className="text-left p-4 font-semibold">Aspecto</th>
                        <th className="text-left p-4 font-semibold text-red-500">Pirata</th>
                        <th className="text-left p-4 font-semibold text-primary">Suscripción legal</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-t border-border">
                        <td className="p-4 font-medium text-foreground">Costo inicial</td>
                        <td className="p-4">$0 (aparentemente)</td>
                        <td className="p-4">Pago anual predecible</td>
                      </tr>
                      <tr className="border-t border-border bg-muted/30">
                        <td className="p-4 font-medium text-foreground">Actualizaciones</td>
                        <td className="p-4">Ninguna</td>
                        <td className="p-4">Automáticas e incluidas</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-4 font-medium text-foreground">Soporte técnico</td>
                        <td className="p-4">Inexistente</td>
                        <td className="p-4">En español, personalizado</td>
                      </tr>
                      <tr className="border-t border-border bg-muted/30">
                        <td className="p-4 font-medium text-foreground">Riesgo legal</td>
                        <td className="p-4">Alto (multas IMPI)</td>
                        <td className="p-4">Cero</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-4 font-medium text-foreground">Seguridad</td>
                        <td className="p-4">Malware probable</td>
                        <td className="p-4">100% seguro</td>
                      </tr>
                      <tr className="border-t border-border bg-muted/30">
                        <td className="p-4 font-medium text-foreground">Factura deducible</td>
                        <td className="p-4">No</td>
                        <td className="p-4">Sí, CFDI 4.0</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-4 font-medium text-foreground">Nube y colaboración</td>
                        <td className="p-4">No disponible</td>
                        <td className="p-4">Trimble Connect incluido</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Proceso */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  ¿Cómo migrar a SketchUp Pro legal con TecnoActual?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  El proceso es mucho más sencillo de lo que imaginas. En TecnoActual te acompañamos en cada paso:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Contacto inicial",
                      desc: "Escríbenos por WhatsApp o formulario. Un asesor experto evalúa tus necesidades: ¿cuántos usuarios? ¿qué versión necesitas? ¿tienes requisitos especiales?",
                    },
                    {
                      step: "02",
                      title: "Cotización personalizada",
                      desc: "Recibes una cotización formal con precio en pesos mexicanos, IVA desglosado y opciones de pago. Sin letra chiquita.",
                    },
                    {
                      step: "03",
                      title: "Pago y activación",
                      desc: "Realizas el pago por transferencia o depósito. Tu licencia se activa en muy poco tiempo y recibes tu factura CFDI inmediatamente.",
                    },
                    {
                      step: "04",
                      title: "Soporte continuo",
                      desc: "No te dejamos solo. Durante todo el año tienes acceso a soporte técnico, ayuda con la instalación y asesoría personalizada.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-5 rounded-xl bg-muted/50 border border-border"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-black text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="rounded-2xl bg-muted/50 border border-border p-6">
                <p className="text-muted-foreground leading-relaxed italic">
                  "Cada peso que inviertes en software legal es un peso que te ahorras en riesgos, 
                  multas y tiempo perdido. Migrar a SketchUp Pro por suscripción no es un gasto, 
                  es una inversión en la tranquilidad y productividad de tu despacho."
                </p>
                <p className="mt-4 font-semibold text-sm">— Equipo TecnoActual</p>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-3">
                  ¿Listo para trabajar con SketchUp Pro legal?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Cotiza tu licencia hoy mismo. Precios en pesos mexicanos, factura deducible 
                  y soporte en español garantizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/sketchup-planes">
                      Ver planes de SketchUp <ArrowRight size={16} className="ml-1" />
                    </Link>
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

export default BlogSketchupLegal;
