import { DepositoStrategy } from "./strategies/DepositoStrategy";
import { JurosStrategy } from "./strategies/JurosStrategy";
import { PagamentoStrategy } from "./strategies/PagamentoStrategy";
import { TransactionStrategy } from "./strategies/Strategy";

export enum TransactionType {
  Deposito = "Depósito",
  Pagamento = "Pagamento",
  Juros = "Juros",
  Boleto = "Boleto",
}

const strategies: TransactionStrategy[] = [
  new DepositoStrategy(),
  new PagamentoStrategy(),
  new JurosStrategy(),
];

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
    const strategy = strategies.find((strategy) => strategy.supports(type))!;

    this.value = strategy.calculate(this.value, value);

    this.history.push(strategy.getDescription());
  }
}
