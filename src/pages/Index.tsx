
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone, Scissors } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Corte y Estilo",
      price: "45€",
      duration: "45 min",
      description: "Corte personalizado incluyendo lavado y peinado",
    },
    {
      title: "Color y Mechas",
      price: "75€",
      duration: "120 min",
      description: "Coloración profesional con productos de alta calidad",
    },
    {
      title: "Tratamiento Capilar",
      price: "35€",
      duration: "30 min",
      description: "Tratamiento profundo para revitalizar tu cabello",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl">Belle Coiffure</h1>
          <Button size="lg" className="bg-black hover:bg-black/90">
            <Calendar className="mr-2 h-4 w-4" />
            Reservar Cita
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12">
        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-xl font-semibold">{service.price}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Scissors className="mr-2 h-4 w-4" />
                    Agendar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-secondary">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl md:text-4xl text-center mb-12">Contacto y Horarios</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>Calle Principal 123, Madrid</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+34 912 345 678</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl mb-4">Horario</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
