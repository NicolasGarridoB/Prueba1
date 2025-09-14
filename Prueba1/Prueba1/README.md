# Pastelería Mil Sabores - Página Web

## Descripción
Página web para la Pastelería Mil Sabores, celebrando 50 años de tradición en repostería chilena. La página incluye un sistema de e-commerce completo con funcionalidades de registro, autenticación, catálogo de productos, carrito de compras y sistema de descuentos especiales.

## Características Implementadas

### ✅ Funcionalidades Principales
- **Sistema de Registro y Autenticación**
  - Descuento del 50% para usuarios mayores de 50 años
  - Descuento del 10% de por vida con código "FELICES50"
  - Tortas gratis para estudiantes de Duoc en cumpleaños (correo @duocuc.cl)

- **Catálogo de Productos**
  - 16 productos organizados en 8 categorías
  - Filtrado por categorías
  - Búsqueda avanzada
  - Personalización de mensajes en tortas

- **Carrito de Compras**
  - Agregar/eliminar productos
  - Aplicación automática de descuentos
  - Persistencia en localStorage
  - Cálculo de totales con descuentos

- **Diseño Responsivo**
  - Compatible con dispositivos móviles
  - Navegación hamburguesa en móviles
  - Diseño adaptativo

### 🎨 Diseño Visual
- **Colores**: Crema Pastel (#FFF5E1), Rosa Suave (#FFC0CB), Chocolate (#8B4513)
- **Tipografías**: Lato (principal), Pacifico (encabezados)
- **Estilo**: Nostálgico y cálido, reflejando la tradición de 50 años

### 📦 Productos Incluidos
1. **Tortas Cuadradas** (2 productos)
2. **Tortas Circulares** (2 productos)
3. **Postres Individuales** (2 productos)
4. **Productos Sin Azúcar** (2 productos)
5. **Pastelería Tradicional** (2 productos)
6. **Productos Sin Gluten** (2 productos)
7. **Productos Vegana** (2 productos)
8. **Tortas Especiales** (2 productos)

## Estructura del Proyecto

```
Prueba1/
├── index.html          # Página principal (Hero/Inicio únicamente)
├── productos.html      # Catálogo de productos con filtros
├── nosotros.html       # Historia, misión y visión
├── contacto.html       # Información de contacto y formulario
├── login.html          # Página de inicio de sesión
├── registro.html       # Página de registro de usuarios
├── carrito.html        # Página del carrito de compras
├── pedido.html         # Página de finalización de pedido
├── styles.css          # Estilos CSS para todas las páginas
├── script.js           # Funcionalidad JavaScript compartida
└── README.md           # Documentación
```

## Navegación entre Páginas

### Páginas Principales
- **index.html**: Página de inicio con secciones de productos, historia y contacto
- **login.html**: Formulario de inicio de sesión con validación
- **registro.html**: Formulario de registro con descuentos automáticos
- **carrito.html**: Gestión completa del carrito de compras
- **pedido.html**: Proceso de checkout paso a paso

### Flujo de Usuario
1. **Inicio** → Ver productos en página principal
2. **Productos** → Agregar al carrito (desde index.html)
3. **Carrito** → Revisar productos y proceder al pago
4. **Autenticación** → Login o registro (si no está logueado)
5. **Pedido** → Completar información y confirmar compra

## Instalación y Uso

1. **Clonar o descargar** los archivos del proyecto
2. **Abrir** `index.html` en un navegador web
3. **No requiere** servidor web especial (funciona con file://)

## Navegación de la Página

### Secciones Principales
- **Inicio**: Presentación de la pastelería y su historia
- **Productos**: Catálogo completo con filtros y búsqueda
- **Nosotros**: Historia, misión, visión e impacto comunitario
- **Contacto**: Formulario de contacto e información

### Funcionalidades Interactivas
- **Iniciar Sesión/Registro**: Modal con formularios de autenticación
- **Carrito**: Visualización y gestión de productos seleccionados
- **Filtros**: Por categoría de productos
- **Búsqueda**: Texto libre en productos
- **Personalización**: Mensajes especiales en productos

## Sistema de Descuentos

### Descuentos Automáticos
1. **Mayores de 50 años**: 50% de descuento en todos los productos
2. **Código "FELICES50"**: 10% de descuento permanente
3. **Estudiantes Duoc**: Torta gratis en cumpleaños (registro con @duocuc.cl)

### Aplicación de Descuentos
- Se aplica automáticamente el descuento mayor disponible
- Validación en tiempo real del código promocional
- Cálculo automático en el carrito de compras

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos responsivos con variables CSS
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografías Lato y Pacifico

## Características Técnicas

### Responsive Design
- Diseño móvil primero
- Breakpoints: 768px y 480px
- Navegación hamburguesa en móviles
- Grid flexible para productos

### Accesibilidad
- Contraste de colores adecuado
- Navegación por teclado
- Etiquetas semánticas
- Textos alternativos

### Rendimiento
- Carga optimizada de fuentes
- Animaciones CSS eficientes
- LocalStorage para persistencia
- Código JavaScript modular

## Funcionalidades Futuras (Sugeridas)

- [ ] Integración con pasarela de pagos
- [ ] Sistema de seguimiento de pedidos
- [ ] Blog de repostería
- [ ] Integración con redes sociales
- [ ] Sistema de reseñas
- [ ] Notificaciones push
- [ ] Panel de administración
- [ ] API REST para gestión de productos

## Contacto y Soporte

Para consultas sobre la implementación o mejoras:
- **Proyecto**: Pastelería Mil Sabores
- **Versión**: 1.0
- **Fecha**: Septiembre 2025

---

## Notas de Desarrollo

### Validaciones Implementadas
- Verificación de edad para descuento de 50+
- Validación de código promocional "FELICES50"
- Detección de correos institucionales @duocuc.cl
- Validación de formularios con HTML5

### Almacenamiento
- Carrito persistente en localStorage
- Datos de usuario en memoria (sessión)
- Productos hardcodeados en JavaScript

### Compatibilidad
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Dispositivos móviles iOS y Android
- Resoluciones desde 320px hasta 1920px+

¡La página está lista para ser utilizada! 🍰
