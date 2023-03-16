import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectLoading } from 'redux/contacts/contactsSelectors';

import { getFilter } from 'redux/filter/filterSelectors';

import { getBalance } from 'redux/auth/authOperations';
import { selectIsRefreshing, selectBalance } from 'redux/auth/authSelectors';
import { useAuth } from 'hooks';
import { selectAllContacts } from 'redux/contacts/contactsSelectors';

import { Container } from 'components/Container/Container';
import { BalanceForm } from 'components/BalanceForm/BalanceForm.js';

import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { DeleteAllContacts } from 'components/DeleteAllContacts/DeleteAllContacts';



export default function ExpensesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(getBalance());
  }, [dispatch]);

  const isLoading = useSelector(selectLoading);
  console.log("ExpensesPage ==> isLoading:", isLoading); //!

  const filter = useSelector(getFilter);
  console.log("ExpensesPage ==> filter:", filter); //!

  const contacts = useSelector(selectAllContacts);
  console.log("ExpensesPage ==> contacts:", contacts); //!


  const { isRefreshing: isRefreshingAuth, user, balance: balanceAuth } = useAuth();
  const balanceUser = user.balance;
  console.log("ExpensesPage ==> balanceUser:", balanceUser); //!
  console.log("ExpensesPage ==> balanceAuth:", balanceAuth); //!
  console.log("ExpensesPage ==> isRefreshingAuth:", isRefreshingAuth); //!

  const balance = useSelector(selectBalance);
  console.log("ExpensesPage ==> balance:", balance); //!

  const isRefreshing = useSelector(selectIsRefreshing);
  console.log("ExpensesPage ==> isRefreshing:", isRefreshing); //!


  // useEffect(() => {
  //   dispatch(fetchContacts());
  //   dispatch(getBalance());
  // }, [dispatch]);



  //! Создание нового массива объектов из contacts с учетом значения поиска из filter
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      (contact.name.toLowerCase()).includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();
  const totalContacts = contacts.length;



  return (
    <Container>
      <BalanceForm />

      <h2>Balance: {balance}</h2>

      <h2>Contacts</h2>
      <p>Total: {totalContacts}</p>

      {isLoading && <Loader />}

      {contacts.length > 0 && (
        <>
          <Filter />

          <ContactList
            visibleContacts={visibleContacts}
          />
        </>
      )}

      {contacts.length > 0 && !isLoading && <DeleteAllContacts />}

    </Container>
  );
}

// {contacts.length > 0 && !isLoading && (