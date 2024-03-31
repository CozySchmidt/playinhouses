import { useState } from "react";
import { Listbox } from "@headlessui/react";

function MyListbox({ selectedFormat, setSelectedFormat, format}) {
  return (
    <div className="">
      <Listbox value={selectedFormat} onChange={setSelectedFormat}>
        <Listbox.Button>{selectedFormat.name}</Listbox.Button>
        <Listbox.Options>
          {format.map((format) => (
            <Listbox.Option
              key={format.id}
              value={format}
              disabled={format.unavailable}
            >
              {format.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default MyListbox;
