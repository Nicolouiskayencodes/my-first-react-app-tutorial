function Greeting(){
  return <h1>&quot; I am learning how to use React! &quot;</h1>
}
function Description(){
  return <h2>Here are some of my favorite foods!</h2>
}
function Foods(){
  return <ul><li>Cheese</li><li>Cake</li><li>Peaches</li><li>Water</li></ul>
}
function Convert(){
  return (
    <div>
    <h1>Test title</h1>
<svg>
  <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
</svg>
<form>
  <input type="text" />
</form>
</div>
  )
}
export default Greeting;
export {Description, Foods, Convert}