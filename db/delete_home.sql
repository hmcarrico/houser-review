delete from listings
where id = $1
returning *;