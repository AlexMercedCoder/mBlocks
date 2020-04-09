///////m-Blocks by Alex Merced of AlexMercedCoder.com

//////////////
//CaptureProps
/////////////

const captureProps = (element) => {
    const att = [...element.attributes];
    const entries = att.map((value) => {
        return [value.name, value.value];
    });

    return Object.fromEntries(entries);
};

///////////////////
//block class
/////////////////
class Block {
    constructor(config) {
        this.block = document.querySelector(`m-${config.name}#${config.id}`);
        this.props = captureProps(this.block);
        this.state = config.state;
        this.rend();
    }

    rend() {
        this.props = captureProps(this.block);
        this.block.innerHTML = this.builder(this.state, this.props);
        this.assemble();
    }

    builder(state, props) {}

    assemble() {}

    setState(newState) {
        this.state = newState;
        this.rend();
    }
}

module.exports = {
    Block
};
