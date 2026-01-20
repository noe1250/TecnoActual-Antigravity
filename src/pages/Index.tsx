import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Headphones, RefreshCw, Users, Calendar, Shield, TrendingUp, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import teamAbout from "@/assets/team-about.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const WHATSAPP_NUMBER = "528181880009";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me interesa información sobre sus soluciones de software.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Software y Tecnología{" "}
              <span className="text-gradient-brand">Siempre Actual</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Soluciones por suscripción que mantienen tu negocio competitivo con las mejores herramientas, siempre actualizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-primary text-lg px-8">
                <Link to="/marcas">
                  Ver Marcas <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" className="btn-secondary text-lg px-8">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={20} />
                  Contáctanos
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-elevated"
              >
                <img
                  src={teamAbout}
                  alt="Equipo TecnoActual"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>

              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Más de 20 años ayudando a empresas a crecer
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Durante más de dos décadas hemos ayudado a nuestros clientes con sus necesidades de TI: hardware, software y soluciones de infraestructura. Hemos sido testigos de cómo el mercado evoluciona constantemente.
                  </p>
                  <p>
                    Hoy, el mercado ha cambiado y los modelos de consumo también. Las empresas ya no quieren invertir grandes sumas en licencias que se vuelven obsoletas. Ahora buscan suscripciones y modelos de renta que les permitan tener siempre las herramientas más actuales sin preocupaciones.
                  </p>
                  <p className="text-foreground font-medium">
                    Por eso, en TecnoActual nos hemos especializado en software de última generación por suscripción. Queremos que tu empresa tenga acceso a las mejores herramientas, siempre actualizadas, para mantenerse competitiva en un mercado que no se detiene.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              No solo vendemos licencias, aportamos valor
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Users,
                title: "Consultoría Comercial",
                description: "Te ayudamos a elegir el software que realmente necesitas.",
              },
              {
                icon: Headphones,
                title: "Instalación y Configuración",
                description: "Configuramos todo para que funcione perfectamente.",
              },
              {
                icon: RefreshCw,
                title: "Siempre Actualizado",
                description: "Siempre con la última versión sin costos extra.",
              },
              {
                icon: Users,
                title: "Capacitación",
                description: "Aprovecha al máximo tu inversión con entrenamiento.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="feature-card h-full text-center">
                  <CardHeader>
                    <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Subscription Model */}
      <section className="section bg-foreground text-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué elegir el modelo de suscripción?
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Calendar,
                  title: "Inversión predecible",
                  description: "Pagos mensuales sin sorpresas.",
                },
                {
                  icon: RefreshCw,
                  title: "Siempre actualizado",
                  description: "Acceso automático a nuevas versiones.",
                },
                {
                  icon: Shield,
                  title: "Soporte incluido",
                  description: "Asistencia técnica cuando la necesites.",
                },
                {
                  icon: TrendingUp,
                  title: "Escalable",
                  description: "Ajusta licencias según tus necesidades.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-6 rounded-xl bg-background/5 border border-background/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-background/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default Index;
