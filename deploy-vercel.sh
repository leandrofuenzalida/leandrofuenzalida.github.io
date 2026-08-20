#!/bin/bash

# Script para desplegar en Vercel
# Uso: bash deploy-vercel.sh

set -e

echo "🚀 Iniciando deployment a Vercel..."
echo ""

# Verificar Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI no está instalado"
    echo "Instálalo con: npm install -g vercel"
    exit 1
fi

echo "✓ Vercel CLI encontrado"
echo ""

# Verificar token
if [ -z "$VERCEL_TOKEN" ]; then
    echo "⚠️  VERCEL_TOKEN no configurado"
    echo ""
    echo "Opción 1: Pasar token como variable:"
    echo "  VERCEL_TOKEN=tu_token bash deploy-vercel.sh"
    echo ""
    echo "Opción 2: Autenticarse interactivamente:"
    echo "  vercel login"
    echo ""
    echo "Continúa con autenticación interactiva..."
    echo ""
fi

# Desplegar
echo "📤 Desplegando a Vercel..."
vercel deploy --prod --confirm

echo ""
echo "✅ ¡Deployment completado!"
echo ""
echo "Verifica tu proyecto en: https://vercel.com/dashboard"
