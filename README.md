# Desire

> Используется Gulp 4 и Webpack 5

## Начало работы

Для работы с данной сборкой, склонируйте все содержимое репозитория <br>
`git clone <this repo>`
Затем, находясь в корне проекта, запустите команду `npm i`, которая установит все находящиеся в package.json зависимости.
После этого вы можете использовать любую из предложенных команд сборки (итоговые файлы попадают в папку __app__ корневой директории): <br>
`gulp` - базовая команда, которая запускает сборку для разработки, используя browser-sync

`gulp build` - команда для продакшн-сборки проекта. Все ассеты сжаты и оптимизированы для выкладки на хостинг.

`gulp cache` - команда, которую стоит запускать после `gulp build`, если вам нужно загрузить новые файлы на хостинг без кэширования.

`gulp backend` - команда для бэкенд-сборки проекта. Она лишена ненужных вещей из dev-сборки, но не сжата, для удобства бэкендера.

`gulp zip` - команда собирает ваш готовый код в zip-архив.

## Структура папок и файлов

```
├── src/                          # Исходники
│   ├── js                        # Скрипты
│   │   └── main.js               # Главный скрипт
│   │   ├── _vendor.js            # файл с подключениями библиотек
│   │   ├── _components.js        # файл с подключениями компонентов
│   │   ├── components            # js-компоненты
│   ├── scss                      # Стили сайта (препроцессор sass в scss-синтаксисе)
│   │   └── main.scss             # Главный файл стилей
│   │   └── vendor.scss           # Файл для подключения стилей библиотек из папки vendor
│   │   └── _fonts.scss           # Файл для подключения шрифтов (можно использовать миксин)
│   │   └── _mixins.scss          # Файл для подключения миксинов из папки mixins
│   │   └── _vars.scss            # Файл для написания css- или scss-переменных
│   │   └── _global.scss        # Файл для написания глобальных стилей
│   │   ├── components            # scss-компоненты
│   │   ├── mixins                # папка для сохранения готовых scss-компонентов
│   │   ├── vendor                # папка для хранения локальных css-стилей библиотек
│   ├── partials                  # папка для хранения html-частей страницы
│   ├── img                       # папка для хранения картинок
│   │   ├── svg                   # специальная папка для преобразования svg в спрайт
│   ├── resources                 # папка для хранения иных ассетов - php, видео-файлы, favicon и т.д.
│   │   ├── fonts                 # папка для хранения шрифтов в формате woff2
│   └── index.html                # Главный html-файл
└── gulpfile.js                   # файл с настройками Gulp
└── package.json                  # файл с настройками сборки и установленными пакетами
└── .editorconfig                 # файл с настройками форматирования кода
└── .ecrc                         # файл с настройками пакета editorconfig-checker (исключает ненужные папки)
└── .stylelintrc                  # файл с настройками stylelint
└── README.md                     # документация сборки
```

## Оглавление
1. [npm-скрипты](#npm-скрипты)
2. [Работа с html](#работа-с-html)
3. [Работа с CSS](#работа-с-css)
4. [Работа с JavaScript](#работа-с-javascript)
5. [Работа со шрифтами](#работа-со-шрифтами)
6. [Работа с изображениями](#работа-с-изображениями)
7. [Работа с иными ресурсами](#работа-с-иными-ресурсами)
8. [Типограф](#типограф)
9. [Рекомендуемые плагины VS Code](#рекомендуемые-плагины-для-vs-code)


## npm-скрипты

`npm run html` - запускает валидатор html, запускать нужно при наличии html-файлов в папке __app__.

`npm run code` - запускает editorconfig-checker для проверки соответствия конфиг-файлу.

## Работа с html

Плагин __gulp-file-include__ собирает html-файл из шаблонов из папки __partials__. 

> Для вставки html-частей в главный файл  `@include('partials/filename.html')`

При использовании команды `gulp build`, вы получите минифицированный html-код в одну строку для всех html-файлов.

## Работа с CSS

В сборке используется препроцессор __sass__ в синтаксисе __scss__.

Стили, написанные в __components__ подключаются в __main.scss__.

> Для подключения css-файлов используется директиву `@import`

В итоговой папке __app/css__ создаются два файла: <br> __main.css__ - для стилей страницы, <br> __vendor.css__ - для стилей всех библиотек, использующихся в проекте.

При использовании команды `gulp build`, получается минифицированный css-код в одну строку для всех css-файлов. 

## Работа с JavaScript

Для сборки JS-кода используется webpack.

JS-код делится на компоненты в папке __components__ и импортируется в файл ___components.js__

__main.js__ результирующий.

Подключать сторонние библиотеки можно через npm либо локальным файлом, для этого существует файл ___vendor.js__.

При использовании команды `gulp build`, вы получите минифицированный js-код в одну строку для всех js-файлов.

## Работа со шрифтами

Загружаются файлы __woff2__ в папку __resources/fonts__, а затем вызывается миксин `@font-face` в файле ___fonts.scss__ или import из fonts.google.com.

Также нужно прописать эти же шрифты в `<link preload>` в html.

## Работа с изображениями

Любые изображения, кроме __favicon__ лежат в папке __img__.

При использовании команды `gulp build`, получается минифицированные изображения в итоговой папке __img__.

## Работа с иными ресурсами

Любые ресурсы (ассеты) проекта, под которые не отведена соответствующая папка, должны храниться в папке __resources__. Это могут быть видео-файлы, php-файлы (как, например, файл отправки формы), favicon и прочие.

## Типограф

Для корректного отображения текста на странице был подключен плагин типограф, которые автоматически добавит неразрывные пробелы и иные символы, чтобы текст везде отображался по всем правилам русского языка.

## Рекомендуемые плагины для VS Code

При запуске проекта в VS Code, редактор предложит ранее не установленные плагины, которые подойдут для корректной работы в проекте.
