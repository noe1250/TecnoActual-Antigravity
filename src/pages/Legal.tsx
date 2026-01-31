import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FileText, Scale, Heart, RefreshCcw } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const legalSections = [
  {
    id: "privacidad",
    name: "Aviso de Privacidad",
    icon: FileText,
    content: {
      lastUpdate: "4 de noviembre de 2025",
      sections: [
        {
          title: "Identidad y Domicilio",
          content: "TecnoActual, con domicilio en Alianza Sur 303 int 316 Parque de Investigación e Innovación Tecnológica (PIIT) Apodaca, Nuevo Leon., es responsable del tratamiento de sus datos personales."
        },
        {
          title: "Datos Personales que Recabamos",
          content: "Para las finalidades señaladas en este aviso de privacidad, podemos recabar sus datos personales de distintas formas:",
          list: [
            "Cuando nos los proporciona directamente (formularios, correos electrónicos, llamadas)",
            "Datos de identificación: nombre, dirección, teléfono, correo electrónico",
            "Datos empresariales: nombre de la empresa, RFC, giro comercial"
          ]
        },
        {
          title: "Finalidades del Tratamiento",
          content: "Los datos personales que recabamos serán utilizados para:",
          list: [
            "Proveer los servicios y productos que solicita",
            "Informar sobre cambios o nuevos productos relacionados",
            "Dar cumplimiento a obligaciones contraídas",
            "Evaluar la calidad del servicio",
            "Realizar análisis estadísticos y de mercado"
          ]
        },
        {
          title: "Transferencia de Datos",
          content: "Sus datos personales pueden ser transferidos a:",
          list: [
            "Proveedores de software para la emisión de licencias",
            "Instituciones financieras para el procesamiento de pagos",
            "Autoridades competentes cuando la ley lo requiera"
          ]
        },
        {
          title: "Derechos ARCO",
          content: "Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). También puede solicitar la corrección de su información (Rectificación), que la eliminemos de nuestros registros (Cancelación) u oponerse al uso de sus datos (Oposición). Para ejercer estos derechos, contacte a: privacidad@tecnoactual.com"
        }
      ]
    }
  },
  {
    id: "terminos",
    name: "Términos y Condiciones",
    icon: Scale,
    content: {
      lastUpdate: "4 de noviembre de 2025",
      sections: [
        {
          title: "Aceptación de Términos",
          content: "Al utilizar nuestros servicios, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo, no debe utilizar nuestros servicios."
        },
        {
          title: "Descripción del Servicio",
          content: "TecnoActual ofrece servicios de consultoría y venta de licencias de software empresarial por suscripción. Actuamos como intermediarios autorizados entre fabricantes de software y clientes finales."
        },
        {
          title: "Responsabilidades del Cliente",
          list: [
            "Proporcionar información verídica y actualizada",
            "Usar el software de acuerdo con los términos del fabricante",
            "Mantener la confidencialidad de sus credenciales",
            "Realizar los pagos en tiempo y forma"
          ]
        },
        {
          title: "Licencias y Suscripciones",
          content: "Las licencias de software son propiedad de sus respectivos fabricantes. TecnoActual facilita la adquisición pero no es el propietario del software.",
          list: [
            "Las suscripciones son renovables según los términos de cada fabricante",
            "Los precios están sujetos a cambios",
            "Las renovaciones deben realizarse antes del vencimiento"
          ]
        },
        {
          title: "Garantías y Soporte",
          content: "El soporte técnico del software es responsabilidad del fabricante. TecnoActual ofrece:",
          list: [
            "Consultoría de selección e implementación",
            "Asistencia en la activación de licencias",
            "Capacitación básica en el uso del software",
            "Gestión de renovaciones"
          ]
        },
        {
          title: "Limitación de Responsabilidad",
          content: "TecnoActual no será responsable por:",
          list: [
            "Interrupciones del servicio causadas por los fabricantes",
            "Pérdida de datos del cliente",
            "Incompatibilidad del software con sistemas del cliente",
            "Cambios unilaterales de los fabricantes"
          ]
        }
      ]
    }
  },
  {
    id: "etica",
    name: "Código de Ética",
    icon: Heart,
    content: {
      lastUpdate: "4 de noviembre de 2025",
      sections: [
        {
          title: "Nuestra Misión",
          content: "Proporcionar soluciones de software de calidad que impulsen el crecimiento de nuestros clientes, con transparencia, honestidad e integridad."
        },
        {
          title: "Valores Fundamentales",
          list: [
            "Honestidad: Siempre decimos la verdad sobre las capacidades y limitaciones del software",
            "Transparencia: Comunicamos precios, términos y condiciones de forma clara",
            "Compromiso: Cumplimos nuestras promesas y plazos",
            "Respeto: Tratamos a clientes, colaboradores y socios con dignidad",
            "Confidencialidad: Protegemos la información de nuestros clientes"
          ]
        },
        {
          title: "Relación con Clientes",
          content: "Nos comprometemos a:",
          list: [
            "Recomendar solo software que realmente necesiten",
            "No presionar para ventas innecesarias",
            "Responder dudas con información verídica",
            "Mantener la confidencialidad de su información",
            "Dar seguimiento post-venta"
          ]
        },
        {
          title: "Relación con Proveedores",
          list: [
            "Cumplir con los acuerdos comerciales establecidos",
            "Representar fielmente sus productos",
            "Mantener actualizada la información de precios y versiones",
            "Reportar cualquier irregularidad detectada"
          ]
        },
        {
          title: "Cumplimiento Legal",
          content: "TecnoActual se compromete a:",
          list: [
            "Cumplir con todas las leyes aplicables",
            "Respetar la propiedad intelectual",
            "No participar en prácticas de piratería",
            "Proteger datos personales conforme a la ley",
            "Pagar impuestos correspondientes"
          ]
        },
        {
          title: "Denuncia de Conductas Inapropiadas",
          content: "Si detecta alguna conducta que viole este código de ética, puede reportarla a: etica@tecnoactual.com"
        }
      ]
    }
  },
  {
    id: "devoluciones",
    name: "Devoluciones y Cancelaciones",
    icon: RefreshCcw,
    content: {
      lastUpdate: "4 de noviembre de 2025",
      sections: [
        {
          title: "Devoluciones",
          content: "Debido a la naturaleza digital del software:",
          list: [
            "Las licencias activadas no son reembolsables",
            "Se puede solicitar devolución antes de la activación",
            "Cualquier excepción debe ser autorizada por el fabricante"
          ]
        },
        {
          title: "Cancelaciones",
          content: "Para suscripciones:",
          list: [
            "Puede cancelar antes de la renovación automática",
            "No hay reembolso por meses no usados",
            "La cancelación debe notificarse con 15 días de anticipación"
          ]
        }
      ]
    }
  }
];

const Legal = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  const defaultTab = location.hash ? location.hash.slice(1) : "privacidad";

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
              Información <span className="text-gradient-brand">Legal</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Conoce nuestras políticas, términos de servicio y compromisos éticos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="section">
        <div className="container">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto p-2 bg-muted/50 rounded-xl mb-12">
              {legalSections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="px-4 py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"
                >
                  <section.icon size={18} />
                  <span className="hidden sm:inline">{section.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {legalSections.map((section) => (
              <TabsContent key={section.id} value={section.id} id={section.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                        <section.icon className="text-primary" size={28} />
                        {section.name}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Última actualización: {section.content.lastUpdate}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {section.content.sections.map((item, index) => (
                        <div key={index}>
                          <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                          {item.content && (
                            <p className="text-muted-foreground mb-3">{item.content}</p>
                          )}
                          {item.list && (
                            <ul className="space-y-2">
                              {item.list.map((listItem, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                  {listItem}
                                </li>
                              ))}
                            </ul>
                          )}
                          {index < section.content.sections.length - 1 && (
                            <Separator className="mt-6" />
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
