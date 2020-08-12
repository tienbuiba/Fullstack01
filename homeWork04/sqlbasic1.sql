-- bai1
drop database if exists `qlnt`;
create database `qlnt`;
use `qlnt`;


drop table if exists `khachHang`;
create table `khachHang`(
`MaKH` nvarchar(100) primary key,
`HoTen`nvarchar(100),
`SDT` nvarchar(100),
`CoQuan`nvarchar(100)
);

drop table if exists `nhaChoThue`;
create table `nhaChoThue`(
`MaN` nvarchar(100) primary key,
`DiaChi`nvarchar(100),
`GiaThue` integer,
`TenChuNha`nvarchar(100)

);

drop table if exists `hopDong`;
create table `hopDong`(
`MaN` nvarchar(100),
`MaKH` nvarchar(100),
 foreign key (`MaKH`) references `KhachHang`(`MaKH`),
 foreign key (`MaN`) references `nhachothue`(`MaN`),
`ngayBatDau` timestamp default current_timestamp ,
`ngayKetThuc` timestamp default current_timestamp on update current_timestamp
);

-- Dua ra danh sach (Dia chi ,Ten chu nha) co nhung ngoi nha co gia thue it hon 10 trieu
select `DiaChi`,`TenChuNha` ,`GiaThue`
from `nhaChoThue`
where `GiaThue`< 1000;



-- Dua ra danh sach (makh,hoten ,coquan ) cua nhung nguoi da tung thue nha co ten la: "Nong Van Den"
select  distinct K.`MaKH`,K.`HoTen`,K.`CoQuan` ,N.`TenChuNha`
from `khachHang` as K 
inner join `hopDong` as  H on K.`MaKh` =H.`MaKh`
inner join `nhaChoThue` as N on N.`MaN` =H.`MaN`
where N.`TenChuNha`='Nong Van Den';

-- Dua ra danh sach ngoi nha chua tung duoc ai thue 
select *
from `nhaChoThue`as N
where `MaN` NOT IN  ( select `MaN` from `hopDong`);

-- Gia thue cao nhat trong so cac gia thue cac ngoi nha da duoc thue it nhat 1 lan 
select max(`GiaThue`) 
from `hopDong` as H inner join	`nhaChoThue` as N on H.MaN =H.MaN ;


  
--  select max(`giathue)`
-- from `nhachothue`
-- where `manha`  exists (select `manha` from `hopdong`) ;