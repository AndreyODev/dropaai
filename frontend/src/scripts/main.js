const iconPaths = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V10Z"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/>',
  trophy: '<path d="M8 21h8m-4-4v4M7 4h10v6a5 5 0 0 1-10 0V4ZM7 7H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4"/>',
  bolt: '<path d="m13 2-3 9h7L11 22l2-9H6l7-11Z"/>',
  message: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5Z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/>',
  plus: '<path d="M12 5v14m-7-7h14"/>',
  arrow: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 10v-2a4 4 0 0 0-3-3.87m-1-11.13a4 4 0 0 1 0 7.75"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2m-7 9v3m-4 0h8"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  spark: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Zm7 12 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  settings: '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-6v3m0 14v3m10-10h-3M5 12H2m17.07-7.07-2.12 2.12M7.05 16.95l-2.12 2.12m14.14 0-2.12-2.12M7.05 7.05 4.93 4.93"/>',
  flame: '<path d="M12 22a7 7 0 0 0 7-7c0-4-4-6-4-11-3 2-4 5-4 7-1-1-2-2-2-4-2 2-4 5-4 8a7 7 0 0 0 7 7Z"/>',
  back: '<path d="m15 18-6-6 6-6"/>',
  send: '<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
  volume: '<path d="M11 5 6 9H3v6h3l5 4V5Zm4 4a5 5 0 0 1 0 6m3-9a9 9 0 0 1 0 12"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
};

const teams = [
  { name: "Os Cria", tag: "OCR", type: "Permanente", objective: "Competitivo", members: 5, max: 6, roles: ["Rush", "Suporte", "CPT"], days: "Segunda a sexta", hours: "19:00–23:00", description: "Procuramos jogador para integrar o time de forma permanente.", vacancies: ["Flex"] },
  { name: "Império", tag: "IMP", type: "Permanente", objective: "Competitivo", members: 6, max: 6, roles: ["Rush", "CPT", "Suporte"], days: "Todos os dias", hours: "20:00–23:00", description: "Equipe focada em evolução e campeonatos da comunidade.", vacancies: [] },
  { name: "Zona Leste", tag: "ZL", type: "Permanente", objective: "Competitivo", members: 4, max: 6, roles: ["Rush", "Flex"], days: "Quarta a domingo", hours: "19:00–22:00", description: "Buscamos pessoas comunicativas para fechar nosso squad.", vacancies: ["CPT", "Suporte"] },
];

const trainings = [
  { id: "tr-482", title: "Treino aberto da comunidade", organizer: "Player Alpha", time: "Hoje, 19:00", map: "Bermuda · Purgatório · Kalahari", registered: 8, max: 12, status: "Aberto" },
  { id: "tr-216", title: "Camp de sábado", organizer: "Zona Leste", time: "Sábado, 15:00", map: "Bermuda · 4 quedas", registered: 5, max: 12, status: "Aberto" },
];

const players = [
  { name: "Kaue R7", role: "Rush", objective: "Competitivo", hours: "20:00–23:00", level: "Avançado", rating: "4.9", clips: 3 },
  { name: "Nobre FF", role: "Rush", objective: "Competitivo", hours: "20:00–23:00", level: "Competitivo", rating: "4.8", clips: 4 },
  { name: "RafinhaX", role: "Suporte", objective: "Competitivo", hours: "19:00–23:00", level: "Avançado", rating: "4.7", clips: 5 },
];

const state = {
  screen: "home",
  searchConfig: { when: "Hoje", start: "19:00", end: "22:00", role: "Rush", mode: "Treino", objective: "Quero jogar quando estiver disponível", level: "Avançado" },
  searchStarted: false,
  joinedSquad: false,
  vacancySimulation: false,
  selectedTeam: 0,
  selectedTraining: 0,
  selectedPlayer: "",
  activeConversation: 0,
  chatMessages: {},
  createdRequest: null,
  modal: null,
  toast: "",
};

const navItems = [
  ["home", "Início", "home"],
  ["play", "Quero jogar", "search"],
  ["teams", "Times", "shield"],
  ["trainings", "Treinos", "trophy"],
  ["complete", "Preciso de complete", "bolt"],
  ["messages", "Mensagens", "message"],
  ["profile", "Perfil", "user"],
];

const conversations = [
  { title: "Squad #1842", subtitle: "Call do squad já está aberta", tag: "SQUAD", unread: 2, initials: "S" },
  { title: "Os Cria", subtitle: "Fico de reserva hoje, tô livre", tag: "TIME", unread: 0, initials: "OC" },
  { title: "Treino aberto", subtitle: "Sala liberada às 18:50", tag: "TREINO", unread: 1, initials: "T" },
  { title: "Player X", subtitle: "Bora jogar mais tarde?", tag: "DIRETO", unread: 0, initials: "X" },
];

const app = document.querySelector("#app");

function icon(name, size = 18) {
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.spark}</svg>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function navMarkup() {
  const activeScreen = currentNavigationScreen();
  return navItems.map(([id, label, symbol]) => `
    <button class="nav-item ${activeScreen === id ? "is-active" : ""}" type="button" data-screen="${id}" ${activeScreen === id ? 'aria-current="page"' : ""}>
      ${icon(symbol, 19)}<span>${label}</span>${id === "messages" ? '<span class="nav-count">3</span>' : ""}
    </button>
  `).join("");
}

function currentNavigationScreen() {
  return {
    team: "teams",
    recruitment: "teams",
    candidates: "teams",
    training: "trainings",
    call: "messages",
  }[state.screen] || state.screen;
}

