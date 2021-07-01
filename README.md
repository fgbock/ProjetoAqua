# Projeto Aqua
Este projeto tem como finalidade o desenvolvimento de um sistema para gerenciar e disponibilizar dados de qualidade das águas.

## Dependências
O sistema Aqua requer a instalação dos seguintes programas e dependências:
* MySql 8 (8.0.24)
* Node (v. 10.19)
* Python 3 (para os scripts de geração do banco de dados base)
   * Pandas
   * Pyproj
   * Tabulate
   * Mysql.Connector
 
## Instalação
1) Configure usuário e senha para o MySQL, inserir este usuário e senha no arquivo *App/config/config.json*. 
Pode utilizar o root, mas note que no Ubuntu será necessário permitir autenticação para root através de senha, pois não vem habilitada por default.
2) Carregar o banco de dados utilizando o código *Database/Databases/qualidadeaguas8.sql* através do comando *source* na interface de comando do MySQL.
3) Carregar os dados das tabelas através dos scripts na pasta *Database/Scripts*.

Informações de locais:
```
python loadintosql.py -l
```
Informações de parâmetros:
```
python loadintosql.py -p
```
Informações de coletas:
```
python loadintosql.py -c
```
Parâmetros de referência legais (para águas superficiais):
```
python param.py -s
```
4) Finalmente, é necessário instalar todos os módulos necessários através do npm. Para isso, abra o terminal na pasta *App* e execute:
```
npm install
```
Após isso será possível executar o sistema.

## Rodando o sistema
O sistema Aqua pode ser executado através do comando "npm start", e requer a passagem dos seguintes argumentos:
* **Configuração de execução**: pode ser *teste*, para desenvolvimento, ou *deploy* para executar como servidor (requer permissão para acessar porta 80).
* **Sistema Operacional**: pode ser *windows* ou *linux*, atualmente só um workaround para conexão com banco de dados.

Exemplo:
```
npm start test windows
```

Para executar como servidor de "produção" é recomendado executar sobre o OS Ubuntu. Também é recomendado executar através do gerenciador "PM2".

Com o PM2, é possível inicializar o processo executando um comando neste estilo:
```
sudo pm2 --name Aqua start npm -- start deploy linux
```
Para verificar que o processo está "online", utilize:
```
sudo pm2 list
```

Para parar, iniciar um processo parado ou deletar um processo, são usados respectivamente:
```
sudo pm2 stop Aqua
```
```
sudo pm2 start Aqua
```
```
sudo pm2 delete Aqua
```
