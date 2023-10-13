{/* <div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
    </div>

</div> */}



const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "I'm h1 tag!!"), React.createElement("h2", {}, "I'm h2 tag!!")]),React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I'm h1 tag!!"), React.createElement("h2", {}, "I'm h2 tag!!")])]);
root.render(parent);