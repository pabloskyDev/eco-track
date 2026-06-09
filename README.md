# eco-track

Eco Track es una aplicación móvil (Ionic + Angular) diseñada para ayudar a los usuarios a registrar actividades diarias y estimar su huella de carbono. La aplicación ofrece registro de actividades, estadísticas (gráficas), trofeos y gestión de perfil, y puede ejecutarse en el navegador y en dispositivos móviles mediante Capacitor.

## Características

- Registrar actividades y calcular estimaciones de emisiones de CO2
- Ver gráficos y estadísticas
- Obtener trofeos y seguir el progreso
- Persistencia local mediante el servicio de almacenamiento
- Se ejecuta como aplicación web y como app nativa vía Capacitor

## Tecnologías

- Ionic 8 + Angular 20
- Capacitor 8
- Chart.js (ng2-charts)

## Ejecutar localmente

### Requisitos previos

- Tener instalado Node.js y npm
- (Opcional) Ionic CLI: `npm i -g @ionic/cli`

### Pasos

1. Instalar dependencias

```bash
npm install
```

2. Iniciar el servidor de desarrollo (navegador)

```bash
npm start
# o, si tienes el Ionic CLI instalado
ionic serve
```

3. Ejecutar pruebas

```bash
npm test
```

4. Compilar para producción

```bash
npm run build
```

5. Ejecutar en un dispositivo con Capacitor

```bash
npx cap add android
npx cap open android
# iOS (solo macOS)
# npx cap add ios
# npx cap open ios
```

## Estructura del proyecto

El código de la aplicación se encuentra en `src/app`. Las páginas están en `src/app/ui/pages` y los servicios/modelos principales en `src/app/core`.

## Notas

- El script `start` ejecuta el servidor de desarrollo de Angular (`ng serve`).
- Si planeas ejecutar la aplicación en un dispositivo físico, sigue la configuración y los requisitos de Capacitor.

## ¿Necesitas ayuda?

Abre un issue o solicita orientación.
