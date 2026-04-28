import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, CheckCircle, Smartphone, Cloud, TrendingUp, Calculator, ArrowRight, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const BlogSolidworksSuscripcion2026 = () => {
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
                Estrategia y TI
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                21 de Abril, 2026
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              SolidWorks por suscripción en 2026:{" "}
              <span className="text-gradient-brand">lo que nadie te contó antes de renovar tu licencia</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Analizamos los cambios más importantes del modelo por suscripción de SolidWorks, sus ventajas frente a las licencias perpetuas y cómo calcular si realmente te conviene en tu empresa.
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
              className="space-y-10 text-foreground"
            >
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  El panorama del diseño industrial y la ingeniería ha cambiado radicalmente en los últimos años. Lo que antes era una simple herramienta instalada en una estación de trabajo, hoy es un ecosistema interconectado. Dassault Systèmes ha consolidado su transición hacia el modelo de suscripción, y para este 2026, hay detalles cruciales que toda empresa en México debe conocer antes de firmar su renovación.
                </p>
              </div>

              {/* Nueva Realidad */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Cloud size={24} className="text-primary" />
                  La nueva realidad: Cloud Services mandatorios
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A partir de este año, la suscripción de SolidWorks no es solo "acceso al software". Ahora incluye de forma nativa los <strong className="text-foreground">Cloud Services de 3DEXPERIENCE</strong>. Esto significa que cada licencia viene con capacidades de almacenamiento en la nube, gestión de datos (PDM ligero) y herramientas de colaboración compartida sin costo adicional aparente.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-xl border border-border">
                    <h4 className="font-bold text-primary mb-2">Colaboración Segura</h4>
                    <p className="text-sm text-muted-foreground">Comparte diseños 3D con clientes y proveedores mediante un enlace, sin que ellos necesiten instalar SolidWorks.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl border border-border">
                    <h4 className="font-bold text-primary mb-2">Gestión de Revisiones</h4>
                    <p className="text-sm text-muted-foreground">Olvídate de archivos con nombres como "Final_V2_ahora_si.sldprt". La nube gestiona el historial de cambios.</p>
                  </div>
                </div>
              </div>

              {/* Ventajas vs Perpetuo */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp size={24} className="text-primary" />
                  Ventajas frente a las Licencias Perpetuas
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Muchos dueños de empresas aún se aferran al modelo perpetuo bajo la premisa de "ser dueños de la licencia". Sin embargo, en 2026, el costo de oportunidad de no actualizarse es más alto que nunca:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Cero inversión inicial masiva",
                      desc: "La suscripción se traduce en un gasto operativo (OPEX) deducible, en lugar de un activo de capital (CAPEX) que se deprecia.",
                      icon: Calculator
                    },
                    {
                      title: "Soporte técnico prioritario",
                      desc: "Los suscriptores tienen acceso directo a la red de expertos de TecnoActual y Dassault para resolver problemas críticos en minutos.",
                      icon: ShieldCheck
                    },
                    {
                      title: "Actualizaciones automáticas",
                      desc: "Siempre trabajas con la última versión, asegurando compatibilidad total con los archivos de tus clientes y proveedores.",
                      icon: CheckCircle
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cálculo de ROI */}
              <div className="rounded-2xl bg-gradient-to-br from-[#080f2a] to-[#1a2b5a] p-8 text-white">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                  <Calculator size={24} className="text-secondary" />
                  ¿Realmente te conviene? Haz el cálculo
                </h2>
                <p className="text-blue-100/80 mb-6">
                  Para saber si es momento de migrar, considera estos tres factores de retorno de inversión:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-secondary rounded-full p-1 text-[#080f2a]"><CheckCircle size={14} /></div>
                    <span><strong>Tiempo de TI:</strong> Reducción del 40% en tiempo de gestión de licencias y servidores locales de archivos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-secondary rounded-full p-1 text-[#080f2a]"><CheckCircle size={14} /></div>
                    <span><strong>Escalabilidad:</strong> Capacidad de añadir licencias solo por el tiempo que duren tus proyectos especiales.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-secondary rounded-full p-1 text-[#080f2a]"><CheckCircle size={14} /></div>
                    <span><strong>Continuidad:</strong> Acceso a herramientas de renderizado y simulación en la nube que antes requerirían hardware de $5,000 USD.</span>
                  </li>
                </ul>
              </div>

              {/* Conclusión */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Renovar tu licencia de SolidWorks en 2026 no debe ser un trámite administrativo automático. Es el momento perfecto para evaluar si tu infraestructura de ingeniería está lista para el siguiente nivel de productividad. El modelo de suscripción ya no es una opción de renta, es un pase de entrada a la ingeniería interconectada.
                </p>
              </div>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-3">
                  ¿Tienes dudas sobre tu renovación?
                </h3>
                <p className="text-muted-foreground mb-6">
                  En TecnoActual analizamos tu situación actual sin costo y te ayudamos a elegir el esquema que más beneficie tu flujo de caja y productividad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/contacto">Quiero una asesoría gratuita</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="btn-outline">
                    <Link to="/solidworks">Ver planes de SolidWorks</Link>
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

export default BlogSolidworksSuscripcion2026;
