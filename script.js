function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const score = Number(getQueryParam("score")) || 0;

function getProfile(score) {
  if (score >= 80) return "Świadomy i uważny użytkownik";
  if (score >= 50) return "Użytkownik, który potrzebuje chwili więcej";
  return "Użytkownik podatny na presję i pozorną wiarygodność";
}

function getDescription(score) {
  if (score >= 80) {
    return "Ten wynik nie oznacza, że nic Ci nie grozi. Pokazuje raczej, że potrafisz zatrzymać się wtedy, kiedy wiele osób klika odruchowo. W praktyce to właśnie ta sekunda refleksji bywa najskuteczniejszą ochroną.";
  }
  if (score >= 50) {
    return "Nie chodzi o brak wiedzy, tylko o momenty, w których coś wygląda wystarczająco normalnie, żeby nie wzbudzić od razu podejrzeń. To właśnie tam najłatwiej o błąd — szczególnie pod wpływem pośpiechu albo emocji.";
  }
  return "Ten wynik sugeruje, że w sytuacji presji, pilności albo pozornej wiarygodności możesz reagować zbyt szybko. Cyberzagrożenia bardzo często nie wykorzystują niewiedzy technicznej, tylko naturalne ludzkie odruchy.";
}

function getBars(score) {
  const s = Number(score) || 0;
  return [
    { label: "Czujność", value: Math.min(100, s), type: "blue" },
    { label: "Refleksyjność", value: Math.min(100, Math.max(10, s + 8)), type: "blue" },
    { label: "Podatność na presję", value: Math.max(5, 100 - s), type: "orange" }
  ];
}

function getFactors() {
  return [
    {
      icon: "⏰",
      title: "Presja czasu",
      text: "Im bardziej coś wymaga natychmiastowej reakcji, tym większa szansa, że właśnie o tę reakcję komuś chodzi."
    },
    {
      icon: "🧠",
      title: "Automatyzm",
      text: "Gdy wiadomość przypomina coś znajomego, łatwo wejść w schemat działania bez dokładnego sprawdzania."
    },
    {
      icon: "👤",
      title: "Zaufanie",
      text: "Najbardziej przekonujące oszustwa często wykorzystują osoby lub instytucje, które brzmią wiarygodnie."
    },
    {
      icon: "💥",
      title: "Emocje i okazja",
      text: "Strach, ciekawość albo świetna promocja potrafią działać szybciej niż rozsądek."
    }
  ];
}

function getImpacts() {
  return [
    {
      icon: "🔐",
      title: "Przejęcie konta",
      text: "Jedno błędne logowanie może oddać komuś dostęp do poczty, social mediów albo szkolnego systemu."
    },
    {
      icon: "💳",
      title: "Utrata pieniędzy",
      text: "Wyłudzenie kodu, dopłata do paczki czy fałszywy sklep często kończą się realną stratą finansową."
    },
    {
      icon: "📱",
      title: "Efekt domina",
      text: "Po przejęciu konta zagrożenie nie kończy się na Tobie — może dotknąć też znajomych i rodzinę."
    }
  ];
}

function getTips(score) {
  if (score >= 80) {
    return [
      {
        icon: "✔",
        title: "Zachowaj ten odruch",
        text: "Największą siłą jest to, że nie działasz natychmiast. To warto utrzymać."
      },
      {
        icon: "🔍",
        title: "Sprawdzaj źródło",
        text: "Nawet wiarygodny komunikat warto zweryfikować innym kanałem kontaktu."
      },
      {
        icon: "🧭",
        title: "Bądź na bieżąco",
        text: "Nowe formy oszustw zmieniają się szybko, zwłaszcza te wykorzystujące AI."
      }
    ];
  }

  if (score >= 50) {
    return [
      {
        icon: "⏸",
        title: "Zatrzymaj się na moment",
        text: "Dodatkowe 10 sekund refleksji może ochronić Cię przed najprostszymi manipulacjami."
      },
      {
        icon: "🔗",
        title: "Nie klikaj z wiadomości",
        text: "Jeśli coś dotyczy banku, szkoły albo kuriera, wejdź na stronę samodzielnie."
      },
      {
        icon: "📞",
        title: "Weryfikuj ludzi",
        text: "W przypadku próśb od znajomych lub nauczycieli najlepiej sprawdzać je innym sposobem."
      }
    ];
  }

  return [
    {
      icon: "🛑",
      title: "Nie reaguj odruchowo",
      text: "Największe ryzyko pojawia się wtedy, gdy decyzja jest szybka i oparta tylko na pierwszym wrażeniu."
    },
    {
      icon: "🔐",
      title: "Nie podawaj danych pod presją",
      text: "Kod, hasło, link, dopłata — jeśli pojawia się pośpiech, to sygnał ostrzegawczy."
    },
    {
      icon: "📖",
      title: "Ćwicz rozpoznawanie schematów",
      text: "Im częściej zauważasz presję, pilność i pozorną wiarygodność, tym trudniej Cię złapać."
      }
    ];
}

