class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
        this.anterior = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    inserirInicio(valor) {
        const novo = new Node(valor);
        if (this.head) {
            novo.proximo = this.head;
            this.head.anterior = novo;
        }
        this.head = novo;
    }

    inserirFim(valor) {
        const novo = new Node(valor);
        if (!this.head) {
            this.head = novo;
        } else {
            let aux = this.head;
            while (aux.proximo) {
                aux = aux.proximo;
            }
            aux.proximo = novo;
            novo.anterior = aux;
        }
    }

    inserirMeio(valor, ant) {
        const novo = new Node(valor);
        if (!this.head) {
            this.head = novo;
        } else {
            let aux = this.head;
            while (aux.valor !== ant && aux.proximo) {
                aux = aux.proximo;
            }
            novo.proximo = aux.proximo;
            aux.proximo = novo;
        }
    }

    inserirOrdenado(valor) {
        const novo = new Node(valor);
        if (!this.head) {
            this.head = novo;
        } else if (novo.valor < this.head.valor) {
            novo.proximo = this.head;
            this.head = novo;
        } else {
            let aux = this.head;
            while (aux.proximo && novo.valor > aux.proximo.valor) {
                aux = aux.proximo;
            }
            novo.proximo = aux.proximo;
            aux.proximo = novo;
        }
    }

    remover(valor) {
        let aux = this.head;
        let no = null;
        if (aux.valor === valor) {
            no = aux;
            this.head = aux.proximo;
            if (this.head) {
                this.head.anterior = null;
            }
        } else {
            while (aux.proximo && aux.proximo.valor !== valor) {
                aux = aux.proximo;
            }
            if (aux.proximo) {
                no = aux.proximo;
                aux.proximo = no.proximo;
                if (aux.proximo) {
                    aux.proximo.anterior = aux;
                }
            }
        }
        return no;
    }

    buscar(valor) {
        let aux = this.head;
        while (aux && aux.valor !== valor) {
            aux = aux.proximo;
        }
        return aux;
    }

    ultimo() {
        let aux = this.head;
        while (aux.proximo) {
            aux = aux.proximo;
        }
        return aux;
    }

    imprimirIF() {
        console.log("Lista: ");
        let aux = this.head;
        while (aux) {
            console.log(aux.valor);
            aux = aux.proximo;
        }
        console.log("\n");
    }

    imprimirFI() {
        console.log("Lista: ");
        let aux = this.ultimo();
        while (aux) {
            console.log(aux.valor);
            aux = aux.anterior;
        }
        console.log("\n");
    }
}

const lista = new DoublyLinkedList();

while (true) {
    console.log("\n0 - Sair\n1 - Inserir no início\n2 - Inserir no fim\n3 - Inserir no meio\n4 - Inserir ordenado\n5 - Remover\n6 - Imprimir\n7 - Imprimir 2\n8 - Buscar\n");
    const opcao = parseInt(prompt("Opção: "));

    switch (opcao) {
        case 1:
            const valor = parseInt(prompt("Valor: "));
            lista.inserirInicio(valor);
            break;

        case 2:
            valor = parseInt(prompt("Valor: "));
            lista.inserirFim(valor);
            break;

        case 3:
            valor = parseInt(prompt("Valor a ser inserido e valor de referência: "));
            const anterior = parseInt(prompt("Valor de referência: "));
            lista.inserirMeio(valor, anterior);
            break;

        case 4:
            valor = parseInt(prompt("Valor: "));
            lista.inserirOrdenado(valor);
            break;

        case 5:
            valor = parseInt(prompt("Remover o valor: "));
            const no = lista.remover(valor);
            if (no) {
                console.log(`Elemento: ${no.valor}`);
            } else {
                console.log("Elemento não encontrado.");
            }
            break;

        case 6:
            lista.imprimirIF();
            break;

        case 7:
            lista.imprimirFI();
            break;

        case 8:
            valor = parseInt(prompt("Buscar: "));
            no = lista.buscar(valor);
            if (no) {
                console.log(`Elemento encontrado: ${no.valor}`);
            } else {
                console.log("Elemento não encontrado.");
            }
            break;

        case 0:
            process.exit(0);
            break;

        default:
            console.log("Opção inválida.");
            break;
    }
}