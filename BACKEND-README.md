# E-commerce Multi-Loja com WhatsApp - Sistema Completo

## Visão Geral

Este é um sistema de e-commerce multi-loja que permite a um **Admin Master** gerenciar múltiplas lojas virtuais, onde cada loja tem seu próprio dashboard e vendedores. O sistema é construído com Next.js 14 (App Router) e Supabase como backend.

## Arquitetura do Sistema

### 1. Níveis de Usuário

- **Admin Master**: Controla todo o sistema, cria e gerencia lojas
- **Vendedor/Lojista**: Gerencia apenas sua própria loja (produtos, pedidos, etc.)
- **Cliente**: Navega e compra na loja virtual

### 2. Estrutura Multi-Loja

Cada loja é completamente isolada:
- Produtos próprios
- Categorias próprias
- Banners personalizados
- Configurações independentes
- Domínio/subdomínio próprio (opcional)

## Configuração do Banco de Dados (Supabase)

### Passo 1: Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma nova conta ou faça login
3. Clique em "New Project"
4. Escolha uma organização
5. Defina:
   - **Project Name**: `ecommerce-multi-loja`
   - **Database Password**: (anote esta senha)
   - **Region**: escolha a mais próxima do Brasil
6. Clique em "Create new project"

### Passo 2: Configurar Autenticação

1. No painel do Supabase, vá em **Authentication** → **Providers**
2. Ative o **Email Provider**:
   - Enable email provider: ✅ Ativado
   - Confirm email: ❌ Desativado (para facilitar testes)
   - Enable email confirmations: ❌ Desativado
3. Clique em **Save**

### Passo 3: Executar Scripts SQL

Execute os scripts abaixo **na ordem** no **SQL Editor** do Supabase:

#### Script 1: Estrutura Base das Tabelas

