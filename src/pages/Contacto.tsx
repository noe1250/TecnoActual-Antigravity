import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  empresa: z.string().max(100).optional(),
  email: z.string().email("Correo electrónico inválido").max(255),
  telefono: z.string().min(10, "El teléfono debe tener al menos 10 dígitos").max(20),
  software: z.string().min(1, "Selecciona una opción"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const softwareOptions = [
  { value: "sketchup", label: "SketchUp Pro/Studio" },
  { value: "solidworks", label: "SolidWorks" },
  { value: "workstations", label: "Workstations (HP/Dell/Lenovo)" },
  { value: "microsoft365", label: "Microsoft 365" },
  { value: "google-workspace", label: "Google Workspace" },
  { value: "zoom", label: "Zoom Business" },
  { value: "otro", label: "Otro" },
];

const WHATSAPP_NUMBER = "528181880009";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, me interesa información sobre sus soluciones de software.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ventas@tecnoactual.com",
    href: "mailto:ventas@tecnoactual.com",
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "81-8188-0009",
    href: "tel:+528181880009",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "81-8188-0009",
    href: WHATSAPP_LINK,
  },
];

const Contacto = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      software: "",
      mensaje: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xvovbbrr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "¡Mensaje enviado!",
          description: "Nos pondremos en contacto contigo pronto.",
        });
        form.reset();
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.",
        variant: "destructive",
      });
    }
  };

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
            <p className="text-secondary font-semibold mb-2">Contáctanos</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para modernizar el{" "}
              <span className="text-gradient-brand">software</span> de tu empresa?
            </h1>
            <p className="text-lg text-muted-foreground">
              Cuéntanos qué necesitas y te ayudaremos a encontrar la solución perfecta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y nos pondremos en contacto contigo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="text-secondary" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h3>
                      <p className="text-muted-foreground mb-6">
                        Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Enviar otro mensaje
                      </Button>
                    </motion.div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nombre Completo *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Tu nombre" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="empresa"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Empresa</FormLabel>
                                <FormControl>
                                  <Input placeholder="Nombre de tu empresa" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Correo Electrónico *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="tu@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="telefono"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Teléfono *</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="+52 123 456 7890" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="software"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>¿Qué software te interesa? *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecciona una opción" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {softwareOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="mensaje"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cuéntanos sobre tu proyecto *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Describe qué necesitas..."
                                  className="min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" size="lg" className="btn-primary w-full">
                          Enviar Mensaje <Send className="ml-2" size={18} />
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">Otras formas de contactarnos</h2>
                <p className="text-muted-foreground">
                  Estamos aquí para ayudarte con cualquier consulta.
                </p>
              </div>

              {contactInfo.map((item, index) => (
                <Card key={index} className="feature-card">
                  <CardContent className="p-6">
                    <a
                      href={item.href}
                      target={item.title === "WhatsApp" ? "_blank" : undefined}
                      rel={item.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}

              {/* Map placeholder */}
              <Card className="feature-card overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-primary mx-auto mb-2" size={32} />
                    <p className="font-medium px-4">
                      Alianza Sur 303 int 316 Parque de Investigación e Innovación Tecnológica (PIIT) Apodaca, Nuevo Leon.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