function shell(content) {
  const activeScreen = currentNavigationScreen();
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <a href="#home" class="brand" data-screen="home" aria-label="Dropaai, início">
          <span class="brand-mark">D<span>.</span></span><span class="brand-word">dropaai<span>.</span></span>
        </a>
        <div class="demo-label"><span></span> PROTÓTIPO INTERATIVO</div>
        <nav class="side-nav" aria-label="Navegação principal">${navMarkup()}</nav>
        <button class="sidebar-availability" type="button" data-action="go-play">
          <span>${icon("bolt", 17)}</span><span><strong>Procurando squad?</strong><small>Encontre seu próximo time</small></span>${icon("arrow", 16)}
        </button>
        <div class="sidebar-bottom">
          <div class="online-indicator"><i></i> Disponível até 23:00</div>
          <button class="user-mini" type="button" data-screen="profile">
            <span class="avatar avatar-orange">AL</span><span><strong>Alpha</strong><small>Jogador demonstrativo</small></span>${icon("settings", 16)}
          </button>
        </div>
      </aside>
      <div class="mobile-topbar">
        <a href="#home" class="brand" data-screen="home"><span class="brand-mark">D<span>.</span></span><span class="brand-word">dropaai<span>.</span></span></a>
        <div class="mobile-shortcuts">
          <button class="mobile-shortcut" type="button" data-screen="messages" aria-label="Mensagens" ${activeScreen === "messages" ? 'aria-current="page"' : ""}>${icon("message", 17)}</button>
          <button class="mobile-shortcut profile-shortcut" type="button" data-screen="profile" aria-label="Perfil">${icon("user", 17)}</button>
          <span class="demo-pill"><i></i> DEMO</span>
        </div>
      </div>
      <main class="main-content" id="main-content" tabindex="-1">${content}</main>
      <nav class="mobile-nav" aria-label="Navegação móvel">
        ${navItems.filter(([id]) => ["home", "play", "teams", "trainings", "complete"].includes(id)).map(([id, label, symbol]) => `
          <button class="mobile-nav-item ${activeScreen === id ? "is-active" : ""}" type="button" data-screen="${id}" aria-label="${label}" ${activeScreen === id ? 'aria-current="page"' : ""}>
            ${icon(symbol, 19)}<span>${({ home: "Início", play: "Jogar", teams: "Times", trainings: "Treinos", complete: "Complete" })[id]}</span>
          </button>`).join("")}
      </nav>
      ${state.modal ? renderModal() : ""}
      ${state.toast ? `<div class="toast" role="status">${icon("check", 17)}${escapeHTML(state.toast)}</div>` : ""}
    </div>
  `;
}

function pageHeader(kicker, title, description = "", action = "") {
  return `<header class="page-header"><div><p class="eyebrow">${kicker}</p><h1>${title}</h1>${description ? `<p class="page-description">${description}</p>` : ""}</div>${action}</header>`;
}

function homeScreen() {
  const dateLabel = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  }).format(new Date()).replace(",", " ·").toLocaleUpperCase("pt-BR");
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";
  const cards = [
    ["play", "search", "Quero jogar", "Encontre jogadores disponíveis agora ou em um horário específico.", "Encontre um squad"],
    ["complete", "bolt", "Preciso de complete", "Encontre alguém para completar seu time ou pedido de jogo.", "Ver pedidos"],
    ["teams", "shield", "Meu time", "Gerencie equipe, titulares, reservas e recrutamento.", "Conheça os times"],
    ["trainings", "trophy", "Treinos", "Encontre ou organize treinos da comunidade com até 12 times.", "Ver treinos"],
  ];
  return `
    <div class="content-inner">
      ${pageHeader(dateLabel, `${greeting}, Alpha.`, "O que vamos jogar hoje?", '<span class="availability-pill"><i></i> DISPONÍVEL AGORA</span>')}
      <section class="quick-grid" aria-label="Ações rápidas">
        ${cards.map(([screen, symbol, title, description, label], index) => `
          <button class="quick-card ${index === 0 ? "quick-card-featured" : ""}" type="button" data-screen="${screen}">
            <span class="quick-icon">${icon(symbol, 20)}</span><span class="quick-arrow">↗</span>
            <span class="quick-card-title">${title}</span><span class="quick-card-description">${description}</span><span class="quick-card-link">${label} ${icon("arrow", 14)}</span>
          </button>`).join("")}
      </section>
      <section class="home-lower">
        <article class="panel next-activity">
          <div class="panel-heading"><div><p class="eyebrow">PRÓXIMA ATIVIDADE</p><h2>Treino aberto da comunidade</h2></div><span class="date-block"><strong>HOJE</strong><small>19:00</small></span></div>
          <div class="activity-details"><div><span>FORMATO</span><strong>Treino · 4 quedas</strong></div><div><span>CONFIRMAÇÃO</span><strong class="text-green">8 jogadores</strong></div><div><span>SALA</span><strong>Liberada às 18:50</strong></div></div>
          <button class="button button-outline" type="button" data-screen="trainings">Ver treino ${icon("arrow", 16)}</button>
        </article>
        <article class="panel status-panel">
          <div class="panel-heading"><div><p class="eyebrow">SEU STATUS</p><h2>Pronto para jogar</h2></div><span class="pulse-dot"></span></div>
          <dl><div><dt>${icon("clock", 15)} DISPONIBILIDADE</dt><dd>Hoje, 19:00–23:00</dd></div><div><dt>${icon("search", 15)} FUNÇÃO</dt><dd>Rush</dd></div><div><dt>${icon("trophy", 15)} OBJETIVO</dt><dd>Competitivo</dd></div></dl>
          <button class="button button-quiet button-full" type="button" data-screen="play">Alterar disponibilidade</button>
        </article>
      </section>
      <p class="demo-disclaimer">${icon("spark", 15)} Dados e nomes nesta demonstração são fictícios e não representam jogadores ou equipes reais.</p>
    </div>
  `;
}

function optionButtons(group, options, selected, columns = "") {
  return `<div class="choice-grid ${columns}">${options.map((option) => `
    <button type="button" class="choice ${option === selected ? "is-selected" : ""}" data-choice-group="${group}" data-choice="${escapeHTML(option)}" aria-pressed="${option === selected}">
      ${option === selected ? icon("check", 14) : ""}${escapeHTML(option)}
    </button>`).join("")}</div>`;
}

function playScreen() {
  const config = state.searchConfig;
  if (state.searchStarted) return searchResultScreen();
  return `
    <div class="content-inner narrow-content">
      ${pageHeader("CONFIGURAÇÃO RÁPIDA", "Quero jogar", "Leva menos de 30 segundos. A gente encontra o resto.")}
      <div class="tip-banner">${icon("bolt", 18)}<div><strong>Precisa de alguém agora?</strong><span>Use “Preciso de complete” para encontrar um substituto para seu time.</span></div><button type="button" data-screen="complete" aria-label="Ver pedidos">${icon("arrow", 17)}</button></div>
      <form class="panel play-form" data-form="search">
        <fieldset><legend>01 · QUANDO VOCÊ QUER JOGAR?</legend>
          ${optionButtons("when", ["Agora", "Hoje", "Escolher horário", "Final de semana"], config.when, "choice-four")}
          <div class="time-fields"><label>INÍCIO<input name="start" type="time" value="${config.start}"></label><label>FIM<input name="end" type="time" value="${config.end}"></label></div>
        </fieldset>
        <fieldset><legend>02 · QUAL SUA FUNÇÃO?</legend>${optionButtons("role", ["Rush", "CPT / Granadeiro", "Suporte", "Flex"], config.role, "choice-four")}</fieldset>
        <fieldset><legend>03 · O QUE VOCÊ QUER JOGAR?</legend>${optionButtons("mode", ["Camp", "Treino", "Liga", "Apostado", "Casual"], config.mode, "choice-five")}</fieldset>
        <fieldset><legend>04 · QUAL É SEU OBJETIVO?</legend>${optionButtons("objective", ["Quero montar um time competitivo", "Quero jogar regularmente", "Quero jogar quando estiver disponível", "Tanto faz"], config.objective, "choice-two")}</fieldset>
        <fieldset><legend>05 · NÍVEL DE JOGO</legend>${optionButtons("level", ["Iniciante", "Intermediário", "Avançado", "Competitivo"], config.level, "choice-four")}</fieldset>
        <button class="button button-primary button-full" type="submit">${icon("search", 17)} ENCONTRAR SQUAD</button>
      </form>
      <p class="demo-disclaimer">${icon("spark", 15)} A busca é uma simulação local. Nenhum perfil será publicado ou contatado.</p>
    </div>
  `;
}

function searchResultScreen() {
  const config = state.searchConfig;
  return `
    <div class="content-inner narrow-content">
      <button class="back-button" type="button" data-action="edit-search">${icon("back", 17)} Voltar e editar busca</button>
      ${pageHeader(state.joinedSquad ? "SQUAD #1842 · CONECTADO" : "SQUAD #1842 · ENCONTRO DEMONSTRATIVO", state.joinedSquad ? "Seu squad está pronto!" : "Squad encontrado!", `${config.when} · ${config.start}–${config.end} · ${config.mode} · ${config.level}`, '<span class="status-tag success">4/4 JOGADORES</span>')}
      <section class="panel compatibility"><div class="panel-heading"><h2>${icon("spark", 17)} Critérios compatíveis</h2><span>4 de 4</span></div><div class="compatibility-grid">${["Horário compatível", "Função compatível", "Objetivo compatível", "Nível compatível"].map((item) => `<span>${icon("check", 14)} ${item}</span>`).join("")}</div></section>
      <section class="panel squad-roster"><div class="panel-heading"><h2>Jogadores do squad</h2><span>4/4 CONFIRMADOS</span></div>${[
        ["AL", "Player Alpha", "Rush", "Você"],
        ["BE", "Player Beta", "Rush", ""],
        ["GA", "Player Gamma", "CPT", ""],
        ["DE", "Player Delta", "Suporte", ""],
      ].map(([initials, name, role, you], index) => `<div class="roster-row"><span class="slot-number">${index + 1}/4</span><span class="avatar avatar-${index}">${initials}</span><strong>${name} ${you ? '<small class="you-label">VOCÊ</small>' : ""}</strong><span class="role-tag">${role}</span><span class="online-dot"></span></div>`).join("")}</section>
      <div class="notice notice-green">${icon("spark", 17)} Horário, função, objetivo e nível compatíveis. Jogadores e resultado são demonstrativos.</div>
      <div class="action-row"><button class="button button-primary" type="button" data-action="join-squad">${state.joinedSquad ? icon("check", 17) : icon("users", 17)} ${state.joinedSquad ? "SQUAD CONFIRMADO" : "ENTRAR NO SQUAD"}</button><button class="button button-quiet" type="button" data-action="open-chat">${icon("message", 17)} CHAT DO SQUAD</button></div>
    </div>
  `;
}

function teamsScreen() {
  return `
    <div class="content-inner">
      ${pageHeader("COMUNIDADE", "Times", "Conheça equipes, encontre um lugar no squad ou descubra quem está recrutando.", `<button class="button button-primary" type="button" data-action="create-team">${icon("plus", 17)} CRIAR TIME</button>`)}
      <div class="team-type-banner"><div><span class="eyebrow">DUAS FORMAS DE JOGAR JUNTO</span><p><strong>Squad</strong> para uma sessão. <strong>Time</strong> para construir uma jornada.</p></div><span>${icon("shield", 30)}</span></div>
      <div class="team-layout"><section class="team-list"><div class="section-title"><h2>Times da comunidade</h2><span>${teams.length} DEMONSTRATIVOS</span></div>
        ${teams.map((team, index) => `<article class="panel team-card"><div class="team-card-main"><span class="team-logo">${escapeHTML(team.tag)}</span><div class="team-info"><span class="type-tag">${escapeHTML(team.type)}</span><h3>${escapeHTML(team.name)}</h3><p>${escapeHTML(team.objective)} · ${team.members}/${team.max} jogadores</p></div><span class="status-tag ${team.vacancies.length ? "open" : "success"}">${team.vacancies.length ? `${team.vacancies.length} VAGA${team.vacancies.length > 1 ? "S" : ""}` : "COMPLETO"}</span></div><div class="team-card-foot"><span>${icon("clock", 14)} ${escapeHTML(team.days)} · ${escapeHTML(team.hours)}</span><button class="text-button" type="button" data-action="team-details" data-index="${index}">Ver time ${icon("arrow", 14)}</button></div></article>`).join("")}
      </section><aside class="panel recruit-panel"><p class="eyebrow">RECRUTAMENTO</p><h2>Seu próximo time pode estar aqui.</h2><p>Veja oportunidades abertas e conheça o processo antes de enviar uma candidatura.</p><div class="recruit-metric"><strong>${teams.filter((team) => team.vacancies.length).length}</strong><span>equipes demonstrativas<br>com vagas abertas</span></div><button class="button button-primary button-full" type="button" data-action="browse-recruitment">VER OPORTUNIDADES ${icon("arrow", 15)}</button></aside></div>
      <p class="demo-disclaimer">${icon("spark", 15)} Equipes e vagas são dados fictícios criados apenas para demonstrar a experiência.</p>
    </div>
  `;
}

function teamDetailScreen() {
  const team = teams[state.selectedTeam];
  const memberNames = ["Player Alpha", "Player Beta", "Player Gamma", "Player Delta", "Player Omega", "Player Sigma"];
  const members = memberNames.slice(0, team.members).map((name, index) => `${name} · ${team.roles[index % team.roles.length] || "Flex"}`);
  return `
    <div class="content-inner">
      <button class="back-button" type="button" data-screen="teams">${icon("back", 17)} Voltar para times</button>
      ${pageHeader("TIME PERMANENTE · COMPETITIVO", escapeHTML(team.name), "Equipe de longo prazo · dados demonstrativos", `<span class="status-tag ${team.vacancies.length ? "open" : "success"}">${team.members}/${team.max} JOGADORES</span>`)}
      <div class="team-detail-grid"><section class="panel team-members"><div class="section-title"><h2>Titulares e reservas</h2><span>${members.length} JOGADORES</span></div>${members.map((member, index) => `<div class="member-row"><span class="avatar avatar-${index}">${member.slice(7, 9).toUpperCase()}</span><div><strong>${member.split(" · ")[0]}</strong><small>${member.split(" · ")[1]}</small></div><span class="online-dot"></span></div>`).join("")}${team.vacancies.map((role) => `<div class="member-row vacancy-row"><span class="avatar vacancy-avatar">${icon("plus", 17)}</span><div><strong>Vaga para ${escapeHTML(role)}</strong><small>O time está procurando</small></div><span class="status-tag open">ABERTA</span></div>`).join("")}</section>
      <aside class="team-detail-side"><article class="panel team-facts"><p class="eyebrow">SOBRE O TIME</p><dl><div><dt>OBJETIVO</dt><dd>${escapeHTML(team.objective)}</dd></div><div><dt>DISPONIBILIDADE</dt><dd>${escapeHTML(team.days)}</dd></div><div><dt>HORÁRIO</dt><dd>${escapeHTML(team.hours)}</dd></div></dl><p class="team-description">${escapeHTML(team.description)}</p></article><article class="panel team-actions">${team.vacancies.length ? `<button class="button button-primary button-full" type="button" data-action="apply-team">${icon("user", 16)} DEMONSTRAR INTERESSE</button>` : ""}<button class="button button-quiet button-full" type="button" data-action="invite-demo">${icon("users", 16)} CONVIDAR JOGADOR</button><button class="button button-quiet button-full" type="button" data-action="open-chat">${icon("message", 16)} MENSAGEM</button></article></aside></div>
      <p class="demo-disclaimer">${icon("spark", 15)} Não há candidatura real: esta ação só demonstra o fluxo visual.</p>
    </div>
  `;
}

function recruitmentScreen() {
  const openings = teams.map((team, index) => ({ team, index })).filter(({ team }) => team.vacancies.length);
  return `
    <div class="content-inner">
      <button class="back-button" type="button" data-screen="teams">${icon("back", 17)} Voltar para times</button>
      ${pageHeader("RECRUTAMENTO · OPORTUNIDADES", "Times procurando", "Confira o perfil, os horários e as vagas antes de iniciar uma conversa.")}
      <div class="recruitment-grid">${openings.map(({ team, index }) => `<article class="panel opening-card"><div class="opening-heading"><span class="team-logo">${escapeHTML(team.tag)}</span><div><span class="type-tag">TIME PERMANENTE</span><h2>${escapeHTML(team.name)} está procurando</h2></div></div><p>${escapeHTML(team.description)}</p><div class="opening-facts"><div><span>FUNÇÕES</span><strong>${team.vacancies.map(escapeHTML).join(" · ")}</strong></div><div><span>OBJETIVO</span><strong>${escapeHTML(team.objective)}</strong></div><div><span>DISPONIBILIDADE</span><strong>${escapeHTML(team.hours)}</strong></div><div><span>COMPROMISSO</span><strong>Regular</strong></div></div><button class="button button-primary button-full" type="button" data-action="recruit-details" data-index="${index}">${icon("users", 16)} VER CANDIDATOS DEMONSTRATIVOS</button></article>`).join("")}</div>
      <article class="panel process-panel"><p class="eyebrow">COMO FUNCIONA UM TESTE</p><div class="process-steps">${[["01", "Convite", "O time escolhe um candidato e combina um horário."], ["02", "Sessão de teste", "O jogador participa de um treino ou camp com a equipe."], ["03", "Avaliação", "Titulares avaliam comunicação, função e presença."], ["04", "Entrada no time", "Aprovado, o jogador vira titular ou reserva."]].map(([number, title, detail]) => `<div><span>${number}</span><p><strong>${title}</strong><small>${detail}</small></p></div>`).join("")}</div></article>
    </div>
  `;
}

function candidatesScreen() {
  const team = teams[state.selectedTeam];
  return `
    <div class="content-inner">
      <button class="back-button" type="button" data-screen="recruitment">${icon("back", 17)} Voltar para oportunidades</button>
      ${pageHeader(`RECRUTAMENTO · ${escapeHTML(team.name.toUpperCase())}`, `${escapeHTML(team.name)} está procurando`, "Candidatos de demonstração para mostrar como funcionaria uma avaliação.")}
      <div class="opening-summary panel"><div><span>FUNÇÃO</span><strong>${escapeHTML(team.vacancies[0] || "Flex")}</strong></div><div><span>OBJETIVO</span><strong>${escapeHTML(team.objective)}</strong></div><div><span>DISPONIBILIDADE</span><strong>${escapeHTML(team.hours)}</strong></div><div><span>COMPROMISSO</span><strong>Regular</strong></div></div>
      <div class="section-title"><h2>Candidatos recomendados</h2><span>3 DEMONSTRATIVOS</span></div>
      <div class="candidate-grid">${players.map((player, index) => `<article class="panel candidate-card"><div class="candidate-head"><span class="avatar avatar-${index}">${player.name.slice(0, 1)}</span><div><h3>${player.name}</h3><span>${player.role} · ${player.objective}</span></div><strong class="rating">${icon("star", 14)} ${player.rating}</strong></div><div class="candidate-facts"><div><span>DISPONIBILIDADE</span><strong>${player.hours}</strong></div><div><span>PRESENÇA</span><strong class="text-green">${97 - index}%</strong></div><div><span>COMPROMISSO</span><strong>Alto</strong></div><div><span>CLIPES</span><strong>${player.clips} disponíveis</strong></div></div><button class="button button-primary button-full" type="button" data-action="invite-candidate" data-player="${escapeHTML(player.name)}">${icon("user", 15)} CONVIDAR PARA TESTE</button></article>`).join("")}</div>
      <p class="demo-disclaimer">${icon("spark", 15)} Perfis, avaliações e disponibilidade são fictícios. Convites não são enviados.</p>
    </div>
  `;
}

function trainingsScreen() {
  return `
    <div class="content-inner">
      ${pageHeader("TREINOS ORGANIZADOS", "Treinos da comunidade", "Treinos abertos para praticar, conhecer jogadores e se preparar em equipe.", `<button class="button button-outline" type="button" data-action="create-training">${icon("plus", 16)} CRIAR TREINO</button>`)}
      <div class="training-layout"><section class="training-list"><div class="section-title"><h2>Próximos treinos</h2><span>${trainings.length} DEMONSTRATIVOS</span></div>${trainings.map((training, index) => `<article class="panel training-card"><div class="training-topline"><span class="type-tag">TREINO ABERTO</span><span class="status-tag ${training.registered < training.max ? "open" : "success"}">${training.max - training.registered} VAGAS</span></div><h2>${escapeHTML(training.title)}</h2><p>Organizado por ${escapeHTML(training.organizer)}</p><div class="training-meta"><span>${icon("clock", 15)} ${escapeHTML(training.time)}</span><span>${icon("users", 15)} Até 12 times · ${training.registered} confirmados</span><span>${icon("pin", 15)} ${escapeHTML(training.map)}</span></div><div class="training-progress"><div><span>VAGAS DE TIMES</span><strong>${training.registered}/12</strong></div><div class="progress-track"><span style="width:${Math.round(training.registered / 12 * 100)}%"></span></div></div><button class="button button-primary button-full" type="button" data-action="training-details" data-index="${index}">VER TREINO ${icon("arrow", 15)}</button></article>`).join("")}</section><aside class="panel training-aside"><span class="aside-icon">${icon("trophy", 21)}</span><p class="eyebrow">JOGAR E EVOLUIR</p><h2>Treino aberto, squad completo.</h2><p>Conheça o formato de até 12 times, veja vagas disponíveis e confirme presença.</p><div class="aside-stat"><strong>12</strong><span>times por treino</span></div><button class="button button-quiet button-full" type="button" data-action="training-details" data-index="0">EXPLORAR TREINO</button></aside></div>
      <p class="demo-disclaimer">${icon("spark", 15)} Os eventos exibidos são exemplos locais; não são convites ou partidas reais.</p>
    </div>
  `;
}

function trainingDetailScreen() {
  const training = trainings[state.selectedTraining];
  const squads = ["Os Cria", "Alpha Team", "Squad X", "Black Team", "Nova Era", "Titans", "Time 7", "Time 8", "Time 9", "Time 10", "Time 11", "Time 12"];
  const count = training.registered;
  const confirmed = Boolean(training.confirmedAttendance);
  return `
    <div class="content-inner">
      <button class="back-button" type="button" data-screen="trainings">${icon("back", 17)} Voltar para treinos</button>
      ${pageHeader("TREINO GRATUITO · DEMONSTRAÇÃO", `${escapeHTML(training.title)} · ${escapeHTML(training.time)}`, "Até 12 times, confirmações e substituições em um só lugar.", '<span class="status-tag open">INSCRIÇÕES ABERTAS</span>')}
      <div class="training-detail-grid"><section class="panel slots-panel"><div class="panel-heading"><div><p class="eyebrow">SLOTS DE TIMES</p><h2>${count}/12 times</h2></div><span class="status-tag open">${12 - count} VAGAS</span></div><div class="slots-grid">${squads.map((name, index) => `<div class="slot ${index < count ? "slot-filled" : ""}"><span>${String(index + 1).padStart(2, "0")}</span><i></i><strong>${index < count ? name : "Disponível"}</strong></div>`).join("")}</div><div class="action-row"><button class="button button-primary" type="button" data-action="confirm-training">${confirmed ? icon("check", 16) : icon("users", 16)} ${confirmed ? "PRESENÇA CONFIRMADA" : "ENTRAR NO TREINO"}</button><button class="button button-quiet" type="button" data-action="simulate-full">Simular 12/12</button></div></section>
      <aside class="training-side"><article class="panel admin-card"><p class="eyebrow">ORGANIZAÇÃO</p><div class="admin-profile"><span class="avatar avatar-orange">A</span><div><strong>${escapeHTML(training.organizer)}</strong><small>Organizador do treino</small></div></div><div class="room-credentials"><div><span>ID DA SALA</span><strong>482 911</strong></div><div><span>SENHA</span><strong>••••••</strong></div></div><p class="subtle-copy">Dados demonstrativos. A sala seria liberada antes do treino.</p></article><article class="panel substitution-card"><span class="substitution-icon">${icon("bolt", 21)}</span><div><h3>Uma equipe pode precisar de jogador</h3><p>Veja como a busca por substituto seria apresentada.</p></div><button class="button button-quiet button-full" type="button" data-action="find-substitute">${icon("search", 15)} BUSCAR SUBSTITUTO</button></article></aside></div>
      ${count === 12 ? `<div class="notice notice-orange">${icon("flame", 18)} <strong>TREINO COMPLETO · 12 TIMES</strong><span>48 jogadores previstos · dados demonstrativos</span></div>` : ""}
      ${state.vacancySimulation ? `<section class="panel vacancy-panel"><p class="eyebrow">${icon("spark", 15)} DETECÇÃO DE VAGA · SIMULAÇÃO</p><div class="notice notice-blue">${icon("search", 16)} Procurando jogador compatível... <span>3 jogadores demonstrativos notificados</span></div><button class="button button-quiet button-full" type="button" data-action="resolve-vacancy">SIMULAR SUBSTITUTO ENCONTRADO</button></section>` : ""}
      <p class="demo-disclaimer">${icon("spark", 15)} Treino, sala e participantes são demonstrativos. Nenhuma sala real será criada.</p>
    </div>
  `;
}

function completeScreen() {
  const requests = [
    { role: "Rush", mode: "Liga", time: "Agora", team: "Os Cria", count: 3, total: 4, text: "Falta 1 para fechar a line da Liga." },
    { role: "Suporte", mode: "Treino", time: "Hoje · 19:00", team: "Alpha Team", count: 3, total: 4, text: "Precisamos de suporte para o treino de hoje." },
    { role: "CPT", mode: "Treino", time: "Hoje · 20:00", team: "Squad X", count: 2, total: 4, text: "Uma vaga aberta para jogar com a gente." },
    ...(state.createdRequest ? [state.createdRequest] : []),
  ];
  return `
    <div class="content-inner">
      ${pageHeader("AÇÃO RÁPIDA", "Preciso de complete", "Pedidos objetivos para entrar em jogo sem perder tempo.", `<button class="button button-primary" type="button" data-action="create-request">${icon("plus", 17)} CRIAR PEDIDO</button>`)}
      <div class="request-grid">${requests.map((request, index) => `<article class="panel request-card"><div class="request-topline"><h2>${icon("bolt", 17)} ${escapeHTML(request.role)}</h2><span class="status-tag ${request.time === "Agora" ? "success" : "open"}">${escapeHTML(request.time.toUpperCase())}</span></div><p>${escapeHTML(request.mode)} · ${escapeHTML(request.text || `${request.count}/${request.total} jogadores`)}</p><div class="request-bottom"><span>${icon("users", 14)} ${request.count}/${request.total} jogadores · ${escapeHTML(request.team)}</span><button class="button button-quiet" type="button" data-action="request-join" data-index="${index}">${request.count === request.total ? "Completo" : "Ver pedido"}</button></div><div class="request-progress"><span style="width:${Math.round(request.count / request.total * 100)}%"></span></div></article>`).join("")}</div>
      <article class="panel how-complete"><h2>Como funciona</h2><div class="mini-steps"><div><span>1</span><strong>Informe a função</strong></div><div><span>2</span><strong>Defina o horário</strong></div><div><span>3</span><strong>Receba candidatos</strong></div></div></article>
      <p class="demo-disclaimer">${icon("spark", 15)} Pedidos demonstrativos; entrar ou criar um pedido não conecta jogadores reais.</p>
    </div>
  `;
}

function messagesScreen() {
  const selected = conversations[state.activeConversation];
  const messages = state.chatMessages[state.activeConversation] || [
    { author: "Player Gamma", text: "Bora 19h certinho, vou puxar a sala", time: "18:32", mine: false },
    { author: "Player Beta", text: "Tô on. Alguém tem call?", time: "18:34", mine: false },
    { author: "Player Gamma", text: "Call do squad já tá aberta", time: "18:35", mine: false },
  ];
  return `
    <div class="content-inner">
      ${pageHeader("COMUNICAÇÃO LEVE", "Mensagens", "Converse com seu squad, time ou organização de treino.")}
      <div class="messages-layout"><aside class="panel conversation-list" aria-label="Conversas">${conversations.map((conversation, index) => `<button class="conversation ${state.activeConversation === index ? "is-active" : ""}" type="button" data-action="conversation" data-index="${index}"><span class="avatar avatar-${index}">${conversation.initials}</span><span class="conversation-info"><strong>${conversation.title}</strong><small>${conversation.subtitle}</small></span><span class="conversation-tag">${conversation.tag}</span>${conversation.unread ? `<span class="unread-count">${conversation.unread}</span>` : ""}</button>`).join("")}</aside><section class="panel chat-panel"><header class="chat-header"><div><h2>${selected.title}</h2><p>4 jogadores · hoje 19:00</p></div><button class="button button-primary" type="button" data-action="open-call">${icon("mic", 16)} CALL</button></header><div class="chat-messages" aria-live="polite">${messages.map((message) => `<div class="chat-bubble ${message.mine ? "mine" : ""}"><span>${escapeHTML(message.author)}</span><p>${escapeHTML(message.text)}</p><small>${message.time}</small></div>`).join("")}</div><div class="quick-replies">${["Tô on", "Chego em 5 min", "Bora!", "Vou atrasar 10 min"].map((reply) => `<button type="button" data-action="quick-reply" data-message="${reply}">${reply}</button>`).join("")}</div><form class="chat-compose" data-form="chat"><label class="sr-only" for="chat-message">Mensagem</label><input id="chat-message" name="message" placeholder="Mensagem..." maxlength="160" autocomplete="off"><button type="submit" class="button button-primary" aria-label="Enviar mensagem">${icon("send", 17)}</button></form></section></div>
      <p class="demo-disclaimer">${icon("spark", 15)} Conversas são exemplos locais. Não há chat online ou mensagens enviadas.</p>
    </div>
  `;
}

function callScreen() {
  const participants = [["AL", "Alpha", "Conectado"], ["BE", "Beta", "Conectado"], ["GA", "Gamma", "Falando"], ["DE", "Delta", "Conectado"]];
  return `
    <div class="content-inner narrow-content">
      <button class="back-button" type="button" data-screen="messages">${icon("back", 17)} Voltar para mensagens</button>
      ${pageHeader("SQUAD #1842 · 19:00–22:00", "Call do squad", "Participantes: 4")}
      <section class="panel call-panel"><div class="call-grid">${participants.map(([initials, name, status], index) => `<div class="call-person ${index === 2 ? "is-speaking" : ""}"><span class="call-avatar avatar-${index}">${initials}</span><strong>${name}${index === 0 ? '<small> VOCÊ</small>' : ""}</strong><span>${status}</span></div>`).join("")}</div><label class="volume-control">${icon("volume", 17)} <input type="range" min="0" max="100" value="70" aria-label="Volume da demonstração"><span>70%</span></label><div class="call-controls"><button class="button button-quiet" type="button" data-action="toggle-mic">${icon("mic", 17)} MICROFONE <small>(DEMO)</small></button><button class="button button-danger" type="button" data-screen="messages">${icon("close", 17)} SAIR DA TELA DE CALL</button></div></section>
      <p class="eyebrow alternatives-label">ALTERNATIVAS DE CALL</p><div class="external-call-options"><button class="button button-quiet" type="button" data-action="external-call">Usar Discord ↗</button><button class="button button-quiet" type="button" data-action="external-call">Usar Google Meet ↗</button></div>
      <p class="demo-disclaimer">${icon("spark", 15)} Esta tela é ilustrativa. Não acessa microfone nem inicia uma chamada.</p>
    </div>
  `;
}

function profileScreen() {
  return `
    <div class="content-inner">
      ${pageHeader("SEU ESPAÇO", "Perfil demonstrativo", "Uma prévia de como jogadores podem apresentar seu estilo e disponibilidade.")}
      <div class="profile-layout"><section class="panel profile-card"><div class="profile-identity"><span class="profile-avatar">AL</span><div><span class="status-tag success">DISPONÍVEL AGORA</span><h2>Player Alpha</h2><p>Jogador de Free Fire · Perfil de demonstração</p></div></div><div class="profile-stats"><div><strong>4.8</strong><span>${icon("star", 14)} AVALIAÇÃO</span></div><div><strong>48</strong><span>${icon("trophy", 14)} TREINOS</span></div><div><strong>97%</strong><span>${icon("check", 14)} PRESENÇA</span></div></div><div class="profile-details"><div><span>FUNÇÃO PRINCIPAL</span><strong>Rush</strong></div><div><span>OBJETIVO</span><strong>Competitivo</strong></div><div><span>DISPONIBILIDADE</span><strong>Hoje · 19:00–23:00</strong></div><div><span>NÍVEL</span><strong>Avançado</strong></div></div><button class="button button-quiet button-full" type="button" data-action="profile-edit">${icon("settings", 16)} EDITAR PERFIL (DEMO)</button></section><section class="panel profile-clips"><div class="section-title"><h2>Clipes</h2><span>3 DEMONSTRATIVOS</span></div><div class="clip-grid">${["Clutch 1v3 em Bermuda", "Rush de entrada — Purgatório", "Rotação final — Kalahari"].map((clip, index) => `<div class="clip-item clip-color-${index}"><span>DEMONSTRATIVO</span><button type="button" data-action="play-clip" aria-label="Reproduzir clipe demonstrativo">${icon("arrow", 20)}</button><strong>${clip}</strong></div>`).join("")}</div><p class="subtle-copy">Clipes de vídeo poderão ser adicionados quando o perfil estiver conectado à plataforma.</p></section></div>
      <p class="demo-disclaimer">${icon("spark", 15)} Nome, métricas e disponibilidade são exemplos; não há conta conectada.</p>
    </div>
  `;
}

function renderModal() {
  const type = state.modal;
  const title = type === "request" ? "Criar pedido de complete" : type === "training" ? "Criar treino" : type === "team" ? "Criar time" : type === "invite" ? "Convidar para teste" : "Ação demonstrativa";
  if (type === "candidate") {
    const team = teams[state.selectedTeam];
    return `<div class="modal-backdrop" data-action="close-modal"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal-content><button class="modal-close" type="button" data-action="close-modal" aria-label="Fechar">${icon("close", 18)}</button><p class="eyebrow">TESTE COM A EQUIPE</p><h2 id="modal-title">${title}</h2><p>${escapeHTML(state.selectedPlayer)} jogará com ${escapeHTML(team.name)} em uma sessão de avaliação. O convite não será enviado.</p>${["Hoje 19:00 · Treino de 12 times", "Quarta 20:00 · Camp interno", "Sábado 15:00 · Camp semanal"].map((choice, index) => `<label class="radio-option"><input type="radio" name="test-session" value="${index}" ${index === 0 ? "checked" : ""}><span><strong>${choice.split(" · ")[0]}</strong><small>${choice.split(" · ")[1]}</small></span></label>`).join("")}<button class="button button-primary button-full" type="button" data-action="demo-invite">${icon("user", 16)} ENVIAR CONVITE DEMONSTRATIVO</button></section></div>`;
  }
  if (type === "invite") {
    return `<div class="modal-backdrop" data-action="close-modal"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal-content><button class="modal-close" type="button" data-action="close-modal" aria-label="Fechar">${icon("close", 18)}</button><p class="eyebrow">CONVITE</p><h2 id="modal-title">${title}</h2><p>Convide um jogador pelo nome ou ID (exemplo).</p><form data-form="invite"><label>JOGADOR<input name="player" placeholder="Nick ou ID do jogador" required maxlength="40"></label><button class="button button-primary button-full" type="submit">CRIAR CONVITE DE DEMONSTRAÇÃO</button></form></section></div>`;
  }
  if (type === "team") {
    return `<div class="modal-backdrop" data-action="close-modal"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal-content><button class="modal-close" type="button" data-action="close-modal" aria-label="Fechar">${icon("close", 18)}</button><p class="eyebrow">NOVO TIME</p><h2 id="modal-title">${title}</h2><p>Defina uma apresentação básica. O time ficará apenas nesta sessão de demonstração.</p><form data-form="team"><label>NOME DO TIME<input name="name" placeholder="Ex.: Squad da comunidade" maxlength="35" required></label><label>OBJETIVO<select name="objective"><option>Competitivo</option><option>Jogar regularmente</option><option>Casual</option></select></label><button class="button button-primary button-full" type="submit">${icon("plus", 16)} CRIAR DEMONSTRAÇÃO</button></form></section></div>`;
  }
  if (type === "training") {
    return `<div class="modal-backdrop" data-action="close-modal"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal-content><button class="modal-close" type="button" data-action="close-modal" aria-label="Fechar">${icon("close", 18)}</button><p class="eyebrow">NOVO EVENTO</p><h2 id="modal-title">${title}</h2><p>Organize um exemplo de treino aberto. Nenhuma sala real será criada.</p><form data-form="training"><label>NOME DO TREINO<input name="title" placeholder="Ex.: Treino aberto de sábado" required maxlength="45"></label><label>HORÁRIO<input name="time" type="datetime-local" required></label><label>MAPAS / FORMATO<input name="map" value="Bermuda · 4 quedas" required maxlength="60"></label><button class="button button-primary button-full" type="submit">${icon("calendar", 16)} CRIAR DEMONSTRAÇÃO</button></form></section></div>`;
  }
  return `<div class="modal-backdrop" data-action="close-modal"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal-content><button class="modal-close" type="button" data-action="close-modal" aria-label="Fechar">${icon("close", 18)}</button><p class="eyebrow">PEDIDO DE JOGADOR</p><h2 id="modal-title">${title}</h2><p>Descreva a vaga para demonstrar como um pedido poderia ser publicado.</p><form data-form="request"><label>FUNÇÃO<select name="role"><option>Rush</option><option>Suporte</option><option>CPT / Granadeiro</option><option>Flex</option></select></label><label>TIPO DE JOGO<select name="mode"><option>Liga</option><option>Treino</option><option>Camp</option><option>Casual</option></select></label><label>DESCRIÇÃO<input name="description" placeholder="Ex.: Falta 1 para fechar o squad" required maxlength="90"></label><button class="button button-primary button-full" type="submit">${icon("plus", 16)} CRIAR PEDIDO DEMONSTRATIVO</button></form></section></div>`;
}

function renderScreen() {
  const screens = {
    home: homeScreen,
    play: playScreen,
    teams: teamsScreen,
    team: teamDetailScreen,
    recruitment: recruitmentScreen,
    candidates: candidatesScreen,
    trainings: trainingsScreen,
    training: trainingDetailScreen,
    complete: completeScreen,
    messages: messagesScreen,
    call: callScreen,
    profile: profileScreen,
  };
  app.innerHTML = shell((screens[state.screen] || homeScreen)());
  const screenTitles = {
    home: "Início",
    play: "Quero jogar",
    teams: "Times",
    team: "Time",
    recruitment: "Recrutamento",
    candidates: "Candidatos",
    trainings: "Treinos",
    training: "Treino",
    complete: "Preciso de complete",
    messages: "Mensagens",
    call: "Call",
    profile: "Perfil",
  };
  document.title = `${screenTitles[state.screen] || "Dropaai"} · Dropaai`;
}

function showToast(message) {
  state.toast = message;
  renderScreen();
  window.setTimeout(() => {
    if (state.toast === message) {
      state.toast = "";
      renderScreen();
    }
  }, 2800);
}

function navigate(screen) {
  state.screen = screen;
  state.modal = null;
  state.toast = "";
  history.replaceState(null, "", `#${screen}`);
  renderScreen();
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelector("#main-content").focus({ preventScroll: true });
}

