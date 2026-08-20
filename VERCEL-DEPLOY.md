# 🚀 Deployment en Vercel

## Opción 1: Deployment Automático (Recomendado)

### Paso 1: Ir a Vercel
Abre: https://vercel.com/new

### Paso 2: Importar Repositorio
1. Haz click en "Continue with GitHub"
2. Autoriza a Vercel
3. Busca: `leandrofuenzalida/leandrofuenzalida.github.io`
4. Haz click en "Import"

### Paso 3: Configurar Proyecto
- **Project Name:** `strava-stellar-rewards` (o tu nombre preferido)
- **Framework Preset:** `Other` (sitio estático)
- **Root Directory:** `./` (default)
- **Build Command:** (dejar vacío - no hay build)
- **Output Directory:** (dejar vacío - default)

### Paso 4: Deploy
- Haz click en "Deploy"
- Espera ~1 minuto
- ¡Listo! Tu URL está generada

---

## Opción 2: Deployment vía CLI (Desde tu máquina)

### Requisitos
```bash
npm install -g vercel
```

### Pasos
```bash
# 1. Clonar el repo
git clone https://github.com/leandrofuenzalida/leandrofuenzalida.github.io
cd leandrofuenzalida.github.io

# 2. Autenticarse con Vercel
vercel login

# 3. Desplegar
vercel deploy --prod

# 4. Ver URL (se mostrará en terminal)
```

---

## Opción 3: Deployment Automático con GitHub

Vercel se sincroniza automáticamente cuando haces push a GitHub:

1. Conecta repo en vercel.com/new
2. Cada push a `main` (o rama configurada) → auto-deploy
3. Cada PR → preview deployment

---

## Resultado Esperado

Después del deployment, obtendrás:

```
✓ URL Principal: https://strava-stellar-rewards.vercel.app
✓ URL Calculadora: https://strava-stellar-rewards.vercel.app/strava-stellar-rewards.html
✓ URL Docs: https://strava-stellar-rewards.vercel.app/strava-stellar-integration.html
```

---

## Variables de Entorno (Opcional)

Si quieres agregar variables, ve a:
**Vercel Dashboard** → **Project Settings** → **Environment Variables**

Predefinidas en `vercel.json`:
- `NEXT_PUBLIC_STRAVA_MCP=true`
- `NEXT_PUBLIC_STELLAR_NETWORK=testnet`

---

## Verificar Deployment

Una vez deployado:

1. **Ver Dashboard:** https://vercel.com/dashboard
2. **Ver Logs:** En Vercel Dashboard → Deployments → Logs
3. **Ver Dominio:** Aparecerá como `*.vercel.app`

---

## Configuración Custom (Opcional)

Si quieres un dominio personalizado:

1. Ve a Vercel Dashboard
2. Selecciona tu proyecto
3. **Settings** → **Domains**
4. Agrega tu dominio (e.g., `strava-stellar.tu-dominio.com`)
5. Actualiza DNS según instrucciones

---

## Troubleshooting

### Error: "Build failed"
- Vercel debería detectar que es sitio estático
- Verifica que `vercel.json` esté en la raíz

### Error: "404 Not Found en páginas"
- Las URLs deben ser exactas: `/strava-stellar-rewards.html`
- No `/strava-stellar-rewards` (sin .html)

### Error: "Timeout"
- Los HTML son pequeños, debería ser instantáneo
- Intenta de nuevo

---

## URLs Rápidas

- 🔗 **Vercel New Project:** https://vercel.com/new
- 📊 **Vercel Dashboard:** https://vercel.com/dashboard
- 📚 **Vercel Docs:** https://vercel.com/docs
- 🐙 **Tu Repo:** https://github.com/leandrofuenzalida/leandrofuenzalida.github.io

---

¡Listo! Tu proyecto está configurado para Vercel. 🎉
