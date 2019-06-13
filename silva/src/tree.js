// for console testing

// let state, seed;

// d3.json("assets/data/by_etym.json").then(function(data) {
//     state = data;
//     console.log("ready");
//   });

const buildTrunk = (seed, state) => {
    const ancestors = [seed];
    let currentNode = seed;
    let parentNode = state.find(datum => (
        datum.word === currentNode.targetWord &&
        datum.source === currentNode.targetSource &&
        datum.rel === "from"
    ));

    while (parentNode) {
        ancestors.push(parentNode);
        currentNode = parentNode;
        parentNode = state.find(datum => (
            datum.word === currentNode.targetWord &&
            datum.source === currentNode.targetSource &&
            datum.rel === "from"
        ));
    }

    const last = ancestors[ancestors.length - 1];

    ancestors.push({
        word: last.targetWord,
        source: last.targetSource,
        rel: "from",
        targetWord: undefined,
        targetSource: undefined
    })

    return ancestors;
}

const buildBranches = (seed, state) => {
    let branches = [seed];

    const children = state.filter(datum => (
        datum.targetWord === seed.word &&
        datum.targetSource === seed.source &&
        datum.rel === "from"
    ));

    if (children.length > 0) {
        children.forEach(child => {
            branches = branches.concat(buildBranches(child, state));
        })
    };

    return branches;
}

const buildHierarchy = branches => {
    return d3.stratify()
        .id(d => ([d.word, d.source].join("")))
        .parentId(d => ([d.targetWord, d.targetSource].join("")))
        (branches);
}

const buildTree = (seed, state) => {
    const ancestors = buildTrunk(seed, state);
    const root = ancestors[ancestors.length - 1];
    const tree = buildBranches(root, state);
    const rootNode = buildHierarchy(tree);
    return rootNode;
}

export default buildTree;