import { HomeIcon, InfoIcon, SectionIcon } from '@/assets/icons/icons';
import { NavigationSection } from '@/types';

const navigation: NavigationSection[] = [
  {
    title: 'Main',
    links: [
      {
        title: 'Home',
        path: '/',
        icon: <HomeIcon />,
      },
      {
        title: 'Section',
        path: '/section',
        icon: <SectionIcon />,
        children: [
          {
            path: '/section/subsection-one',
            title: 'Subsection One',
          },
          {
            path: '/section/subsection-two',
            title: 'Subsection Two',
          },
        ],
      },
    ],
  },
  {
    title: 'Info',
    links: [
      {
        title: 'About',
        path: '/about',
        icon: <InfoIcon />,
      },
    ],
  },
];

export default navigation;
