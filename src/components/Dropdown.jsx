import { useState } from "react";
import { Listbox } from "@headlessui/react";

function MyListbox({ selectedPerson, setSelectedPerson, people }) {
  return (
    <div className="">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options>
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default MyListbox;
