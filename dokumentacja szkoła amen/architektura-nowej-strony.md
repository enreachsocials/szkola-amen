# Architektura nowej strony — Szkoła Tańca Amen!
**Data:** 2026-07-05
**Status:** Dokument planistyczny — etap przed budową

---

## ZASADY NADRZĘDNE

Przed każdą decyzją projektową odpowiadamy na jedno pytanie:
**„Czy osoba, która wchodzi na stronę po raz pierwszy, rozumie co tu jest i co może zrobić?"**

Jeśli nie — element wymaga przeprojektowania. Jeśli tak — zostawiamy.

Każdy element istniejącej strony zostaje zachowany. Zmieniamy **gdzie** i **jak** jest podany, nie **co**.

---

## NAWIGACJA GŁÓWNA

### Jak powinna wyglądać:

```
Logo / Nazwa          [Start] [Oferta ▾] [Grafik] [Cennik] [O nas] [Kontakt]          [Zapisz się →]
```

Na urządzeniach mobilnych: hamburger menu z tymi samymi pozycjami.

### Dlaczego tak:

- **Logo po lewej** — standard, użytkownicy tego oczekują, pomaga w brandingu.
- **Pozycje w menu** — tylko 6 głównych, bez duplikatów. Newsletter i „Zgłoś parafię" schodzą z głównej nawigacji (patrz niżej).
- **Przycisk „Zapisz się →" po prawej** — wyróżniony kolorem (CTA). Najważniejsza akcja na stronie musi być widoczna z każdego miejsca, na każdej podstronie. Zawsze w zasięgu.
- **Dropdown „Oferta"** — pozostaje, ale ograniczony do realnych kategorii usług (bez „Roztańczona Parafia" — to osobna ścieżka dla parafii).

### Co zmienia się względem obecnego stanu:

| Obecny element | Nowe miejsce |
|---|---|
| „Zgłoś swoją parafię!" (przycisk w menu) | Osobna sekcja na stronie głównej + podstrona /dla-parafii |
| Newsletter (link w menu) | Sekcja na dole każdej strony (nie osobna pozycja menu) |
| Ikony social media w menu | Usunięte z menu — zostają w stopce i na /kontakt |

---

## STRONA GŁÓWNA (`/`)

Strona główna odpowiada na 5 pytań w tej kolejności. Każda sekcja = jedno pytanie.

---

### SEKCJA 1 — Hero: „Kim jesteście i czy to dla mnie?"

**Zawartość:**
- Nagłówek H1: pełna nazwa szkoły lub czytelne hasło
- Jedno zdanie wyjaśniające: co, gdzie, dla kogo
- Dwa przyciski: **„Sprawdź ofertę"** (główny) i **„Zobacz grafik"** (drugorzędny)
- Tło: zdjęcie lub wideo z zajęć

**Dlaczego:**
Hero to pierwsze 3 sekundy. Jeśli odwiedzający nie zrozumie natychmiast co to za miejsce — wychodzi. Obecna strona zaczyna się od dwóch banerów promocyjnych, które nic nie mówią o szkole. H1 musi być zawsze, to wymóg SEO i dostępności.

Dwa przyciski — bo są dwa typy odwiedzających: ci, którzy chcą wiedzieć więcej (oferta) i ci, którzy już wiedzą i szukają terminów (grafik).

---

### SEKCJA 2 — „Co oferujemy?" (skrót oferty)

