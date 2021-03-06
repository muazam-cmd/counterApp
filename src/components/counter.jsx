import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]

    };

    renderTags() {
        if (this.state.tags.length === 0) return <p> THERE ARE NO TAGS </p>;
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() {

        return <div>{this.renderTags()}</div>;
    }

    HandleIncrement = () => {
        console.log('increment clicked', this)
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()} > {this.formatCount()} </span>
                <button onClick={this.HandleIncrement} className="btn btn-secondary btn-sm">Increment </button>
            </div>
        );
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }


}




export default Counter;