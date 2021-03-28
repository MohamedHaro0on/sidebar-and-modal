import {
    FaBehance,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSketch,
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms,
} from 'react-icons/fa';
const Links = [
    {
        id: 1,
        url: '/',
        text: 'home',
        icon: <FaHome />,
      },
      {
        id: 2,
        url: '/team',
        text: 'team',
        icon: <FaUserFriends />,
      },
      {
        id: 3,
        url: '/projects',
        text: 'projects',
        icon: <FaFolderOpen />,
      },
      {
        id: 4,
        url: '/calendar',
        text: 'calendar',
        icon: <FaCalendarAlt />,
      },
      {
        id: 5,
        url: '/documents',
        text: 'documents',
        icon: <FaWpforms />,
      },
]

const SocialLinks = [
    {
        id: 1,
        label : "facebook",
        url: 'https://www.twitter.com',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        label : "twitter",
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        label: "linkedIn",
        url: 'https://www.twitter.com',
        icon: <FaLinkedin />,
    },
    {
        id: 4,
        label: "Behance",
        url: 'https://www.twitter.com',
        icon: <FaBehance />,
    },
    {
        id: 5,
        label:"Sketch",
        url: 'https://www.twitter.com',
        icon: <FaSketch />,
    },
]
export {Links , SocialLinks} ;