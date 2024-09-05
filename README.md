# Projeto de Interface Interativa com HTML, CSS e JavaScript

Este projeto consiste em uma interface interativa que simula um painel de controle com quatro bocas (representadas por círculos vazios) e oito botões de controle. O usuário pode ligar e desligar cada boca individualmente usando os botões, e o estado do sistema será atualizado dinamicamente conforme as ações do usuário. Além disso, o projeto inclui uma imagem posicionada à esquerda e todos os elementos estilizados com cores vermelhas.


## Funcionalidades

- **Controle das bocas**: Cada boca pode ser ligada ou desligada independentemente.
- **Exibição do estado**: O estado do sistema é exibido com base nas combinações de bocas ligadas, indicando se todas estão desligadas, apenas algumas estão ligadas ou todas estão ligadas.
- **Interface estilizada**: A interface é estilizada com elementos vermelhos, botões arredondados, e a imagem posicionada à esquerda.


## Layout

A interface é composta pelos seguintes elementos:
- **Imagem**: Posicionada no lado esquerdo da página.
- **Bocas**: Representadas por círculos, dispostas em um layout de 2x2, cada uma com um nome (`boca 1`, `boca 2`, `boca 3`, `boca 4`) abaixo.
- **Botões de controle**: Oito botões organizados em um layout de 2x4, que permitem ligar ou desligar cada boca.
- **Estado do sistema**: Um texto que exibe o estado atual do sistema (`q0` a `q15`) dependendo da combinação das bocas ligadas.

## Como Usar

1. **Baixe os arquivos**:

    É encontrado no botão verde "code" ao subir a tela e clique em "Download ZIP"

2. **Abra o arquivo `index.html` no pasta que foi baixada**:
    Basta abrir o arquivo `index.html` em qualquer navegador web.

3. **Interaja com a interface**:
    - Clique nos botões para ligar ou desligar cada boca.
    - Observe a atualização do estado do sistema na frase exibida.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilos visuais, incluindo o posicionamento da imagem, cores, layout em grade, centralização de elementos, arredondamento dos botões, etc.
- **JavaScript**: Lógica para controlar o estado das bocas e atualizar a exibição do estado.

## Estrutura do Projeto

- `index.html`: Arquivo principal da interface web.
- `styles.css`: Arquivo de estilos que define o layout e aparência dos elementos.
- `script.js`: Arquivo de script que contém a lógica para manipulação dos estados das bocas e atualização da interface.
- `images/`: Pasta que contém a imagem utilizada no projeto.