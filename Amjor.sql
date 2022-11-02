CREATE DATABASE Amjor;
USE Amjor;

CREATE TABLE Rol(
    ID_Rol INT AUTO_INCREMENT NOT NULL,
    Nombre_Rol VARCHAR(100) NOT NULL,
    CONSTRAINT PK_Rol PRIMARY KEY (ID_Rol),
    CONSTRAINT CHK_Rol CHECK (Nombre_Rol '[a-z A-Z]'),
    CONSTRAINT UC_Nombre_Rol UNIQUE (Nombre_Rol)
);

CREATE TABLE Estado(
    ID_Estado INT AUTO_INCREMENT NOT NULL,
    Nombre_Estado VARCHAR(100) NOT NULL,
    CONSTRAINT PK_Estado PRIMARY KEY (ID_Estado),
    CONSTRAINT CHK_Estado CHECK (Nombre_Estado '[a-z A-Z]'),
    CONSTRAINT UC_Nombre_Estado UNIQUE (Nombre_Estado)
);

CREATE TABLE Usuario(
    ID_Usuario INT AUTO_INCREMENT NOT NULL,
    ID_Rol INT NOT NULL,
    Correo VARCHAR(100) NOT NULL,
    Contraseña VARCHAR(100) NOT NULL,
    CONSTRAINT PK_Usuario PRIMARY KEY (ID_Usuario),
    CONSTRAINT FK_UsuarioRol FOREIGN KEY (ID_Rol)
    REFERENCES Rol(ID_Rol),

    CONSTRAINT CHK_Usuario CHECK (Correo LIKE "[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}"),
    CONSTRAINT UC_Correo UNIQUE (Correo)
);
-- CHECK para correo electrónico
--    CONSTRAINT CHK_Usuario CHECK (Correo  "(.*)@(.*)\.(.*)"),
--    CONSTRAINT CHK_Usuario CHECK (Correo  "(.*)@(.*)\.(.*)"),

CREATE TABLE Cliente(
    ID_Cliente INT AUTO_INCREMENT NOT NULL,
    ID_Usuario INT NOT NULL,
    Documento INT(11) NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Telefono VARCHAR(15) NOT NULL,
    CONSTRAINT PK_Cliente PRIMARY KEY (ID_Cliente),
    CONSTRAINT FK_ClienteUsuario FOREIGN KEY (ID_Usuario)
    REFERENCES Usuario(ID_Usuario)
);

CREATE TABLE Insumos(
    ID_Insumo INT AUTO_INCREMENT NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT NOT NULL,
    PrecioU INT NOT NULL,
    ID_Estado INT NOT NULL,
    CONSTRAINT PK_Insumos PRIMARY KEY (ID_Insumo),
    CONSTRAINT FK_InsumosEstado FOREIGN KEY (ID_Estado)
    REFERENCES Estado(ID_Estado)
);

CREATE TABLE Ancheta(
    ID_Ancheta INT AUTO_INCREMENT NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion TEXT NOT NULL,
    ID_Estado INT NOT NULL,
    CONSTRAINT PK_Ancheta PRIMARY KEY (ID_Ancheta),
    CONSTRAINT FK_AnchetaEstado FOREIGN KEY (ID_Estado)
    REFERENCES Estado(ID_Estado)
);

CREATE TABLE Insumos_Anchetas(
    ID_Insumos_Ancheta INT AUTO_INCREMENT NOT NULL,
    ID_Ancheta INT NOT NULL,
    ID_Insumos INT NOT NULL,
    CONSTRAINT PK_Insumos_Anchetas PRIMARY KEY (ID_Insumos_Ancheta),
    CONSTRAINT FK_Insumos_AnchetasAncheta FOREIGN KEY (ID_Ancheta)
    REFERENCES Ancheta(ID_Ancheta),
    CONSTRAINT FK_Insumos_AnchetasInsumos FOREIGN KEY (ID_Insumos)
    REFERENCES Insumos(ID_Insumo)
);

CREATE TABLE Carrito(
    ID_Carrito INT AUTO_INCREMENT NOT NULL,
    ID_Cliente INT NOT NULL,
    ID_Detalle INT NOT NULL,
    Cantidad INT NOT NULL,
    Precio INT NOT NULL,
    Fecha DATETIME NOT NULL,
    CONSTRAINT PK_Carrito PRIMARY KEY (ID_Carrito),
    CONSTRAINT FK_CarritoCliente FOREIGN KEY (ID_Cliente)
    REFERENCES Cliente(ID_Cliente)
);

