import { TransactionType } from "../../after/BankAccount";
import { TransactionStrategy } from "./Strategy";

export class DepositoStrategy implements TransactionStrategy {
  executedValue = 0;

  public supports(type: TransactionType) {
    return type === TransactionType.Deposito;
  }

  public calculate(accountValue: number, transactionValue: number): number {
    this.executedValue = transactionValue;

    accountValue += transactionValue;

    return accountValue;
  }

  public getDescription(): string {
    return `Realizado depósito no valor de R$ ${this.executedValue}`;
  }
}
