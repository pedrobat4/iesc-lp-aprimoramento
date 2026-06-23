// =============================================================
//  IESC — LP 02 · APRIMORAMENTO E PROFISSIONALIZANTES
//  Ponto único de configuração de conteúdo, contato e oferta.
//  Edite aqui sem mexer nos componentes.
// =============================================================

export const contato = {
  // Telefone informado pela escola (Montes Claros - 38)
  telefone: "3832208924",
  telefoneFormatado: "(38) 3220-8924",
  // Número usado nos botões de WhatsApp (formato internacional, só dígitos).
  // ⚠️ TROCAR pelo WhatsApp REAL da escola (celular). O número acima é fixo/landline.
  whatsapp: "553832208924",
  endereco: "R. Correia Machado, 865 — Centro, Montes Claros/MG",
  instagram: "https://instagram.com/iescmontesclaros",
};

export const oferta = {
  precoDe: "149,90",
  precoPor: "69,90",
  validade: "de 19/06 a 03/07",
  // Data/hora final da promoção para o contador regressivo (horário local)
  fimPromocao: "2026-07-03T23:59:59",
  inicioAulas: "28 de agosto",
  inicioAulasCurto: "28/08",
};

export const mensagemWhatsApp =
  "Olá! Vim pela página de *Aprimoramento e Profissionalizantes do IESC* e quero garantir minha matrícula promocional de R$ 69,90.";

export type Curso = {
  nome: string;
  turno: string;
  descricao: string;
  imagem: string;
  destaque?: boolean;
  tag?: string;
  /** Classe Tailwind de object-position p/ enquadrar a foto (ex.: "object-top"). */
  pos?: string;
};

export const cursos: Curso[] = [
  {
    nome: "Banco de Sangue",
    turno: "Noturno",
    tag: "Aprimoramento",
    descricao:
      "Especialize-se em coleta, processamento e controle de hemocomponentes em hemocentros e laboratórios.",
    imagem: "/img/urgencia-emergencia-rcp.jpg",
    destaque: true,
  },
  {
    nome: "Urgência e Emergência",
    turno: "Noturno",
    tag: "Aprimoramento",
    descricao:
      "Domine o atendimento em situações críticas e destaque-se no pronto-socorro e no SAMU.",
    imagem: "/img/laboratorio-banco-sangue.jpg",
  },
  {
    nome: "Instrumentação Cirúrgica",
    turno: "Noturno",
    tag: "Aprimoramento",
    descricao:
      "Torne-se referência em centro cirúrgico, uma das áreas mais valorizadas da enfermagem.",
    imagem: "/img/enfermagem-instrumentacao.jpg",
  },
  {
    nome: "Auxiliar de Veterinária",
    turno: "Horário a definir",
    tag: "Profissionalizante",
    descricao:
      "Entre no crescente mercado pet auxiliando no cuidado e na saúde dos animais.",
    imagem: "/img/estudante-veterinaria.jpg",
    pos: "object-top",
  },
];

export const beneficios: { titulo: string; texto: string; icon: string }[] = [
  {
    titulo: "Curta duração",
    texto: "Qualifique-se rápido e já comece a colher resultados.",
    icon: "clock",
  },
  {
    titulo: "Conteúdo atualizado",
    texto: "Programa alinhado às exigências atuais do mercado.",
    icon: "refresh",
  },
  {
    titulo: "Professores atuantes",
    texto: "Aprenda com quem está na linha de frente da área.",
    icon: "users",
  },
  {
    titulo: "Formação prática",
    texto: "Treinamento hands-on para aplicar no primeiro dia.",
    icon: "flask",
  },
  {
    titulo: "Certificação",
    texto: "Comprovante que valoriza e diferencia seu currículo.",
    icon: "shield",
  },
];

export const porqueIesc: { titulo: string; texto: string }[] = [
  {
    titulo: "Aprimoramento que abre portas",
    texto: "Novas oportunidades, promoções e crescimento profissional.",
  },
  {
    titulo: "Estrutura completa",
    texto: "Ambientes preparados para aulas teóricas e práticas.",
  },
  {
    titulo: "Ensino focado no mercado",
    texto: "Conteúdo conectado ao que as instituições procuram.",
  },
  {
    titulo: "Certificação reconhecida",
    texto: "Diploma com valor onde você quiser atuar.",
  },
];

export const stats: { numero: string; rotulo: string }[] = [
  { numero: "+15", rotulo: "anos de tradição" },
  { numero: "4", rotulo: "especializações" },
  { numero: "28/08", rotulo: "início das aulas" },
  { numero: "100%", rotulo: "foco no mercado" },
];

// Lista de opções do <select> do formulário
export const opcoesCurso = cursos.map(
  (c) => `${c.nome} (${c.tag}) — ${c.turno}`
);

// Textos das seções (a mesma estrutura é usada nas duas LPs)
export const copy = {
  hero: {
    badge: `Início das aulas: ${oferta.inicioAulasCurto}`,
    titulo: "Atualize seu currículo e ",
    tituloDestaque: "aumente suas oportunidades.",
    subtitulo:
      "Cursos de especialização e qualificação para quem deseja se destacar no mercado da saúde.",
    cta: "Quero garantir minha vaga",
    imagem: "/img/laboratorio-banco-sangue.jpg",
  },
  cursosSecao: {
    eyebrow: "Cursos disponíveis",
    titulo: "Especialize-se nas áreas que mais valorizam",
    subtitulo:
      "Turmas com vagas limitadas e início em " + oferta.inicioAulas + ".",
  },
  beneficiosSecao: {
    eyebrow: "Diferencial profissional",
    titulo: "O mercado busca quem se qualifica",
  },
  porqueSecao: {
    eyebrow: "Por que escolher o IESC?",
    titulo: "Aprimoramento que abre portas",
    imagem: "/img/campus-recepcao.jpg",
  },
  finalCta: {
    titulo: "Invista na sua carreira com matrícula promocional",
    subtitulo:
      "Aproveite a condição especial de lançamento e reserve sua vaga. As turmas iniciam em " +
      oferta.inicioAulas +
      ".",
    botao: "Quero garantir minha vaga",
  },
  formulario: {
    titulo: "Garanta sua vaga com matrícula promocional",
    subtitulo:
      "Preencha seus dados e nossa equipe entra em contato pelo WhatsApp para finalizar sua matrícula.",
    botao: "QUERO GARANTIR MINHA VAGA",
  },
};

