# React SPA - Challenge Zoco
Aplicación SPA construida con React, Vite y TailwindCSS, con autenticación por roles y rutas protegidas. Este proyecto simula una app donde el contenido varía según el tipo de usuario.

# Funcionalidades

- Autenticación simulada con 2 tipos de usuarios:
  - Usuario común
  - Administrador
- Vistas protegidas con rutas por rol
- Gestión de sesión con `sessionStorage` y Context API
- Estilo mobile-first, responsivo y con diseño moderno
- Edición simulada de datos del usuario (nombre, email, estudios, direcciones)
- Carga condicional de componentes (`AdminDashboard` o `UserDashboard` según el rol)

# Credenciales de prueba

### 👤 Usuario común
- **Email:** `eve.holt@reqres.in`
- **Contraseña:** `cityslicka`

### 🔐 Usuario administrador
- **Email:** `admin@correo.com`
- **Contraseña:** `admin123`

---

## ❗ Aclaraciones importantes

> Todos los cambios realizados en la aplicación **no persisten**. La app funciona sobre datos locales en memoria simulando una API, sin base de datos ni almacenamiento real.

---

## 🛠️ Instalación y ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/marianook/challenge-zoco.git
cd challenge-zoco

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