function renderFactors() {
  const factors = getFactors();

  return `
    <div class="section">
      <h2 class="section-title">Co naprawdę wpływa na decyzje użytkownika?</h2>
      <p class="section-text">
        W cyberbezpieczeństwie nie chodzi tylko o technologię. Równie ważne jest to,
        jak człowiek reaguje na pośpiech, zaufanie, emocje i sytuacje, które wyglądają zwyczajnie.
      </p>

      <div class="grid-4">
        ${factors.map(function (item) {
          return `
            <div class="factor-card">
              <div class="factor-icon">${item.icon}</div>
              <h3 class="factor-title">${item.title}</h3>
              <p class="factor-text">${item.text}</p>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderImpacts() {
  const impacts = getImpacts();

  return `
    <div class="section">
      <h2 class="section-title">Do czego może prowadzić jedna zła decyzja?</h2>
      <p class="section-text">
        Wiele osób myśli o cyberataku jak o czymś abstrakcyjnym. Tymczasem skutki są bardzo konkretne i często zaczynają się od drobnego kliknięcia.
      </p>

      <div class="grid-3">
        ${impacts.map(function (item) {
          return `
            <div class="impact-card">
              <div class="impact-icon">${item.icon}</div>
              <h3 class="impact-title">${item.title}</h3>
              <p class="impact-text">${item.text}</p>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderTips(score) {
  const tips = getTips(score);

  return `
    <div class="section">
      <h2 class="section-title">Jak nie dać się złapać drugi raz?</h2>
      <p class="section-text">
        Najlepsza ochrona nie zawsze polega na większej wiedzy technicznej. Czasem polega na zmianie jednego nawyku.
      </p>

      <div class="grid-3">
        ${tips.map(function (item) {
          return `
            <div class="tip-card">
              <div class="tip-icon">${item.icon}</div>
              <h3 class="tip-title">${item.title}</h3>
              <p class="tip-text">${item.text}</p>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderBars(score) {
  const bars = getBars(score);

  return `
    <div class="card">
      <h2 class="card-title">Jak czytać ten wynik?</h2>
      <p class="card-text">
        To nie jest test inteligencji ani egzamin z teorii. Wynik pokazuje raczej, jak reagujesz w sytuacjach,
        w których liczy się pośpiech, zaufanie albo pierwsze wrażenie.
      </p>

      <div class="bars-wrap">
        ${bars.map(function (bar) {
          const fillClass = bar.type === "orange" ? "bar-fill-orange" : "bar-fill-blue";
          return `
            <div class="bar-row">
              <div class="bar-label">${bar.label}</div>
              <div class="bar-outer">
                <div class="${fillClass}" style="width: ${bar.value}%"></div>
              </div>
              <div>${bar.value}%</div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderPage() {
  const profile = getProfile(score);
  const description = getDescription(score);

  document.getElementById("app").innerHTML = `
    <div class="container">
      <div class="hero">
        <div class="badge">Projekt konkursowy • Cyberbezpieczeństwo</div>
        <h1 class="title">CyberMirror Analysis</h1>
        <p class="subtitle">
          Nie pokazuje tylko wyniku. Pokazuje sposób reagowania — a to właśnie tam bardzo często zaczyna się prawdziwe zagrożenie.
        </p>
      </div>

      <div class="top-grid">
        <div class="info-box">
          <div class="info-label">Twój wynik</div>
          <p class="info-value-big">${score}%</p>
        </div>

        <div class="info-box">
          <div class="info-label">Twój profil</div>
          <p class="info-value-profile">${profile}</p>
        </div>
      </div>

      <div class="section">
        <div class="note-box">
          <p>${description}</p>
        </div>
      </div>

      <div class="section">
        ${renderBars(score)}
      </div>

      ${renderFactors()}
      ${renderImpacts()}
      ${renderTips(score)}

      <div class="section">
        <div class="card">
          <h2 class="card-title">Wniosek końcowy</h2>
          <p class="card-text">
            Cyberzagrożenia nie zawsze wygrywają dlatego, że są technicznie skomplikowane.
            Często wygrywają dlatego, że trafiają w człowieka w odpowiednim momencie.
            Ta strona pokazuje właśnie ten moment: między impulsem a decyzją.
          </p>

          <a class="back-btn" href="#">Wróć do części użytkownika</a>
        </div>
      </div>

      <div class="footer">
        <strong>Autorka projektu:</strong> Michalina Staszewska<br>
        uczennica klasy 2 LO<br>
        LO im. Adama Mickiewicza w Żychlinie
      </div>
    </div>
  `;
}

renderPage();
