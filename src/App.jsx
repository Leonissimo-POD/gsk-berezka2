import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Camera, FileText, Gauge, Home, MessageSquare, PiggyBank, Users, WalletCards, Zap, Menu, X, ShieldCheck, CalendarDays, Phone, Search } from 'lucide-react';
import './styles.css';
import { debtors } from './data/debtors';
import { cooperative, meetingDecisions, projects } from './data/content';

const nav = [
  ['home', 'Главная', Home],
  ['about', 'О ГСК', ShieldCheck],
  ['finance', 'Финансы', PiggyBank],
  ['projects', 'Проекты', Gauge],
  ['meetings', 'Собрания', CalendarDays],
  ['appeals', 'Обращения', MessageSquare],
  ['documents', 'Документы', FileText],
  ['debtors', 'Должники', WalletCards],
  ['contacts', 'Контакты', Phone],
];

function Layout({ page, setPage, children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="pageBg" />
      <header className="topbar">
        <button className="brand" onClick={() => setPage('home')}>
          <div className="logo">Б2</div>
          <div>
            <strong>ГСК «Березка-2»</strong>
            <span>React + Vite · Digital-портал</span>
          </div>
        </button>
        <button className="menuBtn" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <nav className={open ? 'open' : ''}>
          {nav.map(([id, title, Icon]) => (
            <button key={id} className={page === id ? 'active' : ''} onClick={() => { setPage(id); setOpen(false); }}>
              <Icon size={16}/>{title}
            </button>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div>
          <strong>ГСК «Березка-2»</strong>
          <p>Информационный портал. Персональные данные и закрытые сведения не публикуются.</p>
        </div>
        <button onClick={() => setPage('documents')}>Документы</button>
      </footer>
    </>
  );
}

function Hero({ eyebrow, title, text, children }) {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
      <div className="heroCard">
        <div className="pulse" />
        <h3>Фокус 2026</h3>
        <ul>
          <li>Взнос {cooperative.contribution2026}</li>
          <li>Счетчики «{cooperative.meterModel}»</li>
          <li>Фото показаний до 01.10.2026</li>
          <li>Видеонаблюдение</li>
        </ul>
      </div>
    </section>
  );
}

function Kpi({ label, value, note }) {
  return <div className="kpi"><span>{label}</span><b>{value}</b><small>{note}</small></div>;
}

function HomePage({ setPage }) {
  return (
    <>
      <Hero eyebrow="v2.0 · React + Vite" title="ГСК «Березка-2» Digital" text="Открытое управление, прозрачные финансы, контроль решений собрания и развитие инфраструктуры.">
        <div className="actions">
          <button className="btn primary" onClick={() => setPage('meetings')}>Решения собрания</button>
          <button className="btn ghost" onClick={() => setPage('projects')}>Приоритеты 2026</button>
        </div>
      </Hero>

      <section className="alert"><b>Актуально:</b> добавлены решения собрания от 23.05.2026, председатель — {cooperative.chairman}, коммуникация — {cooperative.communication}.</section>

      <section className="dashboard">
        <Kpi label="Взнос 2026" value={cooperative.contribution2026} note="50% до 01.08, остаток до 01.11"/>
        <Kpi label="Должников" value={debtors.length} note="обезличенный список боксов"/>
        <Kpi label="Председатель" value="Балакин П.Д." note={cooperative.chairmanTerm}/>
        <Kpi label="Приоритет" value="Камеры" note="решение собрания принято"/>
      </section>

      <section className="split">
        <div className="panel">
          <h2>С чего начинаем</h2>
          <p>Собираем юридические документы, актуализируем реестр членов ГСК, ведем закрытый реестр должников, запускаем публичную обезличенную отчетность и проекты безопасности.</p>
          <div className="timeline">
            <div><b>1</b><span>Реестр</span></div>
            <div><b>2</b><span>Должники</span></div>
            <div><b>3</b><span>Счетчики</span></div>
            <div><b>4</b><span>Камеры</span></div>
          </div>
        </div>
        <div className="panel accent">
          <h2>Главная цель</h2>
          <p>Сделать ГСК безопасным, управляемым и финансово прозрачным: каждый участник должен понимать сроки оплат, правила, проекты и статус исполнения решений.</p>
        </div>
      </section>

      <section className="cards">
        <Feature icon={<Zap/>} title="Электрика" text="Счетчики «Меркурий 201», показания, пломбы и контроль сроков."/>
        <Feature icon={<Camera/>} title="Видеонаблюдение" text="Первый контур безопасности: въезд, выезд, основные проезды."/>
        <Feature icon={<WalletCards/>} title="Дисциплина" text="Обезличенный список должников, пени и понятные правила оплаты."/>
        <Feature icon={<Users/>} title="Открытость" text="Собрания, отчеты, MAX-группа и прозрачные решения."/>
      </section>
    </>
  );
}

function Feature({ icon, title, text }) {
  return <article className="card"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}

function AboutPage() {
  const rows = [
    ['Председатель', `${cooperative.chairman}, полномочия ${cooperative.chairmanTerm}`],
    ['Асфальт', 'старый'],
    ['Крыши', 'часть собственников перекрывает самостоятельно'],
    ['Охрана', 'нет, комната охраны есть'],
    ['Освещение', 'слабое'],
    ['Видеонаблюдение', 'решение принято'],
    ['Ворота', 'нет'],
    ['Снег', 'не чистят зимой'],
  ];
  return (
    <>
      <Hero eyebrow="Паспорт ГСК" title="О кооперативе" text="Текущее состояние, инфраструктура и базовые сведения для будущего аудита." />
      <DataTable title="Текущее состояние" rows={rows}/>
    </>
  );
}

function FinancePage() {
  return (
    <>
      <Hero eyebrow="Финансы" title="Финансы, взносы и задолженность" text="Публичная часть бюджета, сроки оплаты и правила финансовой дисциплины." />
      <section className="dashboard">
        <Kpi label="Взнос 2026" value="8 500 ₽" note="утвержден собранием"/>
        <Kpi label="Первый срок" value="01.08" note="не менее 50%"/>
        <Kpi label="Финальный срок" value="01.11" note="остаток взноса"/>
        <Kpi label="Пени" value="1 000 ₽" note="с 01.11.2026"/>
      </section>
      <section className="panel warning">
        <h2>Правила по задолженности</h2>
        <p>За прошлые годы — 1 000 ₽ за каждый год задолженности. Далее — 1% от суммы долга ежемесячно с первого числа следующего месяца. Должников по взносам и электроэнергии отключают от электроснабжения до полного погашения.</p>
      </section>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Hero eyebrow="Проекты" title="Приоритетные задачи 2026" text="Проекты из решений собрания и первичного аудита состояния ГСК." />
      <section className="projectList">
        {projects.map(p => <article className="project" key={p.title}>
          <span className={p.priority === 'Высокий' ? 'status high' : 'status medium'}>{p.priority} · {p.status}</span>
          <h3>{p.title}</h3><p>{p.text}</p>
          <div className="progress"><span style={{width: `${p.progress}%`}} /></div>
        </article>)}
      </section>
    </>
  );
}

function MeetingsPage() {
  return (
    <>
      <Hero eyebrow="Собрания" title="Решения общего собрания от 23.05.2026" text="Ключевые решения, которые используются как текущая основа управления проектом." />
      <section className="panel">
        <table><thead><tr><th>Вопрос</th><th>Решение</th></tr></thead><tbody>{meetingDecisions.map(([a,b]) => <tr key={a}><td>{a}</td><td>{b}</td></tr>)}</tbody></table>
      </section>
    </>
  );
}

function DebtorsPage() {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => debtors.filter(d => String(d.box).includes(q.trim())), [q]);
  return (
    <>
      <Hero eyebrow="Финансовая дисциплина · без ФИО" title="Задолженность по взносам за 2025 год" text="Обезличенная публичная версия списка должников по состоянию на 01.05.2026. На сайте размещаются только номера боксов." />
      <section className="dashboard">
        <Kpi label="Боксов в списке" value={debtors.length} note="по состоянию на 01.05.2026"/>
        <Kpi label="Период" value="2025" note="членские взносы"/>
        <Kpi label="Публикация" value="без ФИО" note="только номера боксов"/>
        <Kpi label="Сумма долга" value="уточнить" note="по закрытому реестру"/>
      </section>
      <section className="panel warning">
        <h2>Важно</h2>
        <p>Полный реестр с ФИО, контактами, историей оплат и точными суммами должен храниться отдельно в закрытом доступе правления.</p>
      </section>
      <section className="panel">
        <div className="panelHead">
          <h2>Обезличенный список боксов</h2>
          <label className="search"><Search size={18}/><input value={q} onChange={e => setQ(e.target.value)} placeholder="Найти бокс"/></label>
        </div>
        <div className="debtorsGrid">{filtered.map(d => <div className="debtorTile" key={d.box}><span>Бокс</span><b>№ {d.box}</b><small>{d.period} · {d.status}</small></div>)}</div>
      </section>
    </>
  );
}

function AppealsPage() {
  return (
    <>
      <Hero eyebrow="Обращения" title="Сообщить о проблеме" text="Заявки по освещению, дорогам, снегу, безопасности и инфраструктуре." />
      <section className="panel">
        <h2>Форма обращения</h2>
        <p>Здесь можно подключить Google Form или форму MAX-группы. Рекомендуемые поля: № гаража, контакт, категория, описание, фото, срочность.</p>
        <a className="btn primary" href="https://forms.google.com" target="_blank">Открыть форму обращения</a>
      </section>
    </>
  );
}

function DocumentsPage() {
  return (
    <>
      <Hero eyebrow="Документы" title="Документы ГСК" text="Устав, протоколы, сметы, отчеты, решения и закрытый реестр должников." />
      <section className="docGrid">
        {['Устав', 'Протоколы', 'Сметы', 'Отчеты', 'Решения', 'Бланки'].map(x => <div key={x}>📄 {x}</div>)}
      </section>
      <section className="panel warning">
        <h2>Реестр должников</h2>
        <p>Полный список должников используется как закрытый рабочий документ правления. На публичной странице размещается только обезличенная информация.</p>
      </section>
    </>
  );
}

function ContactsPage() {
  return (
    <>
      <Hero eyebrow="Контакты" title="Контакты правления" text="Связь с председателем, правлением и ревизионной комиссией." />
      <section className="panel">
        <table>
          <thead><tr><th>Роль</th><th>Контакт</th></tr></thead>
          <tbody>
            <tr><td>Председатель</td><td>Балакин П.Д. / контакт уточнить</td></tr>
            <tr><td>Правление</td><td>заполнить</td></tr>
            <tr><td>Ревизионная комиссия</td><td>заполнить</td></tr>
            <tr><td>MAX-группа</td><td>ГСК “Березка-2”</td></tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

function DataTable({ title, rows }) {
  return <section className="panel"><h2>{title}</h2><table><tbody>{rows.map(([a,b]) => <tr key={a}><th>{a}</th><td>{b}</td></tr>)}</tbody></table></section>;
}

function App() {
  const [page, setPage] = useState('home');
  const pages = {
    home: <HomePage setPage={setPage}/>,
    about: <AboutPage/>,
    finance: <FinancePage/>,
    projects: <ProjectsPage/>,
    meetings: <MeetingsPage/>,
    appeals: <AppealsPage/>,
    documents: <DocumentsPage/>,
    debtors: <DebtorsPage/>,
    contacts: <ContactsPage/>,
  };

  return <Layout page={page} setPage={setPage}>{pages[page]}</Layout>;
}

createRoot(document.getElementById('root')).render(<App />);
```js
React.useEffect(() => {
  initGA()
}, [])

React.useEffect(() => {
  trackPageView(page)
}, [page])
```
