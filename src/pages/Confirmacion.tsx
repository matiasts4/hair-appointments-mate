
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Mail, Phone, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const Confirmacion = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reserva = location.state?.reserva;

  if (!reserva) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <Card className="p-8 space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-green-600">¡Reserva Confirmada!</h1>
            <p className="text-muted-foreground">
              Hemos recibido tu reserva correctamente. Te hemos enviado un email con los detalles.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Detalles de la Reserva</h2>
            
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <span>{reserva.nombre}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>{reserva.email}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>{reserva.telefono}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span>
                  {format(reserva.fecha, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>{reserva.hora}</span>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <h3 className="font-medium mb-2">Servicio</h3>
                <p>{reserva.servicio}</p>
              </div>
              
              {reserva.notas && (
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Notas adicionales</h3>
                  <p className="text-muted-foreground">{reserva.notas}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              className="flex-1" 
              variant="outline" 
              onClick={() => navigate('/')}
            >
              Volver al Inicio
            </Button>
            <Button 
              className="flex-1"
              onClick={() => window.print()}
            >
              Imprimir Confirmación
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Confirmacion;