\`\`\`sql
-- =====================================================
-- SCRIPT 1: ESTRUTURA BASE DAS TABELAS
-- =====================================================

-- Remover tabelas existentes (se houver)
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS banners CASCADE;
DROP TABLE IF EXISTS store_settings CASCADE;
DROP TABLE IF EXISTS stores CASCADE;
DROP TABLE IF EXISTS admin_users CASCADE;

-- Remover tipos existentes
DROP TYPE IF EXISTS product_status CASCADE;
DROP TYPE IF EXISTS order_status CASCADE;
DROP TYPE IF EXISTS user_role CASCADE;

-- Criar tipos ENUM
CREATE TYPE product_status AS ENUM ('active', 'inactive', 'draft');
CREATE TYPE order_status AS ENUM ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled');
CREATE TYPE user_role AS ENUM ('admin_master', 'store_owner', 'customer');

-- =====================================================
-- TABELA: admin_users (Usuários Admin Master)
-- =====================================================
CREATE TABLE admin_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role user_role DEFAULT 'admin_master',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- TABELA: stores (Lojas)
-- =====================================================
CREATE TABLE stores (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    store_code VARCHAR(20) NOT NULL UNIQUE, -- Ex: BELLA001, COSM002
    store_name VARCHAR(255) NOT NULL,
    store_description TEXT,
    domain VARCHAR(255), -- Ex: bella.minhaloja.com
    logo_url TEXT,
    primary_color VARCHAR(7) DEFAULT '#000000',
    secondary_color VARCHAR(7) DEFAULT '#ffffff',
    whatsapp_number VARCHAR(20),
    email VARCHAR(255),
    address TEXT,
    is_active BOOLEAN DEFAULT true,
    created_by UUID REFERENCES admin_users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- TABELA: store_users (Usuários das Lojas)
-- =====================================================
CREATE TABLE store_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role user_role DEFAULT 'store_owner',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(auth_user_id, store_id)
);

-- =====================================================
-- TABELA: categories (Categorias por Loja)
-- =====================================================
CREATE TABLE categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(store_id, slug)
);

-- =====================================================
-- TABELA: products (Produtos por Loja)
-- =====================================================
CREATE TABLE products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    compare_price DECIMAL(10,2), -- Preço "De:"
    image_url TEXT,
    image_urls TEXT[], -- Array de URLs de imagens
    sku VARCHAR(100),
    stock_quantity INTEGER DEFAULT 0,
    weight DECIMAL(8,2),
    status product_status DEFAULT 'active',
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- TABELA: banners (Banners por Loja)
-- =====================================================
CREATE TABLE banners (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    subtitle TEXT,
    image_url TEXT,
    link_url TEXT,
    button_text VARCHAR(100),
    position VARCHAR(50) DEFAULT 'hero', -- hero, middle, footer
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- TABELA: orders (Pedidos por Loja)
-- =====================================================
CREATE TABLE orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
    order_number VARCHAR(50) NOT NULL UNIQUE,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255),
    customer_phone VARCHAR(20) NOT NULL,
    customer_address TEXT,
    total_amount DECIMAL(10,2) NOT NULL,
    status order_status DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- TABELA: order_items (Itens dos Pedidos)
-- =====================================================
CREATE TABLE order_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    product_name VARCHAR(255) NOT NULL, -- Snapshot do nome
    product_price DECIMAL(10,2) NOT NULL, -- Snapshot do preço
    quantity INTEGER NOT NULL DEFAULT 1,
    subtotal DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- ÍNDICES PARA PERFORMANCE
-- =====================================================
CREATE INDEX idx_stores_store_code ON stores(store_code);
CREATE INDEX idx_stores_domain ON stores(domain);
CREATE INDEX idx_store_users_store_id ON store_users(store_id);
CREATE INDEX idx_categories_store_id ON categories(store_id);
CREATE INDEX idx_products_store_id ON products(store_id);
CREATE INDEX idx_products_category_id ON products(category_id);
CREATE INDEX idx_banners_store_id ON banners(store_id);
CREATE INDEX idx_orders_store_id ON orders(store_id);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
\`\`\`

#### Script 2: Políticas de Segurança (RLS)

\`\`\`sql
-- =====================================================
-- SCRIPT 2: POLÍTICAS DE SEGURANÇA (RLS)
-- =====================================================

-- Habilitar RLS em todas as tabelas
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- POLÍTICAS PARA admin_users
-- =====================================================
CREATE POLICY "Admin users can manage themselves" ON admin_users
    FOR ALL USING (auth.uid() = auth_user_id);

-- =====================================================
-- POLÍTICAS PARA stores
-- =====================================================
-- Admin Master pode ver e gerenciar todas as lojas
CREATE POLICY "Admin master can manage all stores" ON stores
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE auth_user_id = auth.uid() 
            AND role = 'admin_master'
        )
    );

-- Leitura pública das lojas ativas (para o frontend)
CREATE POLICY "Public can read active stores" ON stores
    FOR SELECT USING (is_active = true);

-- =====================================================
-- POLÍTICAS PARA store_users
-- =====================================================
-- Admin Master pode gerenciar todos os usuários de loja
CREATE POLICY "Admin master can manage store users" ON store_users
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM admin_users 
            WHERE auth_user_id = auth.uid() 
            AND role = 'admin_master'
        )
    );

-- Usuários podem ver apenas sua própria loja
CREATE POLICY "Store users can see their own store" ON store_users
    FOR SELECT USING (auth.uid() = auth_user_id);

-- =====================================================
-- POLÍTICAS PARA categories
-- =====================================================
-- Leitura pública das categorias ativas
CREATE POLICY "Public can read active categories" ON categories
    FOR SELECT USING (is_active = true);

-- Usuários da loja podem gerenciar categorias da sua loja
CREATE POLICY "Store users can manage their categories" ON categories
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM store_users 
            WHERE auth_user_id = auth.uid() 
            AND store_id = categories.store_id
        )
    );

-- =====================================================
-- POLÍTICAS PARA products
-- =====================================================
-- Leitura pública dos produtos ativos
CREATE POLICY "Public can read active products" ON products
    FOR SELECT USING (status = 'active');

-- Usuários da loja podem gerenciar produtos da sua loja
CREATE POLICY "Store users can manage their products" ON products
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM store_users 
            WHERE auth_user_id = auth.uid() 
            AND store_id = products.store_id
        )
    );

-- =====================================================
-- POLÍTICAS PARA banners
-- =====================================================
-- Leitura pública dos banners ativos
CREATE POLICY "Public can read active banners" ON banners
    FOR SELECT USING (is_active = true);

-- Usuários da loja podem gerenciar banners da sua loja
CREATE POLICY "Store users can manage their banners" ON banners
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM store_users 
            WHERE auth_user_id = auth.uid() 
            AND store_id = banners.store_id
        )
    );

-- =====================================================
-- POLÍTICAS PARA orders
-- =====================================================
-- Usuários da loja podem ver pedidos da sua loja
CREATE POLICY "Store users can manage their orders" ON orders
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM store_users 
            WHERE auth_user_id = auth.uid() 
            AND store_id = orders.store_id
        )
    );

-- =====================================================
-- POLÍTICAS PARA order_items
-- =====================================================
-- Usuários da loja podem ver itens dos pedidos da sua loja
CREATE POLICY "Store users can see their order items" ON order_items
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM orders o
            JOIN store_users su ON su.store_id = o.store_id
            WHERE o.id = order_items.order_id
            AND su.auth_user_id = auth.uid()
        )
    );
\`\`\`

#### Script 3: Dados Iniciais

\`\`\`sql
-- =====================================================
-- SCRIPT 3: DADOS INICIAIS
-- =====================================================

-- Criar Admin Master inicial
INSERT INTO admin_users (auth_user_id, name, email, role) VALUES
(
    (SELECT id FROM auth.users WHERE email = 'admin@master.com' LIMIT 1),
    'Admin Master',
    'admin@master.com',
    'admin_master'
);

-- Criar loja de exemplo
INSERT INTO stores (store_code, store_name, store_description, whatsapp_number, created_by) VALUES
(
    'BELLA001',
    'Bella Store',
    'Loja de moda feminina com as últimas tendências',
    '5511999999999',
    (SELECT id FROM admin_users WHERE email = 'admin@master.com' LIMIT 1)
);

-- Criar usuário da loja de exemplo
INSERT INTO store_users (auth_user_id, store_id, name, email, role) VALUES
(
    (SELECT id FROM auth.users WHERE email = 'admin@bellastore.com' LIMIT 1),
    (SELECT id FROM stores WHERE store_code = 'BELLA001' LIMIT 1),
    'Administrador Bella Store',
    'admin@bellastore.com',
    'store_owner'
);

-- Criar categorias de exemplo para a Bella Store
INSERT INTO categories (store_id, name, slug, description) VALUES
(
    (SELECT id FROM stores WHERE store_code = 'BELLA001' LIMIT 1),
    'Vestidos',
    'vestidos',
    'Vestidos elegantes para todas as ocasiões'
),
(
    (SELECT id FROM stores WHERE store_code = 'BELLA001' LIMIT 1),
    'Blusas',
    'blusas',
    'Blusas modernas e confortáveis'
),
(
    (SELECT id FROM stores WHERE store_code = 'BELLA001' LIMIT 1),
    'Calças',
    'calcas',
    'Calças de diversos estilos'
);

-- Criar produtos de exemplo
INSERT INTO products (store_id, category_id, name, description, price, image_url, status) VALUES
(
    (SELECT id FROM stores WHERE store_code = 'BELLA001' LIMIT 1),
    (SELECT id FROM categories WHERE slug = 'vestidos' AND store_id = (SELECT id FROM stores WHERE store_code = 'BELLA001' LIMIT 1) LIMIT 1),
    'Vestido Midi Floral',
    'Lindo vestido midi com estampa floral delicada',
    89.90,
    '/placeholder.svg?height=400&width=300',
    'active'
),
(
    (SELECT id FROM stores WHERE store_code = 'BELLA001' LIMIT 1),
    (SELECT id FROM categories WHERE slug = 'blusas' AND store_id = (SELECT id FROM stores WHERE store_code = 'BELLA001' LIMIT 1) LIMIT 1),
    'Blusa de Seda',
    'Blusa elegante de seda natural',
    65.00,
    '/placeholder.svg?height=400&width=300',
    'active'
);

-- Criar banners de exemplo
INSERT INTO banners (store_id, title, subtitle, position, is_active) VALUES
(
    (SELECT id FROM stores WHERE store_code = 'BELLA001' LIMIT 1),
    'Coleção Primavera/Verão',
    'Descubra as últimas tendências da moda',
    'hero',
    true
),
(
    (SELECT id FROM stores WHERE store_code = 'BELLA001' LIMIT 1),
    'Promoção Especial',
    'Até 50% de desconto em peças selecionadas',
    'middle',
    true
);
\`\`\`

### Passo 4: Criar Usuários de Teste

Execute este script para criar os usuários de teste:

\`\`\`sql
-- =====================================================
-- SCRIPT 4: CRIAR USUÁRIOS DE TESTE
-- =====================================================

-- Criar Admin Master
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_sent_at,
    recovery_token,
    recovery_sent_at,
    email_change_token_new,
    email_change_confirm_status,
    banned_until,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    last_sign_in_at
) VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    'admin@master.com',
    crypt('masteradmin123', gen_salt('bf')),
    NOW(),
    NOW(),
    NOW(),
    '',
    '',
    NULL,
    '',
    NULL,
    '',
    0,
    NULL,
    '{"provider": "email", "providers": ["email"]}',
    '{}',
    NULL,
    NULL
) ON CONFLICT (email) DO NOTHING;

-- Criar usuário da loja Bella Store
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_sent_at,
    recovery_token,
    recovery_sent_at,
    email_change_token_new,
    email_change_confirm_status,
    banned_until,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    last_sign_in_at
) VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    'admin@bellastore.com',
    crypt('bellastore123', gen_salt('bf')),
    NOW(),
    NOW(),
    NOW(),
    '',
    '',
    NULL,
    '',
    NULL,
    '',
    0,
    NULL,
    '{"provider": "email", "providers": ["email"]}',
    '{}',
    NULL,
    NULL
) ON CONFLICT (email) DO NOTHING;
\`\`\`

## Configuração do Frontend (Next.js)

### Passo 1: Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima-aqui

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### Passo 2: Estrutura de Pastas

\`\`\`
src/
├── app/
│   ├── (admin-master)/          # Rotas do Admin Master
│   │   ├── admin/
│   │   │   ├── dashboard/
│   │   │   ├── lojas/
│   │   │   └── usuarios/
│   ├── (store)/                 # Rotas da Loja
│   │   ├── dashboard/
│   │   │   ├── produtos/
│   │   │   ├── categorias/
│   │   │   ├── pedidos/
│   │   │   └── configuracoes/
│   ├── login/
│   └── [store]/                 # Loja pública (ex: /bella001)
├── components/
│   ├── admin/                   # Componentes do Admin Master
│   ├── dashboard/               # Componentes do Dashboard da Loja
│   └── store/                   # Componentes da Loja Pública
└── lib/
    ├── supabase/
    └── utils/
\`\`\`

## Fluxo de Funcionamento

### 1. Admin Master

1. **Login**: `admin@master.com` / `masteradmin123`
2. **Dashboard**: Visualiza todas as lojas
3. **Criar Loja**: 
   - Define código da loja (ex: COSM002)
   - Configura nome, descrição, cores
   - Cria usuário da loja
4. **Gerenciar Lojas**: Ativar/desativar, editar configurações

### 2. Vendedor/Lojista

1. **Login**: `admin@bellastore.com` / `bellastore123`
2. **Dashboard**: Vê apenas dados da sua loja
3. **Gerenciar**:
   - Produtos (CRUD completo)
   - Categorias
   - Pedidos
   - Banners
   - Configurações da loja

### 3. Cliente

1. **Acessa**: `seudominio.com/bella001` ou `bella.seudominio.com`
2. **Navega**: Produtos filtrados apenas da loja BELLA001
3. **Compra**: Via WhatsApp integrado

## Isolamento de Dados

### Por Store ID

Todas as consultas incluem `store_id`:

\`\`\`sql
-- ✅ Correto: Buscar produtos de uma loja específica
SELECT * FROM products WHERE store_id = 'uuid-da-loja';

-- ❌ Errado: Buscar todos os produtos
SELECT * FROM products;
\`\`\`

### Middleware de Rota

\`\`\`typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Detectar loja pela URL
  if (pathname.startsWith('/bella001')) {
    // Redirecionar para a loja específica
    return NextResponse.rewrite(new URL(`/store/bella001${pathname}`, request.url));
  }
}
\`\`\`

## Credenciais de Teste

### Admin Master
- **Email**: `admin@master.com`
- **Senha**: `masteradmin123`
- **Acesso**: `/admin/dashboard`

### Loja Bella Store
- **Email**: `admin@bellastore.com`
- **Senha**: `bellastore123`
- **Acesso**: `/dashboard`
- **Loja Pública**: `/bella001`

## Próximos Passos

1. **Execute os scripts SQL** na ordem apresentada
2. **Configure as variáveis de ambiente**
3. **Teste o login** com as credenciais fornecidas
4. **Implemente as rotas** seguindo a estrutura de pastas
5. **Configure o middleware** para roteamento de lojas
6. **Teste o isolamento** criando uma segunda loja

## Comandos Úteis

\`\`\`bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Verificar tipos TypeScript
npm run type-check
\`\`\`

## Troubleshooting

### Erro: "Database error querying schema"
- Verifique se as variáveis de ambiente estão corretas
- Confirme se o Email Provider está ativo no Supabase
- Execute novamente os scripts SQL

### Erro: "Row Level Security"
- Verifique se as políticas RLS foram criadas
- Confirme se o usuário está autenticado
- Teste com `auth.uid()` no SQL Editor

### Erro: "Foreign key constraint"
- Execute os scripts na ordem correta
- Verifique se as tabelas pai existem antes das filhas
- Confirme se os UUIDs estão sendo gerados corretamente

## Suporte

Para dúvidas ou problemas:
1. Verifique os logs do Supabase
2. Teste as consultas SQL diretamente
3. Confirme as políticas RLS
4. Valide as variáveis de ambiente
