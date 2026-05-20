export default function MenuList({ menu }) {
  return (
    <div>
      {menu.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}