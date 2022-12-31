create database plsdb;
use plsdb;

/*権限の付与*/
create user plsapiaccess identified by 'plsapi5011';
grant all on plsdb.* to plsapiaccess;

create user plsdirect@localhost identified by 'plsapi4040';
grant all on plsdb.* to plsdirect@localhost;

/*テーブル作成*/
create table form(
    id int not null,
    name varchar(50),
    link varchar(255)
);

insert into form values(1,'サンプル問題','sample');
insert into form values(2,'サンプル（関数）',"sample_func");
