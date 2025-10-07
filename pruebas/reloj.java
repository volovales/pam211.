public class reloj 
{
    int serie;
    String marca;
    String color;
    double precio;
    public reloj(int serie, String marca, String color, double precio) 
    {
        this.serie = serie;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
    }
    reloj()
    {
        serie = 999;
        marca = "sin nombre";
        color = "sin color";
    }
    
    @Override
    public String toString() 
    {
        return "reloj [serie=" + serie + ", marca=" + marca + ", color=" + color + ", precio=" + precio + "]";
    }
    
}
