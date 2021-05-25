import { TransactionType } from "../BankAccount";
import { TransactionStrategy } from "./Strategy";

export class JurosStrategy implements TransactionStrategy {
  executedValue = 0;
  isBonus = false;

  public supports(type: TransactionType) {
    return type === TransactionType.Juros;
  }

  public calculate(accountValue: number, transactionValue: number): number {
    if (accountValue === 0) {
      accountValue += transactionValue;

      this.executedValue = transactionValue;
      this.isBonus = true;

      return accountValue;
    }

    const totalValue = transactionValue + accountValue * 0.2;

    this.executedValue = totalValue;

    accountValue -= totalValue;
    return accountValue;
  }

  public getDescription(): string {
    if (this.isBonus) {
      return `Bônus de R$ ${this.executedValue}`;
    }

    return `Cobrança de juros no valor de R$ ${this.executedValue}`;
  }
}
