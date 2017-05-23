export const searchRequest = (search) => (
  $.ajax({
    method: 'GET',
    url: 'api/restaurants',
    data: search
  })
);
