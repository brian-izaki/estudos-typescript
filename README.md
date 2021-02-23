# Aprendendo TypeScript

- TypeScript é um superset do JS, ou seja, ele extende as capacidades do JS. Como: 
  - Tipagem estática;
  - Apresenta erros sem a necessidade de compilação;
  - Auxilia apenas durante o desenvolvimento, não há comprovações de que melhora na performance;
  - Entre outros;

---

## Utilização

- Projetos open source;
- Pojetos que são escálaveis;
- É uma boa prática aprender sobre este superset.

## Ambiente

- Ter o Node instalado;
- Inicializar com package.json
- instalar o pacote `typescript`

## Vocabulário
- **inferência de tipos**: o typescript reconhece alguns tipos sem a necessidade de declarar o tipo da variável/função.


## Desenvolvimento em geral

- Os arquivos de código devem ter a extensão `.ts` ou `.tsx`

- ### **Backend**

  - Para inicializar o arquivo de configurações para o TypeScript utilize o seguinte código: 
    - ``` Shell
      # gera um arquivo .json com algumas configs essenciais.
      npx tsc --init 
      ```

  - 

  - Para gerar os arquivos em `.js` utilize: 
    - ```
      # ele utiliza o arquivo tsconfig como auxiliar e gera os arquivos .js
      npx tsc
      ```

- ### **Frontend**
    - utilizado a lib axios para realizar requisições para a api
    - 
