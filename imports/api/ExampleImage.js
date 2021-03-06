var React = require('react');

var PendingPool = {};
var ReadyPool = {};

var ExampleImage = React.createClass({
    propTypes: {
        src: React.PropTypes.string.isRequired,
    },

    getInitialState() {
        return {
            ready: false,
        };
    },

    componentWillMount() {
        this._load(this.props.src);
    },

    componentWillReceiveProps(nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({src: null});
            this._load(nextProps.src);
        }
    },

    render() {
        var style = this.state.src ?
            { background : 'url(' + this.state.src + ')', width: '50px', height: '50px', display: 'inline-block', backgroundSize: '100%'} :
            undefined;

        return <div style={style} />;
    },

    _load(/*string*/ src) {
        if (ReadyPool[src]) {
            this.setState({src: src});
            return;
        }

        if (PendingPool[src]) {
            PendingPool[src].push(this._onLoad);
            return;
        }

        PendingPool[src] = [this._onLoad];

        var img = new Image();
        img.onload = () => {
            PendingPool[src].forEach(/*function*/ callback => {
                callback(src);
            });
            delete PendingPool[src];
            img.onload = null;
            src = undefined;
        };
        img.src = src;
    },

    _onLoad(/*string*/ src) {
        ReadyPool[src] = true;
        if (this.isMounted() && src === this.props.src) {
            this.setState({
                src: src,
            });
        }
    },
});


module.exports = ExampleImage;