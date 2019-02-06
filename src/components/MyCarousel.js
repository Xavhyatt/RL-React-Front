import React from 'react';
import SuperleagueImg from './img/superleague.jpg';
import GrandFinalImg from './img/GF.jpg';
import MakinsonImg from './img/makinson.jpg';
import { UncontrolledCarousel } from 'reactstrap';
import './css/carousel.css';

const items = [
  {
    src: SuperleagueImg,
    altText: 'Slide 1',
    caption: 'The Action Returns 31st January!',
    header: 'Super League Returns!'
  },
  {
    src: GrandFinalImg,
    altText: 'Slide 2',
    caption: '',
    header: 'Wigan Crowned 2018 Super League Champions'
  },
  {
    src: MakinsonImg,
    altText: 'Slide 3',
    caption: 'Tommy Signs a contract Extension with St Helens',
    header: 'Makinson Set With Saints '
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;