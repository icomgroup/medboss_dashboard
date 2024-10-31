export const fields = {
  name: {
    type: 'string',
    required: true,
    label: 'Name',
  },
  password: {
    type: 'password',
    required: true,
    label: 'Password',
    disableForUpdate: true,
  },
  email: {
    type: 'email',
    required: true,
    label: 'Email',
  },
  phone: {
    type: 'phone',
    required: true,
    label: 'Phone',
  },
  role_id: {
    type: 'select',
    options: [
      { value: 1, label: 'User' },
      { value: 2, label: 'Admin' },
    ],
    required: true,
    label: 'Role',
  },
  section: {
    type: 'select',
    options: [
      { value: 1, label: 'MEDICINE' },
      { value: 2, label: 'DENTISTS' },
      { value: 3, label: 'PHARMACY' },
    ],
    required: true,
    label: 'Section',
  },
  university: {
    type: 'select',
    options: [
      {
        value: 1,
        label: 'DAMASCUS',
      },
      {
        value: 2,
        label: 'TESHREEN',
      },
      {
        value: 3,
        label: 'BAATH',
      },
      {
        value: 4,
        label: 'TARTOS',
      },
      {
        value: 5,
        label: 'ANDALOS',
      },
      {
        value: 6,
        label: 'FURAT',
      },
      {
        value: 7,
        label: 'ALEPPO',
      },
      {
        value: 8,
        label: 'HAMA',
      },
      {
        value: 9,
        label: 'QALAMON',
      },
      {
        value: 10,
        label: 'AL SHAM',
      },
      {
        value: 11,
        label: 'AL SORIA',
      },
      {
        value: 100,
        label: 'NOT_SYR',
      },
    ],
    required: true,
    label: 'University',
  },
  year: {
    type: 'select',
    options: [
      {
        value: 4,
        label: 'FOURTH',
      },
      {
        value: 5,
        label: 'FIFTH',
      },
      {
        value: 6,
        label: 'SIXTH',
      },
      {
        value: 100,
        label: 'UNKNOWN',
      },
    ],
    required: true,
    label: 'Year',
  },
  state: {
    type: 'select',
    options: [
      {
        value: 1,
        label: 'ALEPPO',
      },
      {
        value: 2,
        label: 'DAMASCUS & COUNTRYSIDE',
      },
      {
        value: 3,
        label: 'DARAA',
      },
      // {
      //   value: 4,
      //   label: 'DEREZZOR',
      // },
      {
        value: 5,
        label: 'HAMA',
      },
      // {
      //   value: 6,
      //   label: 'ALHASAKAH',
      // },
      {
        value: 7,
        label: 'QUNEITRA',
      },
      {
        value: 8,
        label: 'LATAKIA',
      },
      {
        value: 9,
        label: 'TARTUS',
      },
      {
        value: 10,
        label: 'EASTERN_GOVERNORATES',
      },
      {
        value: 11,
        label: 'HOMS',
      },
      {
        value: 12,
        label: 'As-Suwayda',
      },
      {
        value: 100,
        label: 'OUT OF SYR',
      },
      {
        value: 101,
        label: 'OTHERS',
      },
    ],
    required: true,
    label: 'State',
  },
};
