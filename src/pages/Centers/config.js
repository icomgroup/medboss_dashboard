export const fields = {
  name: {
    type: 'string',
    required: true,
    label: 'Name',
  },
  region: {
    type: 'string',
    required: true,
    label: 'Region',
  },
  phone: {
    type: 'phone',
    label: 'Phone Number or Telegram link',
    required: true,
  },
  address: {
    type: 'string',
    required: true,
    label: 'Address',
  },
};
