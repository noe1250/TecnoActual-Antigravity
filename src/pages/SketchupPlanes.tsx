import { motion } from "framer-motion";
import { Check, ArrowRight, MessageCircle, ShieldCheck, Phone, Globe, Zap, Heart, Star, Clock, Laptop, Layers, Users, HelpCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import logoHeader from "@/assets/logo-header.png";
import sketchupReseller from "@/assets/sketchup-reseller-official.png";
import heroBg from "@/assets/hero-bg.jpg";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "528181880009";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me interesa información sobre los planes de SketchUp.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Header = () => {
    const navigation = [
        { name: 'Inicio', href: '/' },
        { name: 'Marcas', href: '/marcas' },
        { name: 'SketchUp', href: '/sketchup-planes' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/contacto' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8 lg:gap-12">
                    <Link to="/">
                        <img src={logoHeader} alt="TecnoActual" className="h-8 md:h-10 w-auto" />
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden xl:flex items-center gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                    {/* Official Reseller Logo */}
                    <div className="hidden sm:block">
                        <img src={sketchupReseller} alt="SketchUp Authorized Reseller" className="h-6 md:h-10 w-auto" />
                    </div>

                    <Button asChild size="sm" className="bg-[#F2A900] hover:bg-[#D99800] text-white font-bold rounded-full text-[10px] md:text-sm px-3 md:px-6 shadow-sm">
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-1 md:mr-2" size={14} /> <span className="hidden xs:inline">Contáctanos por</span> WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
};

const Hero = () => (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#0A192F] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img
                src={heroBg}
                alt="Background"
                className="w-full h-full object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/90 to-[#0A192F]" />
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-1">
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#F2A900] rounded-full blur-[150px] opacity-30" />
        </div>

        <div className="container relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-400/30 rounded-full mb-8"
            >
                <span className="text-blue-200 text-xs md:text-sm font-bold tracking-wider uppercase">CONOCE TODO SOBRE SKETCHUP EN MÉXICO</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]"
            >
                SketchUp en México <br />
                con <span className="text-[#F2A900]">acompañamiento</span> <br />
                real desde el día uno
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
            >
                Licencias originales Trimble desde una factura mexicana, soporte en español, activación inmediata y un asesor que te conoce por tu nombre.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
                <Button asChild size="lg" className="bg-[#F2A900] hover:bg-[#D99800] text-black font-black px-8 py-7 rounded-full text-lg shadow-xl shadow-[#f2a90022]">
                    <a href="#precios">Ver precios en MXN <ArrowRight className="ml-2" size={20} /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white/20 bg-white hover:bg-white/90 text-[#0A192F] font-black px-8 py-7 rounded-full text-lg shadow-lg">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Hablar con un asesor</a>
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
            >
                <div className="flex items-center gap-2 text-blue-200/80 font-bold text-xs md:text-sm">
                    <Check className="text-[#F2A900]" size={16} /> Pago referenciado
                </div>
                <div className="flex items-center gap-2 text-blue-200/80 font-bold text-xs md:text-sm">
                    <Check className="text-[#F2A900]" size={16} /> Factura deducible
                </div>
                <div className="flex items-center gap-2 text-blue-200/80 font-bold text-xs md:text-sm">
                    <Check className="text-[#F2A900]" size={16} /> Soporte en español
                </div>
                <div className="flex items-center gap-2 text-blue-200/80 font-bold text-xs md:text-sm">
                    <Check className="text-[#F2A900]" size={16} /> Activación en muy poco tiempo
                </div>
            </motion.div>
        </div>
    </section>
);

const TrimbleSection = () => (
    <section className="py-24 bg-white">
        <div className="container">
            <div className="max-w-4xl mb-16 px-4">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">COMPROMISO CON MÉXICO</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] mb-6 leading-tight">
                    Licencia oficial Trimble, <br />
                    <span className="text-blue-600">con el servicio local que tu proyecto merece</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-3xl">
                    Libera tu creatividad con herramientas de modelado líderes en la industria para el éxito de tus diseños.
                    Contamos con el servicio que va mucho más allá de la venta, con soporte técnico, capacitación y acompañamiento personalizado.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-4">
                <Card className="bg-[#F0F7FF] border-none rounded-[40px] p-8 md:p-12 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110" />
                    <CardContent className="p-0 relative z-10">
                        <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                            <Layers className="text-blue-600" size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-[#0A192F] mb-6">Para tu empresa o despacho</h3>
                        <ul className="space-y-4">
                            {[
                                "Licencia 100% legal Trimble México",
                                "Factura CFDI 4.0 deducible de impuestos",
                                "Precios especiales por volumen",
                                "Soporte técnico preferencial",
                                "Activación en tu cuenta Trimble actual"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 font-bold text-slate-700">
                                    <Check className="text-blue-600 mt-1" size={18} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-[#F0FFF4] border-none rounded-[40px] p-8 md:p-12 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110" />
                    <CardContent className="p-0 relative z-10">
                        <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                            <Star className="text-green-600" size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-[#0A192F] mb-6">Para tu éxito profesional</h3>
                        <ul className="space-y-4">
                            {[
                                "Asesoría para elegir el mejor plan",
                                "Activación express el mismo día",
                                "Descuentos en cursos de capacitación",
                                "Un asesor personal para tus dudas",
                                "Renovaciones sencillas y oportunas"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 font-bold text-slate-700">
                                    <Check className="text-green-600 mt-1" size={18} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
);

const PricingSection = () => {
    const plans = [
        {
            name: "Go",
            price: "2,569",
            oldPrice: "2,850",
            features: [
                "Para modelado en iPad y Web",
                "Almacenamiento en la nube limitado",
                "Trimble Connect Básico",
                "10 Visores en móviles",
                "Sincronización en tiempo real"
            ],
            color: "text-slate-900"
        },
        {
            name: "Pro",
            price: "7,048",
            oldPrice: "7,830",
            popular: true,
            features: [
                "Todo lo de Go más:",
                "SketchUp for desktop completo",
                "LayOut para documentación 2D",
                "Style Builder personalizado",
                "Plugins y extensiones",
                "Instalación en 2 equipos"
            ],
            color: "text-[#F2A900]"
        },
        {
            name: "Studio",
            price: "16,326",
            oldPrice: "18,140",
            features: [
                "Todo lo de Pro más:",
                "Renderizado con V-Ray",
                "Scan Essentials para nubes de puntos",
                "Revit Importer directo",
                "Análisis de eficiencia energética",
                "Soporte Premium 24/7"
            ],
            color: "text-slate-900"
        }
    ];

    return (
        <section id="precios" className="py-24 bg-gray-50">
            <div className="container text-center">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">PLANES Y PRECIOS</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] mb-6">Elige tu versión de SketchUp</h2>
                <p className="text-slate-600 font-medium mb-16">Invierte en la herramienta que impulsa tu carrera profesional.</p>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="relative"
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-[#F2A900] text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg border-2 border-white uppercase tracking-tighter">
                                        EL MÁS ELEGIDO
                                    </div>
                                </div>
                            )}
                            <Card className={`rounded-[40px] overflow-hidden border-2 h-full transition-all duration-300 ${plan.popular ? 'border-[#F2A900] shadow-2xl' : 'border-gray-100 shadow-sm hover:shadow-xl'}`}>
                                <CardContent className="p-10 text-left h-full flex flex-col">
                                    <span className="text-lg font-black text-slate-400 mb-2 uppercase tracking-tight">{plan.name}</span>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-slate-900 text-[10px] font-bold">$</span>
                                        <span className={`text-4xl md:text-5xl font-black ${plan.color}`}>{plan.price}</span>
                                    </div>
                                    <span className="text-slate-500 font-bold text-xs mb-8 block uppercase tracking-tighter">MXN (IVA INCLUIDO) - Suscripción anual</span>

                                    <div className="space-y-5 mb-10 flex-1">
                                        {plan.features.map((feature, j) => (
                                            <div key={j} className="flex items-start gap-3">
                                                <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.popular ? 'bg-[#F2A900]/20' : 'bg-slate-100'}`}>
                                                    <Check className={`${plan.popular ? 'text-[#F2A900]' : 'text-slate-400'}`} size={12} strokeWidth={4} />
                                                </div>
                                                <span className="text-sm font-bold text-slate-700 leading-tight">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button asChild className={`w-full py-7 rounded-full font-black text-lg transition-all ${plan.popular ? 'bg-[#F2A900] hover:bg-[#D99800] text-black shadow-lg' : 'bg-white border-2 border-slate-100 text-slate-900 hover:border-slate-300 hover:bg-slate-50'}`}>
                                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Cotizar SketchUp {plan.name}</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-12 text-slate-400 font-bold text-xs max-w-2xl mx-auto uppercase tracking-tighter leading-relaxed">
                    *PRECIOS SUJETOS A CAMBIO SIN PREVIO AVISO SEGÚN EL TIPO DE CAMBIO DEL DÓLAR. FACTURA MEXICANA DEDUCIBLE. PAGO POR TRANSFERENCIA O DEPÓSITO BANCARIO. CONTACTE A UN ASESOR PARA UN PRESUPUESTO FORMAL.
                </p>
            </div>
        </section>
    );
};

const BenefitsSection = () => (
    <section className="py-24 bg-[#0A192F] text-white">
        <div className="container">
            <div className="mb-20 px-4">
                <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-4 block">VALOR AGREGADO</span>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    Más que una licencia — <br />
                    un socio tecnológico en México
                </h2>
                <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-2xl">
                    Comprar con nosotros significa contar con una estructura de soporte técnico y comercial siempre disponible para ti y tu equipo.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {[
                    {
                        icon: <Laptop className="text-blue-400" size={32} />,
                        title: "Factura Fiscal Mexicana",
                        desc: "Factura XML y PDF deducible 100% de impuestos en tu contabilidad."
                    },
                    {
                        icon: <MessageCircle className="text-blue-400" size={32} />,
                        title: "Asesor personal",
                        desc: "Olvídate de los bots, te asignamos un asesor que te ayuda por WhatsApp o llamada."
                    },
                    {
                        icon: <Zap className="text-blue-400" size={32} />,
                        title: "Activación inmediata",
                        desc: "Tu licencia se activa en un tiempo muy corto, quedando lista para usar en tu cuenta."
                    },
                    {
                        icon: <Globe className="text-blue-400" size={32} />,
                        title: "Soporte en tu idioma",
                        desc: "Conexión remota por expertos locales para resolver errores técnicos o de instalación."
                    },
                    {
                        icon: <Star className="text-blue-400" size={32} />,
                        title: "Respaldo y seguridad",
                        desc: "Tus licencias están a nombre de tu empresa, garantizando la continuidad de tus proyectos."
                    },
                    {
                        icon: <Users className="text-blue-400" size={32} />,
                        title: "Capacitación a la medida",
                        desc: "Ofrecemos cursos para empresas para que tu equipo domine SketchUp y LayOut."
                    }
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

const FAQSection = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black text-center text-[#0A192F] mb-16">Preguntas frecuentes</h2>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                    {[
                        { q: "¿En cuánto tiempo recibo mi licencia?", a: "La activación es inmediata. Una vez confirmado tu pago, nuestro equipo procesa tu licencia en Trimble y en muy poco tiempo recibirás el correo de confirmación para activarla." },
                        { q: "¿Me entregan factura mexicana?", a: "Sí, somos una empresa legalmente constituida en México. Emitimos factura CFDI 4.0 con el uso de CFDI que tu contador requiera, válida para deducir impuestos." },
                        { q: "¿Puedo instalarla en más de un equipo?", a: "SketchUp Pro y Studio permiten ser instaladas en varias computadoras, pero el usuario solo puede tener una sesión activa a la vez. Es ideal para trabajar en tu oficina y luego en casa." },
                        { q: "¿Qué incluye el soporte técnico?", a: "Incluye ayuda para la instalación inicial, resolución de errores de licencia y asesoría básica sobre los alcances del software. Lo hacemos vía remota, llamada o WhatsApp." },
                        { q: "¿Hacen descuentos por varias licencias?", a: "Sí, a partir de 5 licencias contamos con planes de volumen especiales para despachos y empresas. Consulta a un asesor para una cotización personalizada." }
                    ].map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border rounded-[25px] overflow-hidden px-6 transition-all hover:bg-slate-50 border-slate-200">
                            <AccordionTrigger className="text-left font-black text-[#0A192F] py-6 hover:no-underline text-lg">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 font-medium pb-6 leading-relaxed">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </section>
);

const FooterCTA = () => (
    <section className="py-20">
        <div className="container px-4">
            <div className="bg-gradient-to-r from-[#0E4FA5] to-[#2563EB] rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl" />

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        ¿Listo para empezar <br />
                        con <span className="text-[#F2A900]">SketchUp</span>?
                    </h2>
                    <p className="text-blue-100 font-medium text-lg mb-10">
                        Tenemos un asesor listo para brindarte la mejor atención humana y profesional. <br />
                        Impulsa tus diseños hoy mismo con licencias originales.
                    </p>
                    <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#22C35E] text-white font-black px-10 py-8 rounded-full text-xl shadow-xl shadow-[#25d36633]">
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-3" size={24} /> Cotizar por WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

const SketchupPlanes = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <TrimbleSection />
                <PricingSection />
                <BenefitsSection />
                <FAQSection />
                <FooterCTA />
            </main>
            <Footer />
        </div>
    );
};

export default SketchupPlanes;
