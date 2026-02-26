# Guía de Configuración para Correos Reales

Para que los pedidos lleguen a tu mail de verdad una vez que publiques la web en Vercel, sigue estos pasos:

### 1. Crear cuenta en Resend
1. Ve a [resend.com](https://resend.com) y regístrate gratis.
2. En el panel lateral, ve a **"API Keys"**.
3. Haz clic en **"Create API Key"**. Ponle nombre "Web Punto Ganga".
4. **Copia la clave** que empieza con `re_...` (¡No la pierdas!).

### 2. Configurar en Vercel
Una vez que subas tu proyecto a Vercel:
1. Entra al panel de tu proyecto en Vercel.
2. Ve a la pestaña **"Settings"** (Ajustes) -> **"Environment Variables"**.
3. Agrega una nueva variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** (Pega la clave que copiaste de Resend)
4. Haz clic en **"Save"**.
5. **Importante:** Después de guardar, ve a la pestaña "Deployments" y dale a "Redeploy" al último despliegue para que la configuración se active.

### 3. Límites del modo prueba (Domain Verification)
- Por defecto, Resend gratuito permite enviar correos sin problemas mientras estés probando.
- Sin embargo, para que los correos salgan de forma masiva y profesional, te pedirá "Verificar un dominio". 
- Si no verificas un dominio, Resend enviará desde `onboarding@resend.dev`.

### 4. ¿Cómo probarlo en tu PC ahora mismo?
1. Crea un archivo llamado `.env.local` en la carpeta principal de este proyecto.
2. Escribe adentro esto: `RESEND_API_KEY=tu_clave_de_resend_aca`
3. Cierra y vuelve a abrir el comando `npm run dev`.
4. ¡Listo! Los pedidos que hagas desde tu PC ahora llegarán al mail.
