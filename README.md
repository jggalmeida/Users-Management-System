# Users-Management-System
UMS - Users Management System

> Management System to create, edit, delete and view users.


### Built With

* Backend:
[Nodejs](https://nodejs.org/en/docs/)
[Hapi](https://hapi.dev/api/?v=20.1.0)
* Frontend:
[Reactjs](https://pt-br.reactjs.org/docs/getting-started.html)
* Database:
[Azure Data Studio](https://docs.microsoft.com/pt-br/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15)
[SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads)
* Container:
[Docker](https://docs.docker.com/)
* Documentation & Execution
[Postman](https://learning.postman.com/docs/publishing-your-api/documenting-your-api/)

### Endpoints Documentation
[Documentation](https://documenter.getpostman.com/view/11443720/TWDTMeeT)

### DOCKER & SQL SERVER

MS-SQL Image

```
docker pull microsoft/mssql-server-linux:2017-latest
```

Docker Run

```
docker run -d --name sqlserver -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=P@55w0rd' -e 'MSSQL_PID=Developer' -p 1433:1433 microsoft/mssql-server-linux:2017-latest
```

Docker Start

```
docker start sqlserver1
```

### DATABASE CONFIGURATION

#### Using Azure Data Studio

Creating Database

```
CREATE DATABASE company;
GO
```

Creating Table

```
CREATE TABLE users (
    [Id] int IDENTITY(1,1) PRIMARY KEY CLUSTERED NOT NULL,
    [UserId] varchar(50) NOT NULL,
    [Password] varchar(50) NOT NULL,
    [Email] varchar(50) NOT NULL,
    [Name] varchar(200) NOT NULL,
    [Department] varchar(100) NOT NULL,
    [EnteredOn] date NOT NULL,
    [LastUpdate] date NOT NULL,
    [SecurityLevel] varchar(50) NOT NULL
);

GO
```

Insert Example

```
INSERT INTO users(UserId, [Password], Email, Name, Department, EnteredOn, LastUpdate, SecurityLevel)
VALUES ('admin', 'admin', 'teste@teste.com', 'Administrator', 'Information Technology', '2021-02-13', '2021-02-13', 'Super Administrator')
```

# TODOs

List of future improvements:

* Use JWT to check if user is authenticated.
* Harsh the password using Bcrypt to improve security by not insert the raw password into the database.
* Block excessive login attempts (Brute or similar).


## Personal Inofrmation

João Guilherme Guimarães Almeida

Contact:

* [LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-g-g-almeida/ "LinkeId")
* [Github](https://github.com/jggalmeida "Github Profile")
* [E-mail](mailto:j.g.almeida@hotmail.com)