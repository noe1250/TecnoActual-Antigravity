import { motion } from "framer-motion";
import {
    Check, ArrowRight, MessageCircle, Zap, Globe, Star, Laptop, Users,
    Layers, Settings, Box, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import bricscadLogo from "@/assets/bricscad-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import Footer from "@/components/Footer";

import bricscadInterfaceImg from "@/assets/products/bricscad-interface.png";
import bricscadSurveyingImg from "@/assets/products/bricscad-surveying.png";
import bricscadMechanicalImg from "@/assets/products/bricscad-mechanical.jpg";
import bricscadPlantImg from "@/assets/products/bricscad-plant.jpg";
import bricscadConstructionImg from "@/assets/products/bricscad-construction.jpg";
import bricscadArchitectureImg from "@/assets/products/bricscad-architecture.jpg";
import bricscadUrbanImg from "@/assets/products/bricscad-urban.jpg";

import GlobalHeader from "@/components/Header";

const WHATSAPP_NUMBER = "528181880009";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me interesa información sobre las licencias de BricsCAD.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const BricsCADRightContent = () => (
    <>
        <div className="hidden sm:block">
            <img src={bricscadLogo} alt="BricsCAD" className="h-6 md:h-8 w-auto object-contain" />
        </div>
        <Button
            asChild
            size="sm"
            className="bg-[#1E88E5] hover:bg-[#1565C0] text-white font-bold rounded-full text-[10px] md:text-sm px-3 md:px-6 shadow-sm"
        >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1 md:mr-2" size={14} />
                <span className="hidden xs:inline">Contáctanos por</span> WhatsApp
            </a>
        </Button>
    </>
);

/* ─────────────── HERO ─────────────── */
const Hero = () => (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 z-0">
            <img
                src={heroBg}
                alt="Background"
                className="w-full h-full object-cover opacity-5 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-1">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#1E88E5] rounded-full blur-[150px]" />
        </div>

        <div className="container relative z-10 text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-400/30 rounded-full mb-8"
            >
                <span className="text-blue-600 text-xs md:text-sm font-bold tracking-wider uppercase">
                    BRICSCAD EN MÉXICO — DISTRIBUIDOR AUTORIZADO
                </span>
            </motion.div>

            {/* BricsCAD Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="flex justify-center mb-8"
            >
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <img src={bricscadLogo} alt="BricsCAD" className="h-10 md:h-14 w-auto object-contain" />
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-[#080f2a] mb-6 leading-[1.1]"
            >
                La alternativa moderna en <br/>
                <span className="text-[#1E88E5]">CAD 2D y 3D</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
            >
                Archivos DWG nativos, licencias flexibles y un rendimiento superior. BricsCAD
                te ofrece todo lo que conoces en otras plataformas, pero a un mejor costo y sin compromisos forzosos.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
                <Button
                    asChild
                    size="lg"
                    className="bg-[#1E88E5] hover:bg-[#1565C0] text-white font-black px-8 py-7 rounded-full text-lg shadow-xl shadow-[#1e88e533]"
                >
                    <a href="#precios">
                        Ver planes y precios <ArrowRight className="ml-2" size={20} />
                    </a>
                </Button>
                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-slate-200 bg-white hover:bg-slate-50 text-[#080f2a] font-black px-8 py-7 rounded-full text-lg shadow-lg"
                >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        Hablar con un asesor
                    </a>
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
            >
                {[
                    "DWG Nativo 100%",
                    "Licencias Perpetuas y Suscripción",
                    "Aceleración por IA",
                    "Rendimiento optimizado",
                ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-slate-500 font-bold text-xs md:text-sm">
                        <Check className="text-[#1E88E5]" size={16} />
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);


/* ─────────────── FOR YOUR ORGANIZATION ─────────────── */
const OrganizationSection = () => (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container px-4">
            <div className="max-w-4xl mb-16">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">
                    EL FUTURO DEL DISEÑO CAD
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-[#080f2a] mb-6 leading-tight">
                    Por qué cambiar a <br />BricsCAD
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-3xl">
                    No necesitas volver a aprender a diseñar. BricsCAD utiliza comandos familiares e interfaz
                    conocida, permitiendo a los usuarios de otros sistemas ser productivos desde el día uno.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        icon: <Box className="text-blue-600" size={28} />,
                        title: "100% Compatibilidad",
                        desc: "Abre, edita y guarda nativamente en formato .dwg. Trabaja en equipo sin perder fidelidad.",
                    },
                    {
                        icon: <Zap className="text-blue-600" size={28} />,
                        title: "IA Inteligente",
                        desc: "Herramientas de Inteligencia Artificial que automatizan tareas repetitivas y aceleran el diseño.",
                    },
                    {
                        icon: <Layers className="text-blue-600" size={28} />,
                        title: "2D, 3D y BIM",
                        desc: "Una sola plataforma fluida que evoluciona desde delineación 2D hasta modelado avanzado y BIM.",
                    },
                    {
                        icon: <Settings className="text-blue-600" size={28} />,
                        title: "A tu medida",
                        desc: "Opciones de compra flexible: Suscripciones o licencias perpetuas (incluso para red).",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white border border-slate-200 rounded-[24px] p-7 hover:shadow-xl hover:-translate-y-1 transition-all group"
                    >
                        <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                            {item.icon}
                        </div>
                        <h4 className="font-black text-[#080f2a] mb-3 text-lg">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    </section>
);

/* ─────────────── PLATFORM BENEFITS ─────────────── */
const PlatformBenefits = () => {
    const benefits = [
        {
            title: "Diseño Arquitectónico y BIM",
            description: "Visualiza tus proyectos con precisión milimétrica. Desarrolla modelos conceptuales y conviértelos en modelos BIM completos dentro del mismo entorno familiar y utilizando archivos DWG nativos.",
            image: bricscadArchitectureImg,
            reversed: false,
        },
        {
            title: "Proyectos a Gran Escala y Urbanismo",
            description: "Rendimiento incomparable para manejar modelos masivos, desde planificación urbana hasta desarrollo de infraestructura. Navega y edita grandes conjuntos de datos sin comprometer la velocidad.",
            image: bricscadUrbanImg,
            reversed: true,
        }
    ];

    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="container px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[#1E88E5] font-bold text-sm tracking-widest uppercase mb-4 block">
                        BONDADES DE LA PLATAFORMA
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#080f2a] mb-6 leading-tight">
                        Por qué BricsCAD es superior
                    </h2>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                        Herramientas avanzadas que impulsan la productividad técnica y creativa en todas las fases del diseño.
                    </p>
                </div>

                <div className="space-y-24 max-w-7xl mx-auto">
                    {benefits.map((benefit, i) => (
                        <div key={i} className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 ${benefit.reversed ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2">
                                <div className="rounded-[30px] overflow-hidden shadow-2xl relative">
                                    <div className="absolute inset-0 bg-[#080f2a]/5 mix-blend-multiply pointer-events-none" />
                                    <img src={benefit.image} alt={benefit.title} className="w-full h-auto object-cover" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-black text-[#080f2a] leading-tight">
                                    {benefit.title}
                                </h3>
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─────────────── APPLICATIONS GALLERY ─────────────── */
const ApplicationsSection = () => {
    const applications = [
        {
            title: "Topografía y Obra Civil",
            description: "Creación de modelos digitales de terreno (MDT) y procesamiento inteligente de nubes de puntos masivas de manera nativa y fluida.",
            image: bricscadInterfaceImg,
        },
        {
            title: "Construcción y Topografía de Campo",
            description: "Alta precisión e interoperabilidad con equipos de medición (estaciones totales), facilitando levantamientos rápidos y as-built garantizados.",
            image: bricscadSurveyingImg,
        },
        {
            title: "Ingeniería Mecánica",
            description: "Diseño de ensamblajes complejos, chapa metálica y modelado paramétrico avanzado en un entorno de trabajo unificado 2D/3D.",
            image: bricscadMechanicalImg,
        },
        {
            title: "Diseño de Plantas Industriales",
            description: "Modelado 3D inteligente de tuberías (Piping), estructuras alámbricas industriales y equipos especializados con librerías estándar.",
            image: bricscadPlantImg,
        },
        {
            title: "Arquitectura y Flujos BIM",
            description: "Transición fluida del 2D geométrico al BIM 3D inteligente. Clasificación automática e importación/exportación nativa openBIM (IFC).",
            image: bricscadConstructionImg,
        }
    ];

    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="container px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#1E88E5] font-bold text-sm tracking-widest uppercase mb-4 block">
                        APLICACIONES POR INDUSTRIA
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#080f2a] mb-6 leading-tight">
                        Potencia para cualquier disciplina
                    </h2>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                        Desde diseño arquitectónico hasta ingeniería mecánica compleja y topografía avanzada. 
                        BricsCAD es la herramienta definitiva sin importar el giro de tu empresa.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {applications.map((app, i) => (
                        <div key={i} className={`group rounded-[24px] overflow-hidden border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300 ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}>
                            <div className="relative h-64 overflow-hidden bg-slate-100">
                                <img 
                                    src={app.image} 
                                    alt={app.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080f2a]/90 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-xl md:text-2xl font-black text-white mb-2">{app.title}</h3>
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    {app.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─────────────── PRICING ─────────────── */
const PricingSection = () => {
    const plans = [
        {
            name: "BricsCAD Lite",
            subtitle: "La alternativa a AutoCAD LT",
            icon: <Settings className="text-blue-400" size={28} />,
            features: [
                "Diseño y delineación 2D de alta calidad",
                "Total compatibilidad DWG, DXF y DWT",
                "Ejecución de scripts LISP de terceros",
                "Herramientas impulsadas por IA (Blockify, CopyGuided)",
                "Interfaz familiar e importación de menús CUI",
            ],
            cta: "Cotizar Lite",
            popular: false,
        },
        {
            name: "BricsCAD Pro",
            subtitle: "Diseño 2D, modelado 3D y API",
            icon: <Award className="text-[#1E88E5]" size={28} />,
            features: [
                "Todo lo incluido en BricsCAD Lite",
                "Modelado y creación de sólidos 3D (ACIS)",
                "Motor de renderizado y visualización de materiales",
                "Acceso total a la API (BRX, .NET)",
                "Plataforma base para módulos BIM y Mecánica",
                "Cientos de aplicaciones de terceros",
            ],
            cta: "Cotizar Pro",
            popular: true,
        },
        {
            name: "BricsCAD Ultimate",
            subtitle: "BIM, Mecánica y más",
            icon: <Layers className="text-blue-400" size={28} />,
            features: [
                "Todo lo incluido en BricsCAD Pro",
                "BricsCAD BIM para arquitectura y construcción",
                "BricsCAD Mechanical para diseño de ensamblajes",
                "Sistemas estructurales y MEP",
                "Flujo de trabajo continuo entre disciplinas",
            ],
            cta: "Cotizar Ultimate",
            popular: false,
        },
    ];

    return (
        <section id="precios" className="py-24 bg-[#080f2a]">
            <div className="container px-4">
                <div className="max-w-4xl mb-16">
                    <span className="text-[#1E88E5] font-bold text-sm tracking-widest uppercase mb-4 block">
                        NIVELES DE PRODUCTO
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                        Elige la versión ideal de BricsCAD
                    </h2>
                    <p className="text-slate-400 font-medium max-w-2xl leading-relaxed">
                        Actualiza tu licencias con suscripciones flexibles o adquiere licencias
                        perpetuas. Te guiamos para elegir lo que mejor se adapte a tu presupuesto.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div key={i} whileHover={{ y: -10 }} className="relative">
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-[#1E88E5] text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-[#080f2a] uppercase tracking-tighter">
                                        MÁS POPULAR
                                    </div>
                                </div>
                            )}
                            <Card
                                className={`rounded-[30px] overflow-hidden border-2 h-full transition-all duration-300 bg-[#1a3d8f] ${plan.popular
                                    ? "border-[#1E88E5] shadow-2xl shadow-[#1e88e515]"
                                    : "border-white/10 shadow-sm hover:shadow-xl hover:border-white/20"
                                    }`}
                            >
                                <CardContent className="p-8 md:p-10 text-left h-full flex flex-col">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.popular ? "bg-[#1E88E5]/15" : "bg-white/10"}`}>
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-1">{plan.name}</h3>
                                    <span className="text-sm text-slate-400 font-medium mb-8">{plan.subtitle}</span>

                                    <div className="space-y-4 mb-10 flex-1">
                                        {plan.features.map((feature, j) => (
                                            <div key={j} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <Check
                                                        className={plan.popular ? "text-[#1E88E5]" : "text-blue-400"}
                                                        size={14}
                                                    />
                                                </div>
                                                <span className="text-sm font-medium text-slate-300 leading-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        asChild
                                        className={`w-full py-7 rounded-full font-black text-lg transition-all ${plan.popular
                                            ? "bg-[#1E88E5] hover:bg-[#1565C0] text-white shadow-lg"
                                            : "bg-transparent border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                                            }`}
                                    >
                                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                            {plan.cta}
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-12 text-slate-500 font-medium text-xs max-w-3xl mx-auto text-center leading-relaxed italic">
                    Pregunta a nuestro asesor por las opciones de licencias de red, y los esquemas perpetuos vs suscripción.
                </p>
            </div>
        </section>
    );
};


/* ─────────────── FOOTER CTA ─────────────── */
const FooterCTA = () => (
    <section className="py-20 bg-white">
        <div className="container px-4">
            <div className="bg-gradient-to-r from-[#080f2a] to-[#1a3d8f] rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />

                <div className="relative z-10 max-w-2xl mx-auto">
                    <img src={bricscadLogo} alt="BricsCAD" className="h-10 w-auto mx-auto mb-8 brightness-0 invert object-contain" />
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        El primer paso hacia  <br />un CAD{" "}
                        <span className="text-yellow-400">más rápido y accesible</span>
                    </h2>
                    <p className="text-blue-100 font-medium text-lg mb-10">
                        Tenemos un asesor listo para explicarte cómo funciona BricsCAD y enviar tu cotización formal.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#25D366] hover:bg-[#22C35E] text-white font-black px-10 py-8 rounded-full text-xl shadow-xl shadow-[#25d36633]"
                    >
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-3" size={24} /> Cotizar por WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

/* ─────────────── PAGE ─────────────── */
const BricsCADPlanes = () => {
    return (
        <div className="min-h-screen bg-white">
            <GlobalHeader rightContent={<BricsCADRightContent />} />
            <main>
                <Hero />
                <OrganizationSection />
                <PlatformBenefits />
                <ApplicationsSection />
                <PricingSection />
                <FooterCTA />
            </main>
            <Footer />
        </div>
    );
};

export default BricsCADPlanes;
