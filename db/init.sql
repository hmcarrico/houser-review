drop table if exists listings;

create table listings (
    id serial primary key,
    name text,
    address text,
    state text,
    zip int,
    img text
);

insert into listings
(name, address, state, zip, img)
values
('Name', 'Address', 'State', 85034, 'Img');

select * from listings;