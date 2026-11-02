# Portfolio — Maciek Banaś

Minimalistyczna, responsywna galeria ilustracji. Strona jest statyczna: HTML, CSS i JavaScript, bez zależności i procesu budowania.

## Uruchomienie lokalne

W katalogu repozytorium:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Stronę można wdrożyć na dowolnym hostingu statycznym, publikując zawartość katalogu repozytorium. Pliki prac należy zachować pod obecnymi nazwami.

## Galeria

Kategorie: Ilustracje, Studia postaci, Komiksy, Obrazy, Inne. Puste kategorie wyświetlają komunikat. Kliknięcie pracy otwiera powiększenie; strzałki przełączają prace w bieżącej kategorii, a Escape zamyka podgląd.

Aby dodać pracę, dodaj element `article.artwork` do galerii w `index.html`, ustaw kategorię, obraz, tekst alternatywny i tytuł, a następnie zaktualizuj liczniki kategorii oraz liczbę prac w nagłówku.
