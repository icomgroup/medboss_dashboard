export const fields = {
  points: {
    type: 'number',
    required: true,
    disableForUpdate: true,
    min: 0,
    max: 9999,
  },
  numCode: {
    type: 'number',
    label: 'Number of codes',
    required: true,
    disableForUpdate: true,
    disableForTable: true,
    min: 0,
    max: 100,

  },
  center: {
    type: 'search',
    label: 'Center',
    entity: 'centers',
    redirectLabel: 'Add New Center',
    withRedirect: true,
    urlToRedirect: '/centers',
    displayLabels: ['name'],
    searchFields: 'name',
    dataIndex: ['Center', 'name'],
    feedback: 'Center',
    disableForTable: true,

  },
  uuid: {
    type: 'string',
    disableForForm: true,
    disableForUpdate: true,
  },
};
