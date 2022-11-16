
let tipoConversion = prompt("Elija una conversion \n1. Gramos (g) -> Kilogramos (kg) \n2. Kilogramos (kg) a Gramos (g) \n3. Centímetros (cm) -> Metros (m) \n4. Metros (m) -> Centrímetros \n5. Litros (L) -> Mililitros (ml) \n6. Año -> Horas \n7. Minutos -> Años \n8. Segundos -> Horas")

switch (tipoConversion) {
    case '1':
        cantGramos = prompt("Digite la cantidad en GRAMOS que desea convertir a KILOGRAMOS.")
        convertKg = cantGramos / 1000
        mensaje = cantGramos+" gramos son "+convertKg+" kilogramos."
        break;

    case '2':
        cantKg = prompt("Digite la cantidad en KILOGRAMOS que desea convertir a GRAMOS.")
        convertGramos = cantKg * 1000
        mensaje = cantKg+" kilogramos son "+convertGramos+" gramos."
        break;

    case '3':
        cantCentimetros = prompt("Digite la cantidad en CENTÍMETROS que desea convertir a METROS.")
        convertMetros = cantCentimetros / 100
        mensaje = cantGramos+" centímetros son "+convertMetros+" metros."
        break;

    case '4':
        cantMetros = prompt("Digite la cantidad en METROS que desea convertir a CENTÍMETROS.")
        convertCentimetros = cantMetros * 100
        mensaje = cantMetros+" metros son "+convertCentimetros+" centrímetros."
        break;

    case '5':
        cantLitros = prompt("Digite la cantidad en LITROS que desea convertir a MILILITROS.")
        convertMl = cantLitros * 10002.0
        mensaje = cantLitros+" litros son "+convertMl+" mililitros."
        break;

    case '6':
        cantYears = prompt("Digite la cantidad en AÑOS que desea convertir a HORAS.")
        convertHoras = cantYears * 8760
        mensaje = cantYears+" años son "+convertHoras+" horas."
        break;

    case '7':
        cantMinutos = prompt("Digite la cantidad en MINUTOS que desea convertir a AÑOS.")
        convertYears = cantMinutos / 525600
        mensaje = cantMinutos+" minutos son "+convertYears+" años."
        break;

    case '8':
        cantSegundos = prompt("Digite la cantidad en SEGUNDOS que desea convertir a HORAS.")
        convertHoras = cantSegundos / 3600
        mensaje = cantSegundos+" segundos son "+convertHoras+" horas."
        break;

    default:
        break;
}

console.log(mensaje)