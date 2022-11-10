// console.log(React);
// console.log(ReactDOM);

const element = <div>Pierwszy element React</div>

const element2 = React.createElement(
  "div", null, "Hejka"
)

const element3 = ( 
<div>
  <p className="abc" id="id">Tekst</p>
</div>
)

const element5 = ( 
  <React.Fragment>
    <section></section>
    <section></section>
  </React.Fragment>
)