--
-- Revisar ID_Detalle que se supone que debe repetirse.
--
CREATE TABLE Detalle_Carrito(
    ID_Detalle INT NOT NULL AUTO_INCREMENT,
    ID_Carrito INT NOT NULL,
    ID_Ancheta INT NOT NULL,
    ID_Insumo INT NOT NULL,
    Cantidad INT NOT NULL,
    CONSTRAINT PK_Detalle_Carrito PRIMARY KEY (ID_Detalle),
    CONSTRAINT FK_Detalle_CarritoCarrito FOREIGN KEY (ID_Carrito)
    REFERENCES Carrito(ID_Carrito),
    CONSTRAINT FK_Detalle_CarritoAncheta FOREIGN KEY (ID_Ancheta)
    REFERENCES Ancheta(ID_Ancheta),
    CONSTRAINT FK_Detalle_CarritoInsumos FOREIGN KEY (ID_Insumo)
    REFERENCES Insumos(ID_Insumo)
);

--
-- Cuando quitas los guiones de FK_Pedido_AnchetaPedido da error de CONSTRAINT
--
CREATE TABLE Pedido_Ancheta(
    ID_PedidoAnch INT AUTO_INCREMENT NOT NULL,
    ID_Pedido INT NOT NULL,
    ID_Ancheta INT NOT NULL,
    Cantidad INT NOT NULL,
    Precio INT NOT NULL,
    CONSTRAINT PK_Pedido_Ancheta PRIMARY KEY (ID_PedidoAnch),
--    CONSTRAINT FK_Pedido_AnchetaPedido FOREIGN KEY (ID_Pedido)
--    REFERENCES Pedido(ID_Pedido),
    CONSTRAINT FK_Pedido_AnchetaAncheta FOREIGN KEY (ID_Ancheta)
    REFERENCES Ancheta(ID_Ancheta)
);

CREATE TABLE Pedido(
    ID_Pedido INT AUTO_INCREMENT NOT NULL,
    ID_Cliente INT NOT NULL,
    ID_PedidoAnch INT NOT NULL,
    Cantidad INT NOT NULL,
    Direccion_Entrega VARCHAR(100) NOT NULL,
    Fecha_Entrega DATE NOT NULL,
    Precio_Total INT NOT NULL,
    CONSTRAINT PK_Pedido PRIMARY KEY (ID_Pedido),
    CONSTRAINT FK_PedidoCliente FOREIGN KEY (ID_Cliente)
    REFERENCES Cliente(ID_Cliente),
    CONSTRAINT FK_PedidoPedido_Ancheta FOREIGN KEY (ID_PedidoAnch)
    REFERENCES Pedido_Ancheta(ID_PedidoAnch)
);

CREATE TABLE Pedido_Insumos_Ancheta(
    ID_Pedido_Insumo INT AUTO_INCREMENT NOT NULL,
    ID_PedidoAnch INT NOT NULL,
    ID_Insumo INT NOT NULL,
    Cantidad INT NOT NULL,
    Precio INT NOT NULL,
    CONSTRAINT PK_Pedido_Insumos_Ancheta PRIMARY KEY (ID_Pedido_Insumo),
    CONSTRAINT FK_Pedido_Insumos_AnchetaPedidoAnch FOREIGN KEY (ID_PedidoAnch)
    REFERENCES Pedido_Ancheta(ID_PedidoAnch),
    CONSTRAINT FK_Pedido_Insumos_AnchetaInsumo FOREIGN KEY (ID_Insumo)
    REFERENCES Insumos(ID_Insumo)
);

CREATE TABLE Ventas(
    ID_Venta INT AUTO_INCREMENT NOT NULL,
    ID_Pedido INT NOT NULL,
    ID_PedidoAnch INT NOT NULL,
    Cantidad INT NOT NULL,
    Direccion_Entrega VARCHAR(100) NOT NULL,
    Fecha_Entrega DATE NOT NULL,
    Precio_Total INT NOT NULL,
    Estado_Pedido VARCHAR(100) NOT NULL,
    CONSTRAINT PK_Ventas PRIMARY KEY (ID_Venta),
    CONSTRAINT FK_VentasPedido FOREIGN KEY (ID_Pedido)
    REFERENCES Pedido(ID_Pedido),
    CONSTRAINT FK_VentasPedido_Ancheta FOREIGN KEY (ID_PedidoAnch)
    REFERENCES Pedido_Ancheta(ID_PedidoAnch)
);