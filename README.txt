# Projeto MVC com Nest e Angular

Descrição dos arquivos:

 * VIEW: 
    - A pasta /view contém o projeto Angular 5.
    - Ela é responsável por toda a View do projeto e controladores relacionado as Views.
    - A tela 'app.component.html' é a parte gráfica, onde tem os botões por exemplo.
    - E o 'app.component.ts' é o controlador dessa View, que dá as ações dos botões e chamada o Back end.
  * MODEL e CONTROLLER
    - Dentro da pasta /src contém o projeto Nest.
    - Ele é responsável pelo back end da aplicação e os controladores de negócio.
    - Os arquivos server.ts e app.module.ts são arquivos de configuração.
    - A pasta /src/modules/database é onde a conexão com o banco é realizada. O banco utilizado foi o MongoDB.
    - A pasta /src/modules/canvas é onde contém o controle principal da API/Backend.
    - Os arquivos 'canvas.[dto|interface|schema].ts são utilitários para o processo:
      - Schema e Interface para representar o banco de dados;
      - DTO para representar o objeto que a API vai receber do front end;
    - O arquivo 'canvas.provider.ts' é a referencia do Canvas ao banco de dados, você diz o nome da coleção e qual o Schema vai ser salvo.
    - O arquivo 'canvas.module.ts' é parte do Nest para modularizar os componentes.
    - O arquivo 'canvas.model.ts' é onde contém a lógica de negócio, ele acessa o Model do Banco de Dados e salva ou recupera os dados.
      - Esse Model do Banco de Dados é similar ao Hibernate, um ORM, no caso do MongoDB é um ODM, Object Document Mapper.
      - Com esse model eu consigo fazer 'canvasModel.find()' por exemplo.
    - O arquivo 'canvas.controller.ts' acessa o 'canvas.model.ts' e expõe os métodos do model para uma camada HTTP.
      - Assim o cliente Angular consegue fazer requisições HTTP e realizar os métodos descritos no Model.

Todos os outros arquivos são de configuração, parte necessária por ser projetos Node.js, parte necessária por ser em Typescript, 
logo precisamos definir como será a compilação para Javascript.

Pode parecer uma arquitetura pouco diferente das tradicionais, como o Play ou Spring Boot.
Porém são tecnologias que utilizo no mercado hoje e acredito a ideia é apenas evoluir essa arquitetura.

Esse projeto utiliza uma arquitetura FrontEnd - BackEnd como serviços separados, é possível por exemplo rodar esses serviços em máquinas 
totalmente distintas e eles irão se comunicar normalmente.

O Angular pode parecer ter o Controller do "MVC" porém ele apenas controla a View, n
o Java Swing por exemplo você pode criar a interface em arquivos XML e ter um arquivo Java que controla as ações da interface, como o click dos botões.
Esse projeto é algo similar, onde você tem o html como View, o Typescript controlando essa View e controlando o click dos botões.
Por isso o Backend é responsável pelo Model e Controller.

No projeto Angular, está composto o exemplo do Memento apresentado em aula hoje.