function parseScreenFromHash() {
  const screen = location.hash.slice(1);
  const available = ["home", "play", "teams", "trainings", "complete", "messages", "profile"];
  state.screen = available.includes(screen) ? screen : "home";
}

app.addEventListener("click", (event) => {
  const screenTarget = event.target.closest("[data-screen]");
  if (screenTarget) {
    navigate(screenTarget.dataset.screen);
    return;
  }
  const choice = event.target.closest("[data-choice-group]");
  if (choice) {
    state.searchConfig[choice.dataset.choiceGroup] = choice.dataset.choice;
    renderScreen();
    return;
  }
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action, index } = target.dataset;
  if (action === "go-play") navigate("play");
  if (action === "edit-search") { state.searchStarted = false; renderScreen(); }
  if (action === "join-squad") { state.joinedSquad = true; showToast("Squad confirmado nesta demonstração."); }
  if (action === "open-chat") navigate("messages");
  if (action === "team-details") { state.selectedTeam = Number(index); navigate("team"); }
  if (action === "browse-recruitment") navigate("recruitment");
  if (action === "recruit-details") { state.selectedTeam = Number(index); navigate("candidates"); }
  if (action === "apply-team") showToast("Interesse registrado apenas nesta demonstração.");
  if (action === "invite-demo") { state.modal = "invite"; renderScreen(); }
  if (action === "invite-candidate") { state.selectedPlayer = target.dataset.player; state.modal = "candidate"; renderScreen(); }
  if (action === "demo-invite") { state.modal = null; showToast("Convite de teste demonstrativo criado."); }
  if (action === "create-team") { state.modal = "team"; renderScreen(); }
  if (action === "create-training") { state.modal = "training"; renderScreen(); }
  if (action === "training-details") { state.selectedTraining = Number(index); navigate("training"); }
  if (action === "confirm-training") {
    const training = trainings[state.selectedTraining];
    const confirmed = Boolean(training.confirmedAttendance);
    if (!confirmed && training.registered >= training.max) {
      showToast("Este treino demonstrativo está sem vagas.");
      return;
    }
    training.confirmedAttendance = !confirmed;
    training.registered += training.confirmedAttendance ? 1 : -1;
    showToast(training.confirmedAttendance ? "Presença confirmada na demonstração." : "Confirmação removida.");
  }
  if (action === "simulate-full") { trainings[state.selectedTraining].registered = 12; showToast("Treino preenchido com dados de demonstração."); }
  if (action === "find-substitute") { state.vacancySimulation = true; renderScreen(); }
  if (action === "resolve-vacancy") { state.vacancySimulation = false; showToast("Substituto encontrado na demonstração."); }
  if (action === "create-request") { state.modal = "request"; renderScreen(); }
  if (action === "request-join") showToast("Ação simulada — nenhum jogador foi notificado.");
  if (action === "conversation") { state.activeConversation = Number(index); renderScreen(); }
  if (action === "open-call") navigate("call");
  if (action === "quick-reply") sendMessage(target.dataset.message);
  if (action === "toggle-mic") showToast("Controles de áudio não são ativados no protótipo.");
  if (action === "external-call") showToast("Links de chamada serão configurados em uma etapa futura.");
  if (action === "profile-edit") showToast("Edição de perfil ainda não está conectada.");
  if (action === "play-clip") showToast("Clipes de exemplo não contêm mídia real.");
  if (action === "close-modal") {
    if (target === event.target || target.matches("button")) {
      state.modal = null;
      renderScreen();
    }
  }
});

