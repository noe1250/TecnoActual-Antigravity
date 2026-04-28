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
import logoHeader from "@/assets/logo-header.png";
import solidworksLogo from "@/assets/solidworks-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import Footer from "@/components/Footer";

import GlobalHeader from "@/components/Header";

const WHATSAPP_NUMBER = "528181880009";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me interesa información sobre las licencias de SOLIDWORKS.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const SolidworksRightContent = () => (
    <>
        <div className="hidden sm:block">
            <img src={solidworksLogo} alt="SOLIDWORKS" className="h-6 md:h-8 w-auto" />
        </div>
        <Button
            asChild
            size="sm"
            className="bg-[#F2A900] hover:bg-[#D99800] text-white font-bold rounded-full text-[10px] md:text-sm px-3 md:px-6 shadow-sm"
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
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#F2A900] rounded-full blur-[150px]" />
        </div>

        <div className="container relative z-10 text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-400/30 rounded-full mb-8"
            >
                <span className="text-blue-600 text-xs md:text-sm font-bold tracking-wider uppercase">
                    SOLIDWORKS EN MÉXICO — COMERCIALIZACIÓN DE LICENCIAS
                </span>
            </motion.div>

            {/* SolidWorks Logo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="flex justify-center mb-8"
            >
                <img src={solidworksLogo} alt="SOLIDWORKS" className="h-14 md:h-20 w-auto" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-[#080f2a] mb-6 leading-[1.1]"
            >
                Del <span className="text-[#F2A900]">diseño</span> a la{" "}
                <span className="text-[#F2A900]">manufactura,</span>
                <br />
                en un solo lugar
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
            >
                Licencias originales de SOLIDWORKS con factura mexicana, soporte en español,
                activación inmediata y un asesor personal que te acompaña desde el día uno.
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
                    className="bg-[#F2A900] hover:bg-[#D99800] text-black font-black px-8 py-7 rounded-full text-lg shadow-xl shadow-[#f2a90022]"
                >
                    <a href="#precios">
                        Ver precios en MXN <ArrowRight className="ml-2" size={20} />
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
                    "Pago referenciado",
                    "Factura deducible",
                    "Soporte en español",
                    "Activación en muy poco tiempo",
                ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-slate-500 font-bold text-xs md:text-sm">
                        <Check className="text-[#F2A900]" size={16} />
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);


/* ─────────────── FOR YOUR ORGANIZATION ─────────────── */
const OrganizationSection = () => (
    <section className="py-24 bg-white">
        <div className="container px-4">
            <div className="max-w-4xl mb-16">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">
                    UNA HERRAMIENTA PARA TODA LA ORGANIZACIÓN
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-[#080f2a] mb-6 leading-tight">
                    Una herramienta para <br />toda la organización
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-3xl">
                    SOLIDWORKS no es solo una herramienta de diseño; es una plataforma integral que une a
                    todos los departamentos de tu empresa: ingeniería, manufactura, ventas y dirección.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        icon: <Box className="text-blue-600" size={28} />,
                        title: "Diseño de Producto",
                        desc: "Agiliza el desarrollo de producto con herramientas de modelado 3D de clase mundial.",
                    },
                    {
                        icon: <Settings className="text-blue-600" size={28} />,
                        title: "Manufactura",
                        desc: "Conecta el diseño directamente con la línea de producción y reduce errores costosos.",
                    },
                    {
                        icon: <Users className="text-blue-600" size={28} />,
                        title: "Colaboración",
                        desc: "Comparte proyectos entre equipos con control de versiones y flujos de trabajo aprobados.",
                    },
                    {
                        icon: <Layers className="text-blue-600" size={28} />,
                        title: "Simulación",
                        desc: "Valida tu diseño virtualmente antes de fabricar y reduce prototipos físicos.",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-gray-50 border border-gray-100 rounded-[24px] p-7 hover:shadow-lg hover:border-blue-100 transition-all group"
                    >
                        <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                            {item.icon}
                        </div>
                        <h4 className="font-black text-[#080f2a] mb-3 text-lg">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Button
                    asChild
                    size="lg"
                    className="bg-[#F2A900] hover:bg-[#D99800] text-black font-black px-10 py-7 rounded-full text-lg shadow-xl shadow-[#f2a90022]"
                >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2" size={20} /> Solicitar demostración
                    </a>
                </Button>
            </div>
        </div>
    </section>
);

/* ─────────────── PRICING ─────────────── */
const PricingSection = () => {
    const plans = [
        {
            name: "Standard",
            subtitle: "Diseño mecánico 3D esencial",
            icon: <Settings className="text-blue-400" size={28} />,
            features: [
                "Modelado 3D sólido — piezas, ensamblajes y planos de producción",
                "Herramientas para lámina metálica y soldaduras",
                "Diseño de superficies complejas",
                "SolidWorks CAM Standard — integración CAM básica",
                "Exportación DXF/DWG para manufactura",
            ],
            cta: "Cotizar Standard",
            popular: false,
        },
        {
            name: "Professional",
            subtitle: "Productividad y colaboración avanzada",
            icon: <Award className="text-[#F2A900]" size={28} />,
            features: [
                "Todo lo incluido en Standard",
                "Toolbox — biblioteca de tornillería y elementos normalizados",
                "PDM Standard — control de versiones, revisiones y flujo de trabajo",
                "Visualize Standard — renderizado fotorrealista",
                "Estimación de costos de manufactura integrada",
                "eDrawings Professional para colaboración externa",
            ],
            cta: "Cotizar Professional",
            popular: true,
        },
        {
            name: "Premium",
            subtitle: "Simulación, análisis y compatibilidad total",
            icon: <Layers className="text-blue-400" size={28} />,
            features: [
                "Todo lo incluido en Professional",
                "Simulación estándar — análisis de esfuerzos (FEA) y temperatura",
                "Motion Analysis — simulación de movimiento de ensamblajes",
                "Ruteo de cables, tuberías e hidráulica en 3D",
                "Compatibilidad de archivos con CATIA",
            ],
            cta: "Cotizar Premium",
            popular: false,
        },
    ];

    return (
        <section id="precios" className="py-24 bg-[#080f2a]">
            <div className="container px-4">
                <div className="max-w-4xl mb-16">
                    <span className="text-[#F2A900] font-bold text-sm tracking-widest uppercase mb-4 block">
                        NIVELES DE PRODUCTO
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                        Elige el SolidWorks que necesitas
                    </h2>
                    <p className="text-slate-400 font-medium max-w-2xl leading-relaxed">
                        Cada nivel incluye todo lo del nivel anterior. Te asesoramos sin
                        compromiso para encontrar la opción correcta para tu equipo.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div key={i} whileHover={{ y: -10 }} className="relative">
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-[#F2A900] text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-[#080f2a] uppercase tracking-tighter">
                                        MÁS POPULAR
                                    </div>
                                </div>
                            )}
                            <Card
                                className={`rounded-[30px] overflow-hidden border-2 h-full transition-all duration-300 bg-[#1a3d8f] ${plan.popular
                                    ? "border-[#F2A900] shadow-2xl shadow-[#f2a90015]"
                                    : "border-white/10 shadow-sm hover:shadow-xl hover:border-white/20"
                                    }`}
                            >
                                <CardContent className="p-8 md:p-10 text-left h-full flex flex-col">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.popular ? "bg-[#F2A900]/15" : "bg-white/10"}`}>
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-1">{plan.name}</h3>
                                    <span className="text-sm text-slate-400 font-medium mb-8">{plan.subtitle}</span>

                                    <div className="space-y-4 mb-10 flex-1">
                                        {plan.features.map((feature, j) => (
                                            <div key={j} className="flex items-start gap-3">
                                                <div className="mt-1 flex-shrink-0">
                                                    <Zap
                                                        className={plan.popular ? "text-[#F2A900]" : "text-blue-400"}
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
                                            ? "bg-[#F2A900] hover:bg-[#D99800] text-black shadow-lg"
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
                    Los precios se cotizan en USD + IVA. La factura puede emitirse en pesos mexicanos o en dólares según la moneda y fecha de pago acordada.
                </p>
            </div>
        </section>
    );
};

/* ─────────────── SPECIALIZED MODULES ─────────────── */
const ModulesSection = () => (
    <section className="py-24 bg-white">
        <div className="container px-4">
            <div className="mb-16 text-center">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">
                    MÓDULOS ESPECIALIZADOS
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-[#080f2a] mb-6 leading-tight">
                    Amplía tus capacidades <br />con módulos especializados
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                    Extiende SOLIDWORKS con módulos adicionales para cubrir necesidades específicas de tu industria.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    {
                        icon: <Zap className="text-yellow-500" size={28} />,
                        title: "Electrical",
                        desc: "Diseño de sistemas eléctricos, esquemáticos y cableado de máquinas integrado con el modelo 3D.",
                        tag: "Eléctrica",
                    },
                    {
                        icon: <Settings className="text-blue-600" size={28} />,
                        title: "CAM",
                        desc: "Programación CNC integrada directamente en el entorno de SOLIDWORKS para mecanizado de piezas.",
                        tag: "Manufactura",
                    },
                    {
                        icon: <Layers className="text-green-600" size={28} />,
                        title: "Inspection",
                        desc: "Automatiza la creación de planos de inspección y reportes de calidad directamente desde los modelos.",
                        tag: "Calidad",
                    },
                    {
                        icon: <Globe className="text-purple-600" size={28} />,
                        title: "Visualize",
                        desc: "Renderizado fotorrealista y animaciones de alta calidad para presentaciones y marketing.",
                        tag: "Visualización",
                    },
                    {
                        icon: <Box className="text-red-500" size={28} />,
                        title: "Plastics",
                        desc: "Simulación del proceso de inyección de plásticos para optimizar moldes y evitar defectos.",
                        tag: "Inyección",
                    },
                    {
                        icon: <Award className="text-orange-500" size={28} />,
                        title: "Composer",
                        desc: "Crea manuales técnicos, animaciones de ensamble y documentación interactiva de productos.",
                        tag: "Documentación",
                    },
                ].map((mod, i) => (
                    <div
                        key={i}
                        className="border border-gray-100 rounded-[24px] p-7 hover:shadow-lg hover:border-blue-100 transition-all group bg-white"
                    >
                        <div className="flex items-start justify-between mb-5">
                            <div className="bg-gray-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                {mod.icon}
                            </div>
                            <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
                                {mod.tag}
                            </span>
                        </div>
                        <h4 className="font-black text-[#080f2a] mb-3 text-xl">SOLIDWORKS {mod.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{mod.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ─────────────── BENEFITS ─────────────── */
const BenefitsSection = () => (
    <section className="py-24 bg-[#080f2a] text-white">
        <div className="container px-4">
            <div className="mb-20">
                <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-4 block">
                    ¿POR QUÉ TECNOACTUAL?
                </span>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    Licencia oficial más <br />
                    respaldo real en México
                </h2>
                <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-2xl">
                    Más allá de la venta, somos tu socio tecnológico con soporte técnico, capacitación y
                    acompañamiento personalizado para que saques el máximo provecho de SOLIDWORKS.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {[
                    {
                        title: "Soporte local en español",
                        desc: "Conexión remota y ayuda personalizada vía WhatsApp, llamada o videollamada por expertos en SOLIDWORKS.",
                    },
                    {
                        title: "Factura mexicana",
                        desc: "Emitimos CFDI 4.0 válida y deducible de impuestos. Somos una empresa legalmente constituida en México.",
                    },
                    {
                        title: "Activación express",
                        desc: "Tu licencia queda activa en muy poco tiempo una vez confirmado el pago.",
                    },
                ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:bg-white/10 transition-colors">
                        <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                            <Check className="text-blue-400" size={20} />
                        </div>
                        <h4 className="text-xl font-black mb-3">{item.title}</h4>
                        <p className="text-slate-400 font-medium leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                        icon: <Laptop className="text-blue-400" size={32} />,
                        title: "Factura Fiscal Mexicana",
                        desc: "Factura XML y PDF deducible 100% de impuestos en tu contabilidad.",
                    },
                    {
                        icon: <MessageCircle className="text-blue-400" size={32} />,
                        title: "Asesor personal",
                        desc: "Olvídate de los bots; te asignamos un asesor que te ayuda por WhatsApp o llamada.",
                    },
                    {
                        icon: <Star className="text-blue-400" size={32} />,
                        title: "Capacitación especializada",
                        desc: "Cursos de SOLIDWORKS para empresas y personas. Del modelado básico hasta simulación avanzada.",
                    },
                ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:bg-white/10 transition-colors">
                        <div className="mb-6">{item.icon}</div>
                        <h4 className="text-xl font-black mb-3">{item.title}</h4>
                        <p className="text-slate-400 font-medium leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ─────────────── PROCESS STEPS ─────────────── */
const ProcessSection = () => (
    <section className="py-24 bg-white">
        <div className="container px-4">
            <div className="text-center mb-16">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">
                    PROCESO DE COMPRA
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-[#080f2a] mb-6">
                    Del primer contacto a tu <br />licencia activa en días
                </h2>
                <p className="text-slate-600 font-medium max-w-2xl mx-auto">
                    Nuestro proceso es simple, rápido y transparente. Sin trámites complicados ni esperas innecesarias.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[
                    {
                        step: "01",
                        title: "Contacto",
                        desc: "Nos escribes por WhatsApp o formulario describiendo tus necesidades.",
                    },
                    {
                        step: "02",
                        title: "Asesoría",
                        desc: "Un asesor experto en SOLIDWORKS te recomienda la solución ideal.",
                    },
                    {
                        step: "03",
                        title: "Cotización",
                        desc: "Recibes una cotización formal con precios en MXN e IVA incluido.",
                    },
                    {
                        step: "04",
                        title: "Activación",
                        desc: "Realizas el pago y en muy poco tiempo tu licencia está activa.",
                    },
                ].map((s, i) => (
                    <div key={i} className="text-center group">
                        <div className="w-16 h-16 bg-[#F2A900] text-black rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg group-hover:shadow-[#f2a90044] transition-shadow">
                            {s.step}
                        </div>
                        <h4 className="font-black text-[#080f2a] mb-3 text-lg">{s.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ─────────────── FAQ ─────────────── */
const faqsLeft = [
    {
        q: "¿Qué pasa si no renuevo mi licencia antes de que venza?",
        a: "Si tu licencia vence sin renovar, deja de funcionar. Para reactivarla deberás cubrir el costo de renovación más un cargo adicional conocido como back late — un recargo por renovación tardía cuyo monto depende del tiempo que haya pasado desde el vencimiento. Entre más tiempo, mayor el cargo. Por eso te avisamos con 30 a 60 días de anticipación: para que nunca llegues a ese punto.",
    },
    {
        q: "¿Qué son los Cloud Services y por qué aparecen en los nuevos artículos?",
        a: "Cloud Services es el componente estándar que Dassault Systèmes ha integrado en todos los nuevos números de parte de SolidWorks, reemplazando al antiguo \"Package\" que ya está descontinuado. Si ves un código de producto que incluye Cloud Services, es la versión actual vigente. Este componente activa la plataforma 3D Experience, la gestión de licencias en la nube y los servicios de actualización continua. Todos los artículos con nuevos códigos ya lo traen integrado — no es un cargo opcional, es parte de la licencia actual.",
    },
    {
        q: "¿Puedo mover una licencia autónoma a otro equipo?",
        a: "Sí, siempre que tu licencia tenga el mantenimiento activo. El proceso consiste en desactivarla en el equipo actual y activarla en el nuevo. Si el equipo fue robado o dañado, también se puede gestionar la reactivación — pero requiere soporte vigente. Sin mantenimiento activo no es posible abrir tickets ni recibir atención técnica de ningún tipo.",
    },
    {
        q: "¿En qué se diferencia una licencia autónoma de una de red?",
        a: "La autónoma se activa en un solo equipo a la vez. La de red se gestiona desde un servidor y permite que varios usuarios compartan licencias simultáneamente: si tienes 3 seats, 3 personas pueden trabajar al mismo tiempo desde distintos equipos. Las licencias de red requieren un nodo de red que se adquiere una sola vez.",
    },
    {
        q: "¿Qué incluye el mantenimiento anual de una licencia perpetua?",
        a: "El mantenimiento incluye: actualizaciones a la versión más reciente, soporte técnico para dudas de software y comandos, posibilidad de mover la licencia a otro equipo, y reactivación en caso de robo o falla del equipo. Sin mantenimiento activo no es posible levantar tickets ni recibir atención técnica.",
    },
    {
        q: "¿Puedo tener licencias autónomas y de red al mismo tiempo?",
        a: "Sí. Si ya tienes un nodo de red, puedes agregar licencias autónomas. También es posible hacer conversiones entre modalidades, y si deseas renovar solo una parte de tus licencias de red, también existe esa opción. Platícanos tu situación y lo analizamos.",
    },
];

const faqsRight = [
    {
        q: "¿Los precios son en pesos o en dólares?",
        a: "Las licencias se cotizan en dólares americanos (USD). La factura puede emitirse en pesos mexicanos o en dólares, según la moneda y la fecha de pago acordada. En todos los casos incluimos IVA desglosado y emitimos CFDI válido en México.",
    },
    {
        q: "¿Qué es la plataforma 3D Experience y para quién es?",
        a: "3D Experience es la plataforma en la nube de Dassault Systèmes que permite colaborar y gestionar proyectos desde cualquier dispositivo. Se vende por roles y requiere una evaluación previa — no todos los perfiles son candidatos. Agenda una sesión con nosotros para analizar si aplica para tu empresa.",
    },
    {
        q: "¿Soy autodidacta y prefiero capacitarme en línea. ¿Tienen algo para mí?",
        a: "Sí. Contamos con acceso a una plataforma de cursos en línea con contenido especializado en SolidWorks, CAM, simulación y más. Es una opción flexible para quienes prefieren aprender a su propio ritmo. Contáctanos y armamos una cotización según lo que necesitas.",
    },
    {
        q: "¿Ofrecen capacitación grupal o para equipos?",
        a: "Sí, contamos con cursos presenciales y remotos para grupos de 6 a 8 personas, y webinars especializados. Los instructores pueden atenderte en Monterrey, Ciudad Juárez, Ciudad de México o Chihuahua. Pregúntanos por el calendario disponible.",
    },
    {
        q: "¿Cuánto tarda en activarse una licencia nueva?",
        a: "Una vez confirmado el pago, la licencia queda activa en un plazo de 2 a 4 días hábiles. En licencias de red puede requerirse una actualización en el servidor para reconocer las nuevas licencias — te acompañamos en ese proceso sin costo adicional.",
    },
];

const FAQColumn = ({ faqs, offset = 0 }: { faqs: { q: string; a: string }[]; offset?: number }) => (
    <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
            <AccordionItem
                key={i}
                value={`item-${i + offset}`}
                className="border rounded-[25px] overflow-hidden px-6 transition-all hover:bg-white border-slate-200 bg-white"
            >
                <AccordionTrigger className="text-left font-black text-[#080f2a] py-6 hover:no-underline text-base">
                    {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 font-medium pb-6 leading-relaxed text-sm">
                    {faq.a}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
);

const FAQSection = () => (
    <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block text-center">
                PREGUNTAS FRECUENTES
            </span>
            <h2 className="text-4xl font-black text-center text-[#080f2a] mb-4">
                Resolvemos tus dudas <br />antes de que llames
            </h2>
            <p className="text-center text-slate-500 font-medium mb-16 max-w-2xl mx-auto">
                Estas son las preguntas más frecuentes de quienes adquieren SOLIDWORKS con nosotros.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <FAQColumn faqs={faqsLeft} offset={0} />
                <FAQColumn faqs={faqsRight} offset={6} />
            </div>
        </div>
    </section>
);

/* ─────────────── FOOTER CTA ─────────────── */
const FooterCTA = () => (
    <section className="py-20 bg-white">
        <div className="container px-4">
            <div className="bg-gradient-to-r from-[#080f2a] to-[#1a3d8f] rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />

                <div className="relative z-10 max-w-2xl mx-auto">
                    <img src={solidworksLogo} alt="SOLIDWORKS" className="h-12 w-auto mx-auto mb-8 brightness-0 invert" />
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        ¿Listo para empezar <br />con{" "}
                        <span className="text-[#F2A900]">SOLIDWORKS</span>?
                    </h2>
                    <p className="text-blue-100 font-medium text-lg mb-10">
                        Tenemos un asesor listo para brindarte la mejor atención humana y profesional. <br />
                        Impulsa tu ingeniería hoy mismo con licencias originales.
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
const SolidworksPlanes = () => {
    return (
        <div className="min-h-screen bg-white">
            <GlobalHeader rightContent={<SolidworksRightContent />} />
            <main>
                <Hero />
                <OrganizationSection />
                <PricingSection />
                <ModulesSection />
                <BenefitsSection />
                <ProcessSection />
                <FAQSection />
                <FooterCTA />
            </main>
            <Footer />
        </div>
    );
};

export default SolidworksPlanes;
