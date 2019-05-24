export const user = {
  id: 1,
  userName: 'denis3509',
  login: 'denis',
  password: 'pass',
  profileData: {
    fullName: 'Денис Богатырев',
    about: 'учусь писать код',
    phone: '88001230987',
    contactEmail: 'denis@denis.com'
  },
  dashboardList: [
    {
      id: 1,
      name: 'Client',
      description: 'учебный проект клиент',

    },
    {
      id: 2,
      name: 'Server',
      description: 'учебный проект сервер',
    }
  ],
  notificationList: [],
  countNewNotifications: 0,
};

export const dashboardClient = {
  id: 1,
  name: 'Client',
  description: 'учебный проект клиент',
  group: [{
    id: 1,
    userName: 'denis3509',
  }],
  columns: [
    {
      name: "Интерфейс",
      cards: [

        {
          name: "drag n drop",
          content: "выбор компонента"
        },

      ],
    },
    {
      name: "Логика",
      cards: [
        {
          name: "Авторизация",
          content: "passport js"
        },
        {
          name: "redux",
          content : "redux-thunk"
        }
      ]
    }

  ],

};