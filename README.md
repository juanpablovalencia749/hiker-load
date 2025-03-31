# Hiker Load React

Hiker Load React es una aplicación web desarrollada con **React** y **TypeScript** que permite a los usuarios gestionar una lista de elementos con restricciones de peso y calorías. La aplicación está diseñada para ayudar a los excursionistas a planificar su carga de manera eficiente.

## Características

- **Gestión de elementos seleccionados:** Los usuarios pueden seleccionar y deseleccionar elementos de una lista.
- **Cálculo dinámico:** Calcula el peso total y las calorías de los elementos seleccionados.
- **Validación:** Verifica si los elementos seleccionados cumplen con los límites de peso y calorías establecidos.
- **Interfaz dinámica:** Actualiza la interfaz de usuario en tiempo real con mensajes claros sobre el estado de los elementos seleccionados.
- **Componentes reutilizables:** La aplicación está dividida en componentes modulares para facilitar su mantenimiento y escalabilidad.

## Instalación y Configuración

### Requisitos previos

- **Node.js**: Asegúrate de tener instalada una versión reciente de Node.js (22.12.0 o superior). Puedes descargarla desde la [página oficial de Node.js](https://nodejs.org/).
- **npm**: Viene incluido con Node.js.

### Pasos de instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/juanpablovalencia749/hiker-load-react.git
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm start
   ```

4. **Abrir el proyecto:**
   - La aplicación se ejecutará en `http://localhost:{PORT}/` por defecto.
   - Si deseas cambiar el puerto, revisa la configuración en el archivo `.env`.

## Estructura del Proyecto

El proyecto está organizado de manera modular para facilitar la escalabilidad y el mantenimiento. A continuación, se describe la estructura principal:

```
hiker-load-react/
├── public/                # Archivos públicos como index.html
│   ├── index.html         # Archivo HTML principal
│   ├── favicon.ico        # Ícono de la aplicación
│   └── data.json          # Simulación de una API con datos de ejemplo
├── src/                   # Código fuente de la aplicación
│   ├── pages/             # Páginas principales de la aplicación
│   │   ├── HikerLoad/     # Componente principal de la aplicación
│   │   │   ├── HikerLoad.tsx
│   │   │   └── HikerLoad.css
│   ├── components/        # Componentes reutilizables relacionados con la UI
│   │   ├── Filters/       # Componente para los filtros de calorías y peso
│   │   │   ├── Filters.tsx
│   │   │   └── Filters.css
│   │   ├── Card/          # Componente para mostrar cada elemento de la lista
│   │   │   ├── Card.tsx
│   │   │   └── Card.css
│   │   ├── MessageBox/    # Componente para mostrar mensajes de validación
│   │   │   ├── MessageBox.tsx
│   │   │   └── MessageBox.css
│   │   └── CalculateButton/ # Botón para calcular los resultados
│   │       ├── CalculateButton.tsx
│   │       └── CalculateButton.css
│   ├── hooks/             # Hooks personalizados para lógica reutilizable
│   │   ├── useCalculator.ts # Lógica para calcular calorías y peso
│   │   └── useMessageBox.ts # Lógica para manejar mensajes de validación
│   ├── assets/            # Recursos estáticos como estilos globales
│   │   ├── styles/
│   │   │   └── global.css # Estilos globales de la aplicación
│   ├── main.tsx          # Punto de entrada principal de React
│   ├── vite-env.d.ts      # Tipos de entorno para Vite
│   └── react-app-env.d.ts # Tipos adicionales para React
├── package.json           # Dependencias y scripts del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── vite.config.ts         # Configuración de Vite
├── README.md              # Documentación del proyecto
```

## Uso

1. **Seleccionar elementos:**
   Haz clic en los elementos de la lista para seleccionarlos o deseleccionarlos.

2. **Establecer límites:**
   Ingresa los valores de calorías mínimas y peso máximo en los campos correspondientes.

3. **Resultados:**
   La aplicación calculará automáticamente el peso total y las calorías de los elementos seleccionados y mostrará un mensaje indicando si cumplen con los límites establecidos.

## Tecnologías Utilizadas

- **React:** Framework para construir interfaces de usuario.
- **TypeScript:** Un superconjunto de JavaScript que añade tipado estático opcional, lo que permite detectar errores en tiempo de desarrollo y mejorar la mantenibilidad del código.
- **CSS3:** Estilos y diseño.
- **JavaScript (ES6+):** Lógica de la aplicación.
- **Node.js y npm:** Para gestionar dependencias y scripts de desarrollo.
