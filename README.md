# Foco Estudo

![Foco Estudo Logo](public/logo.png)

Um aplicativo completo para gestão de estudos, focado em estudantes que estão se preparando para vestibulares e concursos.

## 📚 Sobre o Projeto

Foco Estudo é uma plataforma que ajuda estudantes a organizarem melhor seu tempo de estudo, acompanharem seu progresso e identificarem áreas que precisam de mais atenção. Com ferramentas como cronogramas, análise de desempenho e banco de questões, o Foco Estudo visa maximizar a eficiência do tempo de estudo.

### 🌟 Principais Funcionalidades

- **Dashboard Analítico**: Acompanhe seu tempo de estudo, progresso e desempenho.
- **Cronograma Personalizado**: Organize suas sessões de estudo de acordo com suas necessidades.
- **Banco de Questões**: Pratique com questões específicas para cada disciplina.
- **Análise de Lacunas**: Identifique quais áreas precisam de mais atenção.
- **Recursos de Estudo**: Acesse materiais organizados por disciplina.
- **Simulados**: Faça testes que simulam o ambiente de prova.
- **Redação**: Ferramenta para praticar redação e receber feedback.

## 🛠️ Tecnologias Utilizadas

O projeto é construído utilizando as seguintes tecnologias:

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Autenticação**: Supabase Auth
- **Backend**: Supabase (BaaS)
- **Visualização de Dados**: Recharts
- **Estilização**: Tailwind CSS

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou pnpm

### Configuração do Ambiente Local

1. Clone o repositório:
   ```bash
   git clone https://github.com/RonaldoChiavegatti/estuda-foco.git
   cd estuda-foco
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env.local` na raiz do projeto 
   - Adicione as variáveis de ambiente necessárias para o Supabase:
     ```
     NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
     NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
     ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

5. Acesse o aplicativo em `http://localhost:3000`

## 📝 Estrutura do Projeto

```
foco-estudo/
├── app/                    # Estrutura de rotas do Next.js
│   ├── (auth)/             # Rotas relacionadas à autenticação
│   ├── (protected)/        # Rotas protegidas por autenticação
│   └── ...
├── components/             # Componentes React reutilizáveis
│   ├── ui/                 # Componentes de UI básicos
│   └── ...                 # Componentes específicos da aplicação
├── contexts/               # Contextos React
├── hooks/                  # Custom hooks
├── lib/                    # Utilitários e configurações
├── public/                 # Arquivos estáticos
└── styles/                 # Estilos globais
```

## 🔒 Autenticação

O projeto utiliza Supabase Auth para autenticação de usuários, oferecendo:
- Login com email/senha
- Login social (Google, etc.)
- Recuperação de senha
- Verificação de email

## 🌐 Deployment

O projeto está configurado para ser facilmente deployado em plataformas como Vercel ou Netlify.

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.

## 👨‍💻 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

Ronaldo Chiavegatti - [ronaldo.chiavegatti@email.com](mailto:ronaldo.chiavegatti@email.com)

Link do Projeto: [https://github.com/RonaldoChiavegatti/estuda-foco](https://github.com/RonaldoChiavegatti/estuda-foco) # estuda-foco
