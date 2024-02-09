import { GiTrumpet } from 'react-icons/gi';
import { GiTuba } from 'react-icons/gi';
import { GiTrombone } from 'react-icons/gi';
import { FaDrum } from 'react-icons/fa';
import anna from './assets/band/anna.jpg';
import martin from './assets/band/martin.jpg';
import patrik from './assets/band/patrick.jpg';
import mörtl from './assets/band/mörtl.jpg';
import mehring from './assets/band/mehring.jpg';
import vinzenz from './assets/band/vinzenz.jpg';
import phillip from './assets/band/phillip.jpg';
import trumpet from './assets/instruments/trumpet.png';
import drums from './assets/instruments/drum-set.png';
import trombone from './assets/instruments/trombone.png';
import sousaphone from './assets/instruments/sousaphone.png';
import manuel from './assets/band/manuel.jpg';

export const data = {
  email: 'info@desbrassdscho.de',
  tel: '09123 987340',
  mobile: '0176 97683642',
};

export const tourData = [
  {
    id: 1,
    title: 'Konzert mit dem Posaunenchor Sachsen',
    datum: 'Sa, 27.04.2024; 19.30 Uhr',
    addresse: 'Haus der Bäuerin, Vorderberg 1',
    ort: '91623 Sachsen bei Ansbach',
  },
  {
    id: 2,
    title: 'Konzert mit dem Posaunenchor Happurg',
    datum: 'So, 28.04.2024; 17 Uhr',
    addresse: 'Kirche St. Georg, Marktpl. 3',
    ort: ' 91230 Happurg',
  },
  {
    id: 3,
    title: 'Vatertag im Biergarten Tucherhof',
    datum: 'Do, 09.05.2024; 11-14 Uhr',
    addresse: 'Marienbergstraße 110',
    ort: ' 90411 Nürnberg',
  },
  {
    id: 4,
    title: 'Entlas Keller Bergkirchweih Erlangen',
    datum: 'Sa, 18.05.2024; 14:30-17:30 Uhr',
    addresse: 'An den Kellern 5-7',
    ort: '91054 Erlangen',
  },
  {
    id: 5,
    title: 'Feuerwehrfest Rasch; Frühschoppen',
    datum: 'So, 02.06.2024; ab 10:30 Uhr',
    addresse: 'Dorfplatz in Rasch',
    ort: '90518 Altdorf',
  },
  {
    id: 6,
    title: 'Haberloh Kirchweih; Frühschoppen',
    datum: 'So, 21.07.2024; ab 10 Uhr',
    addresse: 'TV 1877 Lauf e.V., Am Haberloh 6',
    ort: '91207 Lauf',
  },
  {
    id: 7,
    title: 'Laufer Kirwa',
    datum: 'Mo, 08.07.2024; ab 17 Uhr',
    addresse: 'am Kunigundenberg',
    ort: '91207 Lauf',
  },
];

export const bandData = [
  {
    name: 'Christian Mörtel',
    instrument: 'Trompete',
    icon: trumpet,
    avatar: mörtl,
  },
  {
    name: 'Phillipp Gottschalk',
    instrument: 'Trompete',
    icon: trumpet,
    avatar: phillip,
  },
  {
    name: 'Vinzenz Wolpold',
    instrument: 'Trompete',
    icon: trumpet,
    avatar: vinzenz,
  },
  {
    name: 'Anna Mörtel',
    instrument: 'Posaune',
    icon: trombone,
    avatar: anna,
  },
  {
    name: 'Johannes Mehring',
    instrument: 'Posaune',
    icon: trombone,
    avatar: mehring,
  },
  {
    name: 'Manuel Vildosola',
    instrument: 'Sausaphone',
    icon: sousaphone,
    avatar: manuel,
  },
  {
    name: 'Martin Wiesinger',
    instrument: 'Schlagzeug',
    icon: drums,
    avatar: martin,
  },
  {
    name: 'Patrik Nikolaos Faroungias',
    instrument: 'Posaune',
    icon: trombone,
    avatar: patrik,
  },
];
