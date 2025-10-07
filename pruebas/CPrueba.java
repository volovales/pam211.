public class CPrueba 
{
    public static void main(String[] args) 
    {
        reloj[] relojs = new reloj[4];

        reloj r1 = new reloj(1,"Skein 85-X","Verde militar", 250.00);
        reloj r2 = new reloj(11,"Skein 93-X","Azul", 250.00);  
        reloj r3 = new reloj(); 
        reloj r4 = new reloj(111,"patito","Rojo", 350.00);      
        
        relojs[0] =r1;
        relojs[1] =r2;
        relojs[2] =r3;
        relojs[3] =r4;

        for(reloj r : relojs)
    System.out.println(r);
    }
}