**Zawartość:**
- Nagłówek: np. „Co robimy?"
- 4–6 kafelków z kategoriami usług: Kursy Tańca, Warsztaty Weekendowe, Imprezy, Piątki z Amen!, Pierwszy Taniec, Zajęcia Indywidualne
- Pod każdym kafelkiem: 2–3 zdania realnego opisu (nie „Intensywne sesje taneczne" — to nic nie mówi)
- Przycisk pod sekcją: „Zobacz pełną ofertę →"

**Dlaczego:**
Odwiedzający musi zobaczyć zakres działalności zanim pójdzie dalej. Kafelki muszą mieć opis — inaczej są tylko ładną grafiką bez treści. Każdy kafelek to osobna potrzeba innego użytkownika (ktoś szuka walca na ślub, ktoś inny rekreacji, ktoś imprezy).

---

### SEKCJA 3 — „Gdzie i kiedy?"

**Zawartość:**
- Nagłówek: „Znajdź zajęcia w swojej okolicy"
- Lista parafii z dzielnicami Wrocławia (nie tylko ulicami — dzielnica jest bardziej czytelna dla nowych)
- Przy każdej parafii: jedna–dwie linijki z dniami tygodnia i godzinami (skrót)
- Przycisk: „Pełny grafik →"

**Dlaczego:**
Lokalizacja to jeden z pierwszych filtrów decyzyjnych. „Czy mają coś blisko mnie?" — jeśli tak, odwiedzający idzie dalej. Jeśli nie może tego szybko sprawdzić — wychodzi. Pełny grafik zostawiamy na /grafik, tu wystarczy przegląd.

---

### SEKCJA 4 — „Ile to kosztuje?" (skrót cennika)

**Zawartość:**
- Nagłówek: „Cennik"
- Jedna czytelna tabela lub karty z poziomami i cenami
- Krótkie wyjaśnienie systemu poziomów (P0 = dla zupełnych początkujących itd.)
- Informacja o kartach benefit (Multisport, Medicover, FitProfit)
- Przycisk: „Pełny cennik i FAQ →"

**Dlaczego:**
Cena to drugi największy filtr decyzyjny po lokalizacji. Chowanie jej na osobnej podstronie wydłuża ścieżkę i frustruje użytkownika. Skrót na głównej + link do szczegółów to kompromis między zwięzłością a kompletnością.

---

### SEKCJA 5 — Opinie

**Zawartość:**
- Nagłówek: „Co mówią uczestnicy"
- 4–6 opinii (Kamil, Dawid, Justyna, Konrad + ewentualnie więcej)
- Format: imię, treść, opcjonalnie — jak długo uczęszcza / jaki styl
- Przycisk: „Więcej opinii →" (Google Maps lub Facebook)

**Dlaczego:**
Opinie budują zaufanie, ale muszą być wiarygodne. Dodanie kontekstu (czas uczestnictwa, styl tańca) sprawia, że są bardziej przekonujące. Powinny być PRZED formularzem kontaktowym, bo pomagają podjąć decyzję.

---

### SEKCJA 6 — „Roztańczona Parafia" (projekt parafialny)

**Zawartość:**
- Nagłówek: „Chcesz tańca w swojej parafii?"
- Krótki opis projektu (2–4 zdania)
- Przycisk: „Dowiedz się więcej →" prowadzący do /dla-parafii

**Dlaczego:**
Ten projekt jest realną częścią działalności i musi być na stronie głównej — ale jako osobna, wyraźnie oddzielona sekcja skierowana do innego odbiorcy (duszpasterze, animatorzy). Nie miesza się z ofertą dla kursantów. Sekcja jest niżej na stronie, bo większość odwiedzających to kursanci indywidualni.

---

### SEKCJA 7 — Newsletter

**Zawartość:**
- Nagłówek: „Bądź na bieżąco"
- 2–3 zdania co zawiera (nowości, zapisy, promocje)
- Osadzony formularz zapisu (nie link do Google Forms — użytkownik nie opuszcza strony)

**Dlaczego:**
Newsletter to narzędzie retencji. Odwiedzający, który nie zapisał się od razu na kurs, może zostać w kontakcie przez newsletter. Musi być osadzony inline — każde przekierowanie to utrata konwersji. Obecny Google Forms zabija ten efekt.

---

### SEKCJA 8 — Kontakt

**Zawartość:**
- Telefon, email
- Ikony social media
- Krótka informacja o dostępności (np. godziny, kiedy odpisują)

**Dlaczego:**
Dane kontaktowe na końcu strony głównej to standard — odwiedzający, który przewinął całą stronę i nadal ma pytania, powinien natychmiast móc się odezwać. Nie trzeba tu całej strony /kontakt — wystarczy podstawowy blok.

---

### STOPKA

**Zawartość:**
- Mapa serwisu (linki do wszystkich podstron)
- Dane kontaktowe (jeden raz — tu, nie w 4 miejscach)
- Social media (jeden raz — tu)
- Copyright

**Dlaczego:**
Stopka to nawigacja rezerwowa — gdy użytkownik zgubi się lub chce wrócić do czegoś konkretnego. Jedna kopia danych kontaktowych (tu) zamiast czterech kopii na stronie.

---

## PODSTRONY

---

### `/oferta` — Oferta

**Struktura:**
- H1: „Oferta"
- 6 sekcji (jedna na kategorię): Kursy Tańca, Warsztaty Weekendowe, Imprezy, Piątki z Amen!, Pierwszy Taniec, Zajęcia Indywidualne
- Każda sekcja: nagłówek + 3–5 zdań realnego opisu + CTA pasujące do kategorii (np. „Zapisz się na kurs" / „Zapytaj o termin" / „Zobacz grafik")

**Dlaczego:**
Obecne opisy są za krótkie (3–5 słów). Użytkownik nie może podjąć decyzji bez wiedzy co dokładnie dostanie. Każda kategoria zasługuje na własny opis odpowiadający na: dla kogo to jest, jak wygląda, co zyskasz.

**„Piątki z Amen!"** — wymaga szczególnej uwagi: wyjaśnienie czym jest (cotygodniowe spotkania taneczne, charakter, gdzie, kiedy), żeby nazwa przestała być zagadką.

---

### `/grafik` — Grafik

**Struktura:**
Strona dzieli się na dwie logiczne części:

**Część 1 — Grafik zajęć:**
- Nowe grupy (z CTA gdy brak: „Zapisz się na listę oczekujących")
- Kursy wakacyjne
- Trwające kursy (podział na parafie z adresami i mapą)

**Część 2 — Informacje pomocnicze** (przeniesione z /grafik do osobnych sekcji lub /faq):
- Odrabianie zajęć → do /faq lub /regulamin
- Poziomy taneczne → do /cennik lub /faq
- Karty Benefit → do /cennik
- FAQ → do /faq

**Dlaczego:**
Obecna strona /grafik zawiera 7 różnych tematów w jednym miejscu. To powoduje, że odwiedzający szukający grafiku musi przebijać się przez cennik, FAQ i regulamin odrabiania. Każdy temat powinien mieć swoje miejsce. Grafik = tylko grafik.

**Legenda poziomów** (P0–Z2) musi być widoczna NA stronie grafiku, na górze, zanim odwiedzający zobaczy listę zajęć — nie na dole po całym grafiku.

**„Nowe grupy — brak"** musi zawierać CTA: formularz lub link do listy oczekujących.

---

### `/cennik` — Cennik

**Struktura:**
- H1: „Cennik"
- Krótkie wyjaśnienie systemu (P0 = pierwsze 2 miesiące, dla zupełnych początkujących itd.) — ZANIM tabela, nie po
- Tabela poziomów i cen
- Sekcja: Opłata klubowa — co to jest, kiedy dotyczy, co zawiera
- Sekcja: Karty Benefit — które karty, jak korzystać
- Sekcja: Vouchery — jak kupić, wartości, personalizacja
- **(Przyszłość: Sklep)** — tu pojawi się możliwość opłacenia karnetu online

**Dlaczego:**
Cennik jest czytelny tylko jeśli odwiedzający rozumie system. Tabela cen bez wyjaśnienia co oznaczają poziomy to czarna skrzynka. Kolejność: najpierw wyjaśnienie → potem ceny. Opłata klubowa wymaga własnej sekcji bo jest nieoczywista i może zablokować decyzję zakupową.

---

### `/kontakt` — Kontakt

**Struktura:**
- H1: „Kontakt"
- Telefon + email + godziny dostępności
- Social media
- Sekcja lokalizacji: 7 parafii z adresami i embedowaną mapą Google (lub linkiem do Google Maps) dla każdej
- Dane do przelewu — w osobnej, wyraźnie oznaczonej sekcji: „Dane do płatności przelewem" z wyjaśnieniem kiedy stosować

**Dlaczego:**
Mapa jest kluczowa — adres ulicy nic nie mówi komuś, kto nie zna Wrocławia. Embedowana mapa lub chociaż link do Google Maps skraca dystans od „znalazłem lokalizację" do „jadę". Dane bankowe muszą zostać (są potrzebne do opłat), ale muszą być opatrzone kontekstem — kiedy i dlaczego płacić przelewem.

---

### `/o-nas` — O nas (podstrona do stworzenia)

**Struktura:**
- H1: „O nas"
- Kim jesteśmy — historia szkoły, misja (przeniesiona z home, skrócona)
- Instruktorzy — zdjęcia, imiona, krótki opis
- Wartości / charakter szkoły — chrześcijańskie korzenie, atmosfera, wspólnota
- Galeria / zdjęcia z zajęć

**Dlaczego:**
Podstrona nie istnieje (404) — to krytyczny brak. Ludzie zapisują się do szkół, którym ufają. Zaufanie buduje się przez pokazanie ludzi za projektem. Instruktorzy z imionami i zdjęciami to podstawa każdej szkoły tańca.

---

### `/dla-parafii` — Projekt Roztańczona Parafia (nowa podstrona)

**Struktura:**
- H1: „Roztańczona Parafia"
- Opis projektu — czym jest, jak działa, co obejmuje
- Dla kogo (duszpasterze, animatorzy, wspólnoty)
- Jak zgłosić parafię — formularz kontaktowy
- Realizacje / parafie, z którymi współpracujemy

**Dlaczego:**
Projekt parafialny to odrębna oferta skierowana do zupełnie innego odbiorcy niż kursant indywidualny. Zasługuje na własną podstronę. Obecny przycisk „Zgłoś swoją parafię!" w menu jest wyrwany z kontekstu — bez podstrony, która wyjaśni projekt, nie ma sensu.

---

### `/faq` — Najczęstsze pytania (nowa podstrona)

**Zawartość (przeniesiona z /grafik i innych miejsc):**
- Czy mogę zapisać się solo?
- Czy jest gwarancja miejsca?
- Pierwszeństwo dla par?
- Rotacja partnerów?
- Co w przypadku nieobecności?
- Jak odrobić zajęcia?
- Jak działają poziomy?
- Co to jest opłata klubowa?
- Jak korzystać z kart Benefit?

**Dlaczego:**
FAQ ukryte na stronie /grafik jest praktycznie niewidoczne. To pytania, które zadaje każdy nowy odwiedzający — powinny być w oczywistym, łatwo dostępnym miejscu. Osobna podstrona /faq + link w stopce i w nawigacji grafiku.

---

### `/newsletter` — Newsletter

**Decyzja:** podstrona likwidowana jako osobny byt.

Newsletter zostaje jako sekcja na stronie głównej z osadzonym formularzem. Osobna podstrona /newsletter jest zbędna — duplikuje treść i rozbija nawigację.

---

## SKLEP — PLAN NA PRZYSZŁY ETAP

### Co powinien zawierać:
- Możliwość zakupu karnetu miesięcznego (wybór poziomu → płatność online)
- Możliwość zakupu vouchera (wartość, personalizacja, dostawa PDF)
- Możliwość opłacenia zajęć indywidualnych / pierwszego tańca z góry
- Historia zakupów dla zalogowanych użytkowników

### Gdzie umieścić wejście do sklepu:
- Przycisk w nawigacji głównej (obok „Zapisz się") — np. „Kup karnet"
- W cenniku — przy każdym poziomie przycisk „Kup online"
- W grafiku — przy każdej lokalizacji link „Opłać karnet"

### Techniczne uwagi do późniejszego etapu:
- Sklep musi być zintegrowany z aktualnym systemem poziomów (cena zależy od poziomu kursanta)
- Należy przewidzieć obsługę kart Benefit (Multisport, Medicover, FitProfit) — prawdopodobnie nie przez sklep, ale z wyjaśnieniem jak z nich korzystać
- Vouchery wymagają systemu kodów lub PDF do pobrania
- Warto rozważyć konto użytkownika (historia zakupów, aktualny poziom, następny termin płatności)

---

## MAPA SERWISU — DOCELOWA STRUKTURA

```
/                        Strona główna
├── /oferta              Pełna oferta (6 kategorii)
├── /grafik              Grafik zajęć (tylko grafik)
├── /cennik              Cennik + karty benefit + vouchery
├── /o-nas               O szkole, instruktorzy
├── /dla-parafii         Projekt Roztańczona Parafia
├── /kontakt             Dane kontaktowe + 7 lokalizacji z mapami
├── /faq                 Najczęstsze pytania
└── /sklep               (przyszły etap) Zakup karnetów i voucherów
```

Newsletter: sekcja inline na stronie głównej (nie osobna podstrona).

---

## RESPONSYWNOŚĆ — ZASADY

### Mobile (do 768px):
- Menu: hamburger, lista pionowa
- Sekcje: jedna kolumna, kafelki jedna pod drugą
- Grafik: tabela zamieniona na karty (parafia → rozwijana lista zajęć)
- Cennik: tabela zamieniona na karty poziomów
- Mapa: link „Otwórz w Google Maps" zamiast embedowanej mapy (mapy embedded wolno ładują się na mobile)

### Tablet (768–1024px):
- Menu: poziome lub hamburger (zależnie od szerokości)
- Kafelki: 2 kolumny
- Tabele: pełne, ale z możliwością przewijania poziomego

### Desktop (1024px+):
- Menu: pełne poziome
- Kafelki: 3 kolumny
- Grafik: pełna tabela
- Mapa: embedded Google Maps

### Dlaczego responsywność jest priorytetem:
Większość wejść na strony szkół tańca pochodzi z urządzeń mobilnych (Instagram, Facebook → link → telefon). Strona niedziałająca na telefonie to strona, która traci większość potencjalnych kursantów.

---

## KOLEJNOŚĆ BUDOWANIA (sugerowana)

**Etap 1 — Fundament:**
1. Nawigacja i stopka (globalne)
2. Strona główna (hero + skróty sekcji)
3. /o-nas (brakująca, krytyczna)

**Etap 2 — Treść:**
4. /oferta (z rozbudowanymi opisami)
5. /grafik (tylko grafik, z legendą poziomów)
6. /cennik (z wyjaśnieniami)

**Etap 3 — Wsparcie:**
7. /kontakt (z mapami)
8. /dla-parafii
9. /faq

**Etap 4 — Konwersja:**
10. Newsletter inline (osadzony formularz)
11. /sklep (zakup karnetów i voucherów)
