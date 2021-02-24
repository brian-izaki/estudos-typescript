# Estudos do [TypeScript](https://www.typescriptlang.org/)

TypeScript é um superset do JS, ou seja, ele extende as capacidades do JS. Como: 
  - Tipagem estática;
  - Apresenta erros sem a necessidade de compilação;
  - Auxilia apenas durante o desenvolvimento, não há comprovações de que melhora na performance;
  - Entre outros;

---
**Legenda**
🎬 - backend
🎥 - frontEnd

## Ambiente
- Ter o Node instalado;

<br />

## Vocabulário
- **inferência de tipos**: o typescript reconhece alguns tipos sem a necessidade de declarar o tipo da variável/função.
- **interfaces**: 
  - é uma forma de estruturar objetos definindo o tipo para cada atributo.
    - assim, uma interface pode se tornar um novo tipo.
  - não impacta no desempenho,
  - pode ser extensível;
  - classes podem implementar interfaces:
    - assim como no Java, interfaces são como um "contrato" (a classe que implementar ela, deve ter os mesmos atributos e funções que sejam obrigatórios).
  - **overloading**: funções podem ser sobrescritas para receberem quantidade de parametros diferentes (*polimorfismo de sobrecarga*)

## Observações
- 🎬 `Pokemon.d.ts` nesse arquivo pode ser declarado uma interface, que todo o código irá reconhecer essa interface, assim, evitando repetir o código de uma interface utilizada em vários arquivos.

<br />

## Desenvolvimento em geral

- Os arquivos de código devem ter a extensão `.ts` ou `.tsx`(caso utilize tags de xml no arquivo)

- ### **Backend** (Node)

  - Para inicializar o arquivo de configurações do TypeScript utilize o seguinte código: 
    - ``` Shell
      # gera um arquivo .json com algumas configs essenciais.
      npx tsc --init 
      ```
    - caso queira altrar o local de compilação para `.js` altere a seguinte propriedade `"outDir": "./caminho_do_dir",  `
  - Para gerar os arquivos em `.js` utilize: 
    - ```
      # ele utiliza o arquivo tsconfig como auxiliar e gera os arquivos .js
      npx tsc
      ```

- ### **Frontend** (React)
    - para iniciar o projeto foi utilizado o template de Typescript do CRA 
      - ```
        npx create-react-app nome_projeto --template=typescript
        ```
    - **Componentes**: 
      - As props de um componente necessitam ser tipadas, porém, ao tipar com uma `interface` criada no momento, acaba "apagando" as _propriedades herdadas_ (children, key) de um componente React, para evitar colocar eles na interface utiliza-se: 
        - ``` JavaScript
          interface Props {
            nome: string;
          }

          // FC = function component
          const Componente: React.FC<Props> = ({ nome }) => {
            return (
              <div>
                {nome} 
              </div>
            )
          }
          ```

<br />

*obs: utilizado a lib axios para realizar requisições para a api*

<br />

---

# Fontes

- [masterClass da Rocketseat](https://www.youtube.com/watch?v=0mYq5LrQN1s)
- [gitbook do basarat](https://basarat.gitbook.io/typescript/)