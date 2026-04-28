import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Monitor, Cpu, Zap, Timer, ArrowRight, CheckCircle, Settings } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import blogImage from "@/assets/blog-solidworks-workstation-test.png";

const BlogSolidworksWorkstation = () => {
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
                Pruebas y Rendimiento
              </span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                14 de Abril, 2026
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              SolidWorks + workstation correcta: {" "}
              <span className="text-gradient-brand">prueba de rendimiento con un ensamble que te dirá si tu equipo ya se quedó viejo</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Probamos un mismo ensamble complejo de SolidWorks en diferentes configuraciones de equipo para mostrar en números cuándo es momento de renovar tu workstation.
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
                  alt="Rendimiento SolidWorks workstation pruebas con ensamble complejo"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Intro */}
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  ¿Cuánto tiempo pasas al día esperando que tu computadora responda cuando trabajas en SolidWorks? Unos segundos al abrir un archivo, un minuto al intentar rotar un ensamble, varios minutos más tratando de guardar o reconstruir (Ctrl+Q). 
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  Ese tiempo acumulado tiene un nombre: <strong className="text-foreground">cuello de botella tecnológico</strong>. Para demostrar de una vez por todas el impacto real del hardware en tu productividad, realizamos pruebas de rendimiento exhaustivas enfrentando el mismo ensamble de SolidWorks en distintas computadoras. Aquí te revelamos los números.
                </p>
              </div>

              {/* La Prueba */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Settings size={20} className="text-amber-500" />
                  La anatomía de nuestra prueba de rendimiento
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Para ser justos, no usamos un cubo básico ni un ensamble exagerado de 100,000 piezas que solo usa la industria aeroespacial. Escogimos el <strong className="text-foreground">punto de dolor de la ingeniería promedio</strong>:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Un ensamblaje industrial compuesto por <strong>5,500 componentes</strong> (piezas únicas y repetidas).</li>
                  <li>Múltiples relaciones de posición (mates) complejas y piezas con referencias externas.</li>
                  <li>Configuraciones de visualización en calidad alta (RealView activado en hardware compatible).</li>
                  <li>Software: SolidWorks 2026.</li>
                </ul>
              </div>

              {/* Los Contendientes */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Cpu size={20} className="text-primary" />
                  Los Contendientes: ¿Contra qué estamos midiendo?
                </h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/70">
                        <th className="text-left p-4 font-semibold">Configuración</th>
                        <th className="text-left p-4 font-semibold text-amber-500">PC Tradicional (Gamer/Oficina)</th>
                        <th className="text-left p-4 font-semibold text-primary">Workstation Profesional Base</th>
                        <th className="text-left p-4 font-semibold text-green-500">Workstation Avanzada</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-t border-border">
                        <td className="p-4 font-medium text-foreground">Procesador</td>
                        <td className="p-4">Core i7 de 12va Gen</td>
                        <td className="p-4">Intel Xeon / Core i7 de 14va Gen</td>
                        <td className="p-4">Intel Core i9 de 14va Gen</td>
                      </tr>
                      <tr className="border-t border-border bg-muted/30">
                        <td className="p-4 font-medium text-foreground">RAM</td>
                        <td className="p-4">16 GB DDR4</td>
                        <td className="p-4">32 GB DDR5 ECC</td>
                        <td className="p-4">64 GB DDR5 ECC</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-4 font-medium text-foreground">GPU</td>
                        <td className="p-4">GeForce RTX 3060</td>
                        <td className="p-4">NVIDIA RTX A2000 / 2000 Ada</td>
                        <td className="p-4">NVIDIA RTX 4000 Ada</td>
                      </tr>
                      <tr className="border-t border-border bg-muted/30">
                        <td className="p-4 font-medium text-foreground">Almacenamiento</td>
                        <td className="p-4">SSD PCIe Gen3</td>
                        <td className="p-4">SSD PCIe Gen4 NVMe</td>
                        <td className="p-4">SSD PCIe Gen4 NVMe </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Resultados */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Timer size={20} className="text-primary" />
                  Resultados: Tiempos medidos en operaciones reales
                </h2>
                
                <div className="space-y-6">
                  {/* Test 1 */}
                  <div className="rounded-xl border border-border p-6 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l-xl"></div>
                    <h4 className="font-bold text-lg mb-4">1. Tiempo de apertura del ensamble</h4>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center">
                        <div className="w-1/3 text-sm text-muted-foreground">PC Tradicional</div>
                        <div className="w-2/3 bg-muted rounded-full h-6 overflow-hidden relative">
                          <div className="bg-amber-500 opacity-60 h-full" style={{ width: "100%" }}></div>
                          <span className="absolute inset-y-0 left-3 flex items-center text-xs font-bold text-white">4 min 12 seg</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 text-sm text-muted-foreground">Workstation Base</div>
                        <div className="w-2/3 bg-muted rounded-full h-6 overflow-hidden relative">
                          <div className="bg-primary opacity-80 h-full" style={{ width: "42%" }}></div>
                          <span className="absolute inset-y-0 left-3 flex items-center text-xs font-bold text-white">1 min 45 seg</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 text-sm text-muted-foreground">Workstation Avanzada</div>
                        <div className="w-2/3 bg-muted rounded-full h-6 overflow-hidden relative">
                          <div className="bg-green-500 h-full" style={{ width: "25%" }}></div>
                          <span className="absolute inset-y-0 left-3 flex items-center text-xs font-bold text-white">58 seg</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Test 2 */}
                  <div className="rounded-xl border border-border p-6 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl"></div>
                    <h4 className="font-bold text-lg mb-4">2. Reconstrucción completa (Ctrl+Q)</h4>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center">
                        <div className="w-1/3 text-sm text-muted-foreground">PC Tradicional</div>
                        <div className="w-2/3 bg-muted rounded-full h-6 overflow-hidden relative">
                          <div className="bg-amber-500 opacity-60 h-full" style={{ width: "100%" }}></div>
                          <span className="absolute inset-y-0 left-3 flex items-center text-xs font-bold text-white">52 seg</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 text-sm text-muted-foreground">Workstation Base</div>
                        <div className="w-2/3 bg-muted rounded-full h-6 overflow-hidden relative">
                          <div className="bg-primary opacity-80 h-full" style={{ width: "38%" }}></div>
                          <span className="absolute inset-y-0 left-3 flex items-center text-xs font-bold text-white">19 seg</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/3 text-sm text-muted-foreground">Workstation Avanzada</div>
                        <div className="w-2/3 bg-muted rounded-full h-6 overflow-hidden relative">
                          <div className="bg-green-500 h-full" style={{ width: "23%" }}></div>
                          <span className="absolute inset-y-0 left-3 flex items-center text-xs font-bold text-white">12 seg</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Test 3 */}
                  <div className="rounded-xl border border-border p-6 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-l-xl"></div>
                    <h4 className="font-bold text-lg mb-3">3. Manipulación y Zoom (Frames Por Segundo - FPS)</h4>
                    <p className="text-xs text-muted-foreground mb-4">Más alto es mejor. Por debajo de 30 FPS se percibe "lag". Módulo RealView activo.</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-amber-50/50 rounded-lg border border-amber-200">
                        <div className="text-2xl font-bold text-amber-600">8 - 14 FPS</div>
                        <div className="text-xs text-muted-foreground mt-1">Insoportable, tirones constantes al intentar rotar</div>
                      </div>
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <div className="text-2xl font-bold text-primary">65 - 80 FPS</div>
                        <div className="text-xs text-muted-foreground mt-1">Completamente fluido, experiencia natural</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="text-2xl font-bold text-green-600">120+ FPS</div>
                        <div className="text-xs text-muted-foreground mt-1">Perfecto, margen de sobra para ensambles más masivos</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-primary/5 border border-primary/20 p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">El error de la tarjeta "Gamer":</strong> Usar una RTX de gaming en SolidWorks es engañoso. SolidWorks optimiza su motor gráfico (incluyendo RealView y rendimiento 3D OpenGL avanzado) estrictamente para los drivers de las tarjetas <strong className="text-foreground">NVIDIA Profesionales (certificadas ISV)</strong>. Por eso, una tarjeta gaming más cara puede dar un rendimiento mediocre de 12 FPS, mientras una opción profesional accesible vuela a 65 FPS.
                  </p>
                </div>
              </div>

              {/* ¿Cuándo cambiar? */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-primary" />
                  ¿Es momento de renovar tu workstation?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Si te identificas con 2 o más de las siguientes señales de advertencia en el rendimiento en SolidWorks, tu equipo te está costando dinero:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "El efecto 'café'",
                      desc: "Abres un archivo, le das clic en guardar o reconstruir, y sabes perfectamente que tienes tiempo para ir a servirte un café antes de que la máquina reaccione.",
                    },
                    {
                      title: "Evitas usar RealView o detalles",
                      desc: "Trabajas en modo alámbrico o bajas la calidad de imagen al mínimo constantemente solo para poder rotar el modelo.",
                    },
                    {
                      title: "Crashing y pantallas azules",
                      desc: "SolidWorks se cierra repentinamente (crash) al abrir ensamblajes grandes, tirar renders o correr simulaciones. Esto suele indicar falta de RAM o inestabilidad térmica.",
                    },
                    {
                      title: "Tu PC emita ruido de avión",
                      desc: "Los ventiladores trabajan al 100% de manera constante porque intentar diseñar requiere un esfuerzo para el cual no está térmicamente diseñada tu PC.",
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
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <Monitor size={16} className="text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Conclusión */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Conclusión: El costo oculto del hardware lento
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sumemos el tiempo de la prueba: esperar 4 minutos al abrir, 1 minuto por reconstrucción, múltiples veces al día. Un ingeniero que espera apenas <strong className="text-foreground">20 minutos al día </strong> debido a un rendimiento deficiente de SolidWorks pierde cerca de <strong className="text-foreground">80 horas al año</strong>. Esa es casi dos semanas laborales completas tiradas a la basura, cobradas por la nómina de tu empresa.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Las <strong className="text-foreground">Workstations certificadas para SolidWorks</strong> garantizan que la fluidez acompañe a la creatividad y precisión de la ingeniería.
                </p>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 p-8 text-center"
              >
                <h3 className="text-xl font-bold mb-3">
                  Asegura que tu hardware potencie a SolidWorks
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nos especializamos en Workstations certificadas para ingenieros. Cuéntanos qué tamaño de modelos manejas y te propondremos la workstation perfecta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary">
                    <Link to="/contacto">
                      Cotizar mi Workstation <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="btn-outline">
                    <Link to="/marcas">Explorar nuestra oferta de software</Link>
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

export default BlogSolidworksWorkstation;
