-- Creat data --
drop database if exists `hw02`;
create database `hw02
use `hw02`;
create table `product`(
    productID nvarchar(50) primary key,
    productName nvarchar(100),
    priceIn int,
    priceOut int,
    providerID nvarchar(10),
    categoryID nvarchar(10),
   Status nvarchar(20),
    imageURL nvarchar(100)
);
create table `user`(
	userID nvarchar(10) primary key,
    username nvarchar(100),
    pass nvarchar(100),
    phonenumber int(20),
    email nvarchar(100),
    address nvarchar(100),
    statuss boolean,
    payment nvarchar(100),
    avatarURL nvarchar(100),
    DOB date,
    role int
);
create table `Category`(
	categoryID int NOT NULL primary key,
    displayname nvarchar(100), 
    Size int(10),
    Color nvarchar(100)
);
create table `Order`(
	orderID nvarchar(10) primary key,
	userID nvarchar(10),
    deliverystatus nvarchar(100),
    paymentstatus nvarchar(100),
    address nvarchar(100),
    phonenumber int,
    remind nvarchar(100),
    ship int
);
create table `orderDetail`(
	orderID nvarchar(10),
    productID nvarchar(10),
    quantity int,
    price int
);

select * from `product`;
insert into `product` values ('1', 'hp probook 6470b', 4750000, 4350000, '1', 'laptop', 'in stock', '..\habcdeff.png');
-- add--
alter table `product`
	add salePercent float;
-- delete column-- 
alter table `product`
	drop column salePercent;
-- 
delete from `product` where productID = '2';
-- 
update `product`
	set priceIn = '24234324' where productID = '1';