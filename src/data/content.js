
export const profile = {
  name: { ru: 'Салохиддин Тохиров', en: 'Salohiddin Tohirov' },
  role: { ru: 'Веб-разработчик', en: 'Web Developer' },
  location: { ru: 'Ташкент, Узбекистан', en: 'Tashkent, Uzbekistan' },
  status: { ru: 'Открыт для предложений', en: 'Open to work' },
  stack: ['React', 'JavaScript', 'CSS', 'Node.js'],
  about: {
    ru: 'Учусь веб-программированию и делаю проекты на React. Люблю аккуратную вёрстку, понятный код и анимации, которые объясняют, что происходит на экране.',
    en: 'I study web development and build projects in React. I like clean markup, readable code and animation that explains what happens on screen.',
  },
  skills: [
    { name: 'React', level: 80 },
    { name: 'JavaScript (ES6+)', level: 75 },
    { name: 'HTML / CSS', level: 90 },
    { name: 'Vite', level: 70 },
    { name: 'Git', level: 65 },
    { name: 'REST API', level: 60 },
  ],
  contacts: [
    { label: 'Email', value: 'jnomerodin@gmail.com.com', href: 'mailto:jnomerodin@gmail.com.com' },
    { label: 'GitHub', value: 'github.com/jnomerodin-ops', href: 'https://github.com/jnomerodin-ops' },
    { label: 'Telegram', value: '@Prek_rasen', href: 'https://t.me/Prek_rasen' },
  ],
}

export const stats = [
  { id: 'practice-years', n: 2, label: { ru: 'года практики', en: 'years practicing' } },
  { id: 'study-projects', n: 6, label: { ru: 'учебных проектов', en: 'study projects' } },
  { id: 'interface-languages', n: 2, label: { ru: 'языка интерфейса', en: 'interface languages' } },
  { id: 'attention-to-detail', n: 100, label: { ru: '% внимания к деталям', en: '% attention to detail' } },
]


export const marquee = ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Git', 'Figma', 'API']


export const experience = [
  {
    id: 'web-development-course',
    period: '2026 — сейчас',
    title: { ru: 'Заканчиваю курс "Веб-программирование"', en: 'Completing "Web Development" course' },
    place: 'PROWEB',
  },
  {
    id: 'first-html-css-project',
    period: '2026',
    title: { ru: 'Первый проект на HTML/CSS', en: 'First project in HTML/CSS' },
    place: { ru: 'Самостоятельно', en: 'Self-study' },
  },
]

export const projects = [
  { title: 'Porche', desc: { ru: 'Промосайт Porsche 911 GT3 R с галереей автомобиля и историей бренда.', en: 'A Porsche 911 GT3 R showcase with a car gallery and brand story.' }, stack: 'HTML · CSS', link: 'https://jnomerodin-ops.github.io/Porche1/' },
  { title: 'Clothing', desc: { ru: 'Магазин одежды с каталогом категорий, карточками товаров и информацией о качестве продукции.', en: 'A clothing store with product categories, item listings and details about product quality.' }, stack: 'HTML · CSS', link: 'https://jnomerodin-ops.github.io/clothing/' },
  { title: 'Brutalism', desc: { ru: 'Сайт интерьерного бюро в бруталистском стиле с проектами, услугами и контактами.', en: 'A brutalist-style interior design studio website with projects, services and contact details.' }, stack: 'HTML · CSS', link: 'https://jnomerodin-ops.github.io/Brutalism/' },
  { title: 'Perfumeline', desc: { ru: 'Сайт парфюмерного бренда с коллекциями женских и мужских ароматов.', en: 'A perfume brand website featuring collections of fragrances for women and men.' }, stack: 'HTML · CSS', link: 'https://jnomerodin-ops.github.io/Perfumeline/' },
  { title: 'Oku', desc: { ru: 'Сервис для книжной полки: учёт прочитанного, цели чтения, рекомендации и отзывы.', en: 'A bookshelf companion for tracking books, setting reading goals, discovering recommendations and sharing reviews.' }, stack: 'HTML · CSS', link: 'https://jnomerodin-ops.github.io/Oku/' },
]
 

export const interests = [
  { icon: '💻', label: { ru: 'Код', en: 'Code' }, id: 'code' },
  { icon: '🎧', label: { ru: 'Музыка', en: 'Music' }, id: 'music' },
  { icon: '📚', label: { ru: 'Книги', en: 'Books' }, id: 'books' },
  { icon: '🏀', label: { ru: 'Спорт', en: 'Sport' }, id: 'sport' },
]


export const ui = {
  n_about: { ru: 'Обо мне', en: 'About' },
  n_skills: { ru: 'Навыки', en: 'Skills' },
  n_projects: { ru: 'Проекты', en: 'Projects' },
  n_path: { ru: 'Путь', en: 'Path' },
  n_int: { ru: 'Интересы', en: 'Interests' },
  n_contact: { ru: 'Контакты', en: 'Contact' },
  hello: { ru: 'Привет, я', en: 'Hi, I am' },
  lead: { ru: 'Я собираю интерфейсы, в которых точность чертежа встречается с живым движением.', en: 'I build interfaces where the precision of a blueprint meets living motion.' },
  l_role: { ru: 'Роль', en: 'Role' },
  l_loc: { ru: 'Локация', en: 'Location' },
  l_status: { ru: 'Статус', en: 'Status' },
  l_stack: { ru: 'Стек', en: 'Stack' },
  cta1: { ru: 'Смотреть проекты', en: 'See projects' },
  cta2: { ru: 'Написать мне', en: 'Get in touch' },
  h_about: { ru: 'Немного обо мне', en: 'A little about me' },
  h_skills: { ru: 'Чем я работаю', en: 'What I work with' },
  h_projects: { ru: 'Избранные проекты', en: 'Selected projects' },
  h_path: { ru: 'Опыт и образование', en: 'Experience and education' },
  h_int: { ru: 'Вне кода', en: 'Beyond code' },
  h_contact: { ru: 'Давай сделаем что-нибудь вместе', en: "Let's make something together" },
  open: { ru: 'Открыть', en: 'Open' },
  back: { ru: 'Назад', en: 'Back' },
  foot: { ru: 'Собрано вручную.', en: 'Hand-built.' },
}
