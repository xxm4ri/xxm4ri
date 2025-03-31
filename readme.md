# Carrinho de Compras com Modal e Toast

Este projeto implementa um sistema de carrinho de compras com funcionalidades de modal, toast (notificações temporárias) e gerenciamento de itens no carrinho. Ele é ideal para projetos de e-commerce e pode ser usado como base para aprendizado ou desenvolvimento.

---

## **Funcionalidades**

- Modal para adicionar produtos ao carrinho.
- Carrinho de compras com contador de itens.
- Resumo do pedido com imagens, quantidade e preços.
- Toast para exibir notificações temporárias.
- Persistência do carrinho usando `localStorage`.

---

## **Estrutura do Projeto**

- **`index.html`**: Estrutura HTML da página.
- **`styles.css`**: Estilos para o layout, modal, carrinho e toast.
- **`script.js`**: Lógica do carrinho, modal e toast.

---

## **1. Arquivo `index.html`**

O arquivo `index.html` contém a estrutura básica da página. Ele inclui os elementos necessários para o funcionamento do carrinho de compras, como o modal, o carrinho e os botões de interação.

### Estrutura principal:

- **Cabeçalho (`<header>`)**: Contém o logotipo e o ícone do carrinho com o contador de itens.
- **Seção de produtos (`<section>`)**: Lista os produtos disponíveis para adicionar ao carrinho.
- **Modal de quantidade (`#quantity-modal`)**: Exibe os detalhes do produto selecionado e permite ajustar a quantidade antes de adicionar ao carrinho.
- **Carrinho de compras (`#cart`)**: Mostra os itens adicionados ao carrinho e o total do pedido.
- **Modal de pagamento (`#payment-modal`)**: Exibe o resumo do pedido e o total para pagamento.
- **Toast (`#toast`)**: Notificação temporária para ações como "Produto adicionado ao carrinho".

### Exemplo de estrutura básica:

```html
<header>
    <h1>Loja Virtual</h1>
    <div id="cart-icon">
        <span id="cart-count">0</span>
    </div>
</header>

<section id="products">
    <!-- Produtos serão listados aqui -->
</section>

<div id="quantity-modal" style="display: none;">
    <!-- Modal de quantidade -->
</div>

<div id="cart" style="display: none;">
    <!-- Carrinho de compras -->
</div>

<div id="payment-modal" style="display: none;">
    <!-- Modal de pagamento -->
</div>

<div id="toast"></div>
```

---

## **2. Arquivo `styles.css`**

O arquivo `styles.css` define o estilo visual da página, garantindo uma aparência moderna e responsiva.

### Principais estilos:

- **Layout geral**:
  - Define margens, fontes e cores padrão para a página.
  - Exemplo:
    ```css
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f9f9f9;
    }
    ```

- **Cabeçalho (`<header>`)**:
  - Estiliza o cabeçalho com o logotipo e o ícone do carrinho.
  - Exemplo:
    ```css
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #333;
        color: #fff;
    }
    ```

- **Seção de produtos (`#products`)**:
  - Define o layout dos produtos em grade.
  - Exemplo:
    ```css
    #products {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        padding: 20px;
    }
    ```

- **Modal (`#quantity-modal`, `#payment-modal`)**:
  - Estiliza os modais para centralizá-los e aplicar um fundo semitransparente.
  - Exemplo:
    ```css
    #quantity-modal, #payment-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
    }
    ```

- **Carrinho de compras (`#cart`)**:
  - Define o estilo da lista de itens no carrinho e o resumo do pedido.
  - Exemplo:
    ```css
    #cart {
        position: fixed;
        right: 0;
        top: 0;
        width: 300px;
        height: 100%;
        background-color: #fff;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
        overflow-y: auto;
        padding: 20px;
    }
    ```

- **Toast (`#toast`)**:
  - Estiliza a notificação temporária.
  - Exemplo:
    ```css
    #toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    #toast.show {
        opacity: 1;
    }
    ```

---

## **3. Arquivo `script.js`**

O arquivo `script.js` contém toda a lógica do carrinho de compras, incluindo as funções para abrir/fechar modais, adicionar itens ao carrinho, atualizar a interface e exibir notificações.

### Principais funções:

- **`openModal`**: Exibe o modal para adicionar um produto ao carrinho.
- **`addToCart`**: Adiciona um produto ao carrinho e atualiza o contador.
- **`updateCartUI`**: Atualiza a interface do carrinho com os itens e o total.
- **`showToast`**: Exibe uma notificação temporária.

---

## **Resumo**

Este projeto é uma implementação simples de um carrinho de compras com funcionalidades modernas, como modais e notificações. Ele pode ser usado como base para projetos de e-commerce ou aprendizado.

---

