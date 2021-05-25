import BankAccount, { TransactionType } from "./BankAccount";

const account = new BankAccount();

try {
  account.addTransaction(TransactionType.Deposito, 100);
  account.addTransaction(TransactionType.Pagamento, 20);
  account.addTransaction(TransactionType.Pagamento, 55);
  account.addTransaction(TransactionType.Juros, 15);
  account.addTransaction(TransactionType.Pagamento, 5);
  account.addTransaction(TransactionType.Juros, 20);

  console.log(`O saldo na sua conta é R$ ${account.getValue()}`);
  console.log("\nAbaixo você pode conferir seu extrato:\n");

  account.getHistory().forEach((item) => console.log(item));
} catch (e) {
  console.log(
    `Ocorreu o seguinte erro ao realizar suas transações: ${e.message}`
  );
}
