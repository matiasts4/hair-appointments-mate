
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar as CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { es } from "date-fns/locale";

interface ReservaFormData {
  nombre: string;
  email: string;
  telefono: string;
  fecha: Date;
  servicio: string;
  notas: string;
}

const Reserva = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const servicioPreseleccionado = location.state?.servicio || "";
  const [date, setDate] = useState<Date>();

  const form = useForm<ReservaFormData>({
    defaultValues: {
      servicio: servicioPreseleccionado,
    },
  });

  const servicios = [
    "Corte y Estilo - 45€",
    "Color y Mechas - 75€",
    "Tratamiento Capilar - 35€",
  ];

  const onSubmit = (data: ReservaFormData) => {
    console.log(data);
    // Aquí iría la lógica para procesar la reserva
    // Por ahora solo mostraremos un mensaje de éxito
    alert("Reserva realizada con éxito");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <h1 className="text-2xl md:text-3xl">Reservar Cita</h1>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="servicio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Servicio</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Selecciona un servicio</option>
                          {servicios.map((servicio) => (
                            <option key={servicio} value={servicio}>
                              {servicio}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fecha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha</FormLabel>
                      <FormControl>
                        <div className="border rounded-md p-4">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => field.onChange(date)}
                            locale={es}
                            disabled={(date) => {
                              const day = date.getDay();
                              return (
                                day === 0 || // Domingo
                                date < new Date() // Fechas pasadas
                              );
                            }}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notas"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notas adicionales</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Confirmar Reserva
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Reserva;
