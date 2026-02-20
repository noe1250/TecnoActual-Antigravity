import { motion } from "framer-motion";
import { Check, X, ArrowRight, MessageCircle, Laptop, Globe, Layers, Zap, Star, ShieldCheck } from "lucide-react";
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
        description: "Ideal para modelado rápido y revisión de proyectos en web o iPad.",
        price: "$119 USD*",
        period: "/ año",
        features: [
            "Modelado en la web (SketchUp for Web)",
            "Modelado en iPad (SketchUp for iPad)",
            "Almacenamiento ilimitado en Trimble Connect",
            "Visores para iOS y Android",
        ],
        buttonText: "Cotizar Go",
        popular: false,
        icon: <Globe className="text-blue-500" size={32} />,
        color: "border-blue-200",
        bg: "bg-blue-50/50"
    },
    {
        name: "SketchUp Pro",
        tagline: "El estándar de la industria",
        description: "La solución completa para profesionales que necesitan potencia y flexibilidad.",
        price: "$299 USD*",
        period: "/ año",
        features: [
            "Todo lo de Go, más:",
            "SketchUp for Desktop (Windows/Mac)",
            "LayOut (Documentación 2D)",
            "Extension Warehouse (Plugins)",
            "Style Builder",
            "Soporte Premium",
        ],
        buttonText: "Cotizar Pro",
        popular: true,
        icon: <Laptop className="text-secondary" size={32} />,
        color: "border-secondary",
        bg: "bg-background"
    },
    {
        name: "SketchUp Studio",
        tagline: "Flujos de trabajo avanzados",
        description: "Para equipos que requieren visualizaciones fotorrealistas y análisis.",
        price: "$699 USD*",
        period: "/ año",
        features: [
            "Todo lo de Pro, más:",
            "V-Ray (Renderizado)",
            "Scan Essentials (Nube de puntos)",
            "Revit Importer",
            "Análisis energético avanzado",
        ],
        buttonText: "Cotizar Studio",
        popular: false,
        icon: <Layers className="text-indigo-500" size={32} />,
        color: "border-indigo-200",
        bg: "bg-indigo-50/50"
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
            <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 opacity-50" />
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        {/* Authorized Reseller Badge (Placeholder Style) */}
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm mb-8 mx-auto">
                            <ShieldCheck size={18} className="text-blue-600" />
                            <span className="text-sm font-bold text-gray-700 tracking-wide uppercase">SketchUp Authorized Reseller</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            Elige el <span className="text-secondary">Plan Perfecto</span> <br /> para tu Creatividad
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                            Desde el modelado conceptual hasta la construcción real. Somos tu socio local certificado para licencias originales y soporte técnico.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild size="lg" className="btn-primary shadow-lg hover:shadow-xl transition-all">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Hablar con un Experto <MessageCircle className="ml-2" size={18} />
                                </a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="btn-outline bg-white/50 backdrop-blur-sm">
                                <Link to="/marcas">
                                    Ver Catálogo Completo
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 bg-muted/20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes diseñados para ti</h2>
                        <p className="text-muted-foreground">Precios transparentes y facturación local en México.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex"
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                                        <Badge className="bg-gradient-brand text-white px-4 py-1.5 text-sm font-bold shadow-lg border-0 tracking-wide">
                                            MÁS POPULAR
                                        </Badge>
                                    </div>
                                )}
                                <Card className={`flex flex-col w-full overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.popular ? 'border-2 border-secondary shadow-elevated scale-105 z-10' : `border border-border hover:-translate-y-1 ${plan.color}`} ${plan.bg}`}>
                                    <CardHeader className="pb-4">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                                                {plan.icon}
                                            </div>
                                            {plan.popular && <Star className="text-secondary fill-secondary/20" size={24} />}
                                        </div>
                                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                                        <CardDescription className="text-foreground/80 font-medium mt-2">{plan.tagline}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <div className="mb-6 pb-6 border-b border-gray-200/50">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                                                <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-2">*Precios estimados, sujetos a cambio.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Características principales</p>
                                            <ul className="space-y-3">
                                                {plan.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm">
                                                        <Check className={`mt-0.5 flex-shrink-0 ${plan.popular ? 'text-secondary' : 'text-primary'}`} size={16} />
                                                        <span className="text-foreground/90">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-4 pb-8">
                                        <Button asChild className={`w-full font-bold shadow-md transition-all ${plan.popular ? 'btn-secondary text-lg py-6' : 'btn-primary'}`}>
                                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                                {plan.buttonText} <ArrowRight className="ml-2" size={18} />
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
            <section className="py-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Comparativa detallada</h2>
                            <p className="text-muted-foreground">Analiza a detalle las capacidades de cada versión.</p>
                        </div>

                        <div className="bg-card rounded-xl border border-border shadow-soft overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent bg-muted/50">
                                        <TableHead className="w-[40%] font-bold text-foreground py-4 pl-6">Funcionalidades</TableHead>
                                        <TableHead className="text-center font-bold text-foreground">Go</TableHead>
                                        <TableHead className="text-center font-bold text-secondary text-lg">Pro</TableHead>
                                        <TableHead className="text-center font-bold text-foreground">Studio</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {comparisonData.map((item, index) => (
                                        <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                                            <TableCell className="font-medium pl-6 py-4">{item.feature}</TableCell>
                                            <TableCell className="text-center">
                                                {item.go ? <Check className="mx-auto text-primary" size={20} /> : <X className="mx-auto text-muted/20" size={20} />}
                                            </TableCell>
                                            <TableCell className="text-center bg-secondary/5 border-x border-secondary/10">
                                                {item.pro ? <Check className="mx-auto text-secondary" size={22} strokeWidth={3} /> : <X className="mx-auto text-muted/20" size={20} />}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {item.studio ? <Check className="mx-auto text-primary" size={20} /> : <X className="mx-auto text-muted/20" size={20} />}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-8 bg-muted/30 py-3 rounded-lg border border-border/50">
                            ¿Tienes dudas sobre qué plan elegir?{" "}
                            <Link to="/contacto" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors font-medium">
                                Contáctanos y te asesoramos sin costo
                            </Link>
                            .
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Education & Why TecnoActual */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wide mb-4">
                                Sector Académico
                            </div>
                            <h2 className="text-3xl font-bold mb-6">SketchUp para <span className="text-gradient-brand">Estudiantes y Educadores</span></h2>
                            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                                Impulsa tu aprendizaje con las mismas herramientas que utilizan los profesionales. La suscripción EDU ofrece todas las capacidades de SketchUp Studio a un precio especial.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="bg-white p-2 rounded-full shadow-sm">
                                        <Zap className="text-secondary" size={20} />
                                    </div>
                                    <span className="font-medium">Acceso total a SketchUp Pro y LayOut</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-white p-2 rounded-full shadow-sm">
                                        <Zap className="text-secondary" size={20} />
                                    </div>
                                    <span className="font-medium">V-Ray para renderizado educativo</span>
                                </li>
                            </ul>
                            <Button asChild variant="outline" size="lg" className="btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white transition-all">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Solicitar Precio Académico
                                </a>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#1B3A57] to-[#0F1E2E] p-8 md:p-12 rounded-3xl text-white relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <ShieldCheck className="text-secondary" size={32} />
                                    ¿Por qué elegir TecnoActual?
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex gap-4 group">
                                        <div className="mt-1 bg-white/10 p-2 rounded-xl group-hover:bg-secondary/20 transition-colors">
                                            <Check size={20} className="text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1 text-lg">Distribuidor Autorizado</h4>
                                            <p className="text-sm text-white/70 leading-relaxed">Garantía de licencias 100% legales, oficiales y vinculadas directamente a tu cuenta de Trimble.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 group">
                                        <div className="mt-1 bg-white/10 p-2 rounded-xl group-hover:bg-secondary/20 transition-colors">
                                            <Check size={20} className="text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1 text-lg">Asesoría Técnica Local</h4>
                                            <p className="text-sm text-white/70 leading-relaxed">Hablamos tu idioma. Te ayudamos a instalar, configurar y resolver cualquier duda técnica.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 group">
                                        <div className="mt-1 bg-white/10 p-2 rounded-xl group-hover:bg-secondary/20 transition-colors">
                                            <Check size={20} className="text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1 text-lg">Facturación Mexicana</h4>
                                            <p className="text-sm text-white/70 leading-relaxed">Comprobantes fiscales válidos en México (CFDI) para todos nuestros servicios.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-white">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-6 tracking-tight">
                            ¿Listo para crear sin límites?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10">
                            Únete a millones de profesionales que diseñan con SketchUp.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="btn-primary text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Empezar Ahora <ArrowRight className="ml-2" size={20} />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default SketchupPlanes;
