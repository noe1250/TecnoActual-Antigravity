import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, CheckCircle, Smartphone, Cloud, Globe, HardDrive, ShieldCheck, ClipboardCheck, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import blogImage from "@/assets/blog-arquitectura-checklist.png";

const BlogChecklistArquitectura = () => {
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
                Guías Técnicas
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                28 de Abril, 2026
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              ¿Tu despacho está listo?{" "}
              <span className="text-gradient-brand">Checklist técnico para migrar tu estudio al software por suscripción</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Una lista práctica para evaluar si tu oficina está preparada para trabajar 100% con software empresarial por suscripción: infraestructura, internet, equipos y licencias legales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-elevated border border-border"
          >
            <img 
              src={blogImage} 
              alt="Estudio de arquitectura moderno" 
              className="w-full h-auto aspect-video object-cover"
            />
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
              transition={{ delay: 0.3 }}
              className="space-y-10 text-foreground"
            >
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  La transición de licencias perpetuas a modelos de suscripción no es solo un cambio contable; es un cambio tecnológico que requiere una base sólida. Muchos estudios de arquitectura en México intentan dar el salto sin revisar sus "cimientos digitales", lo que resulta en frustración y baja productividad. En TecnoActual hemos diseñado este checklist técnico para que sepas exactamente qué necesitas antes de migrar.
                </p>
              </div>

              {/* Conexión a Internet */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Globe size={24} className="text-primary" />
                  1. Conexión a Internet: El cordón umbilical
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El software por suscripción (como SketchUp, BricsCAD o Adobe) requiere validaciones periódicas y, en muchos casos, servicios de nube activos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span><strong>Ancho de banda:</strong> Mínimo 50 Mbps simétricos para despachos de 5 personas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span><strong>Estabilidad:</strong> Latencia (ping) menor a 30ms para trabajar con archivos en la nube sin retrasos.</span>
                  </li>
                </ul>
              </div>

              {/* Hardware */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <HardDrive size={24} className="text-primary" />
                  2. Hardware: ¿Tus equipos dan la talla?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las versiones 2026 de los softwares líderes están optimizadas para hardware moderno. Trabajar con suscripciones en equipos obsoletos es desperdiciar el potencial de la herramienta.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-5 bg-muted/50 rounded-2xl border border-border">
                    <h4 className="font-bold text-primary mb-2">Memoria RAM</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">No menos de 16GB. Para proyectos complejos de renderizado, 32GB es el estándar actual en 2026.</p>
                  </div>
                  <div className="p-5 bg-muted/50 rounded-2xl border border-border">
                    <h4 className="font-bold text-primary mb-2">Almacenamiento SSD</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">Discos NVMe para el sistema y el caché del software. Mejora los tiempos de apertura hasta en un 300%.</p>
                  </div>
                </div>
              </div>

              {/* Gestión de Usuarios */}
              <div className="rounded-2xl bg-gradient-to-br from-[#080f2a] to-[#1a2b5a] p-8 text-white">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                  <Smartphone size={24} className="text-secondary" />
                  3. Gestión de Identidades (Single Sign-On)
                </h2>
                <p className="text-blue-100/80 mb-6">
                  A diferencia de las llaves USB físicas, las suscripciones se ligan a correos electrónicos corporativos.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-secondary rounded-full p-1 text-[#080f2a]"><CheckCircle size={14} /></div>
                    <span><strong>Cuentas Propias:</strong> Asegúrate de que cada arquitecto tenga un correo @tuempresa.com. No uses correos genéricos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-secondary rounded-full p-1 text-[#080f2a]"><CheckCircle size={14} /></div>
                    <span><strong>Portabilidad:</strong> Capacita a tu equipo para "liberar" licencias al cambiar de equipo o trabajar desde casa.</span>
                  </li>
                </ul>
              </div>

              {/* Legalidad y Cumplimiento */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck size={24} className="text-primary" />
                  4. Legalidad y Cumplimiento
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Migrar a suscripción es la forma más rápida de limpiar tu historial de software. Las auditorías en México son cada vez más frecuentes y costosas.
                </p>
                <div className="flex gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                  <ClipboardCheck size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-1">Inventario de Software</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Haz un barrido de tus equipos y elimina versiones crackeadas o "parches" antes de instalar las versiones originales por suscripción para evitar conflictos en el registro de Windows.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusión */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-muted-foreground leading-relaxed">
                  El software por suscripción te da agilidad, pero requiere responsabilidad técnica. Si cumples con estos 4 puntos, tu migración será transparente y tu despacho comenzará a gozar de las ventajas de la tecnología siempre actualizada.
                </p>
              </div>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-card border border-border p-8 text-center shadow-elevated"
              >
                <h3 className="text-2xl font-bold mb-3">
                  ¿Necesitas ayuda con el diagnóstico?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  En TecnoActual realizamos diagnósticos gratuitos de infraestructura para despachos que buscan migrar a esquemas de suscripción. Asegura tu inversión hoy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/contacto">Solicitar Diagnóstico Gratuito</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="btn-outline">
                    <Link to="/marcas">Explorar Soluciones</Link>
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

export default BlogChecklistArquitectura;
