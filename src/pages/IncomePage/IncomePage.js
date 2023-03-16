import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from 'components/Container/Container';

import { Loader } from 'components/Loader/Loader';

import { getBalanceIsNotNewUser } from 'redux/auth/authOperations';
import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
// import { useAuth } from 'hooks';
import { getAllTransactions } from 'redux/transaction/transactionOperations.js';
import { selectLoadingTransactions, selectAllTransactions } from 'redux/transaction/transactionSelectors.js';

import { BalanceForm } from 'components/BalanceForm/BalanceForm.js';
import { TransactionForm } from 'components/TransactionForm/TransactionForm.js';
import { TransactionList } from 'components/TransactionList/TransactionList.js';


//-----------------------------------------------------------------------------------
export default function IncomePage() {
  const dispatch = useDispatch();

  //! Тип тразакции "expenses"
  const transactionsType = "income"

  useEffect(() => {
    dispatch(getAllTransactions());
    dispatch(getBalanceIsNotNewUser());
  }, [dispatch]);

  //! ========================== console balance & isRefreshing ==========================
  const balance = useSelector(selectBalance);
  console.log("ExpensesPage ==> balance:", balance); //!

  const isRefreshing = useSelector(selectIsRefreshing);
  console.log("ExpensesPage ==> isRefreshing:", isRefreshing); //!

  const isLoading = useSelector(selectLoadingTransactions);
  console.log("ExpensesPage ==> isLoading:", isLoading); //!

  const transactions = useSelector(selectAllTransactions);
  console.log("ExpensesPage ==> transactions:", transactions); //!
  //! _________________________ console balance & isRefreshing _________________________

  return (
    <Container>
      <h2>Balance: {balance}</h2>
      <BalanceForm balance={balance} />
      <br />
      <br />

      <h2>Income transactions</h2>
      <TransactionForm transactionsType={transactionsType} />


      {isLoading && <Loader />}

      {transactions.length > 0 && (
        <>
          <h2>Income transactions list</h2>
          <TransactionList
            key={transactionsType}
            transactions={transactions}
            transactionsType={transactionsType}
          // visibleTransaction={visibleTransaction}
          />

          {/* <Filter /> */}

        </>
      )}

      {/* {contacts.length > 0 && !isLoading && <DeleteAllContacts />} */}

    </Container>
  );
}
