export const createFav = (user_id, favorite) => (
    $.ajax({
      method: 'POST',
      url: `/api/users/${user_id}/favorites`,
      data: {favorite}
    })
);

export const deleteFav = (user_id, favorite) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${user_id}/favorites/${favorite.restaurant_id}`,
    data: {favorite}
  })
);

export const allFav = (currentuser_id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${currentuser_id}/favorites`,
      data: {currentuser_id: currentuser_id}

  })
);

};
