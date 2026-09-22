import { Product, OrderBumpItem } from '../types';

export const ORDER_BUMP: OrderBumpItem = {
  id: 'order-bump-precificacao',
  title: 'Manual Prático de Precificação, Fichas de TCLE & Vendas na Estética',
  subtitle: 'Oferta exclusiva de balcão (Apenas nesta tela)',
  price: 97,
  originalPrice: 297,
  description:
    'Planilha automatizada de custo por disparo/dose, modelos de contratos e termos de consentimento validados juridicamente pela Dra. Paula Fischer.',
};

export const CLINIC_INFO = {
  name: 'Clínica Dra. Paula Fischer',
  specialist: 'Dra. Paula Fischer',
  role: 'Especialista em Laserterapia Avançada e Estética Regenerativa e Íntima',
  crm: 'CRM/SP & Especialista Chancelada',
  phone: '(11) 96620-9116',
  whatsappRaw: '5511966209116',
  address: 'Rua Dr. Ângelo Vita, 43',
  city: 'São Paulo - SP',
  hours: 'Segunda a Sexta: 08h às 19h | Sábados: 08h às 13h',
};

export const PRODUCTS: Product[] = [
  // ==========================================
  // TREINAMENTOS & CERTIFICAÇÕES
  // ==========================================
  {
    id: 'mentoria-laser-co2',
    originalName: 'Mentoria/Imersão de Laser CO2',
    title: 'Imersão Master em Laser CO2 Fracionado: Prática Clínica & Alta Lucratividade',
    slug: 'imersao-master-laser-co2',
    category: 'treinamentos',
    categoryLabel: 'Treinamentos & Certificações',
    audience: 'profissional',
    price: 5500,
    originalPrice: 7900,
    installments: { count: 12, value: 548.2 },
    pixDiscountPercent: 5,
    hours: 20,
    badge: 'Turma VIP • 6 Vagas',
    urgencyText: 'Apenas 2 vagas restantes para o próximo ciclo com a Dra. Paula',
    deliveryType: 'Mentoria Presencial / Híbrida',
    format: 'Mentoria Presencial/Híbrida',
    socialProof: {
      countLabel: '+380 profissionais certificados',
      rating: 5.0,
      reviewsCount: 142,
    },
    benefitBullets: [
      'Domínio completo de densidade, pulso e profundidade para tratar rugas, cicatrizes e flacidez sem intercorrências',
      'Atendimento prático "hands-on" com pacientes reais supervisionado diretamente pela Dra. Paula Fischer',
      'Estratégia de retorno de investimento: aprenda a cobrar entre R$ 800 e R$ 2.500 por sessão e recuperar o valor em 3 atendimentos',
      'Dossiê completo de parâmetros clínicos de disparo para mais de 12 patologias estéticas',
      'Certificado de Capacitação Chancelado de 20h + Suporte contínuo via grupo VIP exclusivo por 6 meses',
    ],
    shortDescription:
      'A capacitação mais requisitada para dominar o Laser CO2 Fracionado na prática. Perca o medo das intercorrências, execute com segurança médica e multiplique o faturamento da sua clínica.',
    longDescription: {
      problem:
        'A maioria dos profissionais adquire ou aluga a máquina de Laser CO2 Fracionado, mas sente insegurança com manchas pós-inflamatórias, queimaduras ou protocolos genéricos que não geram resultados visíveis.',
      agitation:
        'Essa falta de domínio técnico gera medo na hora de disparar, impede a cobrança de tickets de alto valor e deixa sua agenda vazia enquanto concorrentes faturam múltiplos 5 dígitos por semana com a mesma tecnologia.',
      solution:
        'A Imersão Master foi concebida pela Dra. Paula Fischer para entregar 20 horas de pura prática e segurança. Você terá os exatos parâmetros testados em mais de 1.800 pacientes, dominando a conduta pré, intra e pós-laser.',
      authorityNote:
        'Ministrado pessoalmente pela Dra. Paula Fischer na sede da clínica em São Paulo, com turmas estritamente reduzidas para garantir supervisão olho no olho.',
    },
    whatsIncluded: [
      'Acesso à Imersão Presencial/Híbrida de 20 Horas com a Dra. Paula Fischer',
      'Prática clínica "Hands-On" em pacientes modelo fornecidos pela clínica',
      'Caderno de Parâmetros Clínicos Exclusivos (mJ, densidade e passadas)',
      'Fichas de Anamnese Específica e TCLE Jurídico para Laser',
      'Protocolos de Pré-Laser e Home Care Pós-Laser para evitar hipercromia',
      'Certificado Oficial Chancelado de 20 Horas',
      'Acesso ao Grupo VIP de Mentoria no WhatsApp para tirar dúvidas de casos clínicos por 6 meses',
    ],
    guaranteeDays: 7,
    guaranteeDescription:
      'Garantia Incondicional de 7 dias: se até o primeiro módulo você não sentir total clareza e segurança, devolvemos 100% do seu investimento.',
    bonuses: [
      {
        title: 'Masterclass: Como Captar Pacientes de Laser CO2 pelo Instagram',
        value: 997,
        description: 'Scripts prontos e anúncios que trazem pacientes particulares qualificados.',
      },
      {
        title: 'Guia de Prescrição Dermatológica Pré e Pós-Disparo',
        value: 497,
        description: 'Fórmulas magistrais manipuladas prontas para mandar manipular.',
      },
    ],
    testimonials: [
      {
        id: 't-co2-1',
        name: 'Dra. Camila Menezes',
        role: 'Biomédica Esteta • São Paulo/SP',
        avatar: 'https://images.unsplash.com/photo-1594824813571-638f02614d3f?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Eu tinha pavor de hiperpigmentação pós-inflamatória. Na imersão com a Dra. Paula, ajustei meus parâmetros e na primeira semana atendi 4 pacientes de Full Face. Já recuperei 3 vezes o valor do treinamento!',
        verified: true,
        date: 'Há 2 semanas',
      },
      {
        id: 't-co2-2',
        name: 'Dr. Lucas Silveira',
        role: 'Médico Dermatologista • Campinas/SP',
        avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'A didática da Dra. Paula é cirúrgica. Não tem enrolação teórica de slides: é caso clínico real, disparo, densidade e condução de pós. Impecável!',
        verified: true,
        date: 'Há 1 mês',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-master-laser-co2',
  },

  {
    id: 'mentoria-ninfoplastia-sem-corte',
    originalName: 'Mentoria/Imersão de Ninfoplastia Sem Corte',
    title: 'Mentoria VIP em Ninfoplastia Sem Corte: O Procedimento Íntimo Mais Lucrativo',
    slug: 'mentoria-ninfoplastia-sem-corte',
    category: 'treinamentos',
    categoryLabel: 'Treinamentos & Certificações',
    audience: 'profissional',
    price: 4999,
    originalPrice: 6900,
    installments: { count: 12, value: 498.3 },
    pixDiscountPercent: 5,
    hours: 20,
    badge: 'Alta Lucratividade • VIP',
    urgencyText: 'Apenas 3 vagas abertas para a turma com prática íntima guiada',
    deliveryType: 'Mentoria Presencial / Híbrida',
    format: 'Mentoria Presencial/Híbrida',
    socialProof: {
      countLabel: '+290 especialistas formadas',
      rating: 5.0,
      reviewsCount: 98,
    },
    benefitBullets: [
      'Aprenda a técnica minimamente invasiva que retrai pequenos lábios sem bisturi, sem pontos e sem repouso cirúrgico',
      'Ticket médio de R$ 1.800 a R$ 3.500 por sessão com custo de consumíveis extremamente baixo',
      'Prática intensiva de anatomia vulvar, anestesia tópica/infiltrativa sem dor e calibração milimétrica de energia',
      'Comunicação de vendas e quebra de tabus: como orientar a paciente e fechar planos íntimos de alto valor',
      'Supervisão clínica direta da Dra. Paula Fischer em ambiente ambulatorial de referência',
    ],
    shortDescription:
      'Posicione-se no topo da Estética Íntima com o procedimento mais desejado pelas mulheres modernas. Recupere a autoestima da sua paciente sem cortes cirúrgicos e alavanque seus rendimentos.',
    longDescription: {
      problem:
        'A procura por correção de hipertrofia dos pequenos lábios e flacidez íntima disparou 300% no Brasil, mas 90% das mulheres fogem da cirurgia tradicional por medo de cortes, dor, infecção e afastamento do trabalho.',
      agitation:
        'Enquanto a maioria dos profissionais ignora esse nicho de altíssima demanda, você deixa de lucrar com pacientes particulares que pagam à vista por um procedimento que dura menos de 45 minutos.',
      solution:
        'A Mentoria de Ninfoplastia Sem Corte da Dra. Paula Fischer ensina o passo a passo seguro para remodelação e retração tecidual imediata, proporcionando recuperação rápida, alta satisfação e retorno financeiro veloz.',
      authorityNote:
        'A Dra. Paula Fischer é pioneira no protocolo não cirúrgico, com casuística superior a 600 procedimentos íntimos documentados e zero intercorrências graves.',
    },
    whatsIncluded: [
      '20 horas de Treinamento Imersivo com demonstração ao vivo e prática supervisionada',
      'Protocolo Exclusivo de Anestesia Confortável (zero dor para a paciente)',
      'Checklist de Parâmetros de Disparo e Retração Vulvar',
      'Termo de Consentimento Livre e Esclarecido (TCLE) validado juridicamente',
      'Kit de Orientações Pós-Procedimento para Entrega à Paciente',
      'Certificado de Habilitação em Ninfoplastia Não Cirúrgica',
      'Acesso direto à Dra. Paula Fischer para discussão de condutas clínicas',
    ],
    guaranteeDays: 7,
    guaranteeDescription:
      'Garantia Incondicional de 7 dias com devolução integral do valor caso o método não corresponda às suas expectativas.',
    bonuses: [
      {
        title: 'Módulo Bônus: Protocolo de Clareamento Íntimo Combinado',
        value: 1200,
        description: 'Técnica associada para dobrar o ticket médio de cada atendimento íntimo.',
      },
      {
        title: 'Script de Abordagem Ética e Consultoria Íntima no WhatsApp',
        value: 500,
        description: 'Como responder dúvidas íntimas de pacientes com elegância e alta taxa de conversão.',
      },
    ],
    testimonials: [
      {
        id: 't-ninfo-1',
        name: 'Dra. Mariana Prado',
        role: 'Enfermeira Esteta • Rio de Janeiro/RJ',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Eu achava que ninfoplastia era só cirurgia plástica com bisturi. A Dra. Paula nos deu um método seguro e elegante. Na minha primeira semana vendi 2 procedimentos a R$ 2.200 cada!',
        verified: true,
        date: 'Há 3 semanas',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-linha-intima',
  },

  // ==========================================
  // PROTOCOLOS — LASER CO2
  // ==========================================
  {
    id: 'laser-co2-face',
    originalName: 'Laser CO2 Face',
    title: 'Protocolo Resurfacing Laser CO2 Facial: Renovação Dérmica & Poros Fechados',
    slug: 'laser-co2-face',
    category: 'laser-co2',
    categoryLabel: 'Protocolos a Laser CO2',
    audience: 'paciente',
    price: 800,
    originalPrice: 1200,
    installments: { count: 12, value: 79.8 },
    pixDiscountPercent: 5,
    badge: 'Entrada Facilitada',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+620 sessões realizadas',
      rating: 4.9,
      reviewsCount: 89,
    },
    benefitBullets: [
      'Estímulo intensivo de novo colágeno com afinamento da textura da pele logo na primeira sessão',
      'Redução visível de poros dilatados e uniformização suave de manchas superficiais',
      'Protocolo rápido (cerca de 40 minutos) com anestesia tópica potente para máximo conforto',
      'Recuperação controlada com guia completo de Home Care entregue no dia',
      'Atendimento realizado em ambiente médico estéril sob a responsabilidade da Dra. Paula Fischer',
    ],
    shortDescription:
      'Uma pele radiante, renovada e com textura de porcelana. O protocolo inicial de Laser CO2 para quem quer apagar o aspecto cansado e rejuvenescer o rosto com segurança.',
    longDescription: {
      problem:
        'Com o passar dos anos, o estresse, a poluição e a perda natural de colágeno deixam a pele com aspecto opaco, poros abertos e pequenas irregularidades que a maquiagem já não disfarça.',
      agitation:
        'Cremes caros e peelings superficiais apenas arranham a superfície, exigindo meses de uso sem gerar a firmeza e o brilho que você realmente merece.',
      solution:
        'O Protocolo Laser CO2 Face atua com microfeixes fracionados que vaporizam as camadas envelhecidas e forçam a derme a produzir fibras jovens de elastina e colágeno.',
      authorityNote:
        'Cada parâmetro é calibrado individualmente pela equipe médica da Clínica Dra. Paula Fischer, respeitando seu fototipo e rotina.',
    },
    whatsIncluded: [
      'Avaliação Clínica e Mapeamento Cutâneo com a equipe da Dra. Paula Fischer',
      'Aplicação Completa do Laser CO2 Fracionado nas regiões faciais indicadas',
      'Protocolo Anestésico Tópico de Alta Eficácia sem desconforto',
      'Máscara Calmante Oclusiva Pós-Disparo imediata',
      'Guia Impresso e Digital de Cuidados Pós-Procedimento Passo a Passo',
      'Canal Direto de WhatsApp para Acompanhamento nos dias seguintes',
    ],
    guaranteeDays: 7,
    guaranteeDescription:
      'Garantia de Conduta Ética: consulta detalhada de alinhamento de expectativas antes de qualquer disparo.',
    bonuses: [
      {
        title: 'Kit Primeiros Cuidados: Emulsão Calmante Regeneradora',
        value: 140,
        description: 'Frasco manipulado para aceleração da cicatrização pós-laser.',
      },
    ],
    testimonials: [
      {
        id: 't-cf-1',
        name: 'Patrícia Albuquerque',
        role: 'Paciente • 39 anos',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Minha pele parecia outra após 10 dias! Os poros do nariz e bochechas simplesmente fecharam. Atendimento impecável na Rua Dr. Ângelo Vita.',
        verified: true,
        date: 'Há 1 mês',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f4864c39121?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-bioestimulacao-total',
  },

  {
    id: 'laser-co2-full-face',
    originalName: 'Laser CO2 Full Face',
    title: 'Protocolo Laser CO2 Full Face Ultra-Colágeno: Rejuvenescimento Global & Rugas',
    slug: 'laser-co2-full-face',
    category: 'laser-co2',
    categoryLabel: 'Protocolos a Laser CO2',
    audience: 'paciente',
    price: 1500,
    originalPrice: 2200,
    installments: { count: 12, value: 149.5 },
    pixDiscountPercent: 5,
    badge: 'Mais Desejado • Alta Conversão',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+1.120 tratamentos Full Face',
      rating: 5.0,
      reviewsCount: 215,
    },
    benefitBullets: [
      'Tratamento global cobrindo testa, glabela, área dos olhos, bochechas, buço, mandíbula e queixo',
      'Atenuação expressiva de rugas estáticas profundas e linhas de expressão persistentes',
      'Efeito lifting biológico pelo encurtamento imediato das fibras elásticas de colágeno',
      'Clareamento homogêneo de melasmas resistentes e manchas solares acumuladas',
      'Protocolo consolidado com a assinatura e supervisão da Dra. Paula Fischer',
    ],
    shortDescription:
      'O padrão ouro absoluto em rejuvenescimento facial. Recupere até 7 anos na jovialidade da sua pele em uma única sessão profunda e transformadora.',
    longDescription: {
      problem:
        'Linhas ao redor dos olhos, "código de barras" no buço e a perda de contorno facial começam a pesar no espelho, transmitindo um ar de cansaço que não condiz com sua energia.',
      agitation:
        'A perda progressiva de 1% de colágeno ao ano após os 25 anos deixa a derme fina e sem sustentação. Procedimentos pontuais não dão conta de uma face inteira envelhecida.',
      solution:
        'O Laser CO2 Full Face entrega densidade controlada em toda a superfície do rosto, provocando um processo de renovação celular profundo que refaz a arquitetura dérmica.',
      authorityNote:
        'Procedimento realizado com os parâmetros consagrados pela Dra. Paula Fischer, garantindo rejuvenescimento autêntico sem artificialismos.',
    },
    whatsIncluded: [
      'Mapeamento Facial 360° pré-tratamento',
      'Sessão Completa do Laser CO2 Fracionado em toda a face (Full Face)',
      'Aplicação direcionada com ponteira de precisão para área periorbital e perioral',
      'Protocolo anestésico tópico hospitalar',
      'Kit Home Care Exclusivo de Recuperação Rápida',
      'Retorno presencial para avaliação dermatoscópica pós-recuperação',
    ],
    guaranteeDays: 7,
    guaranteeDescription:
      'Acompanhamento pós-laser prioritário com plantão de dúvidas direto com a enfermeira da Dra. Paula.',
    bonuses: [
      {
        title: 'Sessão Bônus de Ledterapia Fotoativa Pós-Laser',
        value: 250,
        description: 'Acelera a cicatrização e reduz a vermelhidão em até 50%.',
      },
    ],
    testimonials: [
      {
        id: 't-ff-1',
        name: 'Renata Vasconcellos',
        role: 'Paciente • 47 anos',
        avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Fiz o Full Face com a Dra. Paula e foi a melhor decisão estética da minha vida! As linhas da testa e o buço praticamente sumiram.',
        verified: true,
        date: 'Há 3 semanas',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-master-laser-co2',
  },

  {
    id: 'laser-co2-maos',
    originalName: 'Laser CO2 Mãos',
    title: 'Protocolo Rejuvenescimento de Mãos a Laser: Despigmentação & Turgor',
    slug: 'laser-co2-maos',
    category: 'laser-co2',
    categoryLabel: 'Protocolos a Laser CO2',
    audience: 'paciente',
    price: 500,
    originalPrice: 850,
    installments: { count: 12, value: 49.8 },
    pixDiscountPercent: 5,
    badge: 'Alta Satisfação',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+430 pacientes atendidas',
      rating: 4.9,
      reviewsCount: 65,
    },
    benefitBullets: [
      'Eliminação de manchas senis e melanoses solares no dorso das duas mãos',
      'Aumento da espessura dérmica, diminuindo a visualização de veias e tendões saltados',
      'Pele das mãos macia, uniforme e com aparência até 10 anos mais jovem',
      'Procedimento rápido de 25 minutos com recuperação tranquila',
      'Excelente opção combinada com tratamentos faciais no mesmo dia',
    ],
    shortDescription:
      'As mãos costumam revelar a idade antes do rosto. Apague manchas solares e devolva a firmeza e maciez ao dorso das mãos com precisão a laser.',
    longDescription: {
      problem:
        'Mesmo cuidando rigorosamente do rosto, o dorso das mãos fica exposto ao sol ao dirigir e no dia a dia, acumulando manchas escuras e pele apergaminhada.',
      agitation:
        'Mãos envelhecidas contrastam com um rosto jovem e bem cuidado, entregando os sinais do tempo que nenhum esmalte ou anel consegue disfarçar.',
      solution:
        'O Laser CO2 no dorso das mãos vaporiza seletivamente os pigmentos das manchas solares e estimula a formação de nova matriz extracelular.',
      authorityNote:
        'Protocolo seguro e refinado desenvolvido na Clínica Dra. Paula Fischer para evitar estigmas ou vermelhidão prolongada.',
    },
    whatsIncluded: [
      'Higienização e antissepsia dermatológica do dorso das mãos',
      'Anestésico em creme para conforto absoluto',
      'Aplicação de Laser CO2 Fracionado nas duas mãos com parâmetros para derme fina',
      'Curativo biológico regenerador pós-procedimento',
      'Orientações de fotoproteção e prescrição clareadora',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Acompanhamento fotográfico comparativo antes e depois.',
    bonuses: [
      {
        title: 'Creme Regenerador Noturno para Mãos',
        value: 90,
        description: 'Fórmula hidratante enriquecida com ácido hialurônico para mãos.',
      },
    ],
    testimonials: [
      {
        id: 't-m-1',
        name: 'Cláudia Fontoura',
        role: 'Paciente • 52 anos',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Minhas mãos estavam cheias de manchinhas marrons. Com uma sessão de CO2 clareou quase tudo. Super rápido e não doeu nada!',
        verified: true,
        date: 'Há 1 mês',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&auto=format&fit=crop&q=80',
  },

  {
    id: 'laser-co2-estrias',
    originalName: 'Laser CO2 Estrias',
    title: 'Protocolo Remodelagem Dérmica de Estrias com Laser CO2 Fracionado',
    slug: 'laser-co2-estrias',
    category: 'laser-co2',
    categoryLabel: 'Protocolos a Laser CO2',
    audience: 'paciente',
    price: 1950,
    originalPrice: 2800,
    installments: { count: 12, value: 194.3 },
    pixDiscountPercent: 5,
    badge: 'Tecnologia Avançada',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+510 áreas tratadas com sucesso',
      rating: 4.9,
      reviewsCount: 94,
    },
    benefitBullets: [
      'Eficaz tanto em estrias vermelhas (recentes) quanto em estrias brancas e antigas',
      'Redução da largura, profundidade e nivelamento do relevo da pele',
      'Pode ser aplicado em abdômen, flancos, coxas, glúteos ou mamas',
      'Estímulo maciço de neocolagênese na borda e no leito atrófico da estria',
      'Planejamento personalizado com mapa de evolução fotográfica',
    ],
    shortDescription:
      'Recupere a liberdade de usar biquíni e roupas decotadas. O tratamento definitivo para regenerar a derme rompida pelas estrias com resultados comprovados.',
    longDescription: {
      problem:
        'A ruptura das fibras de colágeno e elastina deixa cicatrizes atróficas lineares que incomodam profundamente, afetando a autoestima corporal.',
      agitation:
        'Óleos corporais e pomadas milagrosas da internet não conseguem reconstruir uma fibra rompida, gerando apenas frustração e gastos sem fim.',
      solution:
        'O Laser CO2 Fracionado atinge o fundo da estria com energia térmica focada, estimulando a síntese de colágeno fibrilar para preencher e fechar a lesão de dentro para fora.',
      authorityNote:
        'Trabalho supervisionado pela Dra. Paula Fischer com equipamentos calibrados de alta precisão.',
    },
    whatsIncluded: [
      'Mapeamento digital da extensão das estrias',
      'Protocolo anestésico tópico e resfriamento cutâneo para conforto',
      'Disparo fracionado de alta densidade no leito e bordas das lesões',
      'Aplicação de Fatores de Crescimento Epidérmico imediatos',
      'Protocolo Home Care de hidratação cicatricial profunda',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Acompanhamento contínuo de cicatrização com nossa equipe de enfermagem.',
    bonuses: [
      {
        title: 'Guia Nutricional Pró-Colágeno para Cicatrização Cutânea',
        value: 180,
        description: 'Alimentos e suplementos que aceleram a cicatrização do tecido.',
      },
    ],
    testimonials: [
      {
        id: 't-est-1',
        name: 'Juliana Castro',
        role: 'Paciente • 32 anos',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Após duas gestações meu abdômen ficou marcado por estrias brancas. O resultado do laser da Dra. Paula foi impressionante, a textura afinou muito!',
        verified: true,
        date: 'Há 2 meses',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-corpo-perfeito',
  },

  {
    id: 'laser-co2-ninfoplastia',
    originalName: 'Laser CO2 Ninfoplastia',
    title: 'Protocolo Ninfoplastia Íntima a Laser CO2: Harmonização & Retração Labial',
    slug: 'laser-co2-ninfoplastia',
    category: 'laser-co2',
    categoryLabel: 'Protocolos a Laser CO2',
    audience: 'paciente',
    price: 1800,
    originalPrice: 2600,
    installments: { count: 12, value: 179.4 },
    pixDiscountPercent: 5,
    badge: 'Pioneirismo Clínico',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+650 procedimentos íntimos realizados',
      rating: 5.0,
      reviewsCount: 168,
    },
    benefitBullets: [
      'Retração anatômica e remodelagem dos pequenos lábios vulvares sem bisturi e sem cortes',
      'Zero pontos cirúrgicos, sem cicatrizes visíveis e sem tempo longo de repouso',
      'Alívio do incômodo com roupas justas, biquínis, atividades físicas e durante o ato sexual',
      'Anestesia local confortável aplicada com máxima delicadeza e acolhimento',
      'Procedimento realizado em consultório gineco-estético com privacidade absoluta',
    ],
    shortDescription:
      'Harmonize a região íntima com sutileza, conforto e sem cirurgia. Recupere sua confiança e liberte-se de desconfortos físicos e estéticos.',
    longDescription: {
      problem:
        'A assimetria ou aumento dos pequenos lábios causa constrangimento na intimidade, dores ao praticar esportes e dificuldade em usar determinadas roupas.',
      agitation:
        'O medo da cirurgia tradicional com cortes, inchaços intensos e riscos de perda de sensibilidade faz muitas mulheres adiarem o sonho de se sentirem plenas.',
      solution:
        'O Protocolo de Ninfoplastia a Laser CO2 da Dra. Paula Fischer utiliza o efeito fototérmico para contrair o colágeno e remodelar o tecido com precisão milimétrica, sem ferimentos cirúrgicos abertos.',
      authorityNote:
        'Ambiente discreto, acolhedor e com atendimento humanizado liderado pela Dra. Paula Fischer em São Paulo.',
    },
    whatsIncluded: [
      'Consulta inicial de acolhimento íntimo e avaliação anatômica detalhada',
      'Protocolo anestésico tópico e infiltrativo suave sem dor',
      'Sessão personalizada de Laser CO2 íntimo com ponteira ginecológica exclusiva',
      'Kit Íntimo de Higiene e Regeneração para uso domiciliar',
      'Acompanhamento contínuo via WhatsApp direto da clínica',
      'Consulta de revisão pós-tratamento',
    ],
    guaranteeDays: 7,
    guaranteeDescription:
      'Privacidade total e acolhimento ético garantido em todas as etapas da sua jornada.',
    bonuses: [
      {
        title: 'Espuma Íntima Calmante com Ativos Biotecnológicos',
        value: 120,
        description: 'Higienização suave para proteção da flora e regeneração vulvar.',
      },
    ],
    testimonials: [
      {
        id: 't-ninf-pac-1',
        name: 'Fernanda G.',
        role: 'Paciente • 29 anos (Depoimento Verificado)',
        avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Eu passei anos sofrendo com vergonha. A Dra. Paula foi um anjo de delicadeza. O procedimento foi tranquilo e o resultado ficou natural e perfeito. Recomendo de olhos fechados!',
        verified: true,
        date: 'Há 1 mês',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-linha-intima',
  },

  {
    id: 'laser-co2-rejuvenescimento-canal',
    originalName: 'Laser CO2 Rejuvenescimento de Canal',
    title: 'Protocolo Rejuvenescimento do Canal Vaginal: Tônus, Lubrificação & Firmeza',
    slug: 'laser-co2-rejuvenescimento-canal',
    category: 'laser-co2',
    categoryLabel: 'Protocolos a Laser CO2',
    audience: 'paciente',
    price: 1800,
    originalPrice: 2700,
    installments: { count: 12, value: 179.4 },
    pixDiscountPercent: 5,
    badge: 'Saúde & Prazer Feminino',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+580 tratamentos de canal realizados',
      rating: 5.0,
      reviewsCount: 132,
    },
    benefitBullets: [
      'Estímulo profundo da mucosa vaginal, restaurando a espessura, lubrificação natural e elasticidade',
      'Auxílio no tratamento de escapes involuntários de urina (incontinência urinária de esforço)',
      'Aumento da sensibilidade e prazer nas relações íntimas',
      'Procedimento indolor com ponteira 360°, sem sangramento e sem anestesia pesada',
      'Retorno imediato às atividades do dia a dia',
    ],
    shortDescription:
      'Restaure a juventude íntima, combata o ressecamento e recupere o conforto na vida a dois com a tecnologia do laser endovaginal.',
    longDescription: {
      problem:
        'Após partos ou na transição da menopausa, a queda hormonal afina a mucosa íntima, provocando ardência, dores na relação e escapes de urina ao tossir ou rir.',
      agitation:
        'O uso contínuo de cremes hormonais traz contraindicações e efeitos colaterais que muitas mulheres não querem ou não podem correr.',
      solution:
        'O Laser CO2 aplicado através de ponteira fracionada interna 360° promove calor controlado, reativando a circulação, o colágeno e a secreção de glicogênio na mucosa vaginal.',
      authorityNote:
        'Tratamento padrão ouro mundial em ginecoestética, executado com precisão médica pela Dra. Paula Fischer.',
    },
    whatsIncluded: [
      'Avaliação funcional do assoalho pélvico e mucosa',
      'Sessão de Laser Fracionado 360° com ponteira estéril individual',
      'Checklist de hábitos e exercícios pélvicos de manutenção',
      'Guia de reposição de barreira dérmica íntima',
      'Reavaliação após 30 dias',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Acompanhamento dedicado com atenção a cada detalhe do seu bem-estar.',
    bonuses: [
      {
        title: 'Guia Clínico de Saúde Pélvica e Fortalecimento Funcional',
        value: 150,
        description: 'Técnicas fáceis para potencializar os resultados do laser em casa.',
      },
    ],
    testimonials: [
      {
        id: 't-canal-1',
        name: 'M. S.',
        role: 'Paciente • 48 anos (Depoimento Anônimo Acolhido)',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Minha vida conjugal renasceu. As dores e o ressecamento que me perseguiam sumiram depois do protocolo da Dra. Paula. Não sinto mais vergonha!',
        verified: true,
        date: 'Há 2 semanas',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-linha-intima',
  },

  {
    id: 'laser-co2-clareamento-intimo',
    originalName: 'Laser CO2 Clareamento Íntimo',
    title: 'Protocolo Clareamento Íntimo a Laser CO2: Uniformização Vulvar & Virilha',
    slug: 'laser-co2-clareamento-intimo',
    category: 'laser-co2',
    categoryLabel: 'Protocolos a Laser CO2',
    audience: 'paciente',
    price: 1800,
    originalPrice: 2500,
    installments: { count: 12, value: 179.4 },
    pixDiscountPercent: 5,
    badge: 'Efeito Uniforme',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+490 clareamentos realizados',
      rating: 4.9,
      reviewsCount: 110,
    },
    benefitBullets: [
      'Remoção do excesso de pigmentação escura causada por atrito, lâminas, depilação e alterações hormonais',
      'Clareamento homogêneo de grandes lábios, região perianal e dobras de virilha',
      'Melhora simultânea da firmeza da pele na área genital externa',
      'Não utiliza ácidos agressivos que ardem ou descamam exageradamente',
      'Resultados visíveis e duradouros com rotina preventiva',
    ],
    shortDescription:
      'Livre-se das manchas escuras na virilha e área íntima. Um protocolo médico inteligente para devolver a tonalidade uniforme e a liberdade para curtir a praia e a intimidade.',
    longDescription: {
      problem:
        'O atrito de roupas apertadas e depilações repetidas com cera ou lâmina estimulam a hiperprodução de melanina na virilha e vulva, deixando manchas escuras incômodas.',
      agitation:
        'Receitas caseiras da internet e pomadas sem orientação médica podem piorar a mancha por queimadura química, gerando hipercromia irreversível.',
      solution:
        'O Laser CO2 para clareamento íntimo quebra seletivamente o pigmento com calor calibrado e estimula a descamação controlada da camada hipercrômica.',
      authorityNote:
        'Técnica testada e aprovada pela Dra. Paula Fischer com protocolos individualizados para cada fototipo.',
    },
    whatsIncluded: [
      'Avaliação fotográfica e identificação da profundidade do pigmento',
      'Higienização dermatológica especializada da área genital',
      'Disparos de Laser CO2 com parâmetros de clareamento suave',
      'Sérum clareador nanoencapsulado aplicado em consultório',
      'Manual de Manutenção e Prevenção do Rebote Pigmentar',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Acompanhamento de tonalidade com orientação preventiva pós-sessão.',
    bonuses: [
      {
        title: 'Sérum Íntimo de Manutenção Clareadora (30ml)',
        value: 160,
        description: 'Ativos inibidores de tirosinase sem hidroquinona para uso em casa.',
      },
    ],
    testimonials: [
      {
        id: 't-clar-1',
        name: 'Bárbara Linhares',
        role: 'Paciente • 31 anos',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Minha virilha e região íntima eram muito escuras por causa da gilete. O protocolo da Dra. Paula clareou de forma muito natural e a pele ficou super macia!',
        verified: true,
        date: 'Há 1 mês',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-linha-intima',
  },

  // ==========================================
  // PROTOCOLOS — PRP E PLASMA GEL
  // ==========================================
  {
    id: 'protocolo-prp-facial',
    originalName: 'Protocolo PRP Facial',
    title: 'Protocolo PRP Facial Autólogo: Bioestimulação com Fatores de Crescimento',
    slug: 'protocolo-prp-facial',
    category: 'prp-plasma',
    categoryLabel: 'Protocolos PRP & Plasma Gel',
    audience: 'paciente',
    price: 1600,
    originalPrice: 2300,
    installments: { count: 12, value: 159.5 },
    pixDiscountPercent: 5,
    badge: '100% Natural & Biológico',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+840 pacientes atendidas',
      rating: 5.0,
      reviewsCount: 156,
    },
    benefitBullets: [
      'Tratamento biológico 100% biocompatível extraído do próprio sangue da paciente (zero risco de alergia)',
      'Liberação concentrada de Fatores de Crescimento Epidérmico e Plaquetário na derme profunda',
      'Recuperação da luminosidade, firmeza, viço e atenuação de olheiras e poros',
      'Estimulação contínua de colágeno ao longo de até 90 dias após a sessão',
      'Realizado com centrifugação de alta precisão em centrífuga clínica médica certificada',
    ],
    shortDescription:
      'A medicina regenerativa a favor da sua beleza. O famoso "Vampire Facelift" refinado pela Dra. Paula Fischer para rejuvenescimento autólogo sem químicas sintéticas.',
    longDescription: {
      problem:
        'Com o passar dos anos, o organismo reduz drasticamente a velocidade de renovação celular. A pele perde o brilho, fica ressecada e com marcas de cansaço.',
      agitation:
        'Substâncias sintéticas e toxinas artificiais nem sempre agradam quem busca um envelhecimento elegante, saudável e sem aparência artificial ou paralisada.',
      solution:
        'O Protocolo PRP Facial coleta uma pequena amostra do seu próprio sangue e centrifuga as plaquetas para criar um concentrado riquíssimo em fatores bioestimuladores.',
      authorityNote:
        'Executado sob estritas normas de biossegurança hospitalar pela equipe de biomedicina e medicina da Clínica Dra. Paula Fischer.',
    },
    whatsIncluded: [
      'Coleta de sangue a vácuo com tubos estéreis descartáveis com gel separador',
      'Centrifugação fracionada padronizada para máxima concentração plaquetária',
      'Aplicação intradérmica pontual e microagulhada com anestesia tópica potente',
      'Máscara pós-procedimento com plasma rico para hidratação intensiva',
      'Orientações e acompanhamento pós-procedimento',
    ],
    guaranteeDays: 7,
    guaranteeDescription:
      'Garantia de segurança biológica total e materiais descartáveis estéreis de padrão hospitalar.',
    bonuses: [
      {
        title: 'Sessão de Fototerapia LED Vermelho Regenerador',
        value: 200,
        description: 'Potencializa a ativação dos fatores de crescimento nas primeiras horas.',
      },
    ],
    testimonials: [
      {
        id: 't-prp-1',
        name: 'Tatiane Meireles',
        role: 'Paciente • 42 anos',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Eu não queria preenchedores sintéticos que mudassem meu rosto. O PRP da Dra. Paula devolveu o viço e o brilho que eu não via há mais de 10 anos!',
        verified: true,
        date: 'Há 3 semanas',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-bioestimulacao-total',
  },

  {
    id: 'plasma-gel-preenchedor-facial',
    originalName: 'Plasma Gel Preenchedor Facial',
    title: 'Protocolo Plasma Gel Preenchedor Facial: Volumização Natural & Zero Rejeição',
    slug: 'plasma-gel-preenchedor-facial',
    category: 'prp-plasma',
    categoryLabel: 'Protocolos PRP & Plasma Gel',
    audience: 'paciente',
    price: 1900,
    originalPrice: 2800,
    installments: { count: 12, value: 189.4 },
    pixDiscountPercent: 5,
    badge: 'Substituto Natural do Ácido Hialurônico',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+710 volumizações faciais realizadas',
      rating: 5.0,
      reviewsCount: 145,
    },
    benefitBullets: [
      'Preenchimento autólogo obtido a partir do plasma sanguíneo termopolimerizado (100% seu)',
      'Restauração de volume em maçãs do rosto (malar), sulco nasogeniano ("bigode chinês") e mandíbula',
      'Zero risco de alergias, granulomas ou reações inflamatórias tardias por corpo estranho',
      'Efeito duplo: volumiza imediatamente e bioestimula colágeno ao longo dos meses',
      'Excelente relação custo-benefício gerando até 8ml a 10ml de preenchedor em uma única sessão',
    ],
    shortDescription:
      'O preenchedor biológico do futuro. Volumize as regiões estratégicas do seu rosto sem medo de reações estranhas, com resultado elegante e sem exageros.',
    longDescription: {
      problem:
        'A perda de gordura facial e absorção óssea deixam o rosto "derretido", com bochechas caídas e sulcos marcados que pesam a expressão.',
      agitation:
        'Preenchedores comerciais de ácido hialurônico são caros por seringa (1ml custa mais de R$ 1.500) e podem gerar nódulos, edemas e aspecto inflado inautêntico.',
      solution:
        'O Plasma Gel é obtido pelo processamento térmico do seu próprio plasma, criando um gel biocompatível de alta viscosidade que preenche com volume harmonioso e natural.',
      authorityNote:
        'A Dra. Paula Fischer domina os parâmetros térmicos exatos para máxima durabilidade do gel autólogo.',
    },
    whatsIncluded: [
      'Avaliação biométrica de proporções e pontos de sustentação facial',
      'Processamento em incubadora de termopolimerização calibrada',
      'Aplicação com microcânula atraumática (sem hematomas ou cortes)',
      'Protocolo anestésico sem desconforto',
      'Guia pós-aplicação e retorno de acompanhamento',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Procedimento com substância 100% autóloga com zero risco de rejeição imunológica.',
    bonuses: [
      {
        title: 'Mapeamento de Pontos de Luz Facial',
        value: 150,
        description: 'Consultoria de visagismo facial personalizada com a equipe clínica.',
      },
    ],
    testimonials: [
      {
        id: 't-pg-f-1',
        name: 'Soraya Albuquerque',
        role: 'Paciente • 45 anos',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Consegui preencher o bigode chinês e devolver volume às minhas bochechas sem parecer que fiz plástica. Ficou muito natural e não tive nenhuma reação!',
        verified: true,
        date: 'Há 1 mês',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-bioestimulacao-total',
  },

  {
    id: 'plasma-gel-preenchimento-gluteo',
    originalName: 'Plasma Gel Preenchimento de Glúteo',
    title: 'Protocolo Plasma Gel Glúteos Up: Contorno, Elevação & Firmeza Autóloga',
    slug: 'plasma-gel-gluteos-up',
    category: 'prp-plasma',
    categoryLabel: 'Protocolos PRP & Plasma Gel',
    audience: 'paciente',
    price: 2500,
    originalPrice: 3800,
    installments: { count: 12, value: 249.2 },
    pixDiscountPercent: 5,
    badge: 'Queridinho das Pacientes',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+390 harmonizações glúteas',
      rating: 4.9,
      reviewsCount: 88,
    },
    benefitBullets: [
      'Preenchimento de depressões trocantéricas laterais (hip dips) e arredondamento do bumbum',
      'Volume autólogo seguro sem uso de PMMA ou substâncias proibidas permanentes',
      'Estímulo maciço de colágeno que combate a celulite e a flacidez dérmica glútea',
      'Técnica minimamente invasiva com microcânulas sem cortes cirúrgicos',
      'Recuperação rápida: você sai caminhando e retoma sua rotina no dia seguinte',
    ],
    shortDescription:
      'Diga adeus às depressões laterais e bumbum murcho. O método biológico mais seguro e desejado para remodelar, empinar e firmar os glúteos.',
    longDescription: {
      problem:
        'A flacidez muscular e cutânea, somada ao desnível lateral dos glúteos, incomoda muitas mulheres no biquíni e calças justas.',
      agitation:
        'Próteses de silicone exigem cirurgias arriscadas e pós-operatórios dolorosos, enquanto substâncias perigosas como o PMMA trazem riscos gravíssimos para a saúde.',
      solution:
        'O Protocolo Plasma Gel Glúteos Up utiliza o plasma autólogo em alta densidade, preenchendo as concavidades e induzindo novo colágeno para um efeito "push-up" elegante.',
      authorityNote:
        'Procedimento realizado com protocolo exclusivo desenvolvido na clínica pela Dra. Paula Fischer, respeitando a anatomia natural de cada corpo.',
    },
    whatsIncluded: [
      'Mapeamento tridimensional da anatomia glútea e marcação de vetor de sustentação',
      'Coleta assistida e processamento térmico do gel de alta densidade',
      'Infiltração com microcânula longa estéril atraumática',
      'Anestesia local sem dor',
      'Cinta compressiva e protocolo de cuidados domiciliares',
      'Retorno para fotos comparativas',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Procedimento 100% autólogo e biocompatível.',
    bonuses: [
      {
        title: 'Guia de Exercícios Isométricos para Sustentação Glútea',
        value: 120,
        description: 'Rotina de 10 minutos para potencializar a firmeza muscular pós-procedimento.',
      },
    ],
    testimonials: [
      {
        id: 't-glut-1',
        name: 'Sabrina P.',
        role: 'Paciente • 28 anos',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Aquele "buraco" lateral do meu bumbum me incomodava demais nas calças de academia. A Dra. Paula nivelou tudo com Plasma Gel. Ficou lindo e sem nenhum nódulo!',
        verified: true,
        date: 'Há 1 mês',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-corpo-perfeito',
  },

  {
    id: 'plasma-gel-intimo',
    originalName: 'Plasma Gel Íntimo',
    title: 'Protocolo Plasma Gel Íntimo: Regeneração, Turgor & Preenchimento de Grandes Lábios',
    slug: 'plasma-gel-intimo-regenerativo',
    category: 'prp-plasma',
    categoryLabel: 'Protocolos PRP & Plasma Gel',
    audience: 'paciente',
    price: 1500,
    originalPrice: 2200,
    installments: { count: 12, value: 149.5 },
    pixDiscountPercent: 5,
    badge: 'Medicina Íntima Regenerativa',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+320 procedimentos realizados',
      rating: 5.0,
      reviewsCount: 76,
    },
    benefitBullets: [
      'Volumização delicada dos grandes lábios que perderam gordura pelo envelhecimento ou perda de peso',
      'Proteção e cobertura anatômica dos pequenos lábios e meato uretral',
      'Hidratação profunda e renovação da elasticidade da pele vulvar',
      'Zero rejeição ou formação de nódulos por ser substância 100% autóloga do próprio corpo',
      'Procedimento rápido de consultório com anestésico local',
    ],
    shortDescription:
      'Restaure o preenchimento, a hidratação e o turgor dos grandes lábios vulvares com seu próprio plasma biológico. Beleza e conforto íntimo com total segurança.',
    longDescription: {
      problem:
        'A diminuição do tecido adiposo na vulva gera aspecto murcho e enrugado nos grandes lábios, expondo a mucosa interna a atritos e desidratação.',
      agitation:
        'Muitas mulheres sentem vergonha diante de seus parceiros e incômodo físico com roupas íntimas ou durante o ato sexual.',
      solution:
        'O Plasma Gel Íntimo restaura o coxim gorduroso com gel rico em fatores de crescimento extraído do próprio plasma, devolvendo o aspecto turgido, jovem e protegido.',
      authorityNote:
        'Aplicação realizada com máxima privacidade e técnica apurada pela Dra. Paula Fischer em ambiente clínico acolhedor.',
    },
    whatsIncluded: [
      'Avaliação ginecoestética personalizada',
      'Processamento térmico controlado do plasma para textura ideal',
      'Infiltração com microcânula íntima estéril de ponta romba',
      'Anestésico local indolor',
      'Kit de cuidados pós-sessão e canal de dúvidas prioritário',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Acolhimento humanizado e segurança em todos os momentos.',
    bonuses: [
      {
        title: 'Gel Lubrificante Biocompatível com Ácido Hialurônico',
        value: 110,
        description: 'Frasco exclusivo para conforto diário no pós-tratamento.',
      },
    ],
    testimonials: [
      {
        id: 't-pgi-1',
        name: 'A. C.',
        role: 'Paciente • 44 anos (Depoimento Verificado)',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Depois do emagrecimento minha área íntima ficou com a pele muito murcha. O Plasma Gel da Dra. Paula devolveu o preenchimento que eu tinha aos 25 anos. Transformador!',
        verified: true,
        date: 'Há 2 semanas',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-linha-intima',
  },

  {
    id: 'plasma-gel-preenchedor-interior-coxa',
    originalName: 'Plasma Gel Preenchedor Interior de Coxa',
    title: 'Protocolo Plasma Gel Interior de Coxas: Redensificação & Combate à Flacidez',
    slug: 'plasma-gel-interior-coxas',
    category: 'prp-plasma',
    categoryLabel: 'Protocolos PRP & Plasma Gel',
    audience: 'paciente',
    price: 1600,
    originalPrice: 2400,
    installments: { count: 12, value: 159.5 },
    pixDiscountPercent: 5,
    badge: 'Regeneração Corporal',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+280 coxas tratadas',
      rating: 4.8,
      reviewsCount: 62,
    },
    benefitBullets: [
      'Tratamento focado na pele fina e flácida da face interna das coxas',
      'Estímulo intensivo de colágeno que reduz o aspecto craquelado e "casca de laranja"',
      'Volumização discreta para uniformizar ondulações e melhorar o tônus da pele',
      '100% seguro contra reações inflamatórias por ser derivado do próprio sangue',
      'Procedimento ambulatorial rápido sem necessidade de internação',
    ],
    shortDescription:
      'Firmeza e colágeno para a região interna das coxas. O protocolo autólogo que redensifica a pele fina e ameniza a flacidez que te impede de usar saias curtas.',
    longDescription: {
      problem:
        'A face interna das coxas é uma das áreas com a derme mais fina do corpo. Dietas, oscilações de peso e idade fazem a pele ficar flácida e sem sustentação.',
      agitation:
        'Exercícios físicos tonificam o músculo, mas não conseguem colar a pele frouxa que sobra, causando desconforto ao andar e ao usar shorts ou vestidos.',
      solution:
        'O Plasma Gel é distribuído em leque na hipoderme e derme profunda do interior das coxas, agindo como um andaime biológico que dispara a produção de neocolágeno.',
      authorityNote:
        'Técnica refinada aplicada com microcânula por profissionais treinados sob protocolo da Dra. Paula Fischer.',
    },
    whatsIncluded: [
      'Avaliação do grau de flacidez cutânea na face medial da coxa',
      'Preparo do plasma autólogo concentrado',
      'Aplicação em leque com microcânula sem marcas',
      'Anestesia em pontos de entrada',
      'Protocolo de drenagem suave e acompanhamento clínico',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Acompanhamento de evolução dermatológica com fotos comparativas.',
    bonuses: [
      {
        title: 'Loção Firmadora Corporal com Silício Orgânico',
        value: 130,
        description: 'Frasco com ativos tensores para manutenção em casa.',
      },
    ],
    testimonials: [
      {
        id: 't-coxa-1',
        name: 'Eliane Costa',
        role: 'Paciente • 49 anos',
        avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Minha coxa interna estava com aquela pele molenga que balançava ao caminhar. Com o Plasma Gel e os cuidados da clínica, a pele colou e ficou bem mais firme!',
        verified: true,
        date: 'Há 1 mês',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
    relatedComboId: 'combo-corpo-perfeito',
  },

  // ==========================================
  // KITS & COMBOS EM DESTAQUE (CROSS-SELL)
  // ==========================================
  {
    id: 'combo-master-laser-co2',
    originalName: 'Combo Master Laser CO2 (Mentoria + Protocolos)',
    title: 'COMBO VIP: Imersão Laser CO2 (20h) + Protocolos Face & Full Face',
    slug: 'combo-master-laser-co2',
    category: 'combos',
    categoryLabel: 'Kits & Combos com Desconto',
    audience: 'profissional',
    price: 5990,
    originalPrice: 7800,
    installments: { count: 12, value: 597.5 },
    pixDiscountPercent: 5,
    badge: 'Economia de R$ 1.810 • O Mais Completo',
    urgencyText: 'Apenas 2 combos disponíveis com a mentoria inclusa neste valor promocional',
    deliveryType: 'Mentoria Presencial / Híbrida',
    format: 'Mentoria Presencial/Híbrida',
    socialProof: {
      countLabel: '+180 profissionais formados no combo',
      rating: 5.0,
      reviewsCount: 89,
    },
    benefitBullets: [
      'Capacitação completa na Imersão Presencial/Híbrida de 20 Horas com a Dra. Paula Fischer',
      'Acesso aos dossiês completos de aplicação dos protocolos Laser CO2 Face e Full Face',
      'Aprenda a teoria, execute a prática supervisionada e leve os protocolos prontos para faturar no dia seguinte',
      'Termos de consentimento, ficha de anamnese e parâmetros exatos de disparo inclusos',
      'Recupere 100% do investimento com apenas 3 a 4 atendimentos na sua clínica',
    ],
    shortDescription:
      'O combo definitivo para profissionais de estética. Aprenda a técnica de Laser CO2 na imersão com a Dra. Paula e já leve os dois protocolos faciais mais lucrativos para aplicar imediatamente.',
    longDescription: {
      problem:
        'Fazer um curso teórico sem os protocolos práticos e a segurança dos parâmetros deixa o profissional inseguro e sem saber como começar a vender.',
      agitation:
        'Comprar o curso de um lado e ter que criar protocolos, fichas e termos do zero custa meses de tentativa e erro, com risco de intercorrências graves.',
      solution:
        'Neste Combo Master, você adquire a Imersão de 20 Horas com a Dra. Paula Fischer e recebe os protocolos prontos com todas as dosagens, parâmetros e modelos comerciais para vender pacotes de R$ 1.500 a R$ 2.500.',
      authorityNote:
        'A formação mais elogiada por biomédicos e médicos que atuam no segmento de laser dermatológico no Brasil.',
    },
    whatsIncluded: [
      'Vaga Garantida na Imersão de 20 Horas Presencial/Híbrida de Laser CO2',
      'Dossiê Completo do Protocolo Laser CO2 Face (Parâmetros, Pré e Pós)',
      'Dossiê Completo do Protocolo Laser CO2 Full Face com Mapeamento',
      'Manual de Precificação e Scripts de Vendas de Pacotes',
      'Certificado Chancelado de 20 Horas de Capacitação',
      'Acesso ao Grupo de WhatsApp VIP por 6 meses para tirar dúvidas com a Dra. Paula',
    ],
    guaranteeDays: 7,
    guaranteeDescription:
      'Garantia Incondicional de 7 dias com devolução total caso não fique 100% satisfeito com o material.',
    bonuses: [
      {
        title: 'Kit de Marketing: 15 Posts Editáveis no Canva para Divulgar o Laser',
        value: 397,
        description: 'Templates prontos com copy persuasiva para atrair pacientes nas redes.',
      },
      {
        title: 'Script de Fechamento de Pacotes de Alto Valor no WhatsApp',
        value: 297,
        description: 'Modelo de mensagem para secretárias e profissionais fecharem pacotes com facilidade.',
      },
    ],
    testimonials: [
      {
        id: 't-cmb-1',
        name: 'Dra. Vanessa Lemos',
        role: 'Biomédica Esteta • Curitiba/PR',
        avatar: 'https://images.unsplash.com/photo-1594824813571-638f02614d3f?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Esse combo foi o melhor investimento que fiz na minha carreira. Saí da imersão com os protocolos na mão e na mesma semana fechei R$ 9.000 em procedimentos de Full Face!',
        verified: true,
        date: 'Há 3 semanas',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
  },

  {
    id: 'combo-linha-intima',
    originalName: 'Combo Linha Íntima Completa Dra. Paula Fischer',
    title: 'COMBO SUPREMO: Mentoria Ninfoplastia Sem Corte + Linha Íntima Completa',
    slug: 'combo-linha-intima-completa',
    category: 'combos',
    categoryLabel: 'Kits & Combos com Desconto',
    audience: 'profissional',
    price: 6990,
    originalPrice: 10399,
    installments: { count: 12, value: 697.3 },
    pixDiscountPercent: 5,
    badge: 'Super Desconto • Economia de R$ 3.409',
    urgencyText: 'Apenas 3 pacotes disponíveis neste lote com acesso à mentoria íntima',
    deliveryType: 'Mentoria Presencial / Híbrida',
    format: 'Mentoria Presencial/Híbrida',
    socialProof: {
      countLabel: '+140 clínicas credenciadas',
      rating: 5.0,
      reviewsCount: 71,
    },
    benefitBullets: [
      'Mentoria VIP de Ninfoplastia Sem Corte de 20 Horas com a Dra. Paula Fischer',
      'Protocolos completos de Laser CO2 Ninfoplastia, Rejuvenescimento de Canal e Clareamento Íntimo',
      'Protocolo complementar de Plasma Gel Íntimo para Grandes Lábios incluso',
      'Estruture um setor completo de Estética Íntima de alto padrão na sua clínica ou consultório',
      'O mercado mais lucrativo da estética atual com ticket médio acima de R$ 3.000 por paciente',
    ],
    shortDescription:
      'Torne-se a maior referência em Estética Íntima da sua região. A Mentoria VIP da Dra. Paula mais os protocolos completos de Laser e Plasma Gel Íntimo em um único pacote.',
    longDescription: {
      problem:
        'A demanda por tratamentos íntimos femininos explodiu, mas são raríssimos os profissionais que sabem realizar o conjunto completo: ninfoplastia sem corte, clareamento, canal e preenchimento de grandes lábios.',
      agitation:
        'Oferecer apenas um procedimento faz você perder o efeito cross-sell, onde uma mesma paciente fecha tratamentos de R$ 5.000 a R$ 8.000 para harmonizar toda a região vulvovaginal.',
      solution:
        'Este combo entrega a Mentoria VIP de Ninfoplastia Sem Corte e o passo a passo de toda a Linha Íntima desenvolvida e testada pela Dra. Paula Fischer ao longo de anos de prática clínica.',
      authorityNote:
        'A Dra. Paula Fischer é palestrante e instrutora de referência em ginecoestética e estética íntima não cirúrgica.',
    },
    whatsIncluded: [
      'Mentoria VIP de Ninfoplastia Sem Corte (20h) com prática presencial supervisionada',
      'Dossiê Protocolar de Laser CO2 Ninfoplastia & Retração Vulvar',
      'Dossiê Protocolar de Rejuvenescimento do Canal Vaginal a Laser',
      'Dossiê Protocolar de Clareamento Íntimo a Laser CO2',
      'Protocolo Bônus de Plasma Gel Íntimo para Volumização de Grandes Lábios',
      'Termos de Consentimento Jurídicos Especializados em Estética Íntima',
      'Certificado Master em Estética Íntima Regenerativa',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Garantia Incondicional de 7 dias com devolução total do investimento.',
    bonuses: [
      {
        title: 'Consultoria de Precificação de Combos Íntimos',
        value: 590,
        description: 'Como estruturar planos de tratamento de R$ 3.500 a R$ 7.000 por paciente.',
      },
      {
        title: 'Modelo de Ficha de Consulta e Avaliação Íntima sem Constrangimento',
        value: 350,
        description: 'Acolhimento da paciente com discrição e altíssima taxa de conversão.',
      },
    ],
    testimonials: [
      {
        id: 't-cmb-int-1',
        name: 'Dra. Beatriz Toledo',
        role: 'Médica Ginecologista e Esteta • Belo Horizonte/MG',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'A Dra. Paula revolucionou meu consultório. Com este combo completo montei meu núcleo de estética íntima e hoje é o setor mais lucrativo da minha clínica!',
        verified: true,
        date: 'Há 1 mês',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80',
  },

  {
    id: 'combo-bioestimulacao-total',
    originalName: 'Combo Bioestimulação Autóloga Facial Total',
    title: 'COMBO FACIAL: Protocolo PRP Facial + Plasma Gel Preenchedor Facial',
    slug: 'combo-bioestimulacao-facial-total',
    category: 'combos',
    categoryLabel: 'Kits & Combos com Desconto',
    audience: 'paciente',
    price: 2890,
    originalPrice: 3500,
    installments: { count: 12, value: 287.9 },
    pixDiscountPercent: 5,
    badge: 'Economia de R$ 610 • 100% Autólogo',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+310 combos faciais realizados',
      rating: 5.0,
      reviewsCount: 95,
    },
    benefitBullets: [
      'Ação combinada: renovação profunda da qualidade da pele com PRP + preenchimento de sulcos e contornos com Plasma Gel',
      'Tratamento 100% biológico com seu próprio sangue: sem nenhum produto químico sintético',
      'Elimina o aspecto cansado, fecha poros, hidrata a derme e volumiza bigode chinês e maçãs do rosto',
      'Resultados elegantes e naturais que respeitam a sua identidade e seus traços',
      'Realizado no mesmo dia na clínica com máximo conforto e anestesia tópica de alta eficiência',
    ],
    shortDescription:
      'O pacote definitivo de rejuvenescimento facial natural. Una a bioestimulação celular do PRP com o preenchimento seguro do Plasma Gel em uma experiência completa.',
    longDescription: {
      problem:
        'Fazer apenas preenchimento não melhora a textura nem o viço da pele, e fazer apenas bioestimulação não devolve o volume perdido pelo envelhecimento.',
      agitation:
        'Tratar apenas metade do problema deixa a sensação de que o resultado ficou incompleto, forçando você a gastar duas vezes mais em sessões separadas.',
      solution:
        'O Combo Bioestimulação Autóloga Facial Total combina o poder dos Fatores de Crescimento do PRP na derme superficial com o preenchimento volumétrico do Plasma Gel nas estruturas profundas.',
      authorityNote:
        'Executado na Clínica Dra. Paula Fischer em São Paulo com aparelhos de centrifugação médica com certificação de biossegurança.',
    },
    whatsIncluded: [
      'Avaliação Facial Completa com mapeamento de bioestimulação e volumização',
      'Sessão de Protocolo PRP Facial autólogo',
      'Sessão de Protocolo Plasma Gel Preenchedor Facial (até 8ml a 10ml)',
      'Máscara calmante pós-procedimento com plasma ativo',
      'Kit Home Care de primeiros cuidados regeneradores',
      'Revisão e acompanhamento pós-tratamento presencial',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Acompanhamento médico e dermatológico dedicado para sua recuperação.',
    bonuses: [
      {
        title: 'Sessão de Ledterapia Facial Calmante',
        value: 200,
        description: 'Acelera a regeneração celular e o brilho da pele.',
      },
    ],
    testimonials: [
      {
        id: 't-cmb-prp-1',
        name: 'Clarice Mendonça',
        role: 'Paciente • 46 anos',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Fazer o PRP e o Plasma Gel juntos foi maravilhoso! As pessoas acham que tirei férias de um mês de tão descansada e bonita que minha pele ficou.',
        verified: true,
        date: 'Há 2 semanas',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f4864c39121?w=800&auto=format&fit=crop&q=80',
  },

  {
    id: 'combo-corpo-perfeito',
    originalName: 'Combo Remodelagem Corporal Autóloga & Laser',
    title: 'COMBO CORPO: Plasma Gel Glúteos Up + Interior de Coxa + Laser Estrias',
    slug: 'combo-remodelagem-corporal-completa',
    category: 'combos',
    categoryLabel: 'Kits & Combos com Desconto',
    audience: 'paciente',
    price: 4900,
    originalPrice: 6050,
    installments: { count: 12, value: 489.1 },
    pixDiscountPercent: 5,
    badge: 'Economia de R$ 1.150 • Transformação Corporal',
    deliveryType: 'Protocolo Clínico + Dossier',
    format: 'Protocolo Presencial + Guia Digital',
    socialProof: {
      countLabel: '+190 pacientes transformadas',
      rating: 4.9,
      reviewsCount: 52,
    },
    benefitBullets: [
      'Remodelagem e elevação do bumbum com preenchimento autólogo seguro de Plasma Gel nos glúteos',
      'Tratamento da flacidez e pele fina na face interna das coxas com Plasma Gel redensificador',
      'Renovação e apagamento de estrias com a potência do Laser CO2 Fracionado',
      'Protocolo integrado para conquistar firmeza, curvas harmoniosas e pele lisa',
      'Atendimento VIP com plano de evolução personalizado pela Dra. Paula Fischer',
    ],
    shortDescription:
      'Uma transformação corporal 360°. Eleve seus glúteos, firme o interior das coxas e reduza as estrias com o combo mais completo da clínica com mais de R$ 1.100 de economia.',
    longDescription: {
      problem:
        'A queixa corporal raramente é isolada: flacidez de glúteo, celulite lateral, pele frouxa nas coxas e estrias costumam afetar a confiança juntas.',
      agitation:
        'Fazer um tratamento em cada clínica gera custos exorbitantes e protocolos que não conversam entre si.',
      solution:
        'Este combo une a tecnologia do Laser CO2 para textura e estrias com o poder volumizador e firmador do Plasma Gel nos glúteos e coxas.',
      authorityNote:
        'Plano de aplicação planejado pela Dra. Paula Fischer para máxima segurança e harmonia estética.',
    },
    whatsIncluded: [
      'Mapeamento Corporal 360° e bioimpedância',
      'Protocolo Plasma Gel Glúteos Up completo',
      'Protocolo Plasma Gel Interior de Coxas completo',
      'Sessão de Laser CO2 Fracionado na área de estrias indicada',
      'Cinta e faixas de suporte anatômico',
      'Acompanhamento presencial de evolução com equipe médica',
    ],
    guaranteeDays: 7,
    guaranteeDescription: 'Protocolo seguro e acompanhamento pós-procedimento.',
    bonuses: [
      {
        title: 'Kit Corporal Home Care com Creme Tensor',
        value: 260,
        description: 'Fórmula exclusiva para prolongar a firmeza dérmica.',
      },
    ],
    testimonials: [
      {
        id: 't-cmb-corp-1',
        name: 'Danielle F.',
        role: 'Paciente • 35 anos',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        rating: 5,
        comment:
          'Fiz o combo antes da minha viagem de férias. Mudou totalmente meu bumbum e as estrias que me perseguiam sumiram quase que por completo. Vale cada centavo!',
        verified: true,
        date: 'Há 1 mês',
      },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
  },
];
