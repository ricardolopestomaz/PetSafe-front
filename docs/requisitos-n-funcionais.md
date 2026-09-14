# 📚 Requisitos Não Funcionais

| Id | RNF01 |
|---|---|
| Descrição | O sistema deve garantir que um tutor só possa visualizar, editar ou excluir os pets vinculados a ele, através de Row Level Security (RLS) no Supabase. |

| Id | RNF02 |
|---|---|
| Descrição | A página pública de leitura da medalha deve carregar em até 3 segundos, mesmo em conexões móveis mais lentas. |

| Id | RNF03 |
|---|---|
| Descrição | O sistema deve estar disponível 99% do tempo durante o período de uso, considerando a infraestrutura gerenciada pelo Supabase. |

| Id | RNF04 |
|---|---|
| Descrição | A tela de leitura da medalha deve ter interface simples e intuitiva, utilizável por qualquer pessoa que encontre o pet, sem necessidade de instalar o aplicativo. |

| Id | RNF05 |
|---|---|
| Descrição | O aplicativo do tutor deve ser compatível com iOS e Android através do Expo/React Native, e o site de leitura da medalha deve funcionar em qualquer navegador moderno. |

| Id | RNF06 |
|---|---|
| Descrição | O sistema deve fornecer mensagens de erro claras e compreensíveis ao usuário em falhas de cadastro, login ou leitura de medalha. |

| Id | RNF07 |
|---|---|
| Descrição | O banco de dados deve ser modelado de forma a suportar crescimento no número de tutores, pets e leituras sem perda significativa de performance. |

| Id | RNF08 |
|---|---|
| Descrição | Dados sensíveis (senhas, tokens de autenticação) devem ser gerenciados exclusivamente pelo Supabase Auth, nunca armazenados em texto plano nas tabelas da aplicação. |

| Id | RNF09 |
|---|---|
| Descrição | A localização capturada durante uma leitura de medalha só deve ser registrada mediante permissão explícita do usuário que realizou o scan. |