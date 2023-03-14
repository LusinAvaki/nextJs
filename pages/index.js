'use client';

import styles from "../src/app/globals.css"
import React from "react";
import { Dropdown } from "@nextui-org/react";
import Link from 'next/link'

export default function App() {
  const [selected, setSelected] = React.useState(new Set(["wood"]));
  const [selected2, setSelected2] = React.useState(new Set(["clear"]));
  const [selected3, setSelected3] = React.useState(new Set(["white"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const selectedValue2 = React.useMemo(
    () => Array.from(selected2).join(", ").replaceAll("_", " "),
    [selected2]
  );

  const selectedValue3 = React.useMemo(
    () => Array.from(selected3).join(", ").replaceAll("_", " "),
    [selected3]
  );

  return (
    <><><p className="select-menu-text">
      Choose frame material, glass type, and frame color for a window renovation!
    </p><>
        <div className="select-menu">
          <Dropdown>
            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
              {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label="Single selection actions"
              color="secondary"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <Dropdown.Item key="wood">Wood</Dropdown.Item>
              <Dropdown.Item key="aluminum">Aluminum</Dropdown.Item>
              <Dropdown.Item key="vinyl">Vinyl</Dropdown.Item>
              <Dropdown.Item key="fiberglass">Fiberglass</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown><Dropdown>
            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
              {selectedValue2}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label="Single selection actions"
              color="secondary"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected2}
              onSelectionChange={setSelected2}
            >
              <Dropdown.Item key="clear">Clear</Dropdown.Item>
              <Dropdown.Item key="frosted">Frosted</Dropdown.Item>
              <Dropdown.Item key="tinted">Tinted</Dropdown.Item>
              <Dropdown.Item key="low">Low-E</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown><Dropdown>
            <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
              {selectedValue3}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label="Single selection actions"
              color="secondary"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected3}
              onSelectionChange={setSelected3}
            >
              <Dropdown.Item key="white">White</Dropdown.Item>
              <Dropdown.Item key="black">Black</Dropdown.Item>
              <Dropdown.Item key="bronze">Bronze</Dropdown.Item>
              <Dropdown.Item key="silver">Silver</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown></div></></><div className="result-link">
            <Link href={{
            pathname: "/window",
            query: {frameMaterial: selected.currentKey,
            glassType:selected2.currentKey,
            frameColor: selected3.currentKey}, // the data
          }}>CLICK TO SEE THE RESULTS IN THE WINDOW PAGE</Link>
          </div></>
  );
}