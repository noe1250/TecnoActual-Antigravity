import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Monitor, Cpu, Zap, Timer, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import blogImage from "@/assets/blog-workstation-render.png";

const BlogWorkstationRender = () => {
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
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                Comparativas
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                31 de Marzo, 2026
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              El error que frena tus renders:{" "}
              <span className="text-gradient-brand">así se ve un proyecto cuando tu workstation sí está a la altura</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compara paso a paso el rendimiento real entre una PC de oficina y una workstation profesional 
              optimizada para SketchUp y SolidWorks, con tiempos de render medidos en un caso real.
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
                  alt="Workstation profesional para diseño 3D y renders con monitores mostrando proyectos CAD"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Intro */}
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Has pasado semanas modelando un proyecto arquitectónico en SketchUp. Los detalles están 
                  perfectos, los materiales aplicados, la iluminación configurada. Le das clic a "Render" 
                  y... <strong className="text-foreground">tu computadora se congela durante horas</strong>. 
                  El ventilador suena como turbina, no puedes hacer nada más y al final el resultado sale 
                  granulado, con artefactos y colores incorrectos.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  Este escenario es más común de lo que piensas, y la causa casi siempre es la misma: 
                  <strong className="text-foreground"> estás usando hardware diseñado para tareas de oficina 
                  en flujos de trabajo profesionales de diseño 3D</strong>. Aquí te mostramos la diferencia real.
                </p>
              </div>

              {/* El problema */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Monitor size={20} className="text-amber-500" />
                  ¿Por qué una PC de oficina no sirve para diseño 3D?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Las computadoras de oficina están diseñadas para navegación web, hojas de cálculo y 
                  documentos. Sus componentes (procesador, tarjeta gráfica, memoria RAM, almacenamiento) 
                  están optimizados para bajo consumo energético y costo, no para rendimiento sostenido 
                  bajo cargas pesadas. Veamos las diferencias clave:
                </p>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/70">
                        <th className="text-left p-4 font-semibold">Componente</th>
                        <th className="text-left p-4 font-semibold text-amber-500">PC de oficina</th>
                        <th className="text-left p-4 font-semibold text-primary">Workstation profesional</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-t border-border">
                        <td className="p-4 font-medium text-foreground">Procesador</td>
                        <td className="p-4">Intel Core i5 (6 núcleos)</td>
                        <td className="p-4">Intel Xeon / Core i9 (16+ núcleos)</td>
                      </tr>
                      <tr className="border-t border-border bg-muted/30">
                        <td className="p-4 font-medium text-foreground">Tarjeta gráfica</td>
                        <td className="p-4">Intel UHD integrada</td>
                        <td className="p-4">NVIDIA RTX A2000/A4000 o superior</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-4 font-medium text-foreground">RAM</td>
                        <td className="p-4">8-16 GB DDR4</td>
                        <td className="p-4">32-128 GB DDR5 ECC</td>
                      </tr>
                      <tr className="border-t border-border bg-muted/30">
                        <td className="p-4 font-medium text-foreground">Almacenamiento</td>
                        <td className="p-4">SSD 256 GB SATA</td>
                        <td className="p-4">SSD 1 TB NVMe PCIe Gen4</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-4 font-medium text-foreground">Certificaciones</td>
                        <td className="p-4">Ninguna</td>
                        <td className="p-4">ISV Certified (SolidWorks, SketchUp, etc.)</td>
                      </tr>
                      <tr className="border-t border-border bg-muted/30">
                        <td className="p-4 font-medium text-foreground">Diseño térmico</td>
                        <td className="p-4">Básico, se recalienta</td>
                        <td className="p-4">Refrigeración avanzada para uso 24/7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Caso real */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Timer size={20} className="text-primary" />
                  Caso real: tiempos de render comparados
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Para esta prueba utilizamos un proyecto arquitectónico típico: una residencia de 250 m² 
                  modelada en SketchUp Pro con materiales PBR, iluminación natural y vegetación detallada. 
                  El render se realizó con V-Ray a resolución 4K (3840x2160 px):
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="rounded-xl border-2 border-amber-200 bg-amber-50/50 p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                      <Monitor size={24} className="text-amber-600" />
                    </div>
                    <h4 className="font-bold text-lg mb-1">PC de oficina</h4>
                    <p className="text-sm text-muted-foreground mb-4">Core i5 / 16 GB / Intel UHD</p>
                    <div className="text-4xl font-black text-amber-600 mb-2">4h 23min</div>
                    <p className="text-xs text-muted-foreground">Temperatura máx: 98°C (throttling)</p>
                  </div>
                  <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                      <Cpu size={24} className="text-primary" />
                    </div>
                    <h4 className="font-bold text-lg mb-1">Workstation profesional</h4>
                    <p className="text-sm text-muted-foreground mb-4">Core i9 / 64 GB / RTX A4000</p>
                    <div className="text-4xl font-black text-primary mb-2">18 min</div>
                    <p className="text-xs text-muted-foreground">Temperatura máx: 72°C (estable)</p>
                  </div>
                </div>

                <div className="rounded-xl bg-primary/5 border border-primary/20 p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Resultado:</strong> La workstation completó el mismo 
                    render <strong className="text-foreground">14.6× más rápido</strong>, manteniendo temperaturas 
                    seguras y permitiendo seguir trabajando en otras tareas simultáneamente. La PC de oficina 
                    entró en throttling térmico a los 15 minutos, reduciendo su rendimiento dramáticamente.
                  </p>
                </div>
              </div>

              {/* SolidWorks comparison */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-primary" />
                  En SolidWorks la diferencia es aún más crítica
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  SolidWorks es más exigente que SketchUp en cuanto a recursos. Un ensamblaje complejo 
                  con más de 500 piezas, simulación de esfuerzos (FEA) y renderizado fotorrealista con 
                  Visualize puede ser literalmente imposible de ejecutar en una PC de oficina convencional.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Ensamblajes grandes",
                      desc: "Un ensamblaje de 1,000+ piezas puede tardar 5-10 minutos en abrir en una PC de oficina. En una workstation con GPU ISV-certified, tarda segundos y rota en tiempo real sin lag.",
                    },
                    {
                      title: "Simulación FEA",
                      desc: "Un análisis de esfuerzos que tarda 3 horas en una PC convencional puede completarse en 25 minutos con un procesador multi-core y RAM ECC suficiente.",
                    },
                    {
                      title: "Renderizado con Visualize",
                      desc: "SOLIDWORKS Visualize aprovecha la GPU para renderizado en tiempo real. Sin una tarjeta NVIDIA profesional, el render por CPU puede ser 20-50× más lento.",
                    },
                    {
                      title: "Estabilidad bajo carga",
                      desc: "Las workstations están diseñadas para funcionar 24/7 bajo carga completa. Las PCs de oficina pueden experimentar crashes, pantallas azules y pérdida de datos bajo estrés prolongado.",
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

              {/* Marcas recomendadas */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  ¿Qué marcas recomendamos?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  En TecnoActual trabajamos con las marcas líderes en workstations profesionales, 
                  cada una con certificaciones ISV para SketchUp, SolidWorks y BricsCAD:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      brand: "HP",
                      series: "HP Z Series",
                      desc: "La línea más popular en ingeniería y arquitectura. Modelos Z2, Z4 y Z6 con múltiples configuraciones.",
                    },
                    {
                      brand: "Dell",
                      series: "Dell Precision",
                      desc: "Workstations torre y portátiles con configuración a medida. Precision 3680, 5860 y móviles.",
                    },
                    {
                      brand: "Lenovo",
                      series: "Lenovo ThinkStation",
                      desc: "Excelente relación precio-rendimiento. Series P3, P5 y P620 con opciones AMD Threadripper.",
                    },
                  ].map((ws, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-xl border border-border p-5 text-center hover:shadow-lg transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <Cpu size={18} className="text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-1">{ws.brand}</h4>
                      <p className="text-sm font-medium text-primary mb-2">{ws.series}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{ws.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Conclusión */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Conclusión: la herramienta correcta para el trabajo correcto
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Una workstation profesional no es un lujo, es una <strong className="text-foreground">inversión 
                  directa en productividad</strong>. El tiempo que pierdes esperando renders, lidiando con 
                  crashes y reiniciando tu computadora tiene un costo real que, a lo largo de un año, 
                  supera por mucho la diferencia de precio entre una PC de oficina y una workstation certificada.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Si trabajas con SketchUp, SolidWorks o BricsCAD, invertir en el hardware correcto 
                  no solo mejora tu experiencia de trabajo — <strong className="text-foreground">te hace más 
                  competitivo y rentable</strong>.
                </p>
              </div>

              {/* Quote */}
              <div className="rounded-2xl bg-muted/50 border border-border p-6">
                <p className="text-muted-foreground leading-relaxed italic">
                  "Hemos visto despachos que duplican su capacidad de proyectos simplemente al migrar 
                  de PCs de oficina a workstations certificadas. No es magia — es tener la herramienta 
                  correcta para el trabajo que haces todos los días."
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
                  ¿Necesitas una workstation para tu equipo de diseño?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Te asesoramos para encontrar la configuración perfecta según tu software, 
                  volumen de trabajo y presupuesto. Cotización sin compromiso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/contacto">
                      Cotizar workstation <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="btn-outline">
                    <Link to="/marcas">Ver soluciones de software</Link>
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

export default BlogWorkstationRender;
