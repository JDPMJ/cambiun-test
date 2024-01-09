import { BsGlobeAmericas, BsBuildings, BsPalette2 } from "react-icons/bs";

const links = [
  { 
    name: "Carga de Data",
    submenu: true,
    icon: <BsGlobeAmericas className="text-orange-700" />,
    sublinks1: [
      {
        title: "Geografía",
        sublinks2: [
          {
            name: "Países",
            link: "/"
          },
          {
            name: "Estádos",
            link: "/"
          },
          {
            name: "Option 1.2",
            link: "/"
          },
          {
            name: "Option 1.2",
            link: "/"
          },
          {
            name: "Option 1.2",
            link: "/"
          },
          {
            name: "Option 1.2",
            link: "/"
          },
          {
            name: "Option 1.2",
            link: "/"
          }
        ]
      },
      {
        title: "Option 2",
        sublinks2: [
          {
            name: "Option 1.1",
            link: "/"
          },
          {
            name: "Option 1.2",
            link: "/"
          }
        ]
      },
      {
        title: "Option 3",
        sublinks2: [
          {
            name: "Option 1.1",
            link: "/"
          },
          {
            name: "Option 1.2",
            link: "/"
          }
        ]
      },
      {
        title: "Option 4",
        sublinks2: [
          {
            name: "Option 1.1",
            link: "/"
          },
          {
            name: "Option 1.2",
            link: "/"
          }
        ]
      },
      {
        title: "Option 5",
        sublinks2: [
          {
            name: "Option 1.1",
            link: "/"
          },
          {
            name: "Option 1.2",
            link: "/"
          }
        ]
      }
    ]
  },
  {
    name: "Empresas",
    submenu: false,
    icon: <BsBuildings className="text-orange-700" />,
    sublinks1: [
      {
        title: "Option 2",
        sublinks2: [
          {
            name: "Option 2.1",
            link: "/"
          },
          {
            name: "Option 2.2",
            link: "/"
          }
        ]
      }
    ]
  },
  { 
    name: "Modelos de Aprendizaje",
    submenu: false,
    icon: <BsPalette2 className="text-orange-700" />,
    sublinks1: [
      {
        title: "Option 3",
        sublinks2: [
          {
            name: "Option 3.1",
            link: "/"
          },
          {
            name: "Option 3.2",
            link: "/"
          }
        ]
      }
    ]
  }
];

export default links;