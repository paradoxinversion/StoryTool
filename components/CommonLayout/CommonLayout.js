import Link from "next/link";

function CommonLayout(props) {
  return (
    <div id="app-container" className="flex flex-col h-screen">
      <header id="main-header" className="main-dark-bg main-light p-2">
        <Link href="/">
          <a id="logo">StoryTool</a>
        </Link>
      </header>
      <div className="flex-grow p-4">{props.children}</div>
      <footer className="main-dark-bg main-light p-2">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default CommonLayout;
