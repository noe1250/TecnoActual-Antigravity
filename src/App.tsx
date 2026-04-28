import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Marcas from "./pages/Marcas";
import SketchupPlanes from "./pages/SketchupPlanes";
import SolidworksPlanes from "./pages/SolidworksPlanes";
import Blog from "./pages/Blog";
import Legal from "./pages/Legal";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import BricsCADPlanes from "./pages/BricsCAD";
import BlogSuscripcion from "./pages/BlogSuscripcion";
import BlogBienvenida from "./pages/BlogBienvenida";
import BlogSketchupLegal from "./pages/BlogSketchupLegal";
import BlogWorkstationRender from "./pages/BlogWorkstationRender";
import BlogSolidworksWorkstation from "./pages/BlogSolidworksWorkstation";
import BlogSolidworksSuscripcion2026 from "./pages/BlogSolidworksSuscripcion2026";
import BlogChecklistArquitectura from "./pages/BlogChecklistArquitectura";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/sketchup-planes" element={<SketchupPlanes />} />
          <Route path="/solidworks" element={<SolidworksPlanes />} />
          <Route path="/bricscad" element={<BricsCADPlanes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/software-por-suscripcion" element={<BlogSuscripcion />} />
          <Route path="/blog/bienvenida-al-nuevo-tecnoactual" element={<BlogBienvenida />} />
          <Route path="/blog/sketchup-pro-mexico-licencia-legal" element={<BlogSketchupLegal />} />
          <Route path="/blog/workstation-para-diseno-3d" element={<BlogWorkstationRender />} />
          <Route path="/blog/solidworks-workstation-rendimiento" element={<BlogSolidworksWorkstation />} />
          <Route path="/blog/solidworks-suscripcion-2026" element={<BlogSolidworksSuscripcion2026 />} />
          <Route path="/blog/checklist-migracion-arquitectura" element={<BlogChecklistArquitectura />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
