# 📚 Requisitos Funcionais

| Id | RF01 |
|---|---|
| Nome | Cadastro de Tutor |
| Descrição | O sistema deve permitir que visitantes se cadastrem informando nome, e-mail, telefone e senha. |
| Tarefa | - Criar formulário de cadastro<br>- Validar campos (nome, e-mail, telefone, senha)<br>- Criar usuário via Supabase Auth<br>- Salvar perfil na tabela `perfis`<br>- Exibir mensagem de erro de forma visual na interface, em caso de falha |

| Id | RF02 |
|---|---|
| Nome | Login e Autenticação |
| Descrição | O sistema deve permitir que tutores cadastrados realizem login com e-mail e senha, permanecendo autenticados entre sessões. |
| Tarefa | - Criar formulário de login<br>- Autenticar via Supabase Auth (email/senha)<br>- Persistir sessão (AsyncStorage/localStorage conforme plataforma)<br>- Criar função de logout |

| Id | RF03 |
|---|---|
| Nome | Cadastro de Pet |
| Descrição | O sistema deve permitir que o tutor cadastre um pet informando nome, espécie, raça, data de nascimento, foto e observações. |
| Tarefa | - Criar formulário de cadastro de pet<br>- Validar campos obrigatórios<br>- Salvar pet vinculado ao tutor autenticado (`tutor_id`)<br>- Permitir upload de foto via Supabase Storage |

| Id | RF04 |
|---|---|
| Nome | Edição e Exclusão de Pet |
| Descrição | O sistema deve permitir que o tutor edite ou remova os dados de um pet vinculado a ele. |
| Tarefa | - Criar tela de edição de pet<br>- Restringir edição/exclusão apenas ao tutor vinculado (via RLS)<br>- Confirmar exclusão antes de remover |

| Id | RF05 |
|---|---|
| Nome | Geração e Ativação da Medalha |
| Descrição | O sistema deve gerar um código único de medalha para cada pet e permitir sua ativação/desativação. |
| Tarefa | - Gerar código único por medalha<br>- Vincular medalha a um pet<br>- Permitir ativar/desativar a medalha |

| Id | RF06 |
|---|---|
| Nome | Leitura da Medalha (Scan) |
| Descrição | O sistema deve permitir que qualquer pessoa, ao escanear a medalha (QR Code/NFC), visualize os dados do pet e do tutor sem necessidade de login. |
| Tarefa | - Criar página pública de leitura da medalha<br>- Exibir dados do pet e contato do tutor<br>- Registrar a leitura na tabela `leituras` |

| Id | RF07 |
|---|---|
| Nome | Registro de Localização da Leitura |
| Descrição | O sistema deve registrar a localização (latitude/longitude) e o horário sempre que uma medalha for escaneada. |
| Tarefa | - Capturar geolocalização do navegador/dispositivo no momento do scan<br>- Salvar latitude, longitude e data/hora na tabela `leituras`<br>- Solicitar permissão de localização ao usuário |

| Id | RF08 |
|---|---|
| Nome | Contatos de Emergência |
| Descrição | O sistema deve permitir que o tutor cadastre contatos de emergência associados ao pet, com nome, telefone e prioridade. |
| Tarefa | - Criar formulário de contato de emergência<br>- Ordenar contatos por prioridade<br>- Exibir contatos na tela pública de leitura da medalha |

| Id | RF09 |
|---|---|
| Nome | Gerenciamento de Assinatura |
| Descrição | O sistema deve permitir que o tutor visualize e escolha entre os planos disponíveis (Básico, Premium, Família). |
| Tarefa | - Exibir planos disponíveis com seus benefícios<br>- Registrar assinatura ativa do tutor<br>- Controlar status da assinatura (ativa, cancelada, expirada) |

| Id | RF10 |
|---|---|
| Nome | Edição de Perfil do Tutor |
| Descrição | O sistema deve permitir que o tutor edite seus próprios dados cadastrais (nome, telefone, endereço). |
| Tarefa | - Criar tela de edição de perfil<br>- Validar e salvar alterações na tabela `perfis`<br>- Exibir mensagem de sucesso/erro |