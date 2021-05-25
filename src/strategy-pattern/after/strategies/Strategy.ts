import { TransactionType } from "../../after/BankAccount";

export interface TransactionStrategy {
  executedValue: number;
  supports(type: TransactionType): boolean;
  calculate(accountValue: number, transactionValue: number): number;
  getDescription(): string;
}
