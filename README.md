# TechForWeb - Plataforma de Desenvolvimento Web

Repositório principal da TechForWeb contendo todos os produtos e serviços oferecidos.

## 🏗️ Estrutura do Projeto

### Rotas Principais

- `/` - Landing page principal
- `/servicos` - Lista de serviços oferecidos
- `/projetos` - Portfólio de projetos realizados
- `/politica-privacidade` - Política de privacidade
- `/termos-uso` - Termos de uso

### Produtos

#### Tech Loja
- **Rota:** `/tech-loja` (nova) ou `/servicos/tech-loja` (legado)
- **Descrição:** Plataforma completa de e-commerce sem comissões
- **Status:** ✅ Ativo

#### Viveiro Platform
- **Rota:** `/servicos/viveiro-plataform`
- **Descrição:** Sistema de vendas móveis para viveiros
- **Status:** ⚠️ Em desenvolvimento

#### XixiMaps
- **Rota:** `/xiximaps`
- **Descrição:** Sistema de mapas interativos com agendamento
- **Status:** 🚧 Em desenvolvimento

#### LojaHub
- **Rota:** `/lojashub`
- **Descrição:** Catálogo + sistema de agendamento
- **Status:** 🚧 Em desenvolvimento

## 📁 Estrutura de Pastas

```
app/
├── (marketing)/          # Landing page e páginas institucionais
│   ├── page.tsx
│   ├── politica-privacidade/
│   └── termos-uso/
│
├── (produtos)/           # Produtos da TechForWeb
│   ├── tech-loja/
│   ├── viveiro-platform/
│   ├── xiximaps/
│   └── lojashub/
│
├── servicos/             # Página de listagem de serviços
└── projetos/             # Portfólio

components/
├── ui/                   # Componentes shadcn/ui (biblioteca base)
├── header.tsx            # Header compartilhado
├── footer.tsx            # Footer compartilhado
└── [outros componentes de marketing]

hooks/
├── use-mobile.tsx        # Hook para detectar mobile
└── use-toast.ts          # Hook para toasts
```

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (componentes UI)
- **Lucide React** (ícones)

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Executar produção
pnpm start
```

## 📚 Documentação Adicional

- `BACKEND-README.md` - Documentação do backend (Supabase)
- `CATALOGO-README.md` - Documentação do catálogo e-commerce
- `DASHBOARD-README.md` - Documentação do dashboard
- `ANALISE-REPOSITORIO.md` - Análise completa do repositório

## 🔄 Organização por Produtos

Todos os produtos estão organizados em `app/(produtos)/` para facilitar a manutenção e escalabilidade. Cada produto possui:

- `layout.tsx` - Layout específico do produto
- `page.tsx` - Página principal do produto
- Sub-rotas específicas conforme necessário

## 📝 Notas

- As rotas antigas em `/servicos/tech-loja` ainda funcionam para compatibilidade, mas a rota recomendada é `/tech-loja`
- Componentes duplicados foram removidos e unificados
- Hooks estão centralizados em `hooks/`

## 🤝 Contribuindo

Este é um repositório privado da TechForWeb. Para dúvidas ou sugestões, entre em contato através do WhatsApp: (14) 99614-5415

---

**TechForWeb** - Desenvolvimento Web Profissional
