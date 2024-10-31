export const fields = {
  name: {
    type: 'string',
    required: true,
    label: 'Name',
  },
  points: {
    type: 'number',
    required: true,
    min: 0,
    max: 1000000,
    label: 'Points',
  },
  description: {
    type: 'textarea',
    required: true,
    label: 'Description',
  },
  is_published: {
    type: 'select',
    options: [
      { value: 1, label: 'True' },
      { value: 0, label: 'False' },
    ],
    required: true,
    disableForTable: true,
    label: 'Published',
  },
};
