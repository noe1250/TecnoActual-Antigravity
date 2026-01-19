import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-8xl md:text-9xl font-bold text-gradient-brand mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Página no encontrada</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/">
              <Home className="mr-2" size={18} />
              Ir al Inicio
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
