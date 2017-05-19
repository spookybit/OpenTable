export const allLocations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/locations'
  })
);

export const singleLocation = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/locations/${id}`
  })
)
