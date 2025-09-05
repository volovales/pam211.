import java.util.Scanner;

class InicioPAM {
    public void mostrarReglamento() {
        System.out.println("Reglamento POO:");
        System.out.println("1. Respeto");
        System.out.println("2. Importante participación activa en orden");
        System.out.println("3. No entregar trabajos incompletos");
        System.out.println("4. No se aplican exámenes fuera de tiempo");
        System.out.println("5. Plagio de trabajos = 0 para todos");
        System.out.println("6. 3 faltas = Final del parcial");
        System.out.println("7. Calificación máxima en final: 8");
    }

    public void mostrarLineamientos() {
        System.out.println("Lineamientos Classroom:");
        System.out.println("- Entregar los trabajos para su revisión");
        System.out.println("- Entregas en PDF");
        System.out.println("- Avisos de clase");
        System.out.println("- Entregas autorizadas con retraso (calificación máxima: 5)");
    }

    public void mostrarFechas() {
        System.out.println("Fechas de Parciales:");
        System.out.println("- Parcial 1: 29 Septiembre");
        System.out.println("- Parcial 2: 03 Octubre");
        System.out.println("- Parcial 3: 01 Noviembre");
    }

    public void mostrarPorcentajes() {
        System.out.println("Porcentajes por Parcial:");
        System.out.println("- Evidencia de conocimiento: 40%");
        System.out.println("- Evidencia de desempeño: 10%, 20%, 10%");
        System.out.println("- Evidencia de producto: 30%, 20%, 10%");
        System.out.println("- Proyecto integrador: 16%, 20%, 30%");
    }
}

public class MenuPAM {
    public static void main(String[] args) {
        InicioPAM pam = new InicioPAM();
        Scanner sc = new Scanner(System.in);
        int opcion = -1;

        do {
            System.out.println("\n--- MENÚ DE INFORMACIÓN POO ---");
            System.out.println("1. Reglamento POO");
            System.out.println("2. Lineamientos Classroom");
            System.out.println("3. Fechas de Parciales");
            System.out.println("4. Porcentajes por Parcial");
            System.out.println("0. Salir");
            System.out.print("Elija una opción: ");

            if (sc.hasNextInt()) {
                opcion = sc.nextInt();
                switch (opcion) {
                    case 1 -> pam.mostrarReglamento();
                    case 2 -> pam.mostrarLineamientos();
                    case 3 -> pam.mostrarFechas();
                    case 4 -> pam.mostrarPorcentajes();
                    case 0 -> System.out.println("Saliendo... ¡Adiós!");
                    default -> System.out.println("Opción inválida. Intente otra vez.");
                }
            } else {
                System.out.println("Entrada inválida, por favor ingrese un número.");
                sc.next(); r
            }
        } while (opcion != 0);

        sc.close();
    }
}
