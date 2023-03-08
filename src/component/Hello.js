import styles from "./Hello.module.css"

export default function Hello() {
  let name = "Mike"

  function changeName() {
    name = name === "Mike" ? "Lia" : "Mike";
  }
  
  return (
      <div>
        <h1>state</h1>
        <h2>{name}</h2>
        <button onClick={changeName}>Change</button>
      </div>
    );
}
