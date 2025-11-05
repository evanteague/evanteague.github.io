import { createServerFn } from '@tanstack/react-start';
import { staticFunctionMiddleware } from '@tanstack/start-static-server-functions';

export const getWorks = createServerFn({
  method: 'GET',
})
  .middleware([staticFunctionMiddleware])
  .handler(async () => [
    {
      id: 1,
      title: 'PlexTrac',
      positions: [
        { name: 'Senior Software Engineer', timeLine: '2025-Present' },
      ],
      timeLine: '2025-Present',
      image: '/plextrac logo.svg',
    },
    {
      id: 2,
      title: 'SDL',
      positions: [{ name: 'Senior Software Engineer', timeLine: '2023-2024' }],
      timeLine: '2023-2024',
      image: '/sdl logo.webp',
    },
    {
      id: 3,
      title: 'Frio',
      positions: [{ name: 'Senior Software Engineer', timeLine: '2022-2023' }],
      timeLine: '2023-2024',
      image: 'frio logo.png',
    },
    {
      id: 4,
      title: 'Aqua',
      positions: [{ name: 'Senior Software Engineer', timeLine: '2023' }],
      timeLine: '2023',
      image: '/Aqua Logo.png',
    },
    {
      id: 5,
      title: 'Mythical Games',
      positions: [
        { name: 'Technical Team Lead', timeLine: '2022-2023' },
        { name: 'Senior Software Engineer', timeLine: '2021-2022' },
      ],
      timeLine: '2021-2023',
      image: '/mythical games.jpg',
    },
    {
      id: 5,
      title: 'Vistaprint',
      positions: [
        { name: 'Lead Software Engineer', timeLine: '2019-2021' },
        { name: 'Software Engineer II', timeLine: '2017-2019' },
        { name: 'Software Engineer I', timeLine: '2016-2017' },
      ],
      timeLine: '2016-2021',
      image: '/vistaprint logo.png',
    },
    {
      id: 6,
      title: 'Geico',
      positions: [{ name: 'Programmer Analyst', timeLine: '2015-2016' }],
      timeLine: '2015-2016',
      image: '/geico logo.webp',
    },
  ]);

export const getProjects = createServerFn({
  method: 'GET',
})
  .middleware([staticFunctionMiddleware])
  .handler(async () => [
    {
      id: 1,
      title: 'Countdown timer',
      link: 'https://frontend-practice-countdown-timer.vercel.app/',
      gitHub:
        'https://github.com/evanteague/frontend-practice/tree/main/countdown-timer',
      image: '/countdown timer.png',
    },
    {
      id: 2,
      title: 'Data storage',
      link: 'https://frontend-practice-data-storage.vercel.app/',
      gitHub:
        'https://github.com/evanteague/frontend-practice/tree/main/data-storage',
      image: 'data storage.png',
    },
    {
      id: 3,
      title: 'Calculator',
      link: 'https://frontend-practice-calculator-app-main.vercel.app/',
      gitHub:
        'https://github.com/evanteague/frontend-practice/tree/main/calculator-app-main',
      image: 'calculator.png',
    },
  ]);
