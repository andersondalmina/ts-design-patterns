import { TransactionType } from "../BankAccount";
import { TransactionStrategy } from "./Strategy";

export class PagamentoStrategy implements TransactionStrategy {
  executedValue = 0;

  public supports(type: TransactionType) {
    return (
      type === TransactionType.Pagamento || type === TransactionType.Boleto
    );
  }

  public calculate(accountValue: number, transactionValue: number): number {
    if (accountValue < transactionValue) {
      throw new Error("Valor indisponível para pagamento");
    }

    accountValue -= transactionValue;

    this.executedValue = transactionValue;

    return accountValue;
  }

  public getDescription(): string {
    return `Realizado pagamento no valor de R$ ${this.executedValue}`;
  }
}
