import { GiTrumpet } from 'react-icons/gi';
import { GiTuba } from 'react-icons/gi';
import { GiTrombone } from 'react-icons/gi';
import { FaDrum } from 'react-icons/fa';
import anna from './assets/band/anna.jpg';
import martin from './assets/band/martin.jpg';
import mörtl from './assets/band/mörtl.jpg';
import mehring from './assets/band/mehring.jpg';
import vinzenz from './assets/band/vinzenz.jpg';
import phillip from './assets/band/phillip.jpg';
import trumpet from './assets/instruments/trumpet.png';
import drums from './assets/instruments/drum-set.png';
import trombone from './assets/instruments/trombone.png';
import sousaphone from './assets/instruments/sousaphone.png';

export const data = {
  email: 'info@desbrassdscho.de',
  tel: '09123 987340',
  mobile: '0176 97683642',
};

export const tourData = [
  {
    title: 'Konzert mit dem Posaunenchor Sachsen',
    datum: 'Sa, 27.04.2024; 19.30 Uhr',
    addresse: 'Haus der Bäuerin, Vorderberg 1',
    ort: '91623 Sachsen bei Ansbach',
  },
  {
    title: 'Konzert mit dem Posaunenchor Happurg',
    datum: 'So, 28.04.2024; 17 Uhr',
    addresse: 'Kirche St. Georg, Marktpl. 3',
    ort: ' 91230 Happurg',
  },
  {
    title: 'Vatertag im Biergarten Tucherhof',
    datum: 'Do, 09.05.2024; 11-14 Uhr',
    addresse: 'Marienbergstraße 110',
    ort: ' 90411 Nürnberg',
  },
  {
    title: 'Entlas Keller Bergkirchweih Erlangen',
    datum: 'Sa, 18.05.2024; 14:30-17:30 Uhr',
    addresse: 'An den Kellern 5-7',
    ort: '91054 Erlangen',
  },
  {
    title: 'Feuerwehrfest Rasch; Frühschoppen',
    datum: 'So, 02.06.2024; ab 10:30 Uhr',
    addresse: 'Dorfplatz in Rasch',
    ort: '90518 Altdorf',
  },
  {
    title: 'Haberloh Kirchweih; Frühschoppen',
    datum: 'So, 21.07.2024; ab 10 Uhr',
    addresse: 'TV 1877 Lauf e.V., Am Haberloh 6',
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
  },
  {
    name: 'Martin Wiesinger',
    instrument: 'Schlagzeug',
    icon: drums,
    avatar: martin,
  },
];
