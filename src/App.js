import './App.css';

function App() {
  return (
    <div className="App">
      <section className="Content">
        <h1 className="Heading">Burger Lover</h1>
        <div className="Text">
          <h3>Overview</h3>
          <p>
            The task represents an application to create ingredients and compile burgers from those
            ingredients.
          </p>
          <h3>Workflow</h3>
          <ul>
            <li>
              As a user, I want to be able to add new ingredients for making burgers. The
              ingredients should have a name, image (link from the web is acceptable) and the number
              of calories. As a user I want to add Tags to each ingredient, for example, vegan,
              gluten-free, etc. to make burgers with specific ingredients only. Once we have all
              ingredients, as a user I want to be able to view them on a separate ingredients page
              with the most important information in the list. The list needs to be sortable by
              calories, and filterable by tags. So if I click on the tag that’s assigned to that
              ingredient I will see all the ingredients with the same tag.
            </li>
            <li>After we have all of our ingredients as a user I want to make my own burger.</li>
            <li>
              When the page for making burgers is opened, the user should be able to name his
              burger, add a tag to the burger and should see the list of ingredients with a total
              number of calories. Plus points if the list of ingredients is searchable by name,
              filterable by tags, and sortable by calories.
            </li>
            <li>
              When a user finishes making his special burger, the created burger should be listed on
              the burger overview page. Sorting the burgers based on name, calories is also a plus.
              By clicking on each ingredient or burger from their lists, users should see the
              details about it.
            </li>

            <li>
              When on the burgers or ingredients page, in both lists next to each element should be
              an edit and delete button, which when it is clicked gives the possibility to edit or
              delete the item.
            </li>
          </ul>
          <h3>API endpoints</h3>
          <h5>
            <em>Burgers</em>
          </h5>
          <h5>GET / POST</h5>
          https://6195607a74c1bd00176c6d1f.mockapi.io
          <h5> GET BY ID / PUT / DELETE</h5>
          /burgers/:id
          <br />
          <br />
          <h5>
            <em>Ingredients</em>
          </h5>
          <h5>GET / POST</h5>
          https://6195607a74c1bd00176c6d1f.mockapi.io/ingredients
          <h5>GET BY ID / PUT / DELETE</h5>
          /ingredients/:id
          <h3>Additional information</h3>
          Try to focus on providing as much features as possible. Great design is a bonus.
          <br />
          <br />
          <em>Good luck</em>
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
