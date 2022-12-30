INSERT INTO department
(id,de_name)
VALUES
(1,'Engineering'),
(2,'Sales'),
(3,'Finance'),
(4,'Legal');

INSERT INTO role
(id,title,salary,dRole)
VALUES
(1,'Sales Lead',100000,'Sales'),
(2,'Salesperson',80000,'Sales'),
(3,'Lead Engineer',150000,'Engineering'),
(4,'Software Engineer',120000,'Engineering');

INSERT INTO employee
(em_id,firstName,lastName,em_role,ManagerName)
VALUES
(1,'John','Doe','Sales Lead','Peter Parker'),
(2,'Mike','Chan','Salesperson','John Doe'),
(3,'Ashley','Rodriguez','Lead Engineer','null' );