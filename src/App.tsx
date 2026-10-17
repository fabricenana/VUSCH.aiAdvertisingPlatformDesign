import { createContext, useContext, useEffect, useState } from "react";

type IconName =
  | "add"
  | "arrow"
  | "assistant"
  | "check"
  | "chevron"
  | "close"
  | "create"
  | "image"
  | "link"
  | "map"
  | "more"
  | "pause"
  | "play"
  | "refresh"
  | "sparkles"
  | "track"
  | "user"
  | "video"
  | "voice";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    add: <path d="M12 5v14M5 12h14" />,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    assistant: <><rect x="4" y="5" width="16" height="14" rx="5" /><path d="M9 10h.01M15 10h.01M9 15c1.8 1.3 4.2 1.3 6 0M12 2v3" /><circle cx="12" cy="2" r=".7" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    create: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m3 15 5-5 4 4 2-2 7 7" /><circle cx="16" cy="8" r="1.5" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2" /><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z" /><path d="M9 3v15M15 6v15" /></>,
    more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
    pause: <><path d="M9 8v8M15 8v8" /></>,
    play: <path d="m9 7 8 5-8 5Z" />,
    refresh: <><path d="M20 6v5h-5" /><path d="M4 18v-5h5" /><path d="M18 9a7 7 0 0 0-12-2l-2 4M6 15a7 7 0 0 0 12 2l2-4" /></>,
    sparkles: <><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2Z" /><path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8Z" /><path d="m19 14 .5 1.5 1.5.5-1.5.5L19 18l-.5-1.5L17 16l1.5-.5Z" /></>,
    track: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M7 15v-3M12 15V8M17 15v-5" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    video: <><rect x="3" y="5" width="14" height="14" rx="2" /><path d="m17 10 4-2v8l-4-2Z" /></>,
    voice: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const FOOD_IMAGE = "https://images.unsplash.com/photo-1765646772493-7b5341714eea?auto=format&fit=crop&w=1800&q=88";
const PRODUCT_IMAGE = "https://images.unsplash.com/photo-1577594955964-d50df414b8ff?auto=format&fit=crop&w=500&q=82";
const COMMERCE_IMAGE = "https://images.unsplash.com/photo-1758634553713-8130e8a5761d?auto=format&fit=crop&w=500&q=82";
const EVENT_IMAGE = "https://images.unsplash.com/photo-1657299156568-c94580e20fb6?auto=format&fit=crop&w=500&q=82";
const PACK_IMAGE = "https://images.unsplash.com/photo-1730219360716-5a207776cfe1?auto=format&fit=crop&w=500&q=82";
const TRAM_IMAGE = "https://images.unsplash.com/photo-1600894507969-fc68ab1a0f8c?auto=format&fit=crop&w=500&q=82";
const SOCIAL_IMAGE = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=82";
const PRESS_IMAGE = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=500&q=82";
const OUTDOOR_IMAGE = "https://images.unsplash.com/photo-1659642938575-c3587f518c45?auto=format&fit=crop&w=500&q=82";
const WEB_IMAGE = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=82";
const AI_IMAGE = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=82";

const AccountContext = createContext({ tokens: 1840, addTokens: (_amount: number) => {}, openAccount: () => {} });

const cantonFlags = [
  ["VD", "Vaud", "Flag_of_Canton_of_Vaud.svg"],
  ["GE", "Genève", "Flag_of_Canton_of_Geneva.svg"],
  ["FR", "Fribourg", "Flag_of_Canton_of_Fribourg.svg"],
  ["VS", "Valais", "Flag_of_Canton_of_Valais.svg"],
  ["NE", "Neuchâtel", "Flag_of_Canton_of_Neuchâtel.svg"],
  ["BE", "Berne", "Flag_of_Canton_of_Bern.svg"],
];

const media = [
  ["Réseaux sociaux", "Choisissez vos plateformes", "Recommandé", "social", SOCIAL_IMAGE],
  ["Transports publics", "Trams et écrans urbains", "Recommandé", "tram", TRAM_IMAGE],
  ["Presse locale numérique", "Sites d’actualité régionaux", "Pertinent", "press", PRESS_IMAGE],
  ["Affichage extérieur", "Écrans en ville", "Pertinent", "outdoor", OUTDOOR_IMAGE],
  ["Publicité sur Internet", "Bannières contextuelles", "Complémentaire", "web", WEB_IMAGE],
  ["Plateformes IA", "Placement illustratif", "Potentiel", "ai", AI_IMAGE],
];

const socialChannels = [
  ["Facebook", "facebook", "1877F2"],
  ["Instagram", "instagram", "E4405F"],
  ["TikTok", "tiktok", "111111"],
  ["Snapchat", "snapchat", "111111"],
  ["LinkedIn", "linkedin", "0A66C2"],
  ["YouTube", "youtube", "FF0000"],
];