app.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  if (form.dataset.form === "search") {
    state.searchConfig.start = data.get("start") || state.searchConfig.start;
    state.searchConfig.end = data.get("end") || state.searchConfig.end;
    state.searchStarted = true;
    renderScreen();
  }
  if (form.dataset.form === "chat") {
    const message = String(data.get("message") || "").trim();
    if (message) sendMessage(message);
  }
  if (form.dataset.form === "request") {
    state.createdRequest = { role: data.get("role"), mode: data.get("mode"), time: "AGORA", team: "Seu squad", count: 3, total: 4, text: data.get("description") };
    state.modal = null;
    state.screen = "complete";
    showToast("Pedido de demonstração criado.");
  }
  if (form.dataset.form === "training") {
    const date = data.get("time") ? new Date(data.get("time")) : null;
    trainings.unshift({
      id: `tr-${Date.now()}`,
      title: data.get("title"),
      organizer: "Player Alpha",
      time: date && !Number.isNaN(date.valueOf()) ? date.toLocaleString("pt-BR", { weekday: "long", hour: "2-digit", minute: "2-digit" }) : "Horário a definir",
      map: data.get("map"),
      registered: 1,
      max: 12,
      status: "Aberto",
    });
    state.modal = null;
    state.screen = "trainings";
    showToast("Treino de demonstração criado.");
  }
  if (form.dataset.form === "team") {
    const name = String(data.get("name")).trim();
    if (!name) return;
    teams.unshift({ name, tag: name.slice(0, 3).toUpperCase(), type: "Permanente", objective: data.get("objective"), members: 1, max: 6, roles: ["Rush"], days: "A definir", hours: "A combinar", description: "Novo time criado nesta demonstração.", vacancies: ["Rush", "Suporte"] });
    state.modal = null;
    state.screen = "teams";
    showToast("Time de demonstração criado.");
  }
  if (form.dataset.form === "invite") {
    const player = String(data.get("player")).trim();
    if (!player) return;
    state.modal = null;
    showToast(`Convite demonstrativo para ${player} preparado.`);
  }
});

function sendMessage(text) {
  const messages = state.chatMessages[state.activeConversation] || [];
  messages.push({ author: "Alpha (você)", text, time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }), mine: true });
  state.chatMessages[state.activeConversation] = messages;
  renderScreen();
}

window.addEventListener("hashchange", () => {
  parseScreenFromHash();
  renderScreen();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.modal) {
    state.modal = null;
    renderScreen();
  }
});

parseScreenFromHash();
renderScreen();
