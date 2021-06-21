import React from "react";

import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id);
  };
  const renderContactList = contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contact={contact}
      clickHandler={deleteContactHandler}
    ></ContactCard>
  ));
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