function Logo() {
  return <button className="logo" onClick={() => location.reload()} aria-label="Retour à l’accueil">VUSCH<span>.ai</span></button>;
}

function Header({ label }: { label?: string }) {
  const { tokens, openAccount } = useContext(AccountContext);
  return (
    <header className="topbar">
      <Logo />
      {label && <div className="header-context"><span className="status-dot" />{label}</div>}
      <div className="top-actions">
        <button className="token-pill" onClick={openAccount}><span className="token-gem">V</span><strong>{tokens.toLocaleString("fr-CH")}</strong><small>jetons</small></button>
        <button className="account-button" onClick={openAccount}><span>CL</span><span className="account-name">Camille</span></button>
      </div>
    </header>
  );
}

function PillButton({ icon, children, onClick, active = false }: { icon?: IconName; children: React.ReactNode; onClick?: () => void; active?: boolean }) {
  return <button className={`pill-button ${active ? "active" : ""}`} onClick={onClick}>{icon && <Icon name={icon} size={17} />}{children}</button>;
}

function PrimaryButton({ children, onClick, icon = "arrow", wide = false }: { children: React.ReactNode; onClick?: () => void; icon?: IconName; wide?: boolean }) {
  return <button className={`primary-button ${wide ? "wide" : ""}`} onClick={onClick}><span>{children}</span><Icon name={icon} size={18} /></button>;
}

function SecondaryButton({ children, onClick, icon }: { children: React.ReactNode; onClick?: () => void; icon?: IconName }) {
  return <button className="secondary-button" onClick={onClick}>{icon && <Icon name={icon} size={17} />}{children}</button>;
}

function Dock({ screen, setScreen, assistantOpen, setAssistantOpen }: { screen: number; setScreen: (n: number) => void; assistantOpen: boolean; setAssistantOpen: (v: boolean) => void }) {
  return (
    <>
      {assistantOpen && (
        <div className="assistant-popover">
          <button className="popover-close" onClick={() => setAssistantOpen(false)}><Icon name="close" size={16} /></button>
          <div className="agent-mark"><Icon name="sparkles" size={18} /></div>
          <strong>Comment puis-je vous aider ?</strong>
          <p>Je peux modifier votre création ou expliquer une recommandation, simplement.</p>
          <div className="mini-input">Écrivez votre question… <Icon name="arrow" size={16} /></div>
        </div>
      )}
      <nav className="dock" aria-label="Navigation principale">
        <button className={screen < 8 ? "dock-item active" : "dock-item"} onClick={() => setScreen(0)}><Icon name="create" /><span>Créer</span></button>
        <button className={screen === 8 ? "dock-item active" : "dock-item"} onClick={() => setScreen(8)}><Icon name="track" /><span>Suivi</span></button>
        <span className="dock-divider" />
        <button className={`dock-item ${assistantOpen ? "active" : ""}`} onClick={() => setAssistantOpen(!assistantOpen)}><Icon name="assistant" /><span>Assistant</span></button>
        <button className={screen === 9 ? "dock-item active" : "dock-item"} onClick={() => setScreen(9)}><Icon name="user" /><span>Compte</span></button>
      </nav>
    </>
  );
}

function StepRail({ screen }: { screen: number }) {
  const stage = screen <= 3 ? 1 : screen <= 5 ? 2 : screen <= 7 ? 3 : 4;
  return (
    <div className="step-rail">
      {[["1", "Création"], ["2", "Diffusion"], ["3", "Confirmation"]].map(([n, label], i) => (
        <div className={`step ${stage >= i + 1 ? "active" : ""}`} key={n}>
          <span>{stage > i + 1 ? <Icon name="check" size={13} /> : n}</span><b>{label}</b>
        </div>
      ))}
    </div>
  );
}

function Home({ onStart }: { onStart: () => void }) {
  const [prompt, setPrompt] = useState("");
  return (
    <main className="home">
      <Header />
      <section className="hero">
        <div className="eyebrow"><Icon name="sparkles" size={15} /> Votre studio publicitaire intelligent</div>
        <h1>Quelle publicité allons-nous<br className="desktop-only" /> créer aujourd’hui&nbsp;?</h1>
        <p className="hero-subtitle">Décrivez simplement votre idée. Nos agents s’occupent de la création et de sa diffusion.</p>
        <div className="prompt-box">
          <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ex. Je veux une vidéo de 15 secondes pour promouvoir mon restaurant à Lausanne. Voici mon site." />
          <div className="prompt-tools">
            <div>
              <button title="Ajouter une image"><Icon name="image" /></button>
              <button title="Ajouter une vidéo"><Icon name="video" /></button>
              <button title="Ajouter un lien"><Icon name="link" /></button>
              <button title="Dicter"><Icon name="voice" /></button>
            </div>
            <button className="send-button" onClick={onStart} aria-label="Créer ma publicité"><Icon name="arrow" /></button>
          </div>
        </div>
        <div className="suggestions">
          {[
            ["Créer une publicité vidéo", FOOD_IMAGE],
            ["Transformer mon produit", PRODUCT_IMAGE],
            ["Promouvoir mon commerce", COMMERCE_IMAGE],
            ["Faire connaître mon événement", EVENT_IMAGE],
          ].map(([label, image]) => (
            <button className="suggestion-card" onClick={onStart} key={label}>
              <img src={image} alt="" />
              <span>{label}</span>
              <Icon name="arrow" size={15} />
            </button>
          ))}
        </div>
        <p className="trust-note"><span><Icon name="check" size={13} /></span> Aucune connaissance publicitaire nécessaire</p>
      </section>
    </main>
  );
}

