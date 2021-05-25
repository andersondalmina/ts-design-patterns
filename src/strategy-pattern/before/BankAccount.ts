export enum TransactionType {
  Deposito = "Depósito",
  Pagamento = "Pagamento",
  Juros = "Juros",
}

export default class BankAccount {
  private value: number = 0;
  private history: Array<string> = [];

  public getValue(): number {
    return this.value;
  }

  public getHistory(): Array<string> {
    return this.history;
  }

  public addTransaction(type: TransactionType, value: number) {
    switch (type) {
      case TransactionType.Deposito: {
        this.value += value;
        this.history.push(`Realizado depósito no valor de R$ ${value}`);
        break;
      }

      case TransactionType.Pagamento: {
        if (this.value < value) {
          throw new Error("Valor indisponível para pagamento");
        }

        this.value -= value;
        this.history.push(`Realizado pagamento no valor de R$ ${value}`);
        break;
      }

      case TransactionType.Juros: {
        if (this.value === 0) {
          this.value += value;
          this.history.push(`Bônus de R$ ${value}`);
          break;
        }

        const totalValue = value + this.value * 0.2;

        this.value -= totalValue;
        this.history.push(`Cobrança de juros no valor de R$ ${totalValue}`);
        break;
      }

      default: {
        throw new Error("Tipo de transação não suportada");
      }
    }
  }
}
