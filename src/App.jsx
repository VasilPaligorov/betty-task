import { InfiniteImageCarousel } from "./components/infiniteImageCarousel/infiniteImageCarousel";

const images = [
  "https://images.unsplash.com/photo-1707662513398-68a35d05f852?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=609&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMTYyOTY3Mw&ixlib=rb-4.0.3&q=80&w=800",
  "https://images.unsplash.com/photo-1707391474687-6fbda271617d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=601&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMTYyOTcyMw&ixlib=rb-4.0.3&q=80&w=800",
  "https://images.unsplash.com/photo-1708923698856-18594e286667?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=602&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMTYyOTc0NA&ixlib=rb-4.0.3&q=80&w=800",
  "https://images.unsplash.com/photo-1708748513828-2227f6d39c04?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=603&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMTYyOTc2NQ&ixlib=rb-4.0.3&q=80&w=800",
  "https://images.unsplash.com/photo-1707153982034-b9e0c37e203e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=604&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMTYyOTc4OQ&ixlib=rb-4.0.3&q=80&w=800",
];

const App = () => {
  return <InfiniteImageCarousel images={images} />;
};

export default App;
