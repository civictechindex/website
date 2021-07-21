const navigation = [
  {
    id: 'join',
    header: 'Join the Index',
    route: '#',
    subNavigation: [
      {
        id: 'tagYourProject',
        header: 'Tag Your Project',
        route: '/join-index',
      },
      {
        id: 'addProject',
        header: 'How to Add Your Project',
        route: '/join-index/how-to-add',
      },
    ],
  },
  {
    id: 'overview',
    header: 'Overview',
    route: '#',
    subNavigation: [
      {
        id: 'about',
        header: 'About',
        route: '/about',
      },
      {
        id: 'faq',
        header: 'FAQ',
        route: '/about/faq',
      },
      {
        id: 'contact',
        header: 'Contact Us',
        route: '/about/contact',
      },
    ],
  },
  {
    id: 'civicTechPartners',
    header: 'Civic Tech Partners',
    route: '#',
    subNavigation: [
      {
        id: 'organizations',
        header: 'View Organizations',
        route: '/organizations/all',
      },
    ],
  },
  {
    id: 'supportTheInx',
    header: 'Support the Index',
    route: '#',
    subNavigation: [
      {
        id: 'collaborate',
        header: 'Collaborate with Us',
        route: '/support',
      },
      {
        id: 'donate',
        header: 'Donate',
        route: '/support/donate',
      },
      {
        id: 'share',
        header: 'Share the CTI',
        route: '/support/share',
      },
      {
        id: 'volunteer',
        header: 'Volunteer with Us',
        route: 'https://www.hackforla.org/projects/civic-tech-index',
        isExternal: true,
      },
    ],
  },
];

const findSubNavParent = (subNavRoute) => {
  let results;
  navigation.forEach((nav) => {
    const found = nav.subNavigation.some((element) => element.route === subNavRoute);
    if (found) {
      results = nav.route;
    }
  });
  return results;
};

module.exports = {
  findSubNavParent,
  navigation,
};
