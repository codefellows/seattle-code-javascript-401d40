import Menu from '../menu/Menu.js';

const Layout = (props) => {

  return (
    <div>
      <aside>
        <Menu />
      </aside>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
