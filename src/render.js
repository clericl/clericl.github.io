import buildTree from './tree';

export const init = () => {
    
    const width = 800;
    const height = 800;
    // const xScale = d3.scaleLinear()
    //     .domain([0, 5])
    //     .range([0, 600])

    const tree = d3.tree()
        .size([600, 600])
        .separation(() => 2);
    
    const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);
    
    d3.json("assets/data/by_etym.json").then(data => {
        window.state = data;
        console.log("ready");
        seed = state.find(datum => (datum.word === "air" && datum.source === "English" && datum.rel === "from"));
        
        const root = buildTree(seed, state);
        tree(root);

        root.each(d => {
            if (d.parent) {
                debugger
                d.x = (
                    d.parent.x + ((Math.sin((Math.random() * 2 * Math.PI / 5) - Math.PI / 5) * (150 - (25 * d.depth))))
                );
                d.y = (
                    d.parent.y + ((Math.cos(Math.random() * Math.PI / 5) * (150 - (25 * d.depth))))
                )
            }
        })
    
        update(root);
    });

}

export const update = source => {

    const width = 800;
    const height = 800;

    const links = d3.select("svg")
    .selectAll("line")
    .data(source.links())
    .join("line")
        .attr("stroke-width", d => (d.target.height * 2 + 2))
        .attr("stroke", "#735d50")
        .attr("x1", d => d.source.x)
        .attr("y1", d => (height - d.source.y))
        .attr("x2", d => d.target.x)
        .attr("y2", d => (height - d.target.y));

    const gs = d3.select("svg")
        .selectAll("g")
        .data(source.descendants())
        .join("g");

    const nodes = gs.append("circle")
        // .attr("r", d => (Math.sqrt(d.descendants().length) * d.height + 2))
        .attr("r", d => (d.height + 1))
        .attr("cx", d => d.x)
        .attr("cy", d => (height - d.y))
        .attr("fill", "#735d50");
    
    const texts = gs.append("text")
        .text(d => d.data.word)
        .attr("x", d => d.x)
        .attr("y", d => (height - d.y))
        .attr("fill", "#2a5a25")
        .attr("font-weight", 700)
        .attr("transform", d => `rotate(-60, ${d.x + 5}, ${(height - d.y)})`);

}