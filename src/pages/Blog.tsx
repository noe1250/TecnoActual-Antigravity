import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [

  {
    id: 3,
    title: "¿Por qué cambiar a software por suscripción?",
    excerpt: "El modelo tradicional de comprar licencias perpetuas está quedando atrás. Te explicamos las ventajas del software por suscripción: costos predecibles mensuales o anuales, siempre tienes la última versión, soporte técnico incluido y más.",
    date: "25 de Octubre, 2025",
    category: "Artículos",
    color: "primary",
    ctaLink: "/marcas",
    ctaLabel: "Ver nuestras soluciones por suscripción",
  },
  {
    id: 4,
    title: "Bienvenido al nuevo TecnoActual",
    excerpt: "Después de 20 años en el negocio de TI, hemos decidido especializarnos en lo que mejor sabemos hacer: software empresarial por suscripción. Nuestro objetivo es ayudarte a tener siempre las mejores herramientas, en sus versiones más actuales, con el mejor servicio.",
    date: "1 de Octubre, 2025",
    category: "Noticias",
    color: "secondary",
    ctaLink: "/contacto",
    ctaLabel: "Contáctanos",
  },
];

const Blog = () => {
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
              Blog y <span className="text-gradient-brand">Noticias</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Mantente al día con las últimas novedades, promociones y consejos sobre software empresarial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Artículos Recientes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="feature-card h-full flex flex-col overflow-hidden">
                  <div className={`h-3 ${post.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.color === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-secondary/10 text-secondary'
                        }`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="flex-1 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <Link
                      to={post.ctaLink}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
                    >
                      {post.ctaLabel} <ArrowRight size={15} />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Quieres recibir nuestras promociones?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contáctanos para recibir información sobre ofertas especiales y novedades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline">
                <Link to="/marcas">Ver todas las soluciones</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
