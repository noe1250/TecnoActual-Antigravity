import { motion } from "framer-motion";
import { Check, X, ArrowRight, MessageCircle, Laptop, Globe, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const WHATSAPP_NUMBER = "528181880009";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me interesa información sobre los planes de SketchUp.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const plans = [
    {
        name: "SketchUp Go",
        tagline: "Diseña en cualquier lugar",
        description: "Ideal para modelado rápido y revisión de proyectos en la web o iPad.",
        price: "Suscripción Anual",
        features: [
            "Modelado en la web (SketchUp for Web)",
            "Modelado en iPad (SketchUp for iPad)",
            "Almacenamiento ilimitado en Trimble Connect",
            "Visualización en dispositivos móviles",
            "Soporte estándar",
        ],
        buttonText: "Solicitar Cotización",
        popular: false,
        icon: <Globe className="text-primary" size={32} />,
    },
    {
        name: "SketchUp Pro",
        tagline: "El estándar de la industria",
        description: "La solución completa para profesionales que necesitan potencia y flexibilidad.",
        price: "Suscripción Anual",
        features: [
            "Todo lo incluido en SketchUp Go",
            "SketchUp for Desktop (Windows/Mac)",
            "LayOut (Documentación 2D y planos)",
            "Extension Warehouse (Miles de plugins)",
            "Style Builder (Estilos personalizados)",
            "Visualización en Realidad Aumentada",
        ],
        buttonText: "Solicitar Cotización",
        popular: true,
        icon: <Laptop className="text-secondary" size={32} />,
    },
    {
        name: "SketchUp Studio",
        tagline: "Flujos de trabajo avanzados",
        description: "Para equipos que requieren visualizaciones de alto nivel y análisis de datos.",
        price: "Suscripción Anual",
        features: [
            "Todo lo incluido en SketchUp Pro",
            "V-Ray para Renderizado fotorrealista",
            "Scan Essentials (Nube de puntos)",
            "Revit Importer (Importación directa)",
        ],
        buttonText: "Solicitar Cotización",
        popular: false,
        icon: <Layers className="text-primary" size={32} />,
    },
];

const comparisonData = [
    { feature: "SketchUp para Web", go: true, pro: true, studio: true },
    { feature: "SketchUp para iPad", go: true, pro: true, studio: true },
    { feature: "Trimble Connect (Nube)", go: true, pro: true, studio: true },
    { feature: "Modelado Desktop (Win/Mac)", go: false, pro: true, studio: true },
    { feature: "LayOut (Documentación 2D)", go: false, pro: true, studio: true },
    { feature: "Plugins y Extensiones", go: false, pro: true, studio: true },
    { feature: "Style Builder", go: false, pro: true, studio: true },
    { feature: "V-Ray (Renderizado)", go: false, pro: false, studio: true },
    { feature: "Scan Essentials", go: false, pro: false, studio: true },
    { feature: "Importación de Revit", go: false, pro: false, studio: true },
];

const SketchupPlanes = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <Badge className="mb-4 btn-outline pointer-events-none">SketchUp 2026</Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            Elige el <span className="text-gradient-brand">Plan de SketchUp</span> ideal para ti
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8">
                            Desde el modelado rápido en iPad hasta flujos de trabajo profesionales con renderizado fotorrealista. Tenemos la licencia oficial que tu proyecto necesita.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="btn-primary">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Ver Disponibilidad <ArrowRight className="ml-2" size={18} />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section overflow-hidden">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold">Planes de SketchUp</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex"
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <Badge className="bg-secondary text-secondary-foreground px-4 py-1 text-sm font-bold shadow-lg">
                                            MÁS POPULAR
                                        </Badge>
                                    </div>
                                )}
                                <Card className={`feature-card flex flex-col w-full ${plan.popular ? 'border-secondary shadow-elevated' : 'border-border'}`}>
                                    <CardHeader>
                                        <div className="mb-4">{plan.icon}</div>
                                        <h3 className="text-2xl font-bold leading-none tracking-tight">{plan.name}</h3>
                                        <CardDescription className="text-primary font-medium">{plan.tagline}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
                                        <div className="space-y-4">
                                            <p className="font-bold text-sm text-foreground uppercase tracking-wider">¿Qué incluye?</p>
                                            <ul className="space-y-3">
                                                {plan.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <Check className="text-secondary mt-1 flex-shrink-0" size={16} />
                                                        <span className="text-muted-foreground text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-6">
                                        <Button asChild className={`w-full ${plan.popular ? 'btn-secondary' : 'btn-primary'}`}>
                                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                                {plan.buttonText}
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section bg-muted/30">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Compara las características</h2>
                            <p className="text-muted-foreground">Analiza a detalle cuál es la versión de SketchUp que mejor se adapta a tus necesidades profesionales.</p>
                        </div>

                        <div className="bg-card rounded-xl border border-border shadow-soft overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent">
                                        <TableHead className="w-[40%] font-bold text-foreground">Funcionalidades</TableHead>
                                        <TableHead className="text-center font-bold text-foreground">Go</TableHead>
                                        <TableHead className="text-center font-bold text-foreground">Pro</TableHead>
                                        <TableHead className="text-center font-bold text-foreground">Studio</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {comparisonData.map((item, index) => (
                                        <TableRow key={index} className="hover:bg-muted/50">
                                            <TableCell className="font-medium">{item.feature}</TableCell>
                                            <TableCell className="text-center">
                                                {item.go ? <Check className="mx-auto text-secondary" size={20} /> : <X className="mx-auto text-muted/30" size={20} />}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {item.pro ? <Check className="mx-auto text-secondary" size={20} /> : <X className="mx-auto text-muted/30" size={20} />}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {item.studio ? <Check className="mx-auto text-secondary" size={20} /> : <X className="mx-auto text-muted/30" size={20} />}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Education & Why TecnoActual */}
            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">SketchUp para <span className="text-secondary">Estudiantes y Educadores</span></h2>
                            <p className="text-muted-foreground mb-6">
                                Impulsa tu aprendizaje con las mismas herramientas que utilizan los profesionales. La suscripción EDU ofrece todas las capacidades de SketchUp Studio a un precio especial para el sector académico.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-1.5 rounded-full">
                                        <Zap className="text-primary" size={18} />
                                    </div>
                                    <span>Acceso a SketchUp Pro y LayOut</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-1.5 rounded-full">
                                        <Zap className="text-primary" size={18} />
                                    </div>
                                    <span>V-Ray para renderizado educativo</span>
                                </li>
                            </ul>
                            <Button asChild variant="outline" className="btn-outline border-secondary text-secondary hover:bg-secondary/5">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Solicitar Precio Académico
                                </a>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-dark p-8 md:p-12 rounded-2xl text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">¿Por qué adquirir con TecnoActual?</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white/10 p-2 rounded-lg">
                                            <Check size={20} className="text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Distribuidor Autorizado</h4>
                                            <p className="text-sm text-white/70">Garantizamos licencias 100% legales y oficiales vinculadas a tu cuenta de Trimble.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white/10 p-2 rounded-lg">
                                            <Check size={20} className="text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Asesoría Técnica</h4>
                                            <p className="text-sm text-white/70">Te ayudamos a elegir el plan correcto y te apoyamos en el proceso de instalación.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-white/10 p-2 rounded-lg">
                                            <Check size={20} className="text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Facturación Local</h4>
                                            <p className="text-sm text-white/70">Emitimos facturas válidas en México para todos nuestros servicios y licitaciones.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-16 bg-muted">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            ¿Listo para transformar tus ideas en realidad?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            No esperes más. Obtén hoy mismo tu suscripción de SketchUp y comienza a diseñar con el software más intuitivo del mercado.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="btn-secondary">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Contactar Asesor <MessageCircle className="ml-2" size={20} />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="btn-outline">
                                <Link to="/contacto">Ir a Contacto</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default SketchupPlanes;