function VideoPreview({ ready = false, compact = false }: { ready?: boolean; compact?: boolean }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={`video-preview ${compact ? "compact" : ""}`}>
      <img src={FOOD_IMAGE} alt="Table élégante du restaurant Le Sureau à Lausanne" />
      <div className="video-shade" />
      <div className="video-top"><span>LE SUREAU · LAUSANNE</span><span>9:16 · 15 sec</span></div>
      <div className="video-copy">
        <span>Une table.<br />Une histoire.</span>
        <small>Une cuisine de saison au cœur de Lausanne</small>
      </div>
      <button className="play-button" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause" : "Lecture"}><Icon name={playing ? "pause" : "play"} size={23} /></button>
      {!compact && <div className="video-controls"><span className="time">00:0{playing ? "8" : "0"}</span><span className="timeline"><i style={{ width: playing ? "54%" : "4%" }} /></span><span className="time">00:15</span></div>}
      {ready && <div className="ready-badge"><Icon name="check" size={14} /> Création prête</div>}
    </div>
  );
}

function Studio({ ready, onReady, onApprove }: { ready: boolean; onReady: () => void; onApprove: () => void }) {
  const [variant, setVariant] = useState(0);
  useEffect(() => {
    if (!ready) {
      const timer = window.setTimeout(onReady, 1800);
      return () => window.clearTimeout(timer);
    }
  }, [ready, onReady]);
  return (
    <main className="app-shell">
      <Header label="Campagne Le Sureau" />
      <StepRail screen={ready ? 2 : 1} />
      <div className="studio-layout">
        <aside className="conversation">
          <div className="panel-heading"><div><span className="kicker">Conversation</span><strong>Votre demande</strong></div><button><Icon name="more" /></button></div>
          <div className="messages">
            <div className="message user-message">Je veux une vidéo de 15 secondes pour promouvoir mon restaurant à Lausanne. Voici mon site.</div>
            <div className="message agent-message"><span className="agent-avatar"><Icon name="sparkles" size={14} /></span><div><b>VUSCH Agent</b><p>Parfait. J’ai repéré une cuisine de saison et une atmosphère élégante. Je crée une première proposition.</p></div></div>
            <div className="message agent-message"><span className="agent-avatar"><Icon name="sparkles" size={14} /></span><div><b>VUSCH Agent</b><p>{ready ? "Votre vidéo est prête. J’ai privilégié une ambiance intime et locale." : "Composition des scènes et génération vidéo en cours…"}</p></div></div>
          </div>
          <div className="conversation-input"><span>Demandez une modification…</span><button><Icon name="arrow" size={17} /></button></div>
          <div className="quick-edits"><button>Change la musique</button><button>Plus élégant</button></div>
        </aside>
        <section className="creative-stage">
          <div className="stage-header">
            <div><span className="kicker">Studio IA</span><h2>{ready ? "Votre création est prête" : "Création de votre publicité"}</h2></div>
            <div className={`generation-state ${ready ? "done" : ""}`}><span>{ready ? <Icon name="check" size={14} /> : <i />}</span>{ready ? "Terminée" : "Génération Runway simulée"}</div>
          </div>
          <div className="canvas-area">
            <VideoPreview ready={ready} />
            {!ready && <div className="generation-overlay"><span className="loader-ring" /><strong>Nos agents donnent vie à votre histoire</strong><small>Composition des scènes · 72%</small><span className="load-track"><i /></span></div>}
          </div>
          <div className="variant-row">
            <div className="variant-label"><strong>Versions</strong><span>3 propositions</span></div>
            {[0, 1, 2].map((v) => <button key={v} className={`variant ${variant === v ? "selected" : ""}`} onClick={() => setVariant(v)}><img src={`${FOOD_IMAGE}&sat=${v === 1 ? -35 : v === 2 ? 15 : 0}`} alt="" /><span>0{v + 1}</span>{variant === v && <i><Icon name="check" size={12} /></i>}</button>)}
          </div>
          {ready && (
            <div className="studio-actions">
              <div><SecondaryButton icon="create">Modifier</SecondaryButton><SecondaryButton icon="refresh">Régénérer</SecondaryButton></div>
              <PrimaryButton onClick={onApprove} icon="check">Choisir cette version</PrimaryButton>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function Approval({ onBack, onApprove }: { onBack: () => void; onApprove: () => void }) {
  return (
    <main className="app-shell approval-page">
      <Header label="Campagne Le Sureau" /><StepRail screen={3} />
      <section className="approval-card">
        <div className="approval-copy">
          <span className="success-icon"><Icon name="check" size={26} /></span>
          <span className="kicker">Votre création est prête</span>
          <h1>Cette publicité vous ressemble-t-elle&nbsp;?</h1>
          <p>Une fois approuvée, nos agents vous proposeront les meilleurs endroits pour la diffuser. Rien ne sera dépensé sans votre confirmation finale.</p>
          <dl><div><dt>Format</dt><dd>Vidéo verticale</dd></div><div><dt>Durée</dt><dd>15 secondes</dd></div><div><dt>Version</dt><dd>Élégance locale · 01</dd></div></dl>
          <div className="approval-actions"><SecondaryButton onClick={onBack} icon="create">Modifier ma publicité</SecondaryButton><PrimaryButton onClick={onApprove} icon="check">J’approuve cette création</PrimaryButton></div>
        </div>
        <div className="approval-preview"><VideoPreview ready compact /></div>
      </section>
    </main>
  );
}

function MediaRecommendation({ onContinue, landingUrl, setLandingUrl }: { onContinue: () => void; landingUrl: string; setLandingUrl: (value: string) => void }) {
  const [selected, setSelected] = useState(["social", "tram", "press", "outdoor"]);
  const [channels, setChannels] = useState(["facebook", "instagram", "tiktok"]);
  const [detailsOpen, setDetailsOpen] = useState("social");
  const toggle = (id: string) => setSelected((current) => current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
  const toggleChannel = (id: string) => setChannels((current) => current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
  return (
    <main className="app-shell content-page">
      <Header label="Plan de diffusion" /><StepRail screen={4} />
      <section className="page-intro"><div><span className="kicker">Recommandation de vos agents</span><h1>Voici où nous vous conseillons<br />de diffuser votre publicité.</h1></div><p>Pour toucher les Lausannois au bon moment, nous privilégions une présence locale, visuelle et simple. Vous gardez le dernier mot.</p></section>
      <div className="recommendation-banner"><span className="agent-mark"><Icon name="sparkles" size={18} /></span><div><strong>Notre recommandation</strong><p>Instagram crée l’envie, tandis que les écrans urbains et la presse locale renforcent votre présence près du restaurant.</p></div></div>
      <section className="media-list">
        {media.map(([title, description, badge, id, image], index) => (
          <div className={`media-item ${selected.includes(id) ? "selected" : ""}`} key={id}>
            <button className="media-row" onClick={() => { toggle(id); if (id === "social") setDetailsOpen("social"); }}>
              <img className="media-thumb" src={image} alt="" />
              <span className="media-name"><strong>{title}</strong><small>{description}</small></span>
              <span className="media-reason">{index === 0 ? `${channels.length} plateformes sélectionnées` : index === 1 ? "Visible autour des heures de repas" : index === 5 ? "Disponibilité commerciale non confirmée" : "Renforce votre présence locale"}</span>
              <span className={`recommendation-tag ${badge === "Recommandé" ? "best" : ""}`}>{badge}</span>
              <span className="select-check">{selected.includes(id) && <Icon name="check" size={15} />}</span>
              <span className={`detail-chevron ${detailsOpen === id ? "open" : ""}`} onClick={(event) => { event.stopPropagation(); setDetailsOpen(detailsOpen === id ? "" : id); }}><Icon name="chevron" size={15} /></span>
            </button>
            {id === "social" && detailsOpen === "social" && selected.includes("social") && (
              <div className="channel-picker">
                <div className="channel-heading"><div><strong>Sur quels réseaux souhaitez-vous diffuser&nbsp;?</strong><small>L’IA adaptera automatiquement le format à chaque plateforme.</small></div><span>{channels.length} sélectionnés</span></div>
                <div className="channel-grid">
                  {socialChannels.map(([name, slug, color]) => (
                    <button key={slug} className={channels.includes(slug) ? "selected" : ""} onClick={() => toggleChannel(slug)}>
                      <span className={`brand-logo brand-${slug}`}><img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" /></span>
                      <strong>{name}</strong>
                      <i>{channels.includes(slug) && <Icon name="check" size={13} />}</i>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
      <section className="landing-panel">
        <div className="landing-icon"><Icon name="link" /></div>
        <div className="landing-copy"><strong>Où envoyer les personnes intéressées&nbsp;?</strong><p>Ajoutez la page à ouvrir après un clic sur les réseaux sociaux, la presse numérique ou les bannières web.</p></div>
        <label className="url-field"><span>Lien d’atterrissage</span><div><Icon name="link" size={16} /><input type="url" value={landingUrl} onChange={(event) => setLandingUrl(event.target.value)} placeholder="https://votre-site.ch/offre" /><i><Icon name="check" size={13} /></i></div></label>
      </section>
      <div className="sticky-actions"><span>{selected.length} familles de médias sélectionnées</span><PrimaryButton onClick={onContinue}>Choisir la zone et le budget</PrimaryButton></div>
    </main>
  );
}

function Targeting({ onContinue }: { onContinue: () => void }) {
  const [cantons, setCantons] = useState(["VD", "GE"]);
  const [budget, setBudget] = useState(1200);
  const toggle = (code: string) => setCantons((c) => c.includes(code) ? c.filter((x) => x !== code) : [...c, code]);
  return (
    <main className="app-shell content-page">
      <Header label="Plan de diffusion" /><StepRail screen={5} />
      <section className="page-intro compact-intro"><div><span className="kicker">Zone & budget</span><h1>Où souhaitez-vous être vu&nbsp;?</h1></div><p>Nous adapterons la diffusion à votre budget. Vous pouvez tout modifier avant de confirmer.</p></section>
      <div className="target-grid">
        <section className="setting-panel">
          <div className="setting-heading"><div><span className="number">1</span><div><h2>Choisissez votre zone</h2><p>Pour ce restaurant, Vaud et Genève offrent le meilleur équilibre entre proximité et découverte.</p></div></div></div>
          <div className="smart-pills"><PillButton active onClick={() => setCantons(["VD", "GE"])}>Genève et Vaud</PillButton><PillButton onClick={() => setCantons(["VD", "GE", "FR", "VS", "NE"])}>Suisse romande</PillButton><PillButton onClick={() => setCantons(cantonFlags.map((c) => c[0]))}>Toute la Suisse</PillButton></div>
          <div className="cantons">
            {cantonFlags.map(([code, name, file]) => <button key={code} onClick={() => toggle(code)} className={cantons.includes(code) ? "selected" : ""}><img src={`https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=100`} alt={`Écusson du canton de ${name}`} /><span><strong>{name}</strong><small>{code}</small></span><i>{cantons.includes(code) && <Icon name="check" size={14} />}</i></button>)}
          </div>
        </section>
        <section className="setting-panel budget-panel">
          <div className="setting-heading"><div><span className="number">2</span><div><h2>Fixez votre budget maximal</h2><p>Ce montant ne sera jamais dépassé.</p></div></div></div>
          <div className="budget-display"><span>CHF</span><strong>{budget.toLocaleString("fr-CH")}</strong></div>
          <input type="range" min="450" max="3000" step="50" value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
          <div className="range-labels"><span>450</span><span>3’000</span></div>
          <div className="budget-options">
            {[[650, "Économique", "Présence locale ciblée"], [1200, "Recommandé", "Le meilleur équilibre"], [2400, "Étendu", "Plus de zones et de durée"]].map(([amount, label, sub]) => <button key={amount} onClick={() => setBudget(Number(amount))} className={budget === amount ? "selected" : ""}><span><strong>{label}</strong><small>{sub}</small></span><b>CHF {Number(amount).toLocaleString("fr-CH")}</b>{budget === amount && <i><Icon name="check" size={13} /></i>}</button>)}
          </div>
          <div className="budget-note"><Icon name="sparkles" size={17} /><span><strong>Compatible avec votre sélection</strong> Ce budget permet une campagne locale fractionnée sur 14 jours, selon les minimums des partenaires.</span></div>
        </section>
      </div>
      <div className="sticky-actions"><span>{cantons.length} cantons · Budget max. CHF {budget.toLocaleString("fr-CH")}</span><PrimaryButton onClick={onContinue}>Voir les simulations</PrimaryButton></div>
    </main>
  );
}

function Simulations({ onContinue }: { onContinue: () => void }) {
  const [active, setActive] = useState(0);
  const formats = ["Instagram", "Story", "Tram", "Écran urbain", "Presse locale", "Bannière web", "Placement IA"];
  return (
    <main className="app-shell content-page simulations-page">
      <Header label="Aperçus de campagne" /><StepRail screen={6} />
      <section className="page-intro compact-intro"><div><span className="kicker">Simulation de diffusion</span><h1>Votre publicité, partout où elle compte.</h1></div><p>Ces aperçus montrent comment votre création s’adapte automatiquement aux supports choisis.</p></section>
      <div className="format-tabs">{formats.map((f, i) => <button key={f} onClick={() => setActive(i)} className={active === i ? "active" : ""}>{f}</button>)}</div>
      <section className={`mockup-stage mockup-${active}`}>
        <div className="environment-label"><span>Simulation</span><strong>{formats[active]}</strong><small>Aperçu illustratif · rendu non contractuel</small></div>
        {active === 0 && <div className="phone instagram"><div className="phone-bar" /><div className="social-head"><span className="social-avatar">LS</span><b>le_sureau_lausanne</b><Icon name="more" size={17} /></div><img src={FOOD_IMAGE} alt="Publication Instagram simulée" /><div className="social-actions">♡　◇　⌁ <span>▢</span></div><p><b>le_sureau_lausanne</b> Une table. Une histoire. Réservez votre soirée au cœur de Lausanne.</p></div>}
        {active === 1 && <div className="phone story"><img src={FOOD_IMAGE} alt="Story Instagram simulée" /><div className="story-head"><span className="social-avatar">LS</span><b>le_sureau_lausanne</b><span>15 s</span></div><div className="story-copy">Une table.<br />Une histoire.<button>Réserver une table</button></div></div>}
        {active === 2 && <div className="tram-scene"><div className="tram-window"><span>LAUSANNE</span></div><div className="tram-screen"><img src={FOOD_IMAGE} alt="Publicité sur écran de tram simulée" /><span>UNE TABLE.<br />UNE HISTOIRE.</span></div><div className="tram-seats"><i /><i /><i /></div></div>}
        {active === 3 && <div className="city-scene"><div className="building"><div className="city-screen"><img src={FOOD_IMAGE} alt="Affichage digital urbain simulé" /><span>LE SUREAU<br /><small>LAUSANNE</small></span></div></div><div className="street" /></div>}
        {active === 4 && <div className="news-site"><header>LE COURRIER <span>LAUSANNE</span></header><nav>Actualités　 Région　 Culture　 Gastronomie</nav><div className="news-body"><article><small>GASTRONOMIE</small><h2>Les nouvelles tables qui font vibrer Lausanne</h2><div className="fake-lines" /></article><aside><img src={FOOD_IMAGE} alt="Bannière dans la presse locale simulée" /><b>UNE TABLE. UNE HISTOIRE.</b><button>Découvrir Le Sureau</button></aside></div></div>}
        {active === 5 && <div className="web-banner"><div className="browser-top"><i /><i /><i /><span>lausanne-guide.ch</span></div><div className="web-page"><div className="fake-article" /><div className="banner-ad"><img src={FOOD_IMAGE} alt="Bannière web simulée" /><span><b>Le Sureau</b> Cuisine de saison à Lausanne</span><button>Réserver</button></div></div></div>}
        {active === 6 && <div className="ai-placement"><div className="ai-head"><span className="agent-mark"><Icon name="sparkles" /></span><b>Assistant local</b><span className="potential-badge">Placement potentiel</span></div><div className="ai-chat"><div className="user-query">Où dîner pour une occasion spéciale à Lausanne ?</div><p>Pour une expérience élégante et locale, voici une suggestion qui pourrait vous plaire :</p><div className="ai-ad"><img src={FOOD_IMAGE} alt="Placement IA conversationnel illustratif" /><div><small>Suggestion sponsorisée · illustrative</small><strong>Le Sureau</strong><span>Cuisine de saison · Lausanne</span></div><Icon name="chevron" /></div></div></div>}
      </section>
      <div className="allocation-bar"><div><span>Budget maximal</span><strong>CHF 1’200</strong></div><div className="allocation"><span><i style={{ width: "36%" }} />Réseaux sociaux <b>36%</b></span><span><i style={{ width: "30%" }} />Transports <b>30%</b></span><span><i style={{ width: "22%" }} />Presse locale <b>22%</b></span><span><i style={{ width: "12%" }} />Affichage <b>12%</b></span></div><PrimaryButton onClick={onContinue}>Continuer</PrimaryButton></div>
    </main>
  );
}

function FinalApproval({ onBack, onLaunch, landingUrl }: { onBack: () => void; onLaunch: () => void; landingUrl: string }) {
  return (
    <main className="app-shell content-page final-page">
      <Header label="Confirmation finale" /><StepRail screen={7} />
      <section className="final-heading"><span className="kicker">Dernière étape</span><h1>Tout est prêt. Vérifions ensemble.</h1><p>Aucune dépense ne sera engagée avant votre confirmation.</p></section>
      <div className="final-grid">
        <div className="final-creative"><VideoPreview compact ready /><div><strong>Le Sureau · Élégance locale</strong><span>Vidéo · 15 secondes · Version 01</span></div></div>
        <div className="summary-panel">
          <div className="summary-row"><span>Médias</span><strong>Réseaux sociaux, transports,<br />presse locale, affichage</strong><button>Modifier</button></div>
          <div className="summary-row"><span>Cantons ciblés</span><strong>Vaud & Genève</strong><button>Modifier</button></div>
          <div className="summary-row"><span>Lien après le clic</span><strong className="summary-url">{landingUrl}</strong><button>Modifier</button></div>
          <div className="summary-row"><span>Durée</span><strong>14 jours</strong><button>Modifier</button></div>
          <div className="summary-row"><span>Budget média maximal</span><strong>CHF 1’200.–</strong></div>
          <div className="summary-row"><span>Frais de service estimés</span><strong>CHF 96.–</strong></div>
          <div className="summary-total"><span>Maximum total</span><strong>CHF 1’296.–</strong></div>
          <p className="legal-note"><Icon name="check" size={15} /> Le lancement est simulé dans ce prototype. Aucun paiement réel ne sera effectué.</p>
        </div>
      </div>
      <div className="final-actions"><SecondaryButton onClick={onBack}>Modifier ma diffusion</SecondaryButton><PrimaryButton onClick={onLaunch} icon="check">Confirmer et lancer ma campagne</PrimaryButton></div>
    </main>
  );
}

function Tracking({ launched, onCreate }: { launched: boolean; onCreate: () => void }) {
  return (
    <main className="app-shell content-page tracking-page">
      <Header />
      <section className="tracking-heading"><div><span className="kicker">Vue d’ensemble</span><h1>Vos campagnes</h1><p>Suivez simplement ce qui avance, ce qui attend votre avis et ce qui est en ligne.</p></div><PrimaryButton onClick={onCreate} icon="add">Nouvelle création</PrimaryButton></section>
      {launched && <div className="launch-success"><span><Icon name="check" size={18} /></span><div><strong>Campagne confirmée</strong><p>Le lancement a bien été simulé. Vos agents préparent maintenant les formats.</p></div><button><Icon name="close" size={17} /></button></div>}
      <div className="status-filters"><button className="active">Toutes <span>4</span></button><button>En cours <span>2</span></button><button>À confirmer <span>1</span></button><button>Lancées <span>1</span></button></div>
      <section className="campaign-list">
        <article className="campaign featured"><img src={FOOD_IMAGE} alt="Campagne Le Sureau" /><div className="campaign-main"><div><span className="live-status"><i /> Préparation en cours</span><h2>Le Sureau · Élégance locale</h2><p>Vaud & Genève · 4 médias · 14 jours</p></div><div className="progress-block"><div><span>Préparation des formats</span><b>3 sur 4</b></div><span className="progress-line"><i /></span><small>Les agents adaptent votre vidéo aux écrans de transport.</small></div></div><div className="campaign-side"><span>Budget maximal</span><strong>CHF 1’296.–</strong><button>Voir la campagne <Icon name="chevron" size={16} /></button></div></article>
        <article className="campaign"><div className="campaign-thumb event-thumb"><span>ATELIER<br />CÉRAMIQUE</span></div><div className="campaign-main"><div><span className="waiting-status">Votre avis est attendu</span><h2>Atelier Noma · Portes ouvertes</h2><p>Genève · Création vidéo</p></div><div className="agent-working"><span className="agent-avatar"><Icon name="sparkles" size={14} /></span><span><b>Création prête</b><small>Validez la vidéo pour préparer sa diffusion.</small></span></div></div><div className="campaign-side"><button className="dark-link">Vérifier la création <Icon name="chevron" size={16} /></button></div></article>
        <article className="campaign muted"><div className="campaign-thumb product-thumb">SØM<br /><small>SKIN</small></div><div className="campaign-main"><div><span className="finished-status"><Icon name="check" size={13} /> Terminée</span><h2>SØM Skin · Lancement sérum</h2><p>Suisse romande · 21 jours</p></div><div className="metric-row"><span><small>Dépensé</small><b>CHF 842.–</b></span><span><small>État des résultats</small><b>Disponibles</b></span></div></div><div className="campaign-side"><button>Voir le bilan <Icon name="chevron" size={16} /></button></div></article>
      </section>
      <p className="tracking-footnote">Les performances affichées ne seront disponibles qu’après connexion aux médias partenaires.</p>
    </main>
  );
}

function Account() {
  const { tokens, addTokens } = useContext(AccountContext);
  const [pack, setPack] = useState(1500);
  const [added, setAdded] = useState(false);
  const packs = [
    [500, "CHF 24.–", "Pour une création ponctuelle"],
    [1500, "CHF 59.–", "Le choix le plus équilibré"],
    [4000, "CHF 139.–", "Pour plusieurs campagnes"],
  ];
  const confirmPack = () => {
    addTokens(pack);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2600);
  };
  return (
    <main className="app-shell content-page account-page">
      <Header />
      <section className="account-heading">
        <div><span className="kicker">Compte</span><h1>Bonjour Camille.</h1><p>Gérez vos jetons et gardez une vue claire sur leur utilisation.</p></div>
        <button className="profile-button"><span>CL</span><div><strong>Camille Laurent</strong><small>camille@lesureau.ch</small></div><Icon name="chevron" size={17} /></button>
      </section>
      {added && <div className="credit-success"><Icon name="check" size={17} /><span><strong>{pack.toLocaleString("fr-CH")} jetons ajoutés</strong> — achat simulé, aucun débit effectué.</span></div>}
      <div className="account-grid">
        <section className="balance-card">
          <div className="balance-top"><span className="token-gem large">V</span><span>Solde disponible</span></div>
          <div className="balance-value"><strong>{tokens.toLocaleString("fr-CH")}</strong><span>jetons</span></div>
          <p>Vos jetons financent la génération des images, vidéos et adaptations créatives. La diffusion média est facturée séparément.</p>
          <div className="balance-meter"><span><i /></span><div><small>Utilisés ce mois</small><b>360 jetons</b></div></div>
          <div className="balance-foot"><span>Renouvellement du forfait</span><strong>12 juillet 2025</strong></div>
        </section>
        <section className="plan-card">
          <div className="plan-head"><div><span className="kicker">Votre formule</span><h2>Studio</h2></div><span className="plan-badge">Actif</span></div>
          <div className="plan-price"><strong>CHF 39.–</strong><span>/ mois</span></div>
          <ul><li><Icon name="check" size={14} /> 800 jetons chaque mois</li><li><Icon name="check" size={14} /> Génération image et vidéo</li><li><Icon name="check" size={14} /> Adaptations multi-supports</li></ul>
          <button className="manage-plan">Gérer ma formule <Icon name="chevron" size={15} /></button>
        </section>
      </div>
      <section className="token-store">
        <div className="section-title"><div><span className="kicker">Besoin de créer davantage&nbsp;?</span><h2>Ajouter des jetons</h2></div><p>Les jetons achetés n’expirent pas. L’achat reste entièrement simulé dans ce prototype.</p></div>
        <div className="pack-grid">
          {packs.map(([amount, price, description], index) => (
            <button key={amount} className={pack === amount ? "selected" : ""} onClick={() => setPack(Number(amount))}>
              {index === 1 && <span className="popular-pack">Recommandé</span>}
              <span className="pack-gem"><span className="token-gem">V</span></span>
              <strong>{Number(amount).toLocaleString("fr-CH")}</strong><small>jetons</small>
              <p>{description}</p>
              <b>{price}</b>
              <i>{pack === amount && <Icon name="check" size={14} />}</i>
            </button>
          ))}
        </div>
        <div className="purchase-bar"><div><span>Votre sélection</span><strong>{pack.toLocaleString("fr-CH")} jetons</strong></div><div><span>Montant simulé</span><strong>{packs.find(([amount]) => amount === pack)?.[1]}</strong></div><PrimaryButton onClick={confirmPack} icon="add">Ajouter les jetons</PrimaryButton></div>
      </section>
      <section className="token-history">
        <div className="section-title"><div><span className="kicker">Activité récente</span><h2>Utilisation des jetons</h2></div></div>
        <div className="history-table">
          {[["Génération vidéo · Le Sureau", "Aujourd’hui, 14:32", "− 120"], ["3 adaptations créatives", "Aujourd’hui, 14:41", "− 45"], ["Renouvellement Studio", "12 juin 2025", "+ 800"], ["Génération image · Atelier Noma", "8 juin 2025", "− 30"]].map(([label, date, value]) => (
            <div key={label}><span className={value.startsWith("+") ? "history-icon plus" : "history-icon"}><Icon name={value.startsWith("+") ? "add" : "sparkles"} size={15} /></span><span><strong>{label}</strong><small>{date}</small></span><b className={value.startsWith("+") ? "positive" : ""}>{value}</b></div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState(0);
  const [ready, setReady] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [launched, setLaunched] = useState(false);
  const [landingUrl, setLandingUrl] = useState("https://lesureau.ch/reserver");
  const [tokens, setTokens] = useState(1840);
  const go = (n: number) => { setScreen(n); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <AccountContext.Provider value={{ tokens, addTokens: (amount) => setTokens((value) => value + amount), openAccount: () => go(9) }}>
      {screen === 0 && <Home onStart={() => { setReady(false); go(1); }} />}
      {screen === 1 && <Studio ready={ready} onReady={() => { setReady(true); setScreen(2); }} onApprove={() => go(3)} />}
      {screen === 2 && <Studio ready onReady={() => {}} onApprove={() => go(3)} />}
      {screen === 3 && <Approval onBack={() => go(2)} onApprove={() => go(4)} />}
      {screen === 4 && <MediaRecommendation onContinue={() => go(5)} landingUrl={landingUrl} setLandingUrl={setLandingUrl} />}
      {screen === 5 && <Targeting onContinue={() => go(6)} />}
      {screen === 6 && <Simulations onContinue={() => go(7)} />}
      {screen === 7 && <FinalApproval onBack={() => go(5)} onLaunch={() => { setLaunched(true); go(8); }} landingUrl={landingUrl} />}
      {screen === 8 && <Tracking launched={launched} onCreate={() => go(0)} />}
      {screen === 9 && <Account />}
      <Dock screen={screen} setScreen={go} assistantOpen={assistantOpen} setAssistantOpen={setAssistantOpen} />
    </AccountContext.Provider>
  );
